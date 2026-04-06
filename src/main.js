import './index.css';
import { createIcons, Menu, X, ArrowUpRight, Cpu, Wifi, Shield, Zap, MapPin, Users, Linkedin, Instagram, Twitter, Mail, MessageSquare, ChevronDown, Send, CheckCircle2 } from 'lucide';
import { animate, inView } from 'motion';
import {
    CHAPTER_CONFIG,
    STATS,
    DOMAINS,
    EVENTS,
    TIMELINE,
    STUDENT_TEAM,
    ADVISORS,
    GALLERY_IMAGES,
    PAST_EVENTS,
    UPCOMING_EVENTS
} from './data.js';

// --- State Management ---
let activePage = 'home';
let activeEventTab = 'upcoming';

// --- DOM Elements ---
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
const pageSections = document.querySelectorAll('.page-section');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');

// --- Initialization ---
function init() {
    hydrateStatic();
    hydrateHome();
    hydrateAbout();
    hydrateTimeline();
    hydrateEvents();
    hydrateGallery();
    hydrateContact();
    setupEventListeners();

    createIcons({
        icons: {
            Menu, X, ArrowUpRight, Cpu, Wifi, Shield, Zap, MapPin, Users, Linkedin, Instagram, Twitter, Mail, MessageSquare, ChevronDown, Send, CheckCircle2
        }
    });

    setupAnimations();
}

// --- Navigation Logic ---
function setActivePage(pageId) {
    activePage = pageId;

    navLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        const indicator = link.querySelector('.nav-indicator');

        if (page === pageId) {
            link.classList.add('text-accent');
            link.classList.remove('text-foreground/60', 'text-muted');
            if (indicator) indicator.classList.remove('hidden');
        } else {
            link.classList.remove('text-accent');
            link.classList.add('text-foreground/60', 'text-muted');
            if (indicator) indicator.classList.add('hidden');
        }
    });

    pageSections.forEach(section => {
        if (section.id === `section-${pageId}`) {
            section.classList.remove('section-hidden');
            animate(section, { opacity: [0, 1], y: [10, 0] }, { duration: 0.3 });
        } else {
            section.classList.add('section-hidden');
        }
    });

    if (mobileMenu) mobileMenu.classList.add('hidden');
    window.scrollTo(0, 0);
}

// --- Hydration Functions ---

function hydrateStatic() {
    const emailEl = document.getElementById('contact-email');
    if (emailEl) emailEl.textContent = CHAPTER_CONFIG.email;

    const locationEl = document.getElementById('contact-location');
    if (locationEl) locationEl.textContent = CHAPTER_CONFIG.location;

    const instLink = document.getElementById('institution-link');
    if (instLink) instLink.setAttribute('href', CHAPTER_CONFIG.institutionWebsite);

    const socialContainer = document.getElementById('social-links');
    if (socialContainer) {
        socialContainer.innerHTML = `
            <a href="${CHAPTER_CONFIG.socials.linkedin}" target="_blank" class="text-white/40 hover:text-accent transition-colors"><i data-lucide="linkedin" size="22"></i></a>
            <a href="${CHAPTER_CONFIG.socials.instagram}" target="_blank" class="text-white/40 hover:text-accent transition-colors"><i data-lucide="instagram" size="22"></i></a>
            <a href="${CHAPTER_CONFIG.socials.twitter}" target="_blank" class="text-white/40 hover:text-accent transition-colors"><i data-lucide="twitter" size="22"></i></a>
            <a href="mailto:${CHAPTER_CONFIG.email}" class="text-white/40 hover:text-accent transition-colors"><i data-lucide="mail" size="22"></i></a>
        `;
    }
}

