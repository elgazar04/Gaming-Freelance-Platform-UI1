import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaStar, FaFilter } from 'react-icons/fa';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import './styles/Marketplace.css';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500]);

  const categories = ['All', 'Boosting', 'Coaching', 'Training', 'Account Leveling', 'Quests'];
  
  const gigs = [
    {
      id: 1,
      title: 'Valorant Rank Boost - Any Rank',
      gamer: 'ProGamer_99',
      avatar: '🎮',
      rating: 4.9,
      reviews: 152,
      price: 50,
      priceLabel: 'Starting at $50',
      category: 'Boosting',
      deliveryTime: '2-3 days',
      tags: ['Valorant', 'Rank Boost', 'Fast']
    },
    {
      id: 2,
      title: 'League of Legends Pro Coaching',
      gamer: 'LeagueMaster',
      avatar: '🏆',
      rating: 5.0,
      reviews: 98,
      price: 35,
      priceLabel: '$35/hour',
      category: 'Coaching',
      deliveryTime: 'Flexible',
      tags: ['League', 'Coaching', 'Pro']
    },
    {
      id: 3,
      title: 'CS:GO Aim Training Sessions',
      gamer: 'HeadShot_King',
      avatar: '🎯',
      rating: 4.8,
      reviews: 203,
      price: 40,
      priceLabel: '$40/hour',
      category: 'Training',
      deliveryTime: '1 hour sessions',
      tags: ['CS:GO', 'Aim', 'Training']
    },
    {
      id: 4,
      title: 'Apex Legends Season Pass Completion',
      gamer: 'ApexChampion',
      avatar: '⚡',
      rating: 4.9,
      reviews: 76,
      price: 60,
      priceLabel: '$60 fixed',
      category: 'Account Leveling',
      deliveryTime: '5-7 days',
      tags: ['Apex', 'Battlepass', 'Fast']
    },
    {
      id: 5,
      title: 'Overwatch 2 Competitive Coaching',
      gamer: 'OW_Master',
      avatar: '🎭',
      rating: 4.7,
      reviews: 134,
      price: 30,
      priceLabel: '$30/hour',
      category: 'Coaching',
      deliveryTime: 'Flexible',
      tags: ['Overwatch', 'Coaching', 'Competitive']
    },
    {
      id: 6,
      title: 'Destiny 2 Raid Carries & Guides',
      gamer: 'DestinyPro',
      avatar: '🌟',
      rating: 5.0,
      reviews: 89,
      price: 45,
      priceLabel: '$45 per raid',
      category: 'Quests',
      deliveryTime: '2-4 hours',
      tags: ['Destiny', 'Raid', 'Sherpa']
    },
  ];

  return (
    <div className="marketplace-page">
      <div className="marketplace-header">
        <div className="container">
          <h1 className="marketplace-title">Gig Marketplace</h1>
          <p className="marketplace-subtitle">Browse professional gaming services from top-rated gamers</p>
          
          <div className="search-section">
            <Input
              type="text"
              placeholder="Search for services, games, or gamers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<FaSearch />}
              className="search-input-main"
            />
          </div>
        </div>
      </div>

      <div className="marketplace-content container">
        <aside className="marketplace-sidebar">
          <Card variant="glass">
            <div className="filter-section">
              <h3 className="filter-title">
                <FaFilter /> Filters
              </h3>
              
              <div className="filter-group">
                <label className="filter-label">Category</label>
                <div className="category-list">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      className={`category-btn ${selectedCategory === cat.toLowerCase() ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat.toLowerCase())}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <label className="filter-label">Price Range</label>
                <div className="price-range">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="price-slider"
                  />
                  <div className="price-values">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div className="filter-group">
                <label className="filter-label">Sort By</label>
                <select className="sort-select">
                  <option>Most Popular</option>
                  <option>Highest Rated</option>
                  <option>Lowest Price</option>
                  <option>Highest Price</option>
                  <option>Newest</option>
                </select>
              </div>

              <Button variant="outline" fullWidth>Reset Filters</Button>
            </div>
          </Card>
        </aside>

        <main className="marketplace-main">
          <div className="marketplace-meta">
            <p className="results-count">{gigs.length} services found</p>
          </div>

          <div className="gigs-grid">
            {gigs.map(gig => (
              <Card key={gig.id} hover glow className="gig-card-market">
                <div className="gig-image">
                  <div className="gig-avatar-large">{gig.avatar}</div>
                  <div className="gig-category-badge">{gig.category}</div>
                </div>
                
                <div className="gig-content">
                  <Link to={`/marketplace/${gig.id}`} className="gig-title-link">
                    <h3 className="gig-title-market">{gig.title}</h3>
                  </Link>
                  
                  <div className="gig-gamer-info">
                    <span className="gamer-name">by {gig.gamer}</span>
                    <div className="gig-rating">
                      <FaStar /> {gig.rating} <span className="review-count">({gig.reviews})</span>
                    </div>
                  </div>

                  <div className="gig-tags">
                    {gig.tags.map((tag, index) => (
                      <span key={index} className="gig-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="gig-delivery">
                    ⏱ Delivery: {gig.deliveryTime}
                  </div>
                </div>

                <div className="gig-footer-market">
                  <div className="gig-price-market">{gig.priceLabel}</div>
                  <Link to={`/marketplace/${gig.id}`}>
                    <Button variant="primary" size="small">View Details</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          <div className="pagination">
            <button className="page-btn">Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">Next</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Marketplace;

