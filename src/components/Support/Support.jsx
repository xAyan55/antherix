import React from 'react';
import './Support.css';
import LineWaves from '../LineWaves/LineWaves';
import SpotlightCard from '../SpotlightCard/SpotlightCard';
import { MessageSquare, Mail, ExternalLink } from 'lucide-react';

const Support = () => {
  return (
    <div className="support-page">
      <div className="support-bg">
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={1.0}
          rotation={-45}
          edgeFadeWidth={0.0}
          colorCycleSpeed={1.0}
          brightness={0.2}
          color1="#3B82F6"
          color2="#3B82F6"
          color3="#ffffff"
          enableMouseInteraction={true}
          mouseInfluence={2.0}
        />
      </div>

      <div className="container">
        <div className="support-header">
          <h1 className="support-title">Get in <span className="text-gradient">Touch</span></h1>
          <p className="support-subtitle">We're here to help you with any questions or technical issues.</p>
        </div>

        <div className="support-grid">
          <SpotlightCard className="support-card" spotlightColor="rgba(59, 130, 246, 0.2)">
            <div className="card-icon">
              <MessageSquare size={40} />
            </div>
            <h3>Join our Community</h3>
            <p>Our Discord server is the fastest way to get help from our staff and community members.</p>
            <a href="https://discord.gg/uk5jHjNxZw" target="_blank" rel="noopener noreferrer" className="btn btn-primary support-btn">
              Join Discord <ExternalLink size={18} />
            </a>
          </SpotlightCard>

          <SpotlightCard className="support-card" spotlightColor="rgba(255, 255, 255, 0.1)">
            <div className="card-icon">
              <Mail size={40} />
            </div>
            <h3>Email Support</h3>
            <p>For official inquiries or detailed technical support, feel free to drop us an email.</p>
            <a href="mailto:support@atherix.cloud" className="btn btn-secondary support-btn">
              support@atherix.cloud
            </a>
          </SpotlightCard>
        </div>

        <div className="support-faq glass-panel">
          <h3>Quick Help</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Deployment Issues?</h4>
              <p>Check our Discord #announcements for maintenance updates.</p>
            </div>
            <div className="faq-item">
              <h4>Billing Questions?</h4>
              <p>Open a ticket in Discord under the #billing-support channel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
