document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Mobile Menu Toggle
    const mobileNavBtn = document.querySelector('.mobile-nav-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileNavBtn) {
        mobileNavBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNavBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Header scroll effect
    const header = document.getElementById('header');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';

            if (backToTopBtn) {
                backToTopBtn.classList.add('active');
            }
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = 'none';
            
            if (backToTopBtn) {
                backToTopBtn.classList.remove('active');
            }
        }
    });

    // Back to top button
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Menu tabs functionality
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuCategories = document.querySelectorAll('.menu-category');

    if (menuTabs.length > 0 && menuCategories.length > 0) {
        menuTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                menuTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');
                
                const category = tab.getAttribute('data-category');
                
                // Hide all menu categories
                menuCategories.forEach(c => c.classList.remove('active'));
                
                // Show the selected category
                document.querySelector(`.menu-category[data-category="${category}"]`).classList.add('active');
            });
        });
    }

    // Testimonial Slider
    function initTestimonialSlider() {
        const track = document.querySelector('.testimonial-track');
        const slides = document.querySelectorAll('.testimonial-item');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const dotsContainer = document.querySelector('.slider-dots');
        
        if (!track || slides.length === 0) return;
        
        let currentIndex = 0;
        const slideWidth = 100; // As percentage
        
        // Create dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => goToSlide(index));
            
            dotsContainer.appendChild(dot);
        });
        
        const dots = document.querySelectorAll('.dot');
        
        // Set initial position
        track.style.transform = `translateX(0%)`;
        
        // Event listeners for buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    goToSlide(currentIndex - 1);
                } else {
                    goToSlide(slides.length - 1);
                }
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentIndex < slides.length - 1) {
                    goToSlide(currentIndex + 1);
                } else {
                    goToSlide(0);
                }
            });
        }
        
        // Function to go to a specific slide
        function goToSlide(index) {
            track.style.transform = `translateX(-${index * slideWidth}%)`;
            
            // Update active dot
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            currentIndex = index;
        }
        
        // Auto slide
        let slideInterval = setInterval(() => {
            if (currentIndex < slides.length - 1) {
                goToSlide(currentIndex + 1);
            } else {
                goToSlide(0);
            }
        }, 5000);
        
        // Pause auto slide on hover
        track.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        track.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                if (currentIndex < slides.length - 1) {
                    goToSlide(currentIndex + 1);
                } else {
                    goToSlide(0);
                }
            }, 5000);
        });
    }
    
    initTestimonialSlider();

    // Gallery Lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxNext = document.querySelector('.lightbox-next');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    
    if (galleryItems.length > 0 && lightbox && lightboxImg) {
        let currentImgIndex = 0;
        const galleryImages = [];
        
        // Collect all gallery images
        galleryItems.forEach((item, index) => {
            const imgSrc = item.querySelector('img').src;
            galleryImages.push(imgSrc);
            
            // Add click event to each gallery item
            item.addEventListener('click', () => {
                openLightbox(index);
            });
        });
        
        // Open lightbox with specific image
        function openLightbox(index) {
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            lightboxImg.src = galleryImages[index];
            currentImgIndex = index;
        }
        
        // Close lightbox
        if (lightboxClose) {
            lightboxClose.addEventListener('click', () => {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }
        
        // Click outside image to close
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Next image
        if (lightboxNext) {
            lightboxNext.addEventListener('click', () => {
                currentImgIndex = (currentImgIndex + 1) % galleryImages.length;
                lightboxImg.src = galleryImages[currentImgIndex];
            });
        }
        
        // Previous image
        if (lightboxPrev) {
            lightboxPrev.addEventListener('click', () => {
                currentImgIndex = (currentImgIndex - 1 + galleryImages.length) % galleryImages.length;
                lightboxImg.src = galleryImages[currentImgIndex];
            });
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (lightbox.style.display === 'flex') {
                if (e.key === 'Escape') {
                    lightbox.style.display = 'none';
                    document.body.style.overflow = 'auto';
                } else if (e.key === 'ArrowRight' && lightboxNext) {
                    lightboxNext.click();
                } else if (e.key === 'ArrowLeft' && lightboxPrev) {
                    lightboxPrev.click();
                }
            }
        });
    }
    
    // Newsletter form validation
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
                emailInput.style.borderColor = 'red';
                return;
            }
            
            // Here you would normally send the form data to your server
            // For demo purposes, we'll just show a success message
            
            const formParent = newsletterForm.parentElement;
            const successMessage = document.createElement('div');
            successMessage.classList.add('success-message');
            successMessage.textContent = 'Thank you for subscribing to our newsletter!';
            successMessage.style.color = 'white';
            successMessage.style.marginTop = '10px';
            
            // Reset form and add success message
            newsletterForm.reset();
            formParent.appendChild(successMessage);
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 3000);
        });
    }
    
    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            let isValid = true;
            
            // Simple validation
            if (nameInput.value.trim() === '') {
                markInvalid(nameInput);
                isValid = false;
            } else {
                markValid(nameInput);
            }
            
            if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
                markInvalid(emailInput);
                isValid = false;
            } else {
                markValid(emailInput);
            }
            
            if (messageInput.value.trim() === '') {
                markInvalid(messageInput);
                isValid = false;
            } else {
                markValid(messageInput);
            }
            
            if (isValid) {
                // Here you would normally send the form data to your server
                // For demo purposes, we'll just show a success message

                const successMessage = document.createElement('div');
                successMessage.classList.add('form-success-message');
                successMessage.textContent = 'Your message has been sent successfully!';
                successMessage.style.color = '#8e44ad';
                successMessage.style.padding = '10px 0';
                successMessage.style.fontWeight = '500';
                
                // Reset form and add success message
                contactForm.reset();
                contactForm.appendChild(successMessage);
                
                // Remove success message after 3 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            }
        });
        
        function markInvalid(input) {
            input.style.borderColor = 'red';
        }
        
        function markValid(input) {
            input.style.borderColor = '';
        }
    }
    
    // Helper function to validate email
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }
    
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active nav link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
            } else {
                document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Initialize the active nav link on page load
    updateActiveNavLink();
});