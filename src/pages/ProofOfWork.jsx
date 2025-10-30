import React, { useState } from 'react';
import { FaCloudUploadAlt, FaFileImage, FaFileVideo, FaFile, FaTimes } from 'react-icons/fa';
import Card from '../components/Card';
import Button from '../components/Button';
import './styles/ProofOfWork.css';

const ProofOfWork = () => {
  const [files, setFiles] = useState([]);
  const [description, setDescription] = useState('');
  const [dragActive, setDragActive] = useState(false);

  const job = {
    title: 'Valorant Rank Boost - Silver to Platinum',
    client: 'GameFan_2024',
    deadline: '2 days remaining',
    budget: '$100'
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (fileList) => {
    const newFiles = Array.from(fileList).map(file => ({
      file,
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
      type: file.type,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null
    }));
    setFiles([...files, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const getFileIcon = (type) => {
    if (type.startsWith('image/')) return <FaFileImage />;
    if (type.startsWith('video/')) return <FaFileVideo />;
    return <FaFile />;
  };

  return (
    <div className="proof-page">
      <div className="container">
        <h1 className="proof-title">Submit Proof of Work</h1>
        
        <Card variant="glass" className="job-info-card">
          <h3 className="job-info-title">Job Details</h3>
          <div className="job-info-grid">
            <div className="info-item">
              <span className="info-label">Job Title</span>
              <span className="info-value">{job.title}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Client</span>
              <span className="info-value">{job.client}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Deadline</span>
              <span className="info-value deadline">{job.deadline}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Budget</span>
              <span className="info-value budget">{job.budget}</span>
            </div>
          </div>
        </Card>

        <Card variant="glass" className="upload-card">
          <h3 className="proof-section-title">Upload Files</h3>
          <p className="section-subtitle">Upload screenshots, videos, or documents as proof of completion</p>

          <div 
            className={`upload-zone ${dragActive ? 'drag-active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <FaCloudUploadAlt className="upload-icon" />
            <h4 className="upload-title">Drag & Drop Files Here</h4>
            <p className="upload-text">or</p>
            <input
              type="file"
              id="file-input"
              multiple
              onChange={handleFileInput}
              accept="image/*,video/*,.pdf,.doc,.docx"
              style={{ display: 'none' }}
            />
            <label htmlFor="file-input">
              <Button variant="primary" as="span">Browse Files</Button>
            </label>
            <p className="upload-note">Supported: Images, Videos, Documents (Max 50MB each)</p>
          </div>

          {files.length > 0 && (
            <div className="files-list">
              <h4 className="files-title">Uploaded Files ({files.length})</h4>
              <div className="files-grid">
                {files.map((file, index) => (
                  <div key={index} className="file-item">
                    <button 
                      className="file-remove"
                      onClick={() => removeFile(index)}
                    >
                      <FaTimes />
                    </button>
                    {file.preview ? (
                      <img src={file.preview} alt={file.name} className="file-preview" />
                    ) : (
                      <div className="file-icon-placeholder">
                        {getFileIcon(file.type)}
                      </div>
                    )}
                    <div className="file-info">
                      <p className="file-name">{file.name}</p>
                      <p className="file-size">{file.size}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>

        <Card variant="glass" className="description-card">
          <h3 className="proof-section-title">Work Description</h3>
          <p className="section-subtitle">Explain what you've completed and any additional notes</p>
          
          <textarea
            className="proof-textarea"
            rows="8"
            placeholder="Describe the work you've completed, any challenges faced, and additional information the client should know..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </Card>

        <Card variant="glass" className="submit-card">
          <div className="submit-info">
            <p>Once you submit, the client will review your proof of work. Make sure all files and descriptions are accurate.</p>
          </div>
          <div className="submit-actions">
            <Button variant="primary" size="large" glow fullWidth>
              Submit Proof of Work
            </Button>
            <Button variant="ghost" size="large" fullWidth>
              Save as Draft
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProofOfWork;