function hydrateHome() {
    const statsContainer = document.getElementById('stats-container');
    if (statsContainer) {
        statsContainer.innerHTML = `
            <div>
                <div class="flex items-end gap-2 mb-4">
                    <span class="text-7xl font-light tracking-tighter text-foreground">${STATS.trained}</span>
                    <span class="text-accent italic-serif text-3xl mb-2">+</span>
                </div>
                <p class="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Students Trained <br /> & Mentored</p>
            </div>
            <div>
                <div class="flex items-end gap-2 mb-4">
                    <span class="text-7xl font-light tracking-tighter text-foreground">${STATS.events}</span>
                </div>
                <p class="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Technical Events <br /> Since Inception</p>
            </div>
            <div>
                <div class="flex items-end gap-2 mb-4">
                    <span class="text-7xl font-light tracking-tighter text-foreground">${STATS.partners}</span>
                </div>
                <p class="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Collaborating <br /> Industry Partners</p>
            </div>
        `;
    }

    const domainsContainer = document.getElementById('domains-container');
    if (domainsContainer) {
        const domainIcons = {
            'edge-ai': 'cpu',
            'v2x': 'wifi',
            'safety': 'shield',
            'efficiency': 'zap'
        };
        domainsContainer.innerHTML = DOMAINS.map(d => `
            <div class="group bg-foreground/5 hover:bg-accent p-8 rounded-[2.5rem] transition-all duration-700 pointer-events-auto">
                <div class="mb-10 text-accent group-hover:text-white transition-colors duration-500">
                    <i data-lucide="${domainIcons[d.id]}" size="24"></i>
                </div>
                <h3 class="font-bold text-lg mb-2 group-hover:text-white transition-colors duration-500">${d.title}</h3>
                <p class="text-[10px] leading-relaxed text-muted group-hover:text-white/80 transition-colors duration-500 uppercase tracking-widest">${d.desc}</p>
            </div>
        `).join('');
    }

    const recentWorksContainer = document.getElementById('recent-works-container');
    if (recentWorksContainer) {
        recentWorksContainer.innerHTML = EVENTS.slice(0, 3).map((event, i) => `
            <div class="flex flex-col ${i === 1 ? 'md:mt-12' : ''}">
                <div class="mb-8 overflow-hidden rounded-3xl aspect-video">
                    <img src="${event.images ? event.images[0] : event.image}" alt="${event.title}" class="w-full h-full object-cover">
                </div>
                <div class="flex justify-between items-start mb-6">
                    <span class="px-4 py-1.5 rounded-full bg-accent/5 text-accent border border-accent/10 font-bold uppercase tracking-widest text-[8px]">${event.date}</span>
                    <span class="text-[10px] text-muted font-bold uppercase tracking-widest">${event.participants} Participants</span>
                </div>
                <h3 class="font-bold text-2xl mb-4 leading-tight">${event.title}</h3>
                <p class="text-sm text-muted/80 mb-8 flex-grow leading-relaxed">${event.description}</p>
                <button class="nav-to-timeline italic-serif text-accent hover:text-foreground transition-colors text-left text-lg">Click Here to Read More...</button>
            </div>
        `).join('');
    }
}

function hydrateAbout() {
    const advisorsContainer = document.getElementById('advisors-container');
    const officersContainer = document.getElementById('officers-container');
    const membersContainer = document.getElementById('members-container');

    if (advisorsContainer) {
        advisorsContainer.innerHTML = ADVISORS.map(member => createMemberCard(member, true)).join('');
    }

    if (officersContainer) {
        const officerRoles = ['ChairPerson', 'Vice Chair', 'Secretary', 'Treasurer', 'Webmaster'];
        const officers = STUDENT_TEAM.filter(m => officerRoles.includes(m.role));
        const row1 = officers.slice(0, 3);
        const row2 = officers.slice(3, 5);

        officersContainer.innerHTML = `
            <div class="flex flex-wrap justify-center gap-12 w-full">
                ${row1.map(m => createMemberCard(m)).join('')}
            </div>
            <div class="flex flex-wrap justify-center gap-12 w-full">
                ${row2.map(m => createMemberCard(m)).join('')}
            </div>
        `;
    }

    if (membersContainer) {
        const members = STUDENT_TEAM.filter(m => m.role === 'Team Member');
        membersContainer.innerHTML = members.map(member => createMemberCard(member)).join('');
    }
}

