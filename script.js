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
// CERTIFICATE MODAL FUNCTIONS
// ============================================

function generateCertificateHTML(cert) {
    const skillsList = cert.skills.map(skill => `<li>${skill}</li>`).join('');

    const certificateImageHTML = cert.certificateImage ? `
        <div class="certificate-image-container">
            <img src="${cert.certificateImage}" 
                 alt="${cert.title}" 
                 onerror="this.parentElement.style.display='none'">
        </div>
    ` : '';

    return certificateImageHTML + `
        <p><strong>Issued by:</strong> ${cert.issuer}</p>
        <p><strong>Issue Date:</strong> ${cert.issueDate}</p>
        <p><strong>Credential ID:</strong> ${cert.credentialId}</p>
        <p><strong>Skills Covered:</strong></p>
        <ul style="text-align: left; margin-left: 20px; margin-bottom: 1.5rem;">
            ${skillsList}
        </ul>
        <p style="margin-top: 1.5rem;">
            <a href="${cert.verifyUrl}" 
               target="_blank" 
               class="verify-link"
               style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block; font-weight: 600; transition: all 0.3s; box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);">
                <i class="fas fa-certificate"></i> ${cert.verifyText}
            </a>
        </p>
    `;
}

function showCertificate(certType) {
    const cert = certificateData[certType];

    if (!cert) {
        console.error(`Certificate "${certType}" not found`);
        return;
    }

    const modal = document.getElementById('certModal');
    const title = document.getElementById('certTitle');
    const details = document.getElementById('certDetails');

    title.textContent = cert.title;
    details.innerHTML = generateCertificateHTML(cert);

    // Show modal
    modal.style.display = 'block';
    
    // Prevent body scroll but allow modal scroll
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px'; // Prevent layout shift
    
    // Scroll to top of page first
    window.scrollTo(0, 0);
    
    // Then scroll modal content to top
    setTimeout(() => {
        modal.scrollTop = 0;
    }, 50);
}
function closeModal() {
    const modal = document.getElementById('certModal');
    modal.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0';
}

// ============================================
// SCROLL REVEAL ANIMATIONS (ISSUE #2 FIXED)
// ============================================

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 100);
                
                // Fade out when scrolling up past element
                entry.target.dataset.revealed = 'true';
            } else if (entry.target.dataset.revealed === 'true') {
                // Optional: fade out when scrolling past
                // entry.target.classList.remove('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    console.log(`✨ Scroll reveal initialized for ${revealElements.length} elements`);
}

// ============================================
// PROJECT FILTERING
// ============================================

function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects with animation
            projectCards.forEach((card, index) => {
                const categories = card.getAttribute('data-category');
                
                if (card.classList.contains('coming-soon')) {
                    card.classList.remove('hidden');
                    return;
                }

                if (filter === 'all' || (categories && categories.includes(filter))) {
                    card.classList.remove('hidden');
                    // Stagger animation
                    card.style.animation = `fadeInScale 0.5s ease-out ${index * 0.1}s both`;
                } else {
                    card.classList.add('hidden');
                }
            });

            console.log(`🔍 Filtered by: ${filter}`);
        });
    });

    console.log('✅ Project filters initialized');
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// SMOOTH SCROLLING (ISSUE #3 FIXED)
// ============================================

function initSmoothScrolling() {
    // Enhanced smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href === '#' || href === 'javascript:void(0)') {
                return;
            }

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerOffset = 20;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                history.pushState(null, null, href);
            }
        });
    });

    console.log('✅ Smooth scrolling initialized');
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    
    if (!scrollBtn) return;

    // Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }, { passive: true });

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
// FAQ FUNCTIONALITY
// ============================================

function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const wasActive = item.classList.contains('active');

            // Close all FAQs
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current FAQ
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    });

    console.log('✅ FAQ functionality initialized');
}

// ============================================
// MODAL EVENT LISTENERS
// ============================================

function initModalListeners() {
    // Close modal when clicking outside
    window.onclick = function (event) {
        const modal = document.getElementById('certModal');
        if (event.target === modal) {
            closeModal();
        }
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    console.log('✅ Modal listeners initialized');
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

function debounce(func, wait) {
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

// Lazy load images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length === 0) return;

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
    console.log(`✅ Lazy loading initialized for ${images.length} images`);
}

// Add loading animation for images
function initImageLoading() {
    const images = document.querySelectorAll('.project-image img, .profile-img');
    
    images.forEach(img => {
        if (!img.complete) {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
            
            img.addEventListener('load', function() {
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 100);
            });
        }
    });
}

// ============================================
// PARALLAX EFFECT FOR BACKGROUND
// ============================================

function initParallax() {
    const bgPattern = document.querySelector('.bg-pattern');
    
    if (!bgPattern) return;

    const handleParallax = debounce(() => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.3;
        
        bgPattern.style.transform = `translateY(${rate}px)`;
    }, 10);

    window.addEventListener('scroll', handleParallax, { passive: true });
    console.log('✅ Parallax effect initialized');
}

// ============================================
// TYPING ANIMATION FOR HERO (Optional)
// ============================================

function initTypingAnimation() {
    const tagline = document.querySelector('.hero-tagline');
    if (!tagline) return;

    const text = tagline.textContent;
    tagline.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            tagline.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    // Start typing after a delay
    setTimeout(typeWriter, 500);
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 Portfolio loading...');

    // Initialize all features
    initScrollReveal();
    initProjectFilters();
    initSmoothScrolling();
    initScrollToTop();
    initializeFAQ();
    initModalListeners();
    initLazyLoading();
    initImageLoading();
    initParallax();
    // initTypingAnimation(); // Uncomment for typing effect

    // Log performance
    window.addEventListener('load', () => {
        if (window.performance) {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
        }

        console.log('✅ All features initialized successfully!');
        console.log(`📜 ${Object.keys(certificateData).length} certificates available`);
    });

    // Add easter egg
    console.log('%c👋 Hi there! Looking for a Data Analyst?', 'font-size: 20px; color: #2563eb; font-weight: bold;');
    console.log('%cLet\'s connect! rayeenshakib7860@gmail.com', 'font-size: 14px; color: #6b7280;');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

function listAvailableCertificates() {
    console.log('📜 Available Certificates:');
    Object.entries(certificateData).forEach(([key, cert]) => {
        console.log(`  - ${key}: ${cert.title}`);
    });
}

// Export for debugging
window.portfolioDebug = {
    listCertificates: listAvailableCertificates,
    certificateData: certificateData,
    showCertificate: showCertificate
};

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================

// Keyboard navigation for project cards
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('certificate-card')) {
            focusedElement.click();
        }
    }
});

// Focus management for modal
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    });
}
