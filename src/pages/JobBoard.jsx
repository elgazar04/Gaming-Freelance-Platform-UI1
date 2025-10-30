import React, { useState } from 'react';
import { FaSearch, FaBriefcase, FaDollarSign, FaClock } from 'react-icons/fa';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import Modal from '../components/Modal';
import './styles/JobBoard.css';

const JobBoard = () => {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: 'Valorant Rank Boost - Silver to Platinum',
      client: 'GameFan_2024',
      budget: '$80-$120',
      deadline: '5 days',
      status: 'Open',
      description: 'Need experienced Valorant booster to take account from Silver 3 to Platinum 1. Must stream sessions.',
      category: 'Boosting',
      applicants: 3,
      postedDate: '2 hours ago'
    },
    {
      id: 2,
      title: 'League of Legends Coaching - 5 Sessions',
      client: 'ProWannabe',
      budget: '$150-$200',
      deadline: '2 weeks',
      status: 'Open',
      description: 'Looking for high elo coach to teach ADC role. Need 5x1 hour sessions with VOD review.',
      category: 'Coaching',
      applicants: 7,
      postedDate: '5 hours ago'
    },
    {
      id: 3,
      title: 'CS:GO Account Ranking - Gold Nova to LEM',
      client: 'Client_123',
      budget: '$200-$300',
      deadline: '1 week',
      status: 'In Progress',
      description: 'Boost my CS:GO account. Must use VPN and play during specific hours.',
      category: 'Boosting',
      applicants: 12,
      postedDate: '1 day ago'
    },
    {
      id: 4,
      title: 'Apex Legends Battle Pass Completion',
      client: 'ApexFan',
      budget: '$50-$80',
      deadline: '10 days',
      status: 'Open',
      description: 'Complete this season battle pass. Currently level 20, need to reach 110.',
      category: 'Account Leveling',
      applicants: 5,
      postedDate: '3 hours ago'
    },
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplyModal(true);
  };

  return (
    <div className="job-board-page">
      <div className="job-board-header">
        <div className="container">
          <h1 className="job-board-title">Job Board</h1>
          <p className="job-board-subtitle">Find gaming jobs and apply with your offer</p>
          
          <div className="search-section">
            <Input
              type="text"
              placeholder="Search jobs by game, category, or keyword..."
              icon={<FaSearch />}
              className="search-input-main"
            />
          </div>
        </div>
      </div>

      <div className="job-board-content container">
        <div className="job-board-filters">
          <select className="filter-select">
            <option>All Categories</option>
            <option>Boosting</option>
            <option>Coaching</option>
            <option>Training</option>
            <option>Account Leveling</option>
          </select>
          <select className="filter-select">
            <option>All Budgets</option>
            <option>Under $50</option>
            <option>$50 - $100</option>
            <option>$100 - $200</option>
            <option>$200+</option>
          </select>
          <select className="filter-select">
            <option>All Deadlines</option>
            <option>1-3 days</option>
            <option>1 week</option>
            <option>2 weeks</option>
            <option>1 month+</option>
          </select>
        </div>

        <div className="jobs-list-board">
          {jobs.map(job => (
            <Card key={job.id} hover className="job-card-board">
              <div className="job-card-header">
                <div className="job-card-main">
                  <div className="job-status-header">
                    <span className={`status-badge status-${job.status.toLowerCase().replace(' ', '-')}`}>
                      {job.status}
                    </span>
                    <span className="job-category-badge">{job.category}</span>
                  </div>
                  <h3 className="job-card-title">{job.title}</h3>
                  <p className="job-client">Posted by {job.client} • {job.postedDate}</p>
                </div>
              </div>

              <p className="job-description">{job.description}</p>

              <div className="job-card-meta">
                <div className="meta-item">
                  <FaDollarSign className="meta-icon" />
                  <div>
                    <div className="meta-label">Budget</div>
                    <div className="meta-value">{job.budget}</div>
                  </div>
                </div>
                <div className="meta-item">
                  <FaClock className="meta-icon" />
                  <div>
                    <div className="meta-label">Deadline</div>
                    <div className="meta-value">{job.deadline}</div>
                  </div>
                </div>
                <div className="meta-item">
                  <FaBriefcase className="meta-icon" />
                  <div>
                    <div className="meta-label">Applicants</div>
                    <div className="meta-value">{job.applicants}</div>
                  </div>
                </div>
              </div>

              <div className="job-card-actions">
                {job.status === 'Open' ? (
                  <>
                    <Button variant="primary" onClick={() => handleApply(job)}>
                      Apply Now
                    </Button>
                    <Button variant="ghost">View Details</Button>
                  </>
                ) : (
                  <Button variant="ghost" fullWidth>View Details</Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Apply Modal */}
      <Modal 
        isOpen={showApplyModal} 
        onClose={() => setShowApplyModal(false)} 
        title="Submit Your Offer"
        size="medium"
      >
        {selectedJob && (
          <div className="apply-modal-content">
            <p className="modal-job-title">Job: <strong>{selectedJob.title}</strong></p>
            
            <Input
              label="Your Offer Price"
              type="number"
              placeholder="Enter your price"
              icon={<FaDollarSign />}
            />

            <div className="input-wrapper">
              <label className="input-label">Your Proposal Message</label>
              <textarea 
                className="proposal-textarea"
                placeholder="Explain why you're the best fit for this job..."
                rows="6"
              ></textarea>
            </div>

            <Input
              label="Estimated Delivery Time"
              type="text"
              placeholder="e.g., 3 days"
              icon={<FaClock />}
            />

            <div className="modal-actions">
              <Button variant="primary" fullWidth glow>
                Submit Application
              </Button>
              <Button variant="ghost" fullWidth onClick={() => setShowApplyModal(false)}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default JobBoard;

