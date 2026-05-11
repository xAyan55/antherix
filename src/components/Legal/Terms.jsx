import React from 'react';
import './Legal.css';
import DarkVeil from '../DarkVeil/DarkVeil';

const Terms = () => {
  return (
    <div className="legal-page">
      <div className="legal-bg">
        <DarkVeil hueShift={260} speed={0.3} />
      </div>

      <div className="container">
        <div className="legal-content">
          <h1 className="legal-title">Terms of Service</h1>
          
          <div className="legal-body">
            <h2 className="text-gradient">✦ AtherixCloud — Terms of Service ✦</h2>
            <p>By using AtherixCloud services, you agree to the following terms. These terms apply to all users.</p>

            <h3>Acceptance of Terms</h3>
            <p>Use of AtherixCloud services means you agree to follow these terms at all times.</p>

            <h3>Eligibility</h3>
            <ul>
              <li>Must be 13+ years old</li>
              <li>Under 18 requires guardian permission</li>
              <li>We may refuse service at any time</li>
            </ul>

            <h3>Usage Policy</h3>
            <p>Services must only be used for legal and ethical purposes, including hosting, development, and testing.</p>

            <h3>Prohibited Activities</h3>
            <p>Strictly not allowed:</p>
            <ul>
              <li>DDoS or stress testing</li>
              <li>Malware / botnets / RATs</li>
              <li>Crypto mining</li>
              <li>Illegal or pirated content</li>
              <li>Scams, phishing, impersonation</li>
              <li>Spam or abuse</li>
              <li>Exploiting or bypassing systems</li>
              <li>Running LXC containers, virtual machines (VMs), or any similar virtualization environments without permission</li>
            </ul>
            <p><strong>Violations = instant suspension or termination without refund</strong></p>

            <h3>Resource Usage</h3>
            <p>Abuse of CPU, RAM, disk, or network may result in:</p>
            <ul>
              <li>Throttling</li>
              <li>Suspension</li>
              <li>Termination</li>
            </ul>
            <p>All decisions are final.</p>

            <h3>Payments & Refunds</h3>
            <p>Payments are non-refundable by default. Refunds are only given if:</p>
            <ul>
              <li>Requested within 2 hours of service delivery</li>
              <li>Approved by us</li>
            </ul>
            <p>Chargebacks = permanent blacklist</p>

            <h3>Service Disclaimer</h3>
            <ul>
              <li>Services are provided as-is</li>
              <li>Uptime is not guaranteed</li>
              <li>Downtime, failures, or interruptions may occur at any time</li>
              <li>We are not responsible for any data loss</li>
              <li>Users are solely responsible for maintaining their own backups</li>
            </ul>

            <h3>Limitation of Responsibility</h3>
            <p>AtherixCloud is not responsible for:</p>
            <ul>
              <li>Data loss</li>
              <li>Downtime or service interruptions</li>
              <li>Security breaches or unauthorized access</li>
              <li>Any direct or indirect damages caused by use of the service</li>
            </ul>

            <h3>Suspension, Termination & Service Revocation</h3>
            <p>We reserve the right to suspend, terminate, or revoke any service (including VPS or other services), whether paid or free, at any time, with or without notice, for reasons including but not limited to:</p>
            <ul>
              <li>Rule violations</li>
              <li>Resource abuse</li>
              <li>Illegal or suspicious activity</li>
              <li>Operational, technical, or business reasons</li>
            </ul>
            <p>No refunds will be provided in such cases. All data may be permanently lost upon termination.</p>

            <h3>Changes to Terms</h3>
            <p>These terms may be updated at any time. Continued use of services = acceptance of updated terms.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
