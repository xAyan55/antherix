import React from 'react';
import './Legal.css';
import DarkVeil from '../DarkVeil/DarkVeil';

const Rules = () => {
  return (
    <div className="legal-page">
      <div className="legal-bg">
        <DarkVeil hueShift={26} speed={0.3} />
      </div>

      <div className="container">
        <div className="legal-content">
          <h1 className="legal-title">Community Rules</h1>
          
          <div className="legal-body">
            <p className="legal-divider">━━━━━━━━━━━━━━━━━━━━</p>
            <h2 className="text-gradient">✦ Community Conduct</h2>
            <p className="legal-divider">━━━━━━━━━━━━━━━━━━━━</p>

            <h3>➜ Be Respectful</h3>
            <ul>
              <li>Treat all members with kindness</li>
              <li>No harassment, hate speech, racism, or discrimination</li>
              <li>No toxicity or unnecessary arguments</li>
              <li>Respect opinions and personal boundaries</li>
            </ul>

            <p className="legal-divider">━━━━━━━━━━━━━━━━━━━━</p>

            <h3>➜ No NSFW or Inappropriate Content</h3>
            <ul>
              <li>Keep the server clean and professional</li>
              <li>No NSFW, gore, disturbing, offensive, or suggestive content</li>
            </ul>

            <p className="legal-divider">━━━━━━━━━━━━━━━━━━━━</p>

            <h3>➜ No Spam or Flooding</h3>
            <ul>
              <li>Do not spam messages, reactions, emojis, or mentions</li>
              <li>Avoid excessive links or repeated messages</li>
              <li>Keep conversations clear and meaningful</li>
            </ul>

            <p className="legal-divider">━━━━━━━━━━━━━━━━━━━━</p>
            <h2 className="text-gradient">✦ Server & Security Rules</h2>
            <p className="legal-divider">━━━━━━━━━━━━━━━━━━━━</p>

            <h3>➜ Respect Staff & Their Decisions</h3>
            <ul>
              <li>Staff decisions are final</li>
              <li>Do not argue with moderation actions</li>
              <li>Follow instructions when given</li>
            </ul>

            <p className="legal-divider">━━━━━━━━━━━━━━━━━━━━</p>

            <h3>➜ No Self-Promotion or Advertising</h3>
            <ul>
              <li>No advertising servers, hosting, websites, or socials</li>
              <li>Promotion requires explicit staff approval</li>
            </ul>

            <p className="legal-divider">━━━━━━━━━━━━━━━━━━━━</p>

            <h3>➜ No Illegal or Malicious Content</h3>
            <p>AtherixCloud™ supports ethical & secure hosting only. Do NOT share or discuss:</p>
            <ul>
              <li>Hacking</li>
              <li>Cracked software</li>
              <li>Exploits</li>
              <li>Malware</li>
              <li>Any illegal activities</li>
            </ul>

            <p className="legal-divider">━━━━━━━━━━━━━━━━━━━━</p>

            <h3>➜ Protect Your Privacy</h3>
            <ul>
              <li>Never share passwords or private credentials</li>
              <li>Do not expose tokens or sensitive information</li>
              <li>Staff will NEVER ask for your login details</li>
            </ul>

            <p className="legal-divider">━━━━━━━━━━━━━━━━━━━━</p>
            <h2 className="text-gradient">✦ Support & Platform Guidelines</h2>
            <p className="legal-divider">━━━━━━━━━━━━━━━━━━━━</p>

            <h3>➜ Support Etiquette</h3>
            <ul>
              <li>Be patient while waiting for assistance</li>
              <li>Do not repeatedly ping staff</li>
              <li>One ticket per issue</li>
            </ul>

            <p className="legal-divider">━━━━━━━━━━━━━━━━━━━━</p>

            <h3>➜ Follow Discord’s Terms</h3>
            <p>All members must comply with:</p>
            <ul>
              <li>Discord Terms of Service</li>
              <li>Discord Community Guidelines</li>
            </ul>

            <p className="legal-divider">━━━━━━━━━━━━━━━━━━━━</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
