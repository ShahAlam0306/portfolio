// ============================================
// MODERN PORTFOLIO - JAVASCRIPT
// Author: Rayeen Shahalam
// Version: 2.0.0
// ============================================

'use strict';

// ============================================
// CERTIFICATE DATA
// ============================================

const certificateData = {
    deloitte: {
        title: 'Deloitte Australia - Data Analytics Job Simulation',
        issuer: 'Deloitte Australia via Forage',
        issueDate: 'October 16th, 2025',
        credentialId: '9PBTqmSxAf6zZTseP',
        skills: [
            'Data analysis involving forensic technology',
            'Business problem-solving techniques',
            'Dashboard creation using Tableau',
            'Data classification and analysis with Excel',
            'Communicating analytical insights',
            'Drawing business conclusions from data'
        ],
        verifyUrl: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_ZEzT9757QizCW4zwN_1760593205337_completion_certificate.pdf',
        verifyText: 'View Certificate',
        certificateImage: 'assets/certificates/deloitte-cert.jpg'
    },

    excel: {
        title: 'Microsoft Excel - Advanced Certification',
        issuer: 'Microsoft / SkillCourse',
        issueDate: '11 Feb 2025',
        credentialId: 'SC-2F0295385B',
        skills: [
            'Advanced formulas and functions (VLOOKUP, INDEX-MATCH, Array formulas)',
            'Pivot Tables and Pivot Charts',
            'Data Analysis and What-If Analysis',
            'Macros and VBA basics',
            'Data visualization and dashboard creation'
        ],
        verifyUrl: 'https://exam.skillcourse.in/student/view_certificate?uid=SC-2F0295385B',
        verifyText: 'Verify Certificate',
        certificateImage: 'assets/certificates/excel-cert.jpg'
    },

    powerquery: {
        title: 'Power Query - Data Transformation Specialist',
        issuer: 'SkillCourse',
        issueDate: '22 Dec 2025',
        credentialId: 'SC-D53776066B',
        skills: [
            'Data extraction from multiple sources',
            'Data cleaning and transformation',
            'M language basics',
            'Query folding and performance optimization',
            'Advanced data shaping techniques'
        ],
        verifyUrl: 'https://exam.skillcourse.in/student/view_certificate?uid=SC-D53776066B',
        verifyText: 'Verify Certificate',
        certificateImage: 'assets/certificates/powerquery-cert.jpg'
    },

    sql: {
        title: 'SQL for Data Analysis',
        issuer: 'SkillCourse',
        issueDate: '16 Oct 2025',
        credentialId: 'SC-8036104ADA',
        skills: [
            'Advanced SQL queries and joins',
            'Data aggregation and grouping',
            'Subqueries and CTEs',
            'Database design and optimization',
            'Window functions and analytical queries'
        ],
        verifyUrl: 'https://exam.skillcourse.in/student/view_certificate?uid=SC-8036104ADA',
        verifyText: 'Verify Certificate',
        certificateImage: 'assets/certificates/sql-cert.jpg'
    },

    python: {
        title: 'Python for Data Analysis',
        issuer: 'SkillCourse',
        issueDate: '05 Sep 2025',
        credentialId: 'SC-240009FB8E',
        skills: [
            'Python programming fundamentals',
            'Pandas and NumPy for data manipulation',
            'Matplotlib and Seaborn for visualization',
            'Data cleaning and preprocessing',
            'Statistical analysis with Python'
        ],
        verifyUrl: 'https://exam.skillcourse.in/student/view_certificate?uid=SC-240009FB8E',
        verifyText: 'Verify Certificate',
        certificateImage: 'assets/certificates/python-cert.jpg'
    },

    statistics: {
        title: 'Statistics Mastery',
        issuer: 'SkillCourse',
        issueDate: '19 Dec 2025',
        credentialId: 'SC-6D0AE1571E',
        skills: [
            'Descriptive and inferential statistics',
            'Hypothesis testing and p-values',
            'Correlation and regression analysis',
            'Probability distributions',
            'A/B testing and experimental design'
        ],
        verifyUrl: 'https://exam.skillcourse.in/student/view_certificate?uid=SC-6D0AE1571E',
        verifyText: 'Verify Certificate',
        certificateImage: 'assets/certificates/statistics-cert.jpg'
    },

    ai_data_analysis: {
        title: 'AI in Data Analysis',
        issuer: 'SkillCourse',
        issueDate: '21 Dec 2025',
        credentialId: 'SC-5ED7987C88',
        skills: [
            'Automation & AI Workflows',
            'Python for AI-Driven Analysis',
            'Analytical & Statistical Formulas',
        ],
        verifyUrl: 'https://exam.skillcourse.in/student/view_certificate?uid=SC-5ED7987C88',
        verifyText: 'Verify Certificate',
        certificateImage: 'assets/certificates/ai-data-analysis-cert.jpg'
    }
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait = 100) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function for scroll events
 */
function throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element, offset = 100) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
        rect.bottom >= 0
    );
}

// ============================================
// MOBILE NAVIGATION
// ============================================

function initMobileNav() {
    const hamburger = document.getElementById('hamburgerBtn');
    const nav = document.getElementById('mainNav');
    const navOverlay = document.getElementById('navOverlay');
    const navClose = document.getElementById('navCloseBtn');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (!hamburger || !nav || !navOverlay) {
        console.warn('Mobile nav elements not found');
        return;
    }

    // Toggle mobile menu
    function toggleMenu(show) {
        const isOpen = show !== undefined ? show : !nav.classList.contains('active');
        
        if (isOpen) {
            nav.classList.add('active');
            navOverlay.classList.add('active');
            hamburger.classList.add('active');
            document.body.style.overflow = 'hidden';
            hamburger.setAttribute('aria-expanded', 'true');
        } else {
            nav.classList.remove('active');
            navOverlay.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
            hamburger.setAttribute('aria-expanded', 'false');
        }
    }

    // Event listeners
    hamburger.addEventListener('click', () => toggleMenu());
    navOverlay.addEventListener('click', () => toggleMenu(false));
    if (navClose) navClose.addEventListener('click', () => toggleMenu(false));

    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMenu(false);
            }
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            toggleMenu(false);
        }
    });

    console.log('✅ Mobile navigation initialized');
}

// ============================================
// SMOOTH SCROLLING
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just '#' or empty
            if (!href || href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Update URL without jumping
            history.pushState(null, null, href);

            // Set focus for accessibility
            target.setAttribute('tabindex', '-1');
            target.focus();
        });
    });

    console.log('✅ Smooth scrolling initialized');
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    if (revealElements.length === 0) {
        console.log('ℹ️ No scroll reveal elements found');
        return;
    }

    // Use Intersection Observer for better performance
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('revealed')) {
                entry.target.classList.add('revealed');
                // Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        observer.observe(element);
    });

    console.log(`✅ Scroll reveal initialized for ${revealElements.length} elements`);
}

// ============================================
// PROJECT FILTERING
// ============================================

function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length === 0 || projectCards.length === 0) {
        console.log('ℹ️ Project filters not found');
        return;
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');

            // Filter projects
            let visibleCount = 0;
            projectCards.forEach((card, index) => {
                const categories = card.getAttribute('data-category') || '';
                const isComingSoon = card.classList.contains('coming-soon-card');

                if (filter === 'all' || categories.includes(filter) || isComingSoon) {
                    card.classList.remove('hidden');
                    // Stagger animation
                    card.style.animation = `fadeInScale 0.5s ease-out ${visibleCount * 0.05}s both`;
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                }
            });

            console.log(`🔍 Filtered projects: ${filter} (${visibleCount} visible)`);
        });
    });

    console.log('✅ Project filters initialized');
}

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// LAZY LOADING IMAGES
// ============================================

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length === 0) {
        console.log('ℹ️ No lazy-load images found');
        return;
    }

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.dataset.src;
                
                img.classList.add('loading');
                img.src = src;
                
                img.onload = () => {
                    img.classList.remove('loading');
                    img.classList.add('loaded');
                    img.removeAttribute('data-src');
                };
                
                img.onerror = () => {
                    console.warn(`⚠️ Failed to load image: ${src}`);
                    img.classList.remove('loading');
                    // Keep placeholder
                };
                
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });

    images.forEach(img => imageObserver.observe(img));
    
    console.log(`✅ Lazy loading initialized for ${images.length} images`);
}

