import React from 'react';
import './Discord.css';
import Silk from '../Silk/Silk';
import SpotlightCard from '../SpotlightCard/SpotlightCard';
import { MessageSquare } from 'lucide-react';

const Discord = () => {
  return (
    <div className="discord-page">
      <div className="discord-bg">
        <Silk
          speed={3}
          scale={0.8}
          color="#5865F2"
          noiseIntensity={0.5}
          rotation={0.2}
        />
      </div>

      <div className="container">
        <div className="discord-container">
          <SpotlightCard className="discord-card" spotlightColor="rgba(88, 101, 242, 0.3)">
            <div className="discord-icon-wrapper">
              <MessageSquare size={64} className="discord-logo-icon" />
            </div>

            <h1 className="discord-title">Join the <span className="text-gradient">Community</span></h1>
            <p className="discord-description">
              Connect with thousands of developers, get instant support, and stay updated with the latest AtherixCloud news.
            </p>

            <div className="discord-stats">
              <div className="stat">
                <span className="stat-value">1k+</span>
                <span className="stat-label">Members</span>
              </div>
              <div className="stat">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Support</span>
              </div>
              <div className="stat">
                <span className="stat-value">Instant</span>
                <span className="stat-label">Access</span>
              </div>
            </div>

            <a
              href="https://discord.gg/uk5jHjNxZw"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary discord-join-btn"
            >
              Join Our Discord
            </a>

            <p className="discord-footer-text">
              By joining, you agree to follow our <a href="/rules" className="footer-link">Community Rules</a>.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default Discord;