function createMemberCard(member, isAdvisor = false) {
    const initial = member.name.startsWith('Prof.') ? member.name.split(' ')[1][0] : member.name[0];

    return `
        <div class="relative border border-foreground/5 p-12 rounded-[2.5rem] bg-white transition-colors duration-200 hover:border-accent text-center flex flex-col items-center ${isAdvisor ? 'max-w-md mx-auto' : 'w-full md:w-[280px]'}">
            ${isAdvisor ? `<div class="w-12 h-12 flex items-center justify-center text-accent font-bold text-2xl mb-8">${initial}</div>` : ''}
            <h3 class="text-xl font-black mb-2">${member.name}</h3>
            <span class="text-[10px] font-bold uppercase tracking-widest text-accent mb-4">${member.role}</span>
            <p class="text-[10px] font-medium text-muted/60 mb-6">
                ${member.designation || member.yearBranch || '-'}
                ${member.department ? `<br/>${member.department}` : ''}
            </p>
            ${member.bio ? `<p class="text-[10px] italic text-muted/60 mb-8 max-w-xs">"${member.bio}"</p>` : ''}
            <div class="mt-auto">
                <a href="${member.linkedin}" target="_blank" class="text-muted/40 hover:text-accent transition-colors"><i data-lucide="linkedin" size="18"></i></a>
            </div>
        </div>
    `;
}

