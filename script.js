// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Handle navigation links (both anchor and page links)
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // If it's an anchor link on the same page
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
                // Use scrollIntoView for scroll snap compatibility
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        // If it's a page link, let it navigate normally
    });
});

// Navbar scroll effect with luxury enhancements
let lastScroll = 0;
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation with luxury timing
const animateElements = document.querySelectorAll('.philosophy-paragraph, .value-item, .about-text, .service-item, .project-item, .location-item, .leadership-member, .leadership-intro, .leadership-title');

animateElements.forEach((el, index) => {
    // Only set initial state if not already set by CSS
    if (!el.style.opacity && !el.classList.contains('animated')) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = `opacity 1s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s, transform 1s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s`;
    observer.observe(el);
    }
});

// Scroll-triggered section animations with enhanced text animations
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            
            // Animate section labels first
            const labels = entry.target.querySelectorAll('.section-label');
            labels.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('animate-in');
                }, index * 150);
            });
            
            // Animate titles with delay
            setTimeout(() => {
                const titles = entry.target.querySelectorAll('.section-title, .philosophy-title, .leadership-title');
                titles.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('animate-in');
                    }, index * 200);
                });
            }, 200);
            
            // Animate descriptions and paragraphs
            setTimeout(() => {
                const descriptions = entry.target.querySelectorAll('.clients-description, .philosophy-paragraph, .leadership-intro, .about-text');
                descriptions.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('animate-in');
                    }, index * 100);
                });
            }, 400);
            
            // Animate leadership members
            setTimeout(() => {
                const members = entry.target.querySelectorAll('.leadership-member');
                members.forEach((member, index) => {
                    setTimeout(() => {
                        member.classList.add('animate-in');
                    }, index * 150);
                });
            }, 600);
            
            // Animate logos and other elements
            setTimeout(() => {
                const logos = entry.target.querySelectorAll('.client-logo');
                logos.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add('animate-in');
                    }, index * 50);
                });
            }, 600);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

// Scroll snap functionality - snap to sections on scroll
let isScrolling = false;
let scrollTimeout;

function snapToSection(direction) {
    if (isScrolling) return;
    
    // Get all sections that should snap (works on all pages)
    const sections = document.querySelectorAll('section.hero, section.clients, section.philosophy, section.about-page, section.leadership-section, section.philosophy-page, section.services-page, section.projects-page, section.contact-page');
    const currentScroll = window.pageYOffset;
    const viewportHeight = window.innerHeight;
    
    let targetSection = null;
    let currentIndex = -1;
    
    // Find which section we're currently in
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        // Check if we're currently viewing this section (with some tolerance)
        if (currentScroll >= sectionTop - viewportHeight * 0.3 && currentScroll < sectionBottom - viewportHeight * 0.3) {
            currentIndex = index;
        }
    });
    
    // If we're in a section, navigate to next/previous
    if (currentIndex >= 0) {
        if (direction === 'down' && currentIndex < sections.length - 1) {
            targetSection = sections[currentIndex + 1];
        } else if (direction === 'up' && currentIndex > 0) {
            targetSection = sections[currentIndex - 1];
        }
    } else {
        // If we're between sections, find the closest one
        let minDistance = Infinity;
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const distance = Math.abs(currentScroll - sectionTop);
            if (distance < minDistance) {
                minDistance = distance;
                if ((direction === 'down' && currentScroll < sectionTop) || 
                    (direction === 'up' && currentScroll > sectionTop)) {
                    targetSection = section;
                }
            }
        });
    }
    
    if (targetSection) {
        isScrolling = true;
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }
}

// Enhanced wheel event for scroll snapping with debounce
let wheelTimeout;
let lastWheelTime = 0;
window.addEventListener('wheel', (e) => {
    const now = Date.now();
    
    // Only trigger if enough time has passed since last wheel event
    if (now - lastWheelTime < 500) {
        return;
    }
    
    clearTimeout(wheelTimeout);
    lastWheelTime = now;
    
    wheelTimeout = setTimeout(() => {
        const direction = e.deltaY > 0 ? 'down' : 'up';
        snapToSection(direction);
    }, 200);
}, { passive: true });

// Keyboard navigation for scroll snap
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        snapToSection('down');
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        snapToSection('up');
    } else if (e.key === 'Home') {
        e.preventDefault();
        const sections = document.querySelectorAll('section.hero, section.clients, section.philosophy, section.about-page, section.leadership-section, section.philosophy-page, section.services-page, section.projects-page, section.contact-page');
        if (sections.length > 0) {
            sections[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } else if (e.key === 'End') {
        e.preventDefault();
        const sections = document.querySelectorAll('section.hero, section.clients, section.philosophy, section.about-page, section.leadership-section, section.philosophy-page, section.services-page, section.projects-page, section.contact-page');
        if (sections.length > 0) {
            sections[sections.length - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('section-hidden');
        sectionObserver.observe(section);
    });
    
    // First section (hero) should be visible immediately with animations
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.classList.remove('section-hidden');
        heroSection.classList.add('section-visible');
        
        // Animate hero text elements
        setTimeout(() => {
            const heroTexts = heroSection.querySelectorAll('.hero-subtitle, .hero-story, .hero-title, .hero-tagline, .hero-blessing');
            heroTexts.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('animate-in');
                }, index * 200);
            });
        }, 300);
    }
});

// Add active state to navigation based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Add active state to navigation based on scroll position (for single-page sections)
const sections = document.querySelectorAll('section[id]');

