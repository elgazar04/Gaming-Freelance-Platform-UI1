import React from 'react';
import { FaUserTie, FaBriefcase, FaUsers, FaCheckCircle, FaComments, FaCog, FaDollarSign, FaClock } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import Card from '../components/Card';
import Button from '../components/Button';
import './styles/ClientDashboard.css';

const ClientDashboard = () => {
  const sidebarItems = [
    { path: '/client/dashboard', label: 'Dashboard', icon: <FaUserTie /> },
    { path: '/client/jobs', label: 'My Jobs', icon: <FaBriefcase /> },
    { path: '/client/offers', label: 'Offers Received', icon: <FaUsers /> },
    { path: '/client/approved', label: 'Approved Work', icon: <FaCheckCircle /> },
    { path: '/chat', label: 'Chat', icon: <FaComments /> },
    { path: '/profile', label: 'Profile Settings', icon: <FaCog /> },
  ];

  const myJobs = [
    {
      id: 1,
      title: 'Valorant Rank Boost to Diamond',
      status: 'In Progress',
      gamer: 'ProGamer_99',
      offers: 3,
      budget: '$100',
      progress: 60
    },
    {
      id: 2,
      title: 'League of Legends Coaching Session',
      status: 'Pending',
      gamer: 'Not Assigned',
      offers: 5,
      budget: '$50/hr',
      progress: 0
    },
  ];

  const recentOffers = [
    {
      id: 1,
      gamer: 'HeadShot_King',
      jobTitle: 'CS:GO Aim Training',
      price: '$40',
      rating: 4.9,
      message: 'I can help you improve your aim in 5 sessions'
    },
    {
      id: 2,
      gamer: 'LeagueMaster',
      jobTitle: 'League of Legends Coaching',
      price: '$35',
      rating: 5.0,
      message: 'Former pro player, 10+ years experience'
    },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar items={sidebarItems} />
      
      <div className="dashboard-content">
        <div className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Welcome Back, Client! 🎯</h1>
            <p className="dashboard-subtitle">Manage your jobs and track progress</p>
          </div>
          <Button variant="primary" icon={<FaBriefcase />}>
            Post New Job
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <StatCard
            icon={<FaBriefcase />}
            label="Active Jobs"
            value="3"
            change="+1 this week"
            color="blue"
          />
          <StatCard
            icon={<FaUsers />}
            label="Offers Received"
            value="12"
            change="+5 today"
            color="purple"
          />
          <StatCard
            icon={<FaCheckCircle />}
            label="Completed"
            value="28"
            change="All rated"
            color="green"
          />
          <StatCard
            icon={<FaDollarSign />}
            label="Total Spent"
            value="$2,840"
            change="+$180 this month"
            color="pink"
          />
        </div>

        {/* My Jobs */}
        <Card variant="glass" className="jobs-card">
          <div className="card-header-flex">
            <h3 className="card-title">My Posted Jobs</h3>
            <Button variant="ghost" size="small">View All</Button>
          </div>
          <div className="jobs-list">
            {myJobs.map(job => (
              <div key={job.id} className="job-item-client">
                <div className="job-header">
                  <div className="job-info">
                    <h4 className="job-title">{job.title}</h4>
                    <div className="job-meta">
                      <span className={`job-status status-${job.status.toLowerCase().replace(' ', '-')}`}>
                        {job.status}
                      </span>
                      <span className="job-gamer">👤 {job.gamer}</span>
                      <span className="job-offers">📨 {job.offers} offers</span>
                    </div>
                  </div>
                  <div className="job-budget">
                    <span className="budget-label">Budget</span>
                    <span className="budget-value">{job.budget}</span>
                  </div>
                </div>
                
                {job.status === 'In Progress' && (
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
                )}

                <div className="job-actions">
                  {job.status === 'Pending' ? (
                    <Button variant="primary" size="small">View Offers</Button>
                  ) : (
                    <>
                      <Button variant="primary" size="small">View Details</Button>
                      <Button variant="ghost" size="small">Message Gamer</Button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Offers */}
        <Card variant="glass" className="offers-card">
          <div className="card-header-flex">
            <h3 className="card-title">Recent Offers</h3>
            <Button variant="ghost" size="small">View All</Button>
          </div>
          <div className="offers-list">
            {recentOffers.map(offer => (
              <div key={offer.id} className="offer-item">
                <div className="offer-header">
                  <div className="offer-gamer">
                    <div className="gamer-avatar">🎮</div>
                    <div>
                      <div className="gamer-name">{offer.gamer}</div>
                      <div className="gamer-rating">⭐ {offer.rating}</div>
                    </div>
                  </div>
                  <div className="offer-price">{offer.price}</div>
                </div>
                <div className="offer-job">For: {offer.jobTitle}</div>
                <p className="offer-message">"{offer.message}"</p>
                <div className="offer-actions">
                  <Button variant="primary" size="small">Accept Offer</Button>
                  <Button variant="ghost" size="small">View Profile</Button>
                  <Button variant="outline" size="small">Decline</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="quick-stats-grid">
          <Card variant="gradient" className="quick-stat-card">
            <FaClock className="quick-stat-icon" />
            <div className="quick-stat-value">2.5 days</div>
            <div className="quick-stat-label">Avg. Completion Time</div>
          </Card>
          <Card variant="gradient" className="quick-stat-card">
            <FaCheckCircle className="quick-stat-icon" />
            <div className="quick-stat-value">95%</div>
            <div className="quick-stat-label">Success Rate</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;

