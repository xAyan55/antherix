import React from 'react';
import '../PaidPlans/PaidPlans.css';
import Beams from '../Beams/Beams';
import SpotlightCard from '../SpotlightCard/SpotlightCard';

const plans = [
  {
    name: "VPS STARTER+",
    invites: 3,
    buttonText: "Claim Plan",
    buttonVariant: "outline",
    includes: [
      "6 GB RAM",
      "1 vCPU Core",
      "20 GB NVMe SSD",
      "Private IPv4"
    ],
  },
  {
    name: "VPS BASIC+",
    invites: 4,
    buttonText: "Claim Plan",
    buttonVariant: "outline",
    includes: [
      "10 GB RAM",
      "1 vCPU Core",
      "30 GB NVMe SSD",
      "Private IPv4"
    ],
  },
  {
    name: "VPS ADVANCED+",
    invites: 6,
    buttonText: "Claim Plan",
    buttonVariant: "outline",
    includes: [
      "16 GB RAM",
      "2 vCPU Cores",
      "45 GB NVMe SSD",
      "Private IPv4"
    ],
  },
  {
    name: "VPS PRO+",
    invites: 12,
    buttonText: "Claim Plan",
    buttonVariant: "primary",
    popular: true,
    includes: [
      "24 GB RAM",
      "3 vCPU Cores",
      "70 GB NVMe SSD",
      "Private IPv4"
    ],
  },
  {
    name: "VPS ELITE+",
    invites: 14,
    buttonText: "Claim Plan",
    buttonVariant: "outline",
    includes: [
      "32 GB RAM",
      "4 vCPU Cores",
      "90 GB NVMe SSD",
      "Private IPv4",
      "Priority Node Allocation"
    ],
  },
  {
    name: "VPS ULTRA+",
    invites: 20,
    buttonText: "Claim Plan",
    buttonVariant: "outline",
    includes: [
      "40 GB RAM",
      "5 vCPU Cores",
      "110 GB NVMe SSD",
      "Private IPv4",
      "Priority Support"
    ],
  },
  {
    name: "VPS TITAN",
    invites: 23,
    buttonText: "Claim Plan",
    buttonVariant: "outline",
    includes: [
      "44 GB RAM",
      "6 vCPU Cores",
      "130 GB NVMe SSD",
      "Private IPv4",
      "Highest Priority Allocation"
    ],
  },
  {
    name: "VPS TITAN+",
    invites: 26,
    buttonText: "Claim Plan",
    buttonVariant: "outline",
    includes: [
      "48 GB RAM",
      "8 vCPU Cores",
      "160 GB NVMe SSD",
      "Private IPv4",
      "Dedicated Resource Priority"
    ],
  },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function FreePlans() {
  return (
    <div className="paid-plans-page">
      <div className="paid-plans-bg">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#3B82F6"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      <div className="plans-header">
        <h1 className="plans-title">Invite Your Friends, Get <span className="text-gradient">Free VPS</span></h1>
        <p className="plans-subtitle">Grow our community on Discord and earn powerful VPS nodes forever. No credit card required.</p>
      </div>

      <div className="plans-grid">
        {plans.map((plan, idx) => (
          <SpotlightCard 
            key={idx} 
            className={`plan-card ${plan.popular ? 'popular' : ''}`}
            spotlightColor={plan.popular ? "rgba(59, 130, 246, 0.3)" : "rgba(255, 255, 255, 0.1)"}
          >
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            
            <h3 className="plan-name">{plan.name}</h3>
            
            <div className="plan-price-container">
              <span className="plan-price">{plan.invites}</span>
              <span className="plan-period">Invites</span>
            </div>

            <ul className="plan-features">
              {plan.includes.map((feature, fIdx) => (
                <li key={fIdx}>
                  <div className="feature-icon">
                    <CheckIcon />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              href="https://discord.gg/uk5jHjNxZw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`btn plan-btn ${plan.buttonVariant === 'primary' ? 'btn-primary' : 'outline'}`}
            >
              {plan.buttonText}
            </a>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}