function hydrateTimeline() {
    const timelineContainer = document.getElementById('timeline-container');
    if (timelineContainer) {
        timelineContainer.innerHTML = TIMELINE.map(yearGroup => `
            <div class="year-group">
                <div class="relative z-20 flex justify-center mb-20">
                    <span class="text-8xl font-black text-foreground/5 italic-serif pointer-events-none absolute -top-12">${yearGroup.year}</span>
                    <span class="relative z-10 px-6 py-2 border border-foreground/10 rounded-full text-xs font-bold tracking-[0.4em] uppercase text-accent bg-background/90">${yearGroup.year}</span>
                </div>
                <div class="space-y-16">
                    ${yearGroup.events.map((event, idx) => `
                        <div class="relative timeline-item" style="content-visibility: auto; contain-intrinsic-size: 520px;">
                            <div class="relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 md:gap-0">
                                <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 z-30 border-4 border-background"></div>
                                <div class="w-full md:w-[45%] ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0">
                                    <div class="bg-white border border-foreground/5 rounded-[2.5rem] overflow-hidden p-0 shadow-sm backdrop-blur-md">
                                        ${(event.image || (event.images && event.images.length > 0)) ? `
                                            <div class="h-48 overflow-hidden">
                                                <img src="${event.images ? event.images[0] : event.image}" alt="${event.title}" class="w-full h-full object-cover">
                                            </div>
                                        ` : ''}
                                        <div class="p-6">
                                            <div class="flex justify-between items-start mb-2">
                                                <h3 class="font-bold text-xl">${event.title}</h3>
                                                <span class="px-4 py-1.5 rounded-full bg-accent/5 text-accent border border-accent/10 font-bold uppercase tracking-widest text-[8px]">${event.date}</span>
                                            </div>
                                            <div class="flex items-center gap-4 text-xs text-muted mb-4">
                                                <span class="flex items-center gap-1"><i data-lucide="map-pin" size="12"></i> ${event.location}</span>
                                                <span class="flex items-center gap-1"><i data-lucide="users" size="12"></i> ${event.participants} Participants</span>
                                            </div>
                                            <p class="text-sm text-muted mb-4">${event.description}</p>
                                            ${event.summary ? `
                                                <ul class="text-xs text-muted space-y-1 list-disc pl-4">
                                                    ${event.summary.map(s => `<li>${s}</li>`).join('')}
                                                </ul>
                                            ` : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }
}

function hydrateEvents() {
    const eventsGrid = document.getElementById('events-grid');
    if (!eventsGrid) return;

    const data = activeEventTab === 'upcoming' ? UPCOMING_EVENTS : PAST_EVENTS;

    if (activeEventTab === 'upcoming') {
        eventsGrid.classList.remove('space-y-6');
        eventsGrid.classList.add('grid-cols-1', 'md:grid-cols-2');
        eventsGrid.innerHTML = data.map(event => `
            <div class="bg-white border border-foreground/5 rounded-[2.5rem] p-10 shadow-sm">
                <div class="flex justify-between items-start mb-6">
                    <span class="px-4 py-1.5 rounded-full bg-accent/5 text-accent border border-accent/10 font-bold uppercase tracking-widest text-[8px]">${event.date}</span>
                    <span class="text-[10px] text-accent font-bold uppercase tracking-widest">Workshop</span>
                </div>
                <h3 class="text-2xl font-bold mb-6">${event.title}</h3>
                <p class="text-muted mb-8 leading-relaxed">${event.description}</p>
                <div class="flex items-center justify-between pt-6 border-t border-foreground/5">
                    <div class="flex items-center gap-2 text-xs text-muted/60">
                        <i data-lucide="map-pin" size="14"></i> <span>${event.location}</span>
                    </div>
                    <button class="bg-foreground/5 text-foreground/40 px-6 py-2 rounded-full text-xs font-bold uppercase cursor-not-allowed">Registration Closed</button>
                </div>
            </div>
        `).join('');
    } else {
        eventsGrid.classList.remove('grid-cols-1', 'md:grid-cols-2');
        eventsGrid.classList.add('space-y-6');
        eventsGrid.innerHTML = data.map(event => `
            <div class="past-event-item border border-foreground/5 rounded-3xl bg-white overflow-hidden" data-id="${event.id}">
                <button type="button" class="toggle-event-details w-full p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left">
                    <div>
                        <span class="text-xs text-accent font-bold uppercase tracking-widest block mb-2">${event.date}</span>
                        <h3 class="text-2xl font-bold">${event.title}</h3>
                    </div>
                    <div class="flex items-center gap-4 text-muted">
                        <span class="text-xs uppercase tracking-widest flex items-center gap-2"><i data-lucide="map-pin" size="14"></i> ${event.location}</span>
                        <i data-lucide="chevron-down" class="chevron"></i>
                    </div>
                </button>
                <div class="event-details hidden">
                    <div class="p-8 pt-0 border-t border-foreground/5 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <p class="text-muted mb-8 text-lg leading-relaxed">${event.description}</p>
                            <ul class="space-y-3">
                                ${(event.details).map(detail => `
                                    <li class="flex items-start gap-3 text-sm text-muted">
                                        <span class="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></span>
                                        <span>${detail}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        <div class="grid gap-4 ${event.images && event.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}">
                            ${event.images ? event.images.map(img => `
                                <div class="rounded-2xl overflow-hidden aspect-video bg-foreground/5">
                                    <img src="${img}" class="w-full h-full object-cover">
                                </div>
                            `).join('') : ''}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    createIcons({ icons: { MapPin, ChevronDown } });
}

function hydrateGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    if (galleryGrid) {
        galleryGrid.innerHTML = GALLERY_IMAGES.map(img => `
            <div class="group relative aspect-square overflow-hidden rounded-[2.5rem] bg-foreground/5">
                <img src="${img.src}" alt="${img.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8 text-center">
                    <p class="text-white font-bold text-lg leading-tight">${img.title}</p>
                </div>
            </div>
        `).join('');
    }
}

function hydrateContact() {
    const contactTeam = document.getElementById('contact-team');
    if (contactTeam) {
        contactTeam.innerHTML = ADVISORS.slice(0, 2).map(advisor => `
            <div class="bg-foreground/5 p-10 rounded-[2.5rem]">
                <div class="flex justify-between items-start mb-8">
                     <span class="px-4 py-1.5 rounded-full bg-accent/5 text-accent border border-accent/10 font-bold uppercase tracking-widest text-[8px]">${advisor.role}</span>
                     <a href="${advisor.linkedin}" target="_blank" class="text-muted hover:text-accent transition-colors"><i data-lucide="linkedin" size="20"></i></a>
                </div>
                <h3 class="text-2xl font-bold mb-2">${advisor.name}</h3>
                <p class="text-[10px] uppercase font-bold tracking-[0.2em] opacity-60">${advisor.designation}</p>
            </div>
        `).join('');
    }
}

// --- Event Listeners ---
function setupEventListeners() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const pageId = e.currentTarget.getAttribute('data-page');
            if (pageId) setActivePage(pageId);
        });
    });

    document.getElementById('nav-logo')?.addEventListener('click', () => setActivePage('home'));

    mobileMenuToggle?.addEventListener('click', () => {
        if (mobileMenu) mobileMenu.classList.toggle('hidden');
    });

    document.getElementById('view-archive-btn')?.addEventListener('click', () => setActivePage('timeline'));

    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-to-timeline')) {
            setActivePage('timeline');
        }
    });

    const tabUpcoming = document.getElementById('tab-upcoming');
    const tabPast = document.getElementById('tab-past');

    tabUpcoming?.addEventListener('click', () => {
        activeEventTab = 'upcoming';
        tabUpcoming.classList.add('text-accent');
        tabUpcoming.classList.remove('text-muted');
        tabUpcoming.querySelector('.tab-indicator')?.classList.remove('hidden');
        tabPast?.classList.remove('text-accent');
        tabPast?.classList.add('text-muted');
        tabPast?.querySelector('.tab-indicator')?.classList.add('hidden');
        hydrateEvents();
    });

    tabPast?.addEventListener('click', () => {
        activeEventTab = 'past';
        tabPast.classList.add('text-accent');
        tabPast.classList.remove('text-muted');
        tabPast.querySelector('.tab-indicator')?.classList.remove('hidden');
        tabUpcoming?.classList.remove('text-accent');
        tabUpcoming?.classList.add('text-muted');
        tabUpcoming?.querySelector('.tab-indicator')?.classList.add('hidden');
        hydrateEvents();
    });

    document.body.addEventListener('click', (e) => {
        const toggleBtn = e.target.closest('.toggle-event-details');
        if (toggleBtn) {
            const item = toggleBtn.closest('.past-event-item');
            const details = item?.querySelector('.event-details');
            const chevron = item?.querySelector('.chevron');

            if (details) {
                details.classList.toggle('hidden');
                if (chevron) {
                    chevron.classList.toggle('rotate-180');
                }
            }
        }
    });

    document.getElementById('latest-breakdown-btn')?.addEventListener('click', () => openModal('CP-03'));
    modalClose?.addEventListener('click', closeModal);
    modalOverlay?.addEventListener('click', (e) => {
        if (e.target === modalOverlay || e.target === document.getElementById('modal-backdrop')) closeModal();
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modalOverlay?.classList.contains('hidden')) closeModal();
    });

    const eventsFeedbackForm = document.getElementById('events-feedback-form');
    eventsFeedbackForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = eventsFeedbackForm.querySelector('button');
        if (btn) {
            btn.textContent = '...';
            setTimeout(() => {
                btn.textContent = 'SENT';
                setTimeout(() => btn.textContent = 'SUBMIT', 3000);
            }, 1000);
        }
        eventsFeedbackForm.reset();
    });

    const inputsForm = document.getElementById('inputs-form');
    inputsForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = inputsForm.querySelector('button');
        if (btn) {
            const originalText = btn.textContent;
            btn.textContent = 'RECORDING...';
            btn.setAttribute('disabled', 'true');
            setTimeout(() => {
                showModalSuccess();
                btn.textContent = originalText;
                btn.removeAttribute('disabled');
            }, 1500);
        }
        inputsForm.reset();
    });
}

