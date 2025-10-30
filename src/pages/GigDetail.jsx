import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaCheckCircle, FaClock, FaGamepad, FaUser } from 'react-icons/fa';
import Card from '../components/Card';
import Button from '../components/Button';
import Modal from '../components/Modal';
import './styles/GigDetail.css';

const GigDetail = () => {
  const { id } = useParams();
  const [showOrderModal, setShowOrderModal] = useState(false);

  const gig = {
    id: 1,
    title: 'Valorant Rank Boost - Any Rank to Desired Rank',
    gamer: 'ProGamer_99',
    avatar: '🎮',
    rating: 4.9,
    reviews: 152,
    completedOrders: 340,
    responseTime: '< 1 hour',
    price: 50,
    category: 'Boosting',
    deliveryTime: '2-3 days',
    description: `Professional Valorant rank boosting service with guaranteed results. 
    
    I'm a Radiant player with over 5 years of competitive FPS experience. I'll help you reach your desired rank quickly and safely.
    
    What you'll get:
    • Fast rank progression
    • Safe account handling
    • Stream available upon request
    • Tips and advice included
    • Money-back guarantee
    
    Simply provide your current rank and desired rank, and I'll handle the rest!`,
    features: [
      'Any rank to any rank',
      'Safe and secure',
      'VPN protection',
      'Offline mode available',
      '24/7 support',
    ],
    tags: ['Valorant', 'Rank Boost', 'Fast', 'Safe', 'Professional'],
  };

  const reviews = [
    {
      id: 1,
      user: 'GameFan_2024',
      avatar: '👤',
      rating: 5,
      date: '2 days ago',
      comment: 'Absolutely amazing! Went from Gold to Platinum in just 2 days. Very professional and communicated throughout. Highly recommend!'
    },
    {
      id: 2,
      user: 'ProWannabe',
      avatar: '🎯',
      rating: 5,
      date: '1 week ago',
      comment: 'Fast service, great communication. Will definitely order again!'
    },
    {
      id: 3,
      user: 'Client_123',
      avatar: '⚡',
      rating: 4,
      date: '2 weeks ago',
      comment: 'Good service, took a bit longer than expected but results were great.'
    },
  ];

  return (
    <div className="gig-detail-page">
      <div className="container">
        <div className="gig-detail-layout">
          {/* Main Content */}
          <div className="gig-detail-main">
            <div className="breadcrumb">
              <Link to="/marketplace">Marketplace</Link> / <Link to={`/marketplace?category=${gig.category}`}>{gig.category}</Link> / {gig.title}
            </div>

            <h1 className="gig-detail-title">{gig.title}</h1>

            <div className="gig-gamer-bar">
              <div className="gamer-info-detail">
                <div className="gamer-avatar-detail">{gig.avatar}</div>
                <div>
                  <Link to={`/profile/${gig.gamer}`} className="gamer-name-link">
                    {gig.gamer}
                  </Link>
                  <div className="gamer-stats">
                    <span className="stat-item-inline">
                      <FaStar /> {gig.rating} ({gig.reviews} reviews)
                    </span>
                    <span className="stat-item-inline">
                      <FaCheckCircle /> {gig.completedOrders} orders
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Card variant="glass" className="gig-detail-card">
              <div className="gig-hero">
                <div className="gig-hero-icon">{gig.avatar}</div>
                <div className="gig-hero-badge">{gig.category}</div>
              </div>
            </Card>

            <Card variant="glass" className="gig-detail-card">
              <h2 className="section-heading">About This Service</h2>
              <div className="gig-description">
                {gig.description.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Card>

            <Card variant="glass" className="gig-detail-card">
              <h2 className="section-heading">What's Included</h2>
              <div className="features-list">
                {gig.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <FaCheckCircle className="feature-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card variant="glass" className="gig-detail-card">
              <h2 className="section-heading">Tags</h2>
              <div className="gig-tags-detail">
                {gig.tags.map((tag, index) => (
                  <span key={index} className="tag-item">{tag}</span>
                ))}
              </div>
            </Card>

            {/* Reviews */}
            <Card variant="glass" className="gig-detail-card">
              <div className="reviews-header">
                <h2 className="section-heading">Reviews ({reviews.length})</h2>
                <div className="overall-rating">
                  <FaStar className="star-large" />
                  <span className="rating-number">{gig.rating}</span>
                  <span className="rating-label">({gig.reviews} reviews)</span>
                </div>
              </div>

              <div className="reviews-list">
                {reviews.map(review => (
                  <div key={review.id} className="review-item">
                    <div className="review-header">
                      <div className="review-user">
                        <div className="review-avatar">{review.avatar}</div>
                        <div>
                          <div className="review-username">{review.user}</div>
                          <div className="review-date">{review.date}</div>
                        </div>
                      </div>
                      <div className="review-rating">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>
                    <p className="review-comment">{review.comment}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <aside className="gig-detail-sidebar">
            <Card variant="glass" className="order-card sticky-card">
              <div className="order-price">
                <span className="price-label">Starting at</span>
                <span className="price-value">${gig.price}</span>
              </div>

              <div className="order-details">
                <div className="detail-item">
                  <FaClock />
                  <span>Delivery: {gig.deliveryTime}</span>
                </div>
                <div className="detail-item">
                  <FaGamepad />
                  <span>Category: {gig.category}</span>
                </div>
                <div className="detail-item">
                  <FaUser />
                  <span>Response: {gig.responseTime}</span>
                </div>
              </div>

              <Button 
                variant="primary" 
                size="large" 
                fullWidth 
                glow
                onClick={() => setShowOrderModal(true)}
              >
                Order Now
              </Button>

              <Link to={`/chat/${gig.gamer}`}>
                <Button variant="outline" size="medium" fullWidth>
                  Contact Gamer
                </Button>
              </Link>
            </Card>

            <Card variant="glass" className="gamer-profile-card">
              <h3 className="card-heading">About the Gamer</h3>
              <div className="gamer-profile-info">
                <div className="gamer-avatar-large">{gig.avatar}</div>
                <Link to={`/profile/${gig.gamer}`} className="gamer-name-large">
                  {gig.gamer}
                </Link>
                <div className="gamer-badges">
                  <span className="badge-item">🏆 Top Rated</span>
                  <span className="badge-item">✓ Verified</span>
                </div>
                <Link to={`/profile/${gig.gamer}`}>
                  <Button variant="ghost" size="small" fullWidth>
                    View Full Profile
                  </Button>
                </Link>
              </div>
            </Card>
          </aside>
        </div>
      </div>

      {/* Order Modal */}
      <Modal isOpen={showOrderModal} onClose={() => setShowOrderModal(false)} title="Place Order">
        <div className="order-modal-content">
          <p>You're about to order: <strong>{gig.title}</strong></p>
          <p>From: <strong>{gig.gamer}</strong></p>
          <p>Price: <strong>${gig.price}</strong></p>
          <div className="modal-actions">
            <Button variant="primary" fullWidth glow>
              Confirm & Pay
            </Button>
            <Button variant="ghost" fullWidth onClick={() => setShowOrderModal(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GigDetail;

