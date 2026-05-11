import React from 'react';
import './PaidPlans.css';
import LightRays from '../LightRays/LightRays';
import SpotlightCard from '../SpotlightCard/SpotlightCard';

const plans = [
  {
    name: "VPS NANO",
    price: "1.40",
    buttonText: "Deploy Now",
    buttonVariant: "outline",
    includes: [
      "4 GB RAM",
      "1 vCPU Core",
      "30 GB NVMe SSD",
      "Private IPv4",
      "Public IPv4 (+$2/month)"
    ],
  },
  {
    name: "VPS MICRO",
    price: "2.33",
    buttonText: "Deploy Now",
    buttonVariant: "outline",
    includes: [
      "8 GB RAM",
      "2 vCPU Cores",
      "50 GB NVMe SSD",
      "Private IPv4",
      "Public IPv4 (+$2/month)"
    ],
  },
  {
    name: "VPS MINI",
    price: "3.20",
    buttonText: "Deploy Now",
    buttonVariant: "outline",
    includes: [
      "12 GB RAM",
      "2 vCPU Cores",
      "70 GB NVMe SSD",
      "Private IPv4",
      "Public IPv4 (+$2/month)"
    ],
  },
  {
    name: "VPS STARTER",
    price: "4.35",
    buttonText: "Deploy Now",
    buttonVariant: "primary",
    popular: true,
    includes: [
      "16 GB RAM",
      "4 vCPU Cores",
      "100 GB NVMe SSD",
      "Private IPv4",
      "Public IPv4 (+$2/month)"
    ],
  },
  {
    name: "VPS BASIC",
    price: "5.95",
    buttonText: "Deploy Now",
    buttonVariant: "outline",
    includes: [
      "24 GB RAM",
      "6 vCPU Cores",
      "140 GB NVMe SSD",
      "Private IPv4",
      "Public IPv4 (+$2/month)"
    ],
  },
  {
    name: "VPS ADVANCED",
    price: "8.95",
    buttonText: "Deploy Now",
    buttonVariant: "outline",
    includes: [
      "40 GB RAM",
      "8 vCPU Cores",
      "200 GB NVMe SSD",
      "Private IPv4",
      "Priority Node"
    ],
  },
  {
    name: "VPS PRO",
    price: "12.50",
    buttonText: "Deploy Now",
    buttonVariant: "outline",
    includes: [
      "64 GB RAM",
      "12 vCPU Cores",
      "300 GB NVMe SSD",
      "Private IPv4",
      "High Priority Cluster"
    ],
  },
  {
    name: "VPS ELITE",
    price: "18.00",
    buttonText: "Deploy Now",
    buttonVariant: "outline",
    includes: [
      "96 GB RAM",
      "16 vCPU Cores",
      "450 GB NVMe SSD",
      "Private IPv4",
      "Enterprise Node Access"
    ],
  },
  {
    name: "VPS ULTRA",
    price: "25.00",
    buttonText: "Deploy Now",
    buttonVariant: "outline",
    includes: [
      "128 GB RAM",
      "24 vCPU Cores",
      "600 GB NVMe SSD",
      "Private IPv4",
      "Dedicated High-Performance Node"
    ],
  },
];

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function PaidPlans() {
  return (
    <div className="paid-plans-page">
      <div className="paid-plans-bg">
        <LightRays
          raysOrigin="top-center"
          raysColor="#3B82F6"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      <div className="plans-header">
        <h1 className="plans-title">VPS Plans That Scale With <span className="text-gradient">You</span></h1>
        <p className="plans-subtitle">High-performance virtual private servers built on NVMe storage. Find the perfect fit for your workload.</p>
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
              <span className="plan-price">${plan.price}</span>
              <span className="plan-period">/month</span>
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