// ============================================
// FAQ FUNCTIONALITY
// ============================================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length === 0) {
        console.log('ℹ️ No FAQ items found');
        return;
    }

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (!question) return;

        question.addEventListener('click', function() {
            const wasActive = item.classList.contains('active');

            // Close all FAQs
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherQuestion = otherItem.querySelector('.faq-question');
                if (otherQuestion) {
                    otherQuestion.setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current FAQ
            if (!wasActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });

        // Keyboard support
        question.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });

    console.log(`✅ FAQ functionality initialized for ${faqItems.length} items`);
}

// ============================================
// CERTIFICATE MODAL
// ============================================

/**
 * Generate HTML for certificate details
 */
function generateCertificateHTML(cert) {
    const skillsList = cert.skills.map(skill => `<li>${skill}</li>`).join('');

    const certificateImageHTML = cert.certificateImage ? `
        <div style="margin: 1.5rem 0; border-radius: 1rem; overflow: hidden; border: 1px solid #e5e7eb;">
            <img src="${cert.certificateImage}" 
                 alt="${cert.title}" 
                 style="width: 100%; height: auto; display: block;"
                 onerror="this.parentElement.style.display='none'">
        </div>
    ` : '';

    return certificateImageHTML + `
        <p style="margin-bottom: 1rem;"><strong>Issued by:</strong> ${cert.issuer}</p>
        <p style="margin-bottom: 1rem;"><strong>Issue Date:</strong> ${cert.issueDate}</p>
        <p style="margin-bottom: 1rem;"><strong>Credential ID:</strong> ${cert.credentialId}</p>
        <p style="margin-bottom: 0.5rem;"><strong>Skills Covered:</strong></p>
        <ul style="margin: 0 0 1.5rem 1.5rem; line-height: 1.8;">
            ${skillsList}
        </ul>
        <p style="margin-top: 1.5rem;">
            <a href="${cert.verifyUrl}" 
               target="_blank" 
               class="verify-link">
                <i class="fas fa-certificate"></i>
                <span>${cert.verifyText}</span>
            </a>
        </p>
    `;
}

/**
 * Show certificate modal
 */
function showCertificate(certType) {
    const cert = certificateData[certType];

    if (!cert) {
        console.error(`Certificate "${certType}" not found`);
        return;
    }

    const modal = document.getElementById('certModal');
    const title = document.getElementById('certTitle');
    const details = document.getElementById('certDetails');

    if (!modal || !title || !details) {
        console.error('Modal elements not found');
        return;
    }

    title.textContent = cert.title;
    details.innerHTML = generateCertificateHTML(cert);

    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Set focus to close button for accessibility
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
        setTimeout(() => closeBtn.focus(), 100);
    }

    console.log(`📜 Opened certificate: ${cert.title}`);
}

/**
 * Close certificate modal
 */
function closeModal() {
    const modal = document.getElementById('certModal');
    
    if (!modal) return;

    modal.classList.remove('show');
    document.body.style.overflow = '';
    
    console.log('✖️ Certificate modal closed');
}

/**
 * Initialize certificate modal event listeners
 */