if (sections.length > 0) {
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        const navHeight = nav.offsetHeight;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - navHeight - 50;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        link.classList.remove('active');
                        if (href === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    }
                });
            }
        });
    });
}

// Hide scroll indicator after scrolling
let scrollIndicator = document.querySelector('.scroll-indicator');
let hasScrolled = false;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100 && !hasScrolled) {
        hasScrolled = true;
        if (scrollIndicator) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.transition = 'opacity 0.5s ease';
        }
    }
});

// Extract colors from logo and apply to site
const extractLogoColors = () => {
    const logoImg = document.querySelector('.logo-img');
    if (!logoImg) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.crossOrigin = 'anonymous';
    img.onload = function() {
        canvas.width = this.width;
        canvas.height = this.height;
        ctx.drawImage(this, 0, 0);
        
        try {
            // Sample colors from different parts of the logo
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            
            // Extract dominant colors
            const colors = {};
            let r = 0, g = 0, b = 0, count = 0;
            
            // Sample every 10th pixel for performance
            for (let i = 0; i < data.length; i += 40) {
                const pixelR = data[i];
                const pixelG = data[i + 1];
                const pixelB = data[i + 2];
                const pixelA = data[i + 3];
                
                // Skip transparent pixels
                if (pixelA > 128) {
                    r += pixelR;
                    g += pixelG;
                    b += pixelB;
                    count++;
                }
            }
            
            if (count > 0) {
                const avgR = Math.round(r / count);
                const avgG = Math.round(g / count);
                const avgB = Math.round(b / count);
                
                // Calculate brightness to determine if logo is light or dark
                const brightness = (avgR * 299 + avgG * 587 + avgB * 114) / 1000;
                
                // Extract primary color from logo
                const primaryColor = `rgb(${avgR}, ${avgG}, ${avgB})`;
                const primaryColorHex = `#${avgR.toString(16).padStart(2, '0')}${avgG.toString(16).padStart(2, '0')}${avgB.toString(16).padStart(2, '0')}`;
                
                // Apply colors to CSS variables
                document.documentElement.style.setProperty('--logo-primary', primaryColorHex);
                document.documentElement.style.setProperty('--logo-primary-rgb', `${avgR}, ${avgG}, ${avgB}`);
                
                // Use logo color as accent if it's not too dark/light
                if (brightness > 50 && brightness < 200) {
                    document.documentElement.style.setProperty('--color-accent', primaryColorHex);
                }
                
                // Keep navigation black always
                document.querySelector('.nav').style.backgroundColor = '#000000';
                document.querySelector('.nav').style.borderBottomColor = 'rgba(255, 255, 255, 0.05)';
            }
        } catch (e) {
            console.log('Color extraction limited by CORS or other restrictions');
        }
    };
    
    img.src = logoImg.src;
};

// Add smooth reveal animation on load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Ensure navbar stays black
    if (nav) {
        nav.style.backgroundColor = '#000000';
    }
    
    // Extract logo colors after page loads
    setTimeout(() => {
        extractLogoColors();
    }, 500);
});

// Handle resize events
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    }, 250);
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Luxury cursor effect for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .service-item, .project-item, .value-item');
let cursor = null;

// Create custom cursor
if (window.innerWidth > 768) {
    cursor = document.createElement('div');
    cursor.className = 'luxury-cursor';
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (cursor) cursor.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            if (cursor) cursor.classList.remove('hover');
        });
    });
}

// Smooth number counter animation for service numbers
// Enhanced number counter animation for hero stats
const animateHeroStats = () => {
    const statNumbers = document.querySelectorAll('.hero-stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target')) || parseInt(stat.textContent.replace(/\D/g, ''));
        const suffix = stat.textContent.replace(/\d/g, '') || '+';
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        let animating = false;
        
        const updateNumber = () => {
            if (animating) return;
            animating = true;
            
            const animate = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current) + suffix;
                    requestAnimationFrame(animate);
                } else {
                    stat.textContent = target + suffix;
                    animating = false;
                }
            };
            
            animate();
        };
        
        // Use Intersection Observer for better performance
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animating) {
                    updateNumber();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(stat);
    });
};

// Initialize hero stats animation
if (document.querySelector('.hero-stat-number')) {
    animateHeroStats();
}

// Smooth number counter animation for service numbers
const animateNumbers = () => {
    const numbers = document.querySelectorAll('.service-number');
    numbers.forEach(num => {
        const target = parseInt(num.textContent);
        let current = 0;
        const increment = target / 30;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                num.textContent = String(target).padStart(2, '0');
                clearInterval(timer);
            } else {
                num.textContent = String(Math.floor(current)).padStart(2, '0');
            }
        }, 30);
    });
};

// Trigger number animation when services section is visible
const servicesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            servicesObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const servicesSection = document.querySelector('.services');
if (servicesSection) {
    servicesObserver.observe(servicesSection);
}

// Lazy Loading Images with Intersection Observer
const lazyImageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            }
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: '50px',
    threshold: 0.01
});

// Initialize lazy loading for all images with data-src
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
        lazyImageObserver.observe(img);
    });
    
    // Also observe regular lazy images for fade-in effect
    const allLazyImages = document.querySelectorAll('img[loading="lazy"]');
    allLazyImages.forEach(img => {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-loaded');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        fadeObserver.observe(img);
    });
});

// Lazy load SVG drawings
const lazySVGObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('svg-visible');
            lazySVGObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    const svgDrawings = document.querySelectorAll('.arch-drawing');
    svgDrawings.forEach(drawing => {
        lazySVGObserver.observe(drawing);
    });
});

// Add luxury scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createScrollProgress();

