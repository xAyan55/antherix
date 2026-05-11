import React from 'react';
import './Infrastructure.css';
import RippleGrid from '../RippleGrid/RippleGrid';
import SpotlightCard from '../SpotlightCard/SpotlightCard';

const Infrastructure = () => {
  return (
    <div className="infra-page">
      <div className="infra-bg">
        <RippleGrid
          enableRainbow={false}
          gridColor="#3B82F6"
          rippleIntensity={0.02}
          gridSize={12}
          gridThickness={12}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.3}
        />
      </div>

      <div className="container">
        <div className="infra-header">
          <h1 className="infra-title">Our <span className="text-gradient">Infrastructure</span></h1>
          <p className="infra-subtitle">Enterprise-grade hardware powering the next generation of cloud services.</p>
        </div>

        <SpotlightCard className="infra-content" spotlightColor="rgba(59, 130, 246, 0.2)">
          <div className="infra-grid">
            <div className="infra-image-container">
              <img src="/ifra1.webp" alt="Neofetch Machine Stats" className="infra-img" />
              <div className="image-overlay"></div>
            </div>

            <div className="infra-specs">
              <h2 className="specs-title">✦ ⚡ AtherixCloud US-3 ⚡ ✦</h2>
              <p className="specs-location">Location: United States 🇺🇸</p>

              <div className="specs-list">
                <div className="spec-item">
                  <span className="spec-label">CPU:</span>
                  <span className="spec-value">AMD EPYC 7443P 24-Core Processor</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">RAM:</span>
                  <span className="spec-value">450GB DDR4 ECC</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Storage:</span>
                  <span className="spec-value">30TB NVMe Enterprise Storage</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Network:</span>
                  <span className="spec-value">10Gbps Uplink</span>
                </div>
              </div>

              <div className="specs-footer">
                <p>🚀 High performance node for Free VPS & hosting services.</p>
              </div>
            </div>
          </div>
        </SpotlightCard>

        <div className="infra-features">
          <div className="feature-card glass-panel">
            <h3>Global Network</h3>
            <p>Our low-latency network ensures your applications are accessible from anywhere in the world at lightning speeds.</p>
          </div>
          <div className="feature-card glass-panel">
            <h3>Enterprise Hardware</h3>
            <p>We only use the latest AMD EPYC processors and enterprise NVMe drives for maximum reliability and speed.</p>
          </div>
          <div className="feature-card glass-panel">
            <h3>99.9% Uptime</h3>
            <p>Built with redundancy at every level, our infrastructure is designed to keep your services running 24/7.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
