import React from 'react';
import { FaGamepad, FaBriefcase, FaClipboardCheck, FaDollarSign, FaChartLine, FaComments, FaCog, FaStar } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import Card from '../components/Card';
import Button from '../components/Button';
import './styles/GamerDashboard.css';

const GamerDashboard = () => {
  const sidebarItems = [
    { path: '/gamer/dashboard', label: 'Dashboard', icon: <FaGamepad /> },
    { path: '/gamer/gigs', label: 'My Gigs', icon: <FaBriefcase /> },
    { path: '/gamer/jobs', label: 'Active Jobs', icon: <FaClipboardCheck /> },
    { path: '/gamer/proof', label: 'Proof of Work', icon: <FaChartLine /> },
    { path: '/gamer/earnings', label: 'Earnings', icon: <FaDollarSign /> },
    { path: '/chat', label: 'Chat', icon: <FaComments /> },
    { path: '/profile', label: 'Profile Settings', icon: <FaCog /> },
  ];

  const recentActivities = [
    { id: 1, text: 'New job offer received for "Valorant Boost"', time: '2 hours ago', type: 'offer' },
    { id: 2, text: 'Payment received: $120', time: '5 hours ago', type: 'payment' },
    { id: 3, text: 'Job completed: "League Coaching Session"', time: '1 day ago', type: 'completed' },
    { id: 4, text: 'New review: 5 stars from @Client_123', time: '2 days ago', type: 'review' },
  ];

  const activeJobs = [
    {
      id: 1,
      title: 'Valorant Rank Boost',
      client: 'GameFan_2024',
      deadline: '2 days',
      progress: 70,
      price: '$80'
    },
    {
      id: 2,
      title: 'CS:GO Coaching',
      client: 'ProWannabe',
      deadline: '5 days',
      progress: 30,
      price: '$60'
    },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar items={sidebarItems} />
      
      <div className="dashboard-content">
        <div className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Welcome Back, ProGamer! 🎮</h1>
            <p className="dashboard-subtitle">Here's what's happening with your services</p>
          </div>
          <Button variant="primary" icon={<FaBriefcase />}>
            Create New Gig
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <StatCard
            icon={<FaClipboardCheck />}
            label="Active Jobs"
            value="5"
            change="+2 this week"
            color="green"
          />
          <StatCard
            icon={<FaChartLine />}
            label="Completed"
            value="127"
            change="+15 this month"
            color="blue"
          />
          <StatCard
            icon={<FaStar />}
            label="Rating"
            value="4.9"
            change="Excellent"
            color="purple"
          />
          <StatCard
            icon={<FaDollarSign />}
            label="Total Earnings"
            value="$12,450"
            change="+$850 this month"
            color="pink"
          />
        </div>

        {/* Main Content Grid */}
        <div className="dashboard-grid">
          {/* Recent Activities */}
          <Card variant="glass" className="activity-card">
            <h3 className="card-title">Recent Activities</h3>
            <div className="activity-list">
              {recentActivities.map(activity => (
                <div key={activity.id} className={`activity-item ${activity.type}`}>
                  <div className="activity-indicator"></div>
                  <div className="activity-content">
                    <p className="activity-text">{activity.text}</p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card variant="glass" className="quick-actions-card">
            <h3 className="card-title">Quick Actions</h3>
            <div className="quick-actions-grid">
              <button className="quick-action-btn">
                <FaBriefcase />
                <span>Add New Gig</span>
              </button>
              <button className="quick-action-btn">
                <FaClipboardCheck />
                <span>View Offers</span>
              </button>
              <button className="quick-action-btn">
                <FaChartLine />
                <span>Submit Proof</span>
              </button>
              <button className="quick-action-btn">
                <FaDollarSign />
                <span>Withdraw Funds</span>
              </button>
            </div>
          </Card>
        </div>

        {/* Active Jobs */}
        <Card variant="glass" className="jobs-card">
          <div className="card-header-flex">
            <h3 className="card-title">Active Jobs</h3>
            <Button variant="ghost" size="small">View All</Button>
          </div>
          <div className="jobs-list">
            {activeJobs.map(job => (
              <div key={job.id} className="job-item">
                <div className="job-info">
                  <h4 className="job-title">{job.title}</h4>
                  <p className="job-client">Client: {job.client}</p>
                  <div className="job-meta">
                    <span className="job-deadline">⏱ {job.deadline} left</span>
                    <span className="job-price">{job.price}</span>
                  </div>
                </div>
                <div className="job-progress">
                  <div className="progress-label">
                    <span>Progress</span>
                    <span>{job.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${job.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="job-actions">
                  <Button variant="primary" size="small">Update Progress</Button>
                  <Button variant="ghost" size="small">Chat</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GamerDashboard;

