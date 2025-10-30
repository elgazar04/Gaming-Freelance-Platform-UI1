import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGamepad, FaTrophy, FaUsers, FaBolt, FaStar } from 'react-icons/fa';
import Button from '../components/Button';
import Card from '../components/Card';
import './styles/Home.css';

const Home = () => {
  const featuredGigs = [
    {
      id: 1,
      title: 'Valorant Rank Boost',
      gamer: 'ProGamer_99',
      avatar: '🎮',
      rating: 4.9,
      price: '$50',
      category: 'Boosting',
    },
    {
      id: 2,
      title: 'League of Legends Coaching',
      gamer: 'LeagueMaster',
      avatar: '🏆',
      rating: 5.0,
      price: '$35/hr',
      category: 'Coaching',
    },
    {
      id: 3,
      title: 'CS:GO Aim Training',
      gamer: 'HeadShot_King',
      avatar: '🎯',
      rating: 4.8,
      price: '$40/hr',
      category: 'Training',
    },
  ];

  const testimonials = [
    {
      name: 'Alex_Gaming',
      text: 'Reached Diamond in just 2 weeks! Best boosting service ever!',
      rating: 5,
    },
    {
      name: 'Sarah_Pro',
      text: 'Amazing coaching sessions. Improved my gameplay significantly.',
      rating: 5,
    },
    {
      name: 'Mike_Player',
      text: 'Professional, fast, and reliable. Highly recommended!',
      rating: 5,
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-grid"></div>
          <div className="floating-icons">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="floating-icon"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                <FaGamepad />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="hero-content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Level Up Your Skills.<br />
              Play. Earn. Dominate.
            </h1>
            <p className="hero-subtitle">
              The ultimate platform connecting pro gamers with clients who want to level up their gameplay
            </p>
            <div className="hero-buttons">
              <Link to="/register?role=client">
                <Button variant="primary" size="large" glow icon={<FaUsers />}>
                  Hire Gamers
                </Button>
              </Link>
              <Link to="/register?role=gamer">
                <Button variant="outline" size="large" icon={<FaTrophy />}>
                  Start Selling Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Gigs */}
      <section className="featured-section container">
        <h2 className="section-title">Featured Services</h2>
        <div className="featured-grid">
          {featuredGigs.map((gig, index) => (
            <motion.div
              key={gig.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card hover glow>
                <div className="gig-card">
                  <div className="gig-avatar">{gig.avatar}</div>
                  <div className="gig-category">{gig.category}</div>
                  <h3 className="gig-title">{gig.title}</h3>
                  <p className="gig-gamer">by {gig.gamer}</p>
                  <div className="gig-footer">
                    <div className="gig-rating">
                      <FaStar /> {gig.rating}
                    </div>
                    <div className="gig-price">{gig.price}</div>
                  </div>
                  <Link to={`/marketplace/${gig.id}`}>
                    <Button variant="primary" fullWidth>View Details</Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works container">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          <motion.div
            className="step-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="step-number">01</div>
            <FaUsers className="step-icon" />
            <h3 className="step-title">Post Your Job or Service</h3>
            <p className="step-description">
              Clients post jobs, gamers create service listings
            </p>
          </motion.div>
          <motion.div
            className="step-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="step-number">02</div>
            <FaBolt className="step-icon" />
            <h3 className="step-title">Get Matched</h3>
            <p className="step-description">
              Browse offers and connect with the perfect match
            </p>
          </motion.div>
          <motion.div
            className="step-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="step-number">03</div>
            <FaTrophy className="step-icon" />
            <h3 className="step-title">Play & Earn</h3>
            <p className="step-description">
              Complete jobs, submit proof, get paid securely
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials container">
        <h2 className="section-title">What Our Community Says</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="glass">
                <div className="testimonial-card">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <p className="testimonial-author">- {testimonial.name}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content container">
          <h2 className="cta-title">Ready to Dominate?</h2>
          <p className="cta-subtitle">Join thousands of gamers earning from their skills</p>
          <Link to="/register">
            <Button variant="primary" size="large" glow icon={<FaBolt />}>
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