function openModal(eventId) {
    if (!modalOverlay || !modalContent || !modalBody) return;

    modalBody.innerHTML = `
        <span class="text-accent font-bold uppercase tracking-[0.2em] text-[10px] block mb-4">Event Breakdown</span>
        <h2 class="text-4xl font-bold mb-8 leading-tight">Certificate Program 3.0 in Jan 2026 in NIT Manipur</h2>

        <div class="space-y-6 text-muted leading-relaxed text-lg">
            <p>
                Certificate Program 3.0 – 5-Day Workshop on IoT and Autonomous Systems is a focused, hybrid training program designed to build practical and conceptual skills in IoT applications, Digital Twin concepts, and Autonomous Systems. Conducted from 14–18 January 2026 at NIT Manipur...
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div class="rounded-2xl overflow-hidden aspect-video bg-foreground/5 shadow-inner">
                    <img src="/assets/optimized/slide_8_image_172.jpg" alt="Workshop Session 1" class="w-full h-full object-cover">
                </div>
                <div class="rounded-2xl overflow-hidden aspect-video bg-foreground/5 shadow-inner">
                    <img src="/assets/optimized/slide_8_image_175.jpg" alt="Workshop Session 2" class="w-full h-full object-cover">
                </div>
            </div>

            <p>
                Participants gained exposure through expert lectures, case studies, and hands-on discussions covering system architectures, real-world deployments...
            </p>
        </div>

        <div class="grid grid-cols-2 gap-4 mt-12">
            <div class="bg-foreground/5 p-6 rounded-3xl">
                <span class="block text-foreground font-bold text-2xl mb-1">5 Days</span>
                <span class="text-[10px] uppercase font-bold text-muted tracking-widest">Duration</span>
            </div>
            <div class="bg-foreground/5 p-6 rounded-3xl">
                <span class="block text-foreground font-bold text-2xl mb-1">65+</span>
                <span class="text-[10px] uppercase font-bold text-muted tracking-widest">Participants</span>
            </div>
        </div>
    `;

    modalOverlay.classList.remove('hidden');
    setTimeout(() => {
        modalContent.classList.remove('scale-90', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function showModalSuccess() {
    if (!modalOverlay || !modalContent || !modalBody) return;
    modalBody.innerHTML = `
        <div class="py-12 flex flex-col items-center justify-center text-center">
            <div class="text-accent mb-6">
                <i data-lucide="check-circle-2" size="64"></i>
            </div>
            <h2 class="text-4xl font-bold mb-4">Thank You!</h2>
            <p class="text-muted mb-8">Your inputs have been recorded. We'll get back to you soon.</p>
            <button onclick="document.getElementById('modal-close').click()" class="bg-accent text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs">Close</button>
        </div>
    `;
    createIcons({ icons: { CheckCircle2 } });
    modalOverlay.classList.remove('hidden');
    setTimeout(() => {
        modalContent.classList.remove('scale-90', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeModal() {
    if (!modalOverlay || !modalContent) return;
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-90', 'opacity-0');
    setTimeout(() => {
        modalOverlay.classList.add('hidden');
    }, 300);
}

// --- Animations ---
function setupAnimations() {
    inView('#stats-container', () => {
        animate('#stats-container > div', { opacity: [0, 1], y: [20, 0] }, { duration: 0.8, delay: (k) => k * 0.2 });
    });

    animate('h1', { opacity: [0, 1], y: [30, 0] }, { duration: 1, easing: [0.16, 1, 0.3, 1] });
}

document.addEventListener('DOMContentLoaded', init);