function initCertificateModal() {
    const modal = document.getElementById('certModal');
    
    if (!modal) {
        console.warn('Certificate modal not found');
        return;
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // Keyboard support for certificate cards
    document.querySelectorAll('.certificate-card').forEach(card => {
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    console.log('✅ Certificate modal initialized');
}

// Make functions globally accessible for onclick handlers
window.showCertificate = showCertificate;
window.closeModal = closeModal;

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    
    if (!scrollBtn) {
        console.warn('Scroll to top button not found');
        return;
    }

    // Show/hide button based on scroll position
    const handleScroll = throttle(() => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    console.log('✅ Scroll to top button initialized');
}

// ============================================
// PERFORMANCE MONITORING
// ============================================

function logPerformance() {
    if (!window.performance) return;

    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domComplete - perfData.domLoading;

            console.log('⚡ Performance Metrics:');
            console.log(`   Page Load Time: ${pageLoadTime}ms`);
            console.log(`   Server Connection: ${connectTime}ms`);
            console.log(`   DOM Rendering: ${renderTime}ms`);

            // Log certificate count
            console.log(`📜 ${Object.keys(certificateData).length} certificates loaded`);
        }, 0);
    });
}

// ============================================
// ERROR HANDLING
// ============================================

function setupErrorHandling() {
    // Global error handler
    window.addEventListener('error', (e) => {
        console.error('❌ Error:', e.message);
    });

    // Promise rejection handler
    window.addEventListener('unhandledrejection', (e) => {
        console.error('❌ Unhandled Promise Rejection:', e.reason);
    });
}

// ============================================
// INITIALIZATION
// ============================================

function init() {
    console.log('🚀 Portfolio initializing...');
    console.log('📅 Version 2.0.0');

    try {
        // Setup error handling first
        setupErrorHandling();

        // Initialize all features
        initMobileNav();
        initSmoothScroll();
        initScrollReveal();
        initProjectFilters();
        initLazyLoading();
        initFAQ();
        initCertificateModal();
        initScrollToTop();
        logPerformance();

        console.log('✅ All features initialized successfully!');
        console.log('🎨 Portfolio ready!');
        
        // Easter egg
        console.log('%c👋 Hi there! Looking for a Data Analyst?', 
            'font-size: 20px; color: #6366f1; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);');
        console.log('%cLet\'s connect! rayeenshakib7860@gmail.com', 
            'font-size: 14px; color: #94a3b8;');
        console.log('%c💡 Type portfolioDebug() in console for debug tools', 
            'font-size: 12px; color: #64748b;');
        
    } catch (error) {
        console.error('❌ Initialization error:', error);
    }
}

// ============================================
// DEBUG TOOLS
// ============================================

window.portfolioDebug = function() {
    console.log('🔧 Portfolio Debug Tools');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Available Commands:');
    console.log('  portfolioDebug.certificates - List all certificates');
    console.log('  portfolioDebug.testModal(id) - Test certificate modal');
    console.log('  portfolioDebug.version - Show version');
    console.log('  portfolioDebug.reveal() - Force reveal all elements');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    
    return {
        certificates: () => {
            console.log('📜 Available Certificates:');
            Object.entries(certificateData).forEach(([key, cert]) => {
                console.log(`  - ${key}: ${cert.title}`);
            });
        },
        testModal: (id) => {
            if (certificateData[id]) {
                showCertificate(id);
            } else {
                console.error(`Certificate "${id}" not found`);
            }
        },
        version: '2.0.0',
        reveal: () => {
            document.querySelectorAll('.scroll-reveal').forEach(el => {
                el.classList.add('revealed');
            });
            console.log('✅ All elements revealed');
        },
        data: certificateData
    };
};

// ============================================
// START APPLICATION
// ============================================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM is already loaded
    init();
}
// ============================================
// AUTO HIDE NAV ON SCROLL
// ============================================

function initAutoHideNav() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down
            nav.style.transform = 'translate(-50%, -120px)';
        } else {
            // Scrolling up
            nav.style.transform = 'translate(-50%, 0)';
        }

        lastScrollY = currentScrollY;
    }, { passive: true });

    console.log('✅ Auto hide nav initialized');
}
function initNavAfterHero() {
    const nav = document.getElementById('mainNav');
    const hero = document.getElementById('home');

    if (!nav || !hero) return;

    window.addEventListener('scroll', () => {
        const heroBottom = hero.offsetHeight;

        if (window.scrollY > heroBottom - 100) {
            nav.classList.add('visible');
        } else {
            nav.classList.remove('visible');
        }
    });
}
