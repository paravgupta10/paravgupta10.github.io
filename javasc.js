        // Mobile Navigation
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
        
        // Sticky Header
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Typing Effect
        const typedTextElement = document.getElementById('typed-text');
        const textArray = ['Software Developer', 'AI/ML Enthusiast', 'Freelancer'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeEffect() {
            const currentText = textArray[textIndex];
            
            if (isDeleting) {
                typedTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedTextElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, 1500);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textArray.length;
                setTimeout(typeEffect, 500);
            } else {
                setTimeout(typeEffect, isDeleting ? 50 : 100);
            }
        }
        
        setTimeout(typeEffect, 1000);
        
        // Counting Animation
        function startCounting() {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 16ms is approximately one frame
                let current = 0;
                
                function updateCounter() {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                }
                
                updateCounter();
            });
        }
        
        // Scroll Animation
        function checkScroll() {
            const elements = document.querySelectorAll('.fade-in');
            const windowHeight = window.innerHeight;
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                if (elementTop < windowHeight - 50) {
                    element.classList.add('show');
                    
                    // Start counting animation when about section comes into view
                    if (element.classList.contains('stat-box')) {
                        startCounting();
                    }
                }
            });
        }
        
        // Initial check on load
        window.addEventListener('load', () => {
            checkScroll();
            // Update current year in footer
            document.getElementById('current-year').textContent = new Date().getFullYear();
        });
        
        // Check on scroll
        window.addEventListener('scroll', checkScroll);
