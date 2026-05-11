import React, { useEffect, useState, memo, useRef } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Grainient from './components/Grainient/Grainient';
import LogoLoop from './components/LogoLoop/LogoLoop';
import PaidPlans from './components/PaidPlans/PaidPlans';
import FreePlans from './components/FreePlans/FreePlans';
import Rules from './components/Legal/Rules';
import Terms from './components/Legal/Terms';
import Infrastructure from './components/Infrastructure/Infrastructure';
import Discord from './components/Discord/Discord';
import { Server, Shield, Zap, Cloud, Globe, Cpu, ChevronRight, Star, BadgeCheck, ChevronDown, Menu, X } from 'lucide-react';

const NavDropdown = ({ title, items, isMobile, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  if (isMobile) {
    return (
      <div className="mobile-dropdown">
        <button className="mobile-dropdown-trigger" onClick={() => setIsOpen(!isOpen)}>
          {title} <ChevronDown size={16} className={isOpen ? 'rotate-180' : ''} />
        </button>
        {isOpen && (
          <div className="mobile-dropdown-items">
            {items.map((item, idx) => (
              <Link key={idx} to={item.href} className="mobile-dropdown-item" onClick={onItemClick}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="nav-dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="nav-link-btn">
        {title} <ChevronDown size={14} />
      </button>
      {isOpen && (
        <div className="dropdown-menu glass-panel">
          {items.map((item, idx) => (
            <Link key={idx} to={item.href} className="dropdown-item">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = memo(() => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`nav-container ${scrolled ? 'nav-scrolled' : ''}`}>
      <nav className="floating-nav glass-panel">
        <Link to="/" className="nav-left cursor-pointer">
          <img src="/antherix.webp" alt="Logo" className="logo-img" />
          <span className="logo-text">AtherixCloud</span>
        </Link>
        <div className="nav-right">
          <div className="nav-links">
            <NavDropdown 
              title="Services" 
              items={[
                { label: "Free VPS", href: "/free-vps" },
                { label: "Paid VPS", href: "/paid-vps" }
              ]} 
            />
            <NavDropdown 
              title="Legal" 
              items={[
                { label: "Terms", href: "/terms" },
                { label: "Rules", href: "/rules" }
              ]} 
            />
            <NavDropdown 
              title="About Atherix" 
              items={[
                { label: "Infrastructure", href: "/infrastructure" },
                { label: "Discord", href: "/discord" }
              ]} 
            />
          </div>
          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay glass-panel">
          <div className="mobile-menu-links">
            <NavDropdown 
              isMobile
              onItemClick={() => setMobileMenuOpen(false)}
              title="Services" 
              items={[
                { label: "Free VPS", href: "/free-vps" },
                { label: "Paid VPS", href: "/paid-vps" }
              ]} 
            />
            <NavDropdown 
              isMobile
              onItemClick={() => setMobileMenuOpen(false)}
              title="Legal" 
              items={[
                { label: "Terms", href: "/terms" },
                { label: "Rules", href: "/rules" }
              ]} 
            />
            <NavDropdown 
              isMobile
              onItemClick={() => setMobileMenuOpen(false)}
              title="About Atherix" 
              items={[
                { label: "Infrastructure", href: "/infrastructure" },
                { label: "Discord", href: "/discord" }
              ]} 
            />
          </div>
        </div>
      )}
    </div>
  );
});

// Memoize ReviewCard for performance
const ReviewCard = memo(({ review }) => (
  <div className="review-card">
    <div className="review-stars">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="star-icon" fill="#fbbf24" color="#fbbf24" />
      ))}
    </div>
    <p className="review-text">"{review.text}"</p>
    <div className="review-footer">
      <div className="review-author">
        <div className="author-avatar">{review.initial}</div>
        <div className="author-info">
          <h4>{review.author} <BadgeCheck size={16} className="verified-icon" /></h4>
          <span>{review.role}</span>
        </div>
      </div>
    </div>
  </div>
));

const reviews = [
  { text: "AtherixCloud completely transformed our deployment pipeline. The latency is practically non-existent globally.", author: "Sarah Jenkins", role: "CTO at TechFlow", initial: "S" },
  { text: "We migrated 50+ microservices and the uptime has been flawless. Outstanding support team too.", author: "Michael Torres", role: "Lead DevOps", initial: "M" },
  { text: "The edge network capabilities allowed us to serve global customers with sub-10ms response times effortlessly.", author: "Elena Rossi", role: "Founder, ScaleApp", initial: "E" },
  { text: "Infinite scalability means we don't worry about traffic spikes anymore. It just works perfectly under load.", author: "David Kim", role: "VP Engineering", initial: "D" },
  { text: "Best cloud infrastructure we've ever used. The performance per dollar is absolutely unmatched in the industry.", author: "James Lawson", role: "Systems Architect", initial: "J" }
];

const reviewItems = reviews.map((review, idx) => ({
  node: <ReviewCard review={review} key={idx} />
}));

const FeatureCard = memo(({ icon: Icon, title, description, colorClass }) => (
  <div className="feature-card glass-card">
    <div className={`feature-icon-wrapper ${colorClass}`}>
      <Icon size={28} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
));

const HeroSection = memo(() => (
  <section id="home" className="hero-section">
    <div className="container">
      <div className="badge">
        <span className="badge-new">NEW</span>
        Global Edge Network Live
      </div>
      <h1 className="hero-title">
        Power Your Future with <br />
        <span className="text-gradient">AtherixCloud</span>
      </h1>
      <p className="hero-subtitle">
        Experience unparalleled performance, enterprise security, and infinite scalability. 
        Built for modern developers, designed for the future of the web.
      </p>
      <div className="hero-buttons">
        <Link to="/free-vps" className="btn btn-primary">
          Free Plan <ChevronRight size={20} />
        </Link>
        <Link to="/paid-vps" className="btn btn-secondary">Paid Plan</Link>
      </div>
    </div>
  </section>
));

const Home = memo(() => (
  <>
    <HeroSection />

    {/* Why Choose Us */}
    <section id="why-choose-us" className="features-section">
      <div className="container">
        <div className="section-header glass-panel">
          <h2 className="section-title">Why Choose <span className="text-gradient">Us</span>?</h2>
          <p className="section-subtitle">We provide cutting-edge infrastructure to keep your applications running flawlessly at any scale.</p>
        </div>
        
        <div className="features-grid">
          <FeatureCard icon={Zap} title="Lightning Fast" description="Powered by NVMe SSDs and optimized network routing to ensure your data reaches users in milliseconds." />
          <FeatureCard icon={Shield} title="Enterprise Security" description="Built-in DDoS protection, automated backups, and advanced firewalls keep your infrastructure secure." />
          <FeatureCard icon={Cloud} title="Infinite Scalability" description="Seamlessly upgrade your resources without downtime. Scale horizontally or vertically with a single click." />
          <FeatureCard icon={Globe} title="Global Edge Network" description="Deploy your applications closer to your users with our distributed edge locations worldwide." />
          <FeatureCard icon={Cpu} title="Dedicated Resources" description="No noisy neighbors. Enjoy guaranteed CPU and RAM allocation for consistent, reliable performance." />
          <FeatureCard icon={Server} title="Custom Environments" description="Full root access and API control. Run any OS, stack, or custom container with absolute freedom." />
        </div>
      </div>
    </section>

    {/* Sliding Reviews */}
    <section id="reviews" className="reviews-section">
      <h2 className="section-title">Loved by <span className="text-gradient">Developers</span></h2>
      <p className="section-subtitle" style={{ marginBottom: '4rem' }}>See what our customers have to say about our cloud infrastructure.</p>
      <div className="reviews-loop-container">
        <LogoLoop logos={reviewItems} speed={40} direction="left" logoHeight={280} gap={32} hoverSpeed={10} fadeOut fadeOutColor="#080b15" ariaLabel="Customer reviews" />
      </div>
    </section>

    {/* Get Started CTA */}
    <section id="get-started" className="cta-section">
      <div className="container">
        <div className="cta-box glass-panel">
          <h2>Get started with us today</h2>
          <p>Join thousands of developers building on AtherixCloud.</p>
          <div className="cta-buttons">
            <Link to="/paid-vps" className="btn btn-primary">Paid Plans</Link>
            <Link to="/free-vps" className="btn btn-secondary">Free Plans</Link>
            <a 
              href="https://discord.gg/uk5jHjNxZw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-discord"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
));

const AppContent = () => {
  const location = useLocation();
  const isPaidVpsPage = location.pathname === '/paid-vps';
  const isFreeVpsPage = location.pathname === '/free-vps';
  const isTermsPage = location.pathname === '/terms';
  const isRulesPage = location.pathname === '/rules';
  const isInfraPage = location.pathname === '/infrastructure';
  const isDiscordPage = location.pathname === '/discord';
  const hideGrainient = isPaidVpsPage || isFreeVpsPage || isTermsPage || isRulesPage || isInfraPage || isDiscordPage;

  return (
    <>
      {!hideGrainient && (
        <div className="global-background">
          <Grainient
            color1="#062ed4"
            color2="#3B82F6"
            color3="#0c083c"
            timeSpeed={0.25}
            colorBalance={0.0}
            warpStrength={1.0}
            warpFrequency={5.0}
            warpSpeed={2.0}
            warpAmplitude={50.0}
            blendAngle={0.0}
            blendSoftness={0.05}
            rotationAmount={500.0}
            noiseScale={2.0}
            grainAmount={0.1}
            grainScale={2.0}
            grainAnimated={false}
            contrast={1.5}
            gamma={1.0}
            saturation={1.0}
            centerX={0.0}
            centerY={0.0}
            zoom={0.9}
          />
          <div className="global-overlay"></div>
        </div>
      )}

      <div className="app-wrapper">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paid-vps" element={<PaidPlans />} />
          <Route path="/free-vps" element={<FreePlans />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/discord" element={<Discord />} />
        </Routes>

        {/* Footer */}
        <footer className="footer glass-panel">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <div className="nav-left" style={{ marginBottom: '1rem' }}>
                  <img src="/antherix.webp" alt="Logo" className="logo-img" />
                  <span className="logo-text">AtherixCloud</span>
                </div>
                <p>Next-generation cloud infrastructure for modern teams.</p>
              </div>
              <div className="footer-links">
                <div className="link-group">
                  <h4>Product</h4>
                  <a href="#">Compute</a>
                  <a href="#">Storage</a>
                  <a href="#">Networking</a>
                </div>
                <div className="link-group">
                  <h4>Company</h4>
                  <a href="#">About</a>
                  <a href="#">Careers</a>
                  <a href="#">Contact</a>
                </div>
                <div className="link-group">
                  <h4>Legal</h4>
                  <a href="#">Terms of Service</a>
                  <a href="#">Privacy Policy</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} AtherixCloud. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
