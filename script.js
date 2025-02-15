document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for cityscape
    const cityscape = document.querySelector('.cityscape');
    const cityLayers = document.querySelectorAll('.city-layer');
    
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        cityLayers.forEach((layer, index) => {
            const speed = (index + 1) * 2;
            const x = (mouseX * speed);
            const y = (mouseY * speed);
            layer.style.transform = `translate3d(${x}%, ${y}%, ${-speed}px) scale(${1 + index * 0.5})`;
        });
    });

    // Navbar glow effect on scroll
    const navbar = document.querySelector('.nav-bar');
    const navGlow = document.querySelector('.nav-glow');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrolled / maxScroll;
        
        const hue = scrollPercent * 360;
        navGlow.style.background = `hsl(${hue}, 100%, 50%)`;
        navGlow.style.boxShadow = `0 0 20px hsl(${hue}, 100%, 50%)`;
        
        if (scrolled > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.9)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Glitch effect on hover for titles
    const glitchHoverElements = document.querySelectorAll('.glitch-hover');
    
    glitchHoverElements.forEach(element => {
        let glitchInterval;
        
        element.addEventListener('mouseover', () => {
            clearInterval(glitchInterval);
            glitchInterval = setInterval(() => {
                element.style.textShadow = `
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 var(--neon-pink),
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 var(--neon-blue),
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 var(--neon-purple)
                `;
            }, 50);
        });
        
        element.addEventListener('mouseout', () => {
            clearInterval(glitchInterval);
            element.style.textShadow = '';
        });
    });

    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'none';
        });
    });

    // Form input effects
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            const glow = input.nextElementSibling;
            glow.style.width = '100%';
        });
        
        input.addEventListener('blur', () => {
            const glow = input.nextElementSibling;
            glow.style.width = '0';
        });
    });

    // Mouse trail effect with color variation
    const container = document.querySelector('body');
    
    container.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.className = 'trail';
        
        const hue = (e.clientX / window.innerWidth) * 360;
        
        trail.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: hsl(${hue}, 100%, 50%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.7;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
        `;
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.style.opacity = '0';
            trail.style.transform = 'scale(3)';
            trail.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                trail.remove();
            }, 500);
        }, 10);
    });

    // Initialize hologram effect
    const hologramText = document.querySelector('.hologram-text');
    let hologramAngle = 0;
    
    function animateHologram() {
        hologramAngle += 0.02;
        const y = Math.sin(hologramAngle) * 20;
        hologramText.style.transform = `translateY(${y}px)`;
        requestAnimationFrame(animateHologram);
    }
    
    animateHologram();

    // Project data
    const projectData = {
        1: {
            title: 'Urban Housing Project',
            description: 'A sustainable housing development that reimagines urban living through innovative design and environmental consciousness.',
            location: 'Mumbai, India',
            year: '2023',
            type: 'Residential',
            images: [
                'images/project1/1.jpg',
                'images/project1/2.jpg',
                'images/project1/3.jpg'
            ]
        },
        2: {
            title: 'Cultural Center',
            description: 'A modern interpretation of traditional architecture, creating a space that bridges cultural heritage with contemporary design.',
            location: 'Bangalore, India',
            year: '2022',
            type: 'Cultural',
            images: [
                'images/project2/1.jpg',
                'images/project2/2.jpg',
                'images/project2/3.jpg'
            ]
        },
        3: {
            title: 'Public Library',
            description: 'A community-focused design that creates an inviting atmosphere for learning and social interaction.',
            location: 'Delhi, India',
            year: '2023',
            type: 'Public',
            images: [
                'images/project3/1.jpg',
                'images/project3/2.jpg',
                'images/project3/3.jpg'
            ]
        }
    };

    // Project modal functionality
    const modal = document.getElementById('projectModal');
    const modalImages = modal.querySelector('.modal-images');
    const modalTitle = modal.querySelector('h2');
    const modalDescription = modal.querySelector('.project-description');
    const modalDetails = modal.querySelectorAll('.value');
    const closeModal = modal.querySelector('.close-modal');

    // Open modal when clicking project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.project;
            const project = projectData[projectId];

            // Populate modal content
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalDetails[0].textContent = project.location;
            modalDetails[1].textContent = project.year;
            modalDetails[2].textContent = project.type;

            // Clear and populate images
            modalImages.innerHTML = '';
            project.images.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = project.title;
                modalImages.appendChild(img);
            });

            // Show modal with fade-in effect
            modal.style.display = 'block';
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);

            // Disable body scroll
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal functionality
    function closeModalHandler() {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }

    closeModal.addEventListener('click', closeModalHandler);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalHandler();
        }
    });

    // Image lazy loading
    const images = document.querySelectorAll('img[data-src]');
    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px 50px 0px'
    };

    function preloadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) return;
        img.src = src;
        img.removeAttribute('data-src');
    }

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            preloadImage(entry.target);
            observer.unobserve(entry.target);
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));
}); 