(() => {
// =========== DATA ===========

const navigationData = [
    { label: "Features",     href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Early Access", href: "#early-access" },
];

const taskCardsData = [
    { title: "Update Q3 roadmap",     assignee: "Sarah Chen",  due: "Tomorrow", priority: "high" },
    { title: "Review design mockups", assignee: "Alex Rivera", due: "Friday",   priority: "medium" },
];

const stepsData = [
    {
        number: "01",
        title: "Connect Your Meeting",
        description: "Connect Meetory to your calendar or join via Zoom, Google Meet, or Microsoft Teams.",
        icon: "fas fa-plug",
    },
    {
        number: "02",
        title: "AI Captures Everything",
        description: "Our AI listens and generates a comprehensive summary with key points and decisions in real time.",
        icon: "fas fa-brain",
    },
    {
        number: "03",
        title: "Tasks Assigned Instantly",
        description: "Action items are automatically created with owners, due dates, and synced to your tools.",
        icon: "fas fa-check-circle",
    },
];

const featuresData = [
    {
        title: "Automatic Summaries",
        description: "AI-powered meeting summaries with key decisions, action items, and follow-ups — ready before you close the tab.",
        icon: "fas fa-file-alt",
        iconBg: "rgba(79,98,255,.1)",
        iconColor: "#4F62FF",
    },
    {
        title: "Smart Task Creation",
        description: "Convert discussions into actionable tasks with assignees, priorities, and deadlines. Zero manual input.",
        icon: "fas fa-tasks",
        iconBg: "rgba(124,92,252,.1)",
        iconColor: "#7C5CFC",
    },
    {
        title: "20+ Integrations",
        description: "Sync with Slack, Asana, Jira, Trello, Notion, and the tools your team already runs on.",
        icon: "fas fa-puzzle-piece",
        iconBg: "rgba(16,185,129,.1)",
        iconColor: "#10B981",
    },
    {
        title: "Team Alignment",
        description: "Share summaries, track who owns what, and keep everyone on the same page after every call.",
        icon: "fas fa-users",
        iconBg: "rgba(245,158,11,.1)",
        iconColor: "#D97706",
    },
];

const contactData = [
    { label: "ceo@meetory.co", icon: "fas fa-envelope", href: "mailto:ceo@meetory.co" },
];

const companyLinksData = [
    { label: "About Us", href: "#" },
    { label: "Careers",  href: "#" },
    { label: "Blog",     href: "#" },
];

const legalLinksData = [
    { label: "Privacy Policy",   href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy",    href: "#" },
];

// =========== CONFIG ===========

const SUBMIT_ENDPOINT = "https://tasklymeet-waitlist.bgfbtxd68t.workers.dev";

// =========== RENDER ===========

function renderNavLinks(items, mobile = false) {
    return items.map(item =>
        `<li><a href="${item.href}">${item.label}</a></li>`
    ).join('');
}

function renderTaskCards(items) {
    return items.map(item =>
        `<div class="task-card-preview">
            <div class="task-card-row1">
                <span class="task-card-title">${item.title}</span>
                <span class="task-badge ${item.priority}">${item.priority}</span>
            </div>
            <div class="task-card-meta">
                <span><i class="fas fa-user" style="margin-right:4px;font-size:.65rem"></i>${item.assignee}</span>
                <span><i class="far fa-clock" style="margin-right:4px;font-size:.65rem"></i>Due ${item.due}</span>
            </div>
        </div>`
    ).join('');
}

function renderSteps(items) {
    return items.map((item, i) =>
        `<div class="step-card reveal" style="--delay:${i * 0.12}s">
            <div class="step-num">${item.number}</div>
            <div class="step-icon"><i class="${item.icon}"></i></div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>`
    ).join('');
}

function renderFeatures(items) {
    return items.map((item, i) =>
        `<div class="feature-card reveal" style="--delay:${i * 0.08}s">
            <div class="feature-icon" style="background:${item.iconBg}">
                <i class="${item.icon}" style="color:${item.iconColor}"></i>
            </div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>`
    ).join('');
}

function renderContactList(items) {
    return items.map(item =>
        `<li><a href="${item.href}"><i class="${item.icon}"></i>${item.label}</a></li>`
    ).join('');
}

function renderLinkList(items) {
    return items.map(item =>
        `<li><a href="${item.href}">${item.label}</a></li>`
    ).join('');
}

// =========== CAROUSEL SLIDES ===========

function buildCarouselSlides() {
    const slides = [
        `<div class="mockup-slide">
            <div class="mock-bar">
                <div class="mock-dots"><span class="r"></span><span class="y"></span><span class="g"></span></div>
                <div class="mock-url">Summary — Meetory</div>
            </div>
            <div class="slide-inner">
                <div class="mock-slide-title">Meeting Summary</div>
                <div class="mock-slide-sub">Weekly Team Sync · 42 min · 4 participants</div>
                <div class="ai-line-group">
                    <div class="ai-line-row"><div class="ai-line-dot" style="background:#4F62FF"></div><div class="ai-line-bar" style="width:80%"></div></div>
                    <div class="ai-line-row"><div class="ai-line-dot" style="background:#10B981"></div><div class="ai-line-bar" style="width:60%;animation-delay:.3s"></div></div>
                    <div class="ai-line-row"><div class="ai-line-dot" style="background:#F59E0B"></div><div class="ai-line-bar" style="width:70%;animation-delay:.6s"></div></div>
                    <div class="ai-line-row"><div class="ai-line-dot" style="background:#EF4444"></div><div class="ai-line-bar" style="width:50%;animation-delay:.9s"></div></div>
                    <div class="ai-line-row"><div class="ai-line-dot" style="background:#8B5CF6"></div><div class="ai-line-bar" style="width:65%;animation-delay:.2s"></div></div>
                    <div class="ai-line-row"><div class="ai-line-dot" style="background:#10B981"></div><div class="ai-line-bar" style="width:45%;animation-delay:.7s"></div></div>
                </div>
                <div class="slide-caption">Instant meeting summaries with AI</div>
            </div>
        </div>`,

        `<div class="mockup-slide">
            <div class="mock-bar">
                <div class="mock-dots"><span class="r"></span><span class="y"></span><span class="g"></span></div>
                <div class="mock-url">Integrations — Meetory</div>
            </div>
            <div class="slide-inner">
                <div class="mock-slide-title">Connected Integrations</div>
                <div class="mock-slide-sub">Tasks sync automatically across all your tools</div>
                <div class="int-grid">
                    ${[
                        { name:'Slack',  bg:'#4A154B', icon:'fab fa-slack', ok:true },
                        { name:'Asana',  bg:'#F06A35', icon:'fas fa-check', ok:true },
                        { name:'Jira',   bg:'#0052CC', icon:'fab fa-jira',  ok:false },
                        { name:'Meetory', bg:'#34A853', icon:'fas fa-video', ok:true },
                        { name:'Zoom',   bg:'#2D8CFF', icon:'fas fa-video', ok:true },
                        { name:'GitHub', bg:'#24292E', icon:'fab fa-github',ok:false },
                    ].map(t => `<div class="int-card ${t.ok?'connected':''}">
                        <div class="int-logo" style="background:${t.bg}"><i class="${t.icon}" style="font-size:.8rem"></i></div>
                        <div class="int-card-name">${t.name}</div>
                        <div class="${t.ok?'int-card-status-ok':'int-card-status-no'}">${t.ok?'● Connected':'○ Connect'}</div>
                    </div>`).join('')}
                </div>
                <div class="slide-caption">20+ integrations out of the box</div>
            </div>
        </div>`,

        `<div class="mockup-slide">
            <div class="mock-bar">
                <div class="mock-dots"><span class="r"></span><span class="y"></span><span class="g"></span></div>
                <div class="mock-url">Team View — Meetory</div>
            </div>
            <div class="slide-inner">
                <div class="mock-slide-title">Team Performance</div>
                <div class="mock-slide-sub">Who's delivering this week</div>
                ${[
                    { init:'SC', name:'Sarah Chen',  count:'11/12', pct:91, color:'#4F62FF', bg:'#4F62FF' },
                    { init:'AR', name:'Alex Rivera', count:'8/10',  pct:80, color:'#8B5CF6', bg:'#8B5CF6' },
                    { init:'MK', name:'Mark Kim',    count:'6/9',   pct:67, color:'#10B981', bg:'#10B981' },
                    { init:'TJ', name:'Tanya J.',    count:'5/8',   pct:62, color:'#F59E0B', bg:'#F59E0B' },
                ].map(t => `<div class="team-row">
                    <div class="team-av" style="background:${t.bg}">${t.init}</div>
                    <div class="team-info">
                        <div class="team-name-row"><span class="team-name">${t.name}</span><span class="team-count">${t.count} tasks</span></div>
                        <div class="team-bar-bg"><div class="team-bar-fill" style="width:${t.pct}%;background:${t.color}"></div></div>
                    </div>
                </div>`).join('')}
                <div class="slide-caption">Track team productivity in real time</div>
            </div>
        </div>`,
    ];
    return slides.join('');
}

// =========== CAROUSEL ===========

let currentSlide = 0;
const totalSlides = 3;
let carouselTimer;

function goToSlide(index) {
    currentSlide = index;
    const track = document.getElementById('mockup-track');
    if (track) track.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.mockup-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function startCarousel() {
    carouselTimer = setInterval(() => goToSlide((currentSlide + 1) % totalSlides), 4500);
}

// =========== STICKY HEADER ===========

function initStickyHeader() {
    const header = document.getElementById('site-header');
    let lastY = 0;

    window.addEventListener('scroll', () => {
        const y = window.scrollY;

        if (y > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (y > lastY && y > 120) {
            header.classList.add('hidden-header');
        } else {
            header.classList.remove('hidden-header');
        }

        lastY = y;
    }, { passive: true });
}

// =========== SCROLL REVEAL ===========

function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// =========== TOAST ===========

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 5000);
}

// =========== LEAD DATA HELPERS ===========

function getBrowser() {
    const ua = navigator.userAgent;

    if (ua.includes('Edg/')) return 'Edge';
    if (ua.includes('OPR/') || ua.includes('Opera')) return 'Opera';
    if (ua.includes('Chrome/') && !ua.includes('Edg/')) return 'Chrome';
    if (ua.includes('Firefox/')) return 'Firefox';
    if (ua.includes('Safari/') && !ua.includes('Chrome/')) return 'Safari';

    return 'Unknown';
}

function getDevice() {
    const ua = navigator.userAgent;

    if (/tablet|ipad/i.test(ua)) return 'Tablet';
    if (/mobi|android|iphone|ipod/i.test(ua)) return 'Mobile';

    return 'Desktop';
}

function getUtmParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// =========== FORM SUBMISSION ===========

async function submitEmail(email) {
    if (!SUBMIT_ENDPOINT || SUBMIT_ENDPOINT.includes('YOUR-WORKER-NAME')) {
        throw new Error('SUBMIT_ENDPOINT is not configured');
    }

    const payload = {
        email,
        page: window.location.href,
        browser: getBrowser(),
        device: getDevice(),
        source: getUtmParam('utm_source') || 'direct',
        medium: getUtmParam('utm_medium') || 'unknown',
        campaign: getUtmParam('utm_campaign') || 'unknown',
        referrer: document.referrer || 'direct',
        submittedAt: new Date().toISOString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown',
        language: navigator.language || 'Unknown'
    };

    console.log('[Meetory] submitting payload:', payload);
    console.log('[Meetory] submit endpoint:', SUBMIT_ENDPOINT);

    const response = await fetch(SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    const rawText = await response.text();
    console.log('[Meetory] worker raw response:', rawText);

    let data = {};
    try {
        data = rawText ? JSON.parse(rawText) : {};
    } catch (error) {
        throw new Error(`Worker returned non-JSON: ${rawText}`);
    }

    if (!response.ok || !data.ok) {
        throw new Error(data.error || data.description || `HTTP ${response.status}`);
    }

    return data;
}

// =========== MOBILE MENU ===========

function initMobileMenu() {
    const toggle     = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    toggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        toggle.classList.toggle('open', isOpen);
    });
}

// =========== INIT ===========

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('nav-menu').innerHTML        = renderNavLinks(navigationData);
    document.getElementById('mobile-nav-menu').innerHTML = renderNavLinks(navigationData, true);
    document.getElementById('task-cards-preview').innerHTML = renderTaskCards(taskCardsData);
    document.getElementById('steps-container').innerHTML = renderSteps(stepsData);
    document.getElementById('features-grid').innerHTML = renderFeatures(featuresData);
    document.getElementById('contact-list').innerHTML  = renderContactList(contactData);
    document.getElementById('company-links').innerHTML = renderLinkList(companyLinksData);
    document.getElementById('legal-links').innerHTML   = renderLinkList(legalLinksData);
    document.getElementById('mockup-track').innerHTML = buildCarouselSlides();

    document.querySelectorAll('.mockup-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            clearInterval(carouselTimer);
            goToSlide(parseInt(dot.dataset.index, 10));
            startCarousel();
        });
    });

    startCarousel();
    initStickyHeader();
    initMobileMenu();
    setTimeout(initReveal, 60);

    document.addEventListener('click', function (e) {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const href = link.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (!target) return;

        const mobileMenu = document.getElementById('mobile-menu');
        const toggle = document.getElementById('mobile-menu-toggle');
        if (mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            toggle.classList.remove('open');
        }

        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    });

    document.getElementById('early-access-form').addEventListener('submit', async function (e) {
        e.preventDefault();

        const email = document.getElementById('ea-email').value.trim();
        if (!email) return;

        const btn = document.getElementById('ea-submit');
        const btnText = document.getElementById('ea-btn-text');
        const btnLoad = document.getElementById('ea-btn-loading');

        btn.disabled = true;
        btnText.classList.add('hidden');
        btnLoad.classList.remove('hidden');

        try {
            await submitEmail(email);
            document.getElementById('ea-email').value = '';
            showToast();
        } catch (err) {
            console.error('[Meetory] submission error:', err);
            alert('Submit failed: ' + (err.message || err));
        } finally {
            btnText.classList.remove('hidden');
            btnLoad.classList.add('hidden');
            btn.disabled = false;
        }
    });
});

})();
