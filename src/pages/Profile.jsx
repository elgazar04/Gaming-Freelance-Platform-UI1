import React, { useState } from 'react';
import { FaStar, FaEdit, FaTrophy, FaGamepad, FaCheckCircle } from 'react-icons/fa';
import Card from '../components/Card';
import Button from '../components/Button';
import './styles/Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('about');

  const profile = {
    username: 'ProGamer_99',
    avatar: '🎮',
    role: 'Gamer',
    rating: 4.9,
    totalReviews: 152,
    completedJobs: 340,
    memberSince: 'January 2024',
    bio: 'Professional Valorant and CS:GO player with 5+ years of competitive experience. Specializing in rank boosting and coaching services. Former Radiant player.',
    badges: ['🏆 Top Rated', '✓ Verified', '⚡ Fast Delivery', '💎 Pro Seller'],
    skills: ['Valorant', 'CS:GO', 'Apex Legends', 'FPS Games', 'Coaching', 'Boosting'],
  };

  const gigs = [
    {
      id: 1,
      title: 'Valorant Rank Boost',
      price: '$50',
      rating: 4.9,
      orders: 120
    },
    {
      id: 2,
      title: 'CS:GO Aim Training',
      price: '$40/hr',
      rating: 4.8,
      orders: 85
    },
    {
      id: 3,
      title: 'Apex Legends Coaching',
      price: '$35/hr',
      rating: 5.0,
      orders: 65
    },
  ];

  const reviews = [
    {
      id: 1,
      client: 'GameFan_2024',
      rating: 5,
      date: '2 days ago',
      comment: 'Absolutely amazing! Went from Gold to Platinum in just 2 days. Very professional and communicated throughout.',
      job: 'Valorant Rank Boost'
    },
    {
      id: 2,
      client: 'ProWannabe',
      rating: 5,
      date: '1 week ago',
      comment: 'Best coaching sessions ever. Learned so much in just a few hours!',
      job: 'CS:GO Aim Training'
    },
    {
      id: 3,
      client: 'Client_123',
      rating: 4,
      date: '2 weeks ago',
      comment: 'Good service, professional and fast delivery.',
      job: 'Valorant Rank Boost'
    },
  ];

  return (
    <div className="profile-page">
      <div className="profile-banner">
        <div className="banner-content container">
          <div className="profile-header-main">
            <div className="profile-avatar-large">
              {profile.avatar}
              <button className="edit-avatar-btn">
                <FaEdit />
              </button>
            </div>
            <div className="profile-header-info">
              <div className="profile-username-section">
                <h1 className="profile-username">{profile.username}</h1>
                <span className="profile-role-badge">{profile.role}</span>
              </div>
              <div className="profile-rating-section">
                <div className="rating-display">
                  <FaStar className="star-icon" />
                  <span className="rating-number">{profile.rating}</span>
                  <span className="rating-reviews">({profile.totalReviews} reviews)</span>
                </div>
                <div className="profile-stats-inline">
                  <span><FaCheckCircle /> {profile.completedJobs} completed</span>
                  <span>Member since {profile.memberSince}</span>
                </div>
              </div>
              <div className="profile-badges">
                {profile.badges.map((badge, index) => (
                  <span key={index} className="profile-badge">{badge}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="profile-header-actions">
            <Button variant="primary" icon={<FaEdit />}>Edit Profile</Button>
            <Button variant="outline">Share Profile</Button>
          </div>
        </div>
      </div>

      <div className="profile-content container">
        <div className="profile-tabs">
          <button
            className={`profile-tab ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button
            className={`profile-tab ${activeTab === 'gigs' ? 'active' : ''}`}
            onClick={() => setActiveTab('gigs')}
          >
            Gigs ({gigs.length})
          </button>
          <button
            className={`profile-tab ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({reviews.length})
          </button>
        </div>

        <div className="profile-tab-content">
          {activeTab === 'about' && (
            <div className="about-section">
              <Card variant="glass" className="about-card">
                <h3 className="card-section-title">About Me</h3>
                <p className="about-bio">{profile.bio}</p>
              </Card>

              <Card variant="glass" className="skills-card">
                <h3 className="card-section-title">Skills & Expertise</h3>
                <div className="skills-grid">
                  {profile.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </Card>

              <Card variant="glass" className="achievements-card">
                <h3 className="card-section-title">Achievements</h3>
                <div className="achievements-list">
                  <div className="achievement-item">
                    <FaTrophy className="achievement-icon gold" />
                    <div>
                      <div className="achievement-title">Top Seller</div>
                      <div className="achievement-desc">Completed 300+ orders</div>
                    </div>
                  </div>
                  <div className="achievement-item">
                    <FaStar className="achievement-icon yellow" />
                    <div>
                      <div className="achievement-title">5-Star Rating</div>
                      <div className="achievement-desc">Maintained excellence</div>
                    </div>
                  </div>
                  <div className="achievement-item">
                    <FaGamepad className="achievement-icon green" />
                    <div>
                      <div className="achievement-title">Pro Gamer</div>
                      <div className="achievement-desc">Verified professional</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'gigs' && (
            <div className="gigs-section">
              <div className="gigs-grid-profile">
                {gigs.map(gig => (
                  <Card key={gig.id} hover className="gig-card-profile">
                    <h3 className="gig-card-title">{gig.title}</h3>
                    <div className="gig-card-meta">
                      <div className="gig-card-rating">
                        <FaStar /> {gig.rating}
                      </div>
                      <div className="gig-card-orders">{gig.orders} orders</div>
                    </div>
                    <div className="gig-card-footer">
                      <div className="gig-card-price">{gig.price}</div>
                      <Button variant="primary" size="small">View Gig</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="reviews-section">
              <div className="reviews-summary">
                <div className="summary-rating">
                  <div className="summary-number">{profile.rating}</div>
                  <div className="summary-stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <div className="summary-text">{profile.totalReviews} reviews</div>
                </div>
              </div>

              <div className="reviews-list-profile">
                {reviews.map(review => (
                  <Card key={review.id} variant="glass" className="review-card-profile">
                    <div className="review-header-profile">
                      <div className="review-user-info">
                        <div className="review-avatar-profile">👤</div>
                        <div>
                          <div className="review-client-name">{review.client}</div>
                          <div className="review-date">{review.date}</div>
                        </div>
                      </div>
                      <div className="review-rating-stars">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>
                    <div className="review-job-label">For: {review.job}</div>
                    <p className="review-comment-profile">{review.comment}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

