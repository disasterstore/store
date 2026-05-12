
:root {
  --bg-dark: #0a0a12;
  --bg-surface: #12121a;
  --bg-card: rgba(18, 18, 26, 0.65);
  --text-primary: #e0e0e0;
  --text-secondary: #a0a0b0;
  --text-muted: #6a6a7a;
  --cyan: #00f3ff;
  --purple: #b026ff;
  --gold: #ffd700;
  --red: #ff2a6d;
  --aqua: #00e5ff;
  --border: rgba(255, 255, 255, 0.1);
  --glass: rgba(255, 255, 255, 0.05);
  --font-heading: 'Orbitron', sans-serif;
  --font-body: 'Inter', sans-serif;
  --radius: 16px;
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg-dark);
  color: var(--text-primary);
  font-family: var(--font-body);
  line-height: 1.6;
  overflow-x: hidden;
  cursor: default;
}

.container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
.highlight { color: var(--cyan); text-shadow: 0 0 12px rgba(0, 243, 255, 0.6); }

/* Navbar */
.navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 16px 0;
  background: rgba(10, 10, 18, 0.7);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  transition: var(--transition);
}
.navbar.scrolled { background: rgba(10, 10, 18, 0.95); padding: 12px 0; }
.nav-container { display: flex; align-items: center; justify-content: space-between; }
.logo { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 900; text-decoration: none; color: #fff; letter-spacing: 1px; }
.nav-links { display: flex; gap: 32px; list-style: none; }
.nav-links a { color: var(--text-secondary); text-decoration: none; font-weight: 500; transition: var(--transition); position: relative; }
.nav-links a:hover { color: var(--cyan); }
.nav-links a::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: var(--cyan); transition: var(--transition); }
.nav-links a:hover::after { width: 100%; }

.btn { display: inline-flex; align-items: center; justify-content: center; padding: 12px 24px; border-radius: 50px; font-weight: 600; text-decoration: none; transition: var(--transition); cursor: pointer; border: none; }
.btn-discord { background: #5865F2; color: #fff; }
.btn-discord:hover { background: #4752c4; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(88, 101, 242, 0.4); }
.btn-primary { background: linear-gradient(135deg, var(--cyan), var(--purple)); color: #000; font-weight: 700; }
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(0, 243, 255, 0.4); }
.btn-outline { background: transparent; border: 2px solid var(--cyan); color: var(--cyan); }
.btn-outline:hover { background: rgba(0, 243, 255, 0.1); transform: translateY(-3px); }
.btn-buy { background: linear-gradient(135deg, var(--purple), var(--red)); color: #fff; width: 100%; margin-top: 16px; }
.btn-buy:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(176, 38, 255, 0.4); }

.mobile-toggle { display: none; background: none; border: none; cursor: pointer; padding: 8px; }
.mobile-toggle span { display: block; width: 24px; height: 2px; background: #fff; margin: 5px 0; transition: var(--transition); }

/* Hero */
.hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; position: relative; padding: 120px 24px 80px; overflow: hidden; }
.hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, rgba(176, 38, 255, 0.15), transparent 60%), radial-gradient(circle at 20% 80%, rgba(0, 243, 255, 0.1), transparent 50%); pointer-events: none; }
.hero-content { position: relative; z-index: 2; max-width: 800px; }
.glow-text { font-family: var(--font-heading); font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; line-height: 1.1; margin-bottom: 24px; animation: textGlow 3s infinite alternate; }
.subtitle { font-size: clamp(1rem, 2vw, 1.25rem); color: var(--text-secondary); margin-bottom: 40px; max-width: 600px; margin-left: auto; margin-right: auto; }
.hero-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

.floating-icons { position: absolute; inset: 0; pointer-events: none; }
.icon { position: absolute; font-size: 2rem; opacity: 0.6; animation: float 6s ease-in-out infinite; }
.cube { top: 20%; left: 15%; animation-delay: 0s; }
.sword { top: 30%; right: 18%; animation-delay: 1.5s; }
.shield { bottom: 25%; left: 20%; animation-delay: 3s; }
.gem { bottom: 35%; right: 15%; animation-delay: 4.5s; }

/* Sections */
.section { padding: 100px 0; position: relative; }
.section-title { font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem); text-align: center; margin-bottom: 12px; }
.section-desc { text-align: center; color: var(--text-secondary); margin-bottom: 60px; font-size: 1.1rem; }

/* Cards Grid */
.cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; }
.card { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 32px 24px; position: relative; overflow: hidden; backdrop-filter: blur(10px); transition: var(--transition); transform-style: preserve-3d; }
.card:hover { transform: translateY(-10px) scale(1.02); border-color: rgba(255,255,255,0.2); box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
.card-shine { position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%); transform: rotate(30deg); transition: 0.6s; pointer-events: none; }
.card:hover .card-shine { transform: rotate(30deg) translate(20%, 20%); }

.rank-card h3, .crate-card h3 { font-family: var(--font-heading); font-size: 1.5rem; margin: 16px 0 8px; text-align: center; }
.rank-icon, .crate-icon { font-size: 2.5rem; text-align: center; display: block; margin-bottom: 8px; }
.price { font-size: 1.8rem; font-weight: 700; text-align: center; margin: 12px 0; }
.usd { font-size: 0.9rem; color: var(--text-muted); font-weight: 400; margin-left: 6px; }
.features { list-style: none; margin: 20px 0; padding: 0; }
.features li { padding: 8px 0; border-bottom: 1px solid var(--border); color: var(--text-secondary); font-size: 0.95rem; }
.features li:last-child { border-bottom: none; }

/* Rank Colors */
.knight { --glow: var(--cyan); }
.lord { --glow: var(--purple); }
.paladin { --glow: var(--gold); }
.duke { --glow: var(--red); }
.king { --glow: var(--aqua); }
.card:hover { box-shadow: 0 0 25px var(--glow), inset 0 0 15px rgba(255,255,255,0.05); border-color: var(--glow); }

/* Crate Colors */
.rare { --glow: var(--cyan); }
.epic { --glow: var(--purple); }
.superior { --glow: var(--gold); }
.quantity { text-align: center; color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 8px; }

/* Server Info */
.server-panel { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius); padding: 40px; backdrop-filter: blur(10px); max-width: 800px; margin: 0 auto; }
.server-info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; }
.info-item { display: flex; flex-direction: column; gap: 8px; }
.label { font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px; }
.value { font-size: 1.2rem; font-weight: 600; color: #fff; }
.value-row { display: flex; align-items: center; gap: 12px; }
.btn-copy { background: var(--glass); border: 1px solid var(--border); color: #fff; padding: 6px 10px; border-radius: 8px; cursor: pointer; transition: var(--transition); }
.btn-copy:hover { background: rgba(255,255,255,0.15); transform: scale(1.05); }
.status-online { display: flex; align-items: center; gap: 8px; color: #4ade80; }
.pulse-dot { width: 10px; height: 10px; background: #4ade80; border-radius: 50%; box-shadow: 0 0 10px #4ade80; animation: pulse 2s infinite; }

/* Footer */
.footer { background: #050508; padding: 60px 0 30px; border-top: 1px solid var(--border); margin-top: 80px; }
.footer-content { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 32px; margin-bottom: 40px; }
.footer-brand h3 { font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 8px; }
.footer-brand p { color: var(--text-secondary); }
.footer-links { display: flex; gap: 24px; flex-wrap: wrap; }
.footer-links a { color: var(--text-secondary); text-decoration: none; transition: var(--transition); }
.footer-links a:hover { color: var(--cyan); }
.social-btn { background: #5865F2; color: #fff; padding: 10px 20px; border-radius: 50px; text-decoration: none; font-weight: 600; transition: var(--transition); }
.social-btn:hover { background: #4752c4; transform: translateY(-2px); }
.footer-bottom { text-align: center; color: var(--text-muted); font-size: 0.9rem; padding-top: 24px; border-top: 1px solid var(--border); }

/* Toast */
.toast { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%) translateY(20px); background: #1e1e2a; color: #fff; padding: 12px 24px; border-radius: 50px; border: 1px solid var(--cyan); opacity: 0; pointer-events: none; transition: var(--transition); z-index: 200; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

/* Canvas */
#particles { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0; }

/* Animations */
@keyframes textGlow { 0% { text-shadow: 0 0 10px rgba(0,243,255,0.4); } 100% { text-shadow: 0 0 30px rgba(176,38,255,0.8), 0 0 60px rgba(0,243,255,0.4); } }
@keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-20px) rotate(10deg); } }
@keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.4); opacity: 0.6; } 100% { transform: scale(1); opacity: 1; } }
@keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }

.reveal { opacity: 0; transform: translateY(40px); transition: 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
.reveal.active { opacity: 1; transform: translateY(0); }

/* Responsive */
@media (max-width: 768px) {
  .nav-links { position: fixed; top: 70px; left: 0; right: 0; background: rgba(10,10,18,0.95); flex-direction: column; align-items: center; padding: 32px 0; gap: 24px; transform: translateY(-150%); transition: var(--transition); border-bottom: 1px solid var(--border); }
  .nav-links.open { transform: translateY(0); }
  .mobile-toggle { display: block; }
  .nav-discord { display: none; }
  .hero { padding-top: 100px; }
  .footer-content { flex-direction: column; text-align: center; }
  .footer-links { justify-content: center; }
}
