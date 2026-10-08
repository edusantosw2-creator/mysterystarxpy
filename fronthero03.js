document.addEventListener('DOMContentLoaded', () => {
    // 1. Footer Accordion Mobile Toggle
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Only trigger accordion toggle on mobile screens
            if (window.innerWidth < 768) {
                const item = header.parentElement;
                const plusIcon = header.querySelector('.plus-icon');

                item.classList.toggle('active');
                
                if (plusIcon) {
                    plusIcon.textContent = item.classList.contains('active') ? '−' : '+';
                }
            }
        });
    });

    // 2. Video Play/Pause Toggle
    const video = document.getElementById('mainVideo');
    const videoBtn = document.getElementById('videoControlBtn');

    if (video && videoBtn) {
        videoBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                videoBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>';
            } else {
                video.pause();
                videoBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
            }
        });
    }

    // 3. Back to Top Scroll
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menuClose = document.getElementById('menuClose');
    const menuOverlay = document.getElementById('menuOverlay');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    function openMenu() {
        if (mobileDrawer && menuOverlay) {
            mobileDrawer.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeMenu() {
        if (mobileDrawer && menuOverlay) {
            mobileDrawer.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (menuToggle) menuToggle.addEventListener('click', openMenu);
    if (menuClose) menuClose.addEventListener('click', closeMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);

    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetId = link.getAttribute('href');
            closeMenu();
            if (targetId && targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    setTimeout(() => {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }, 250);
                }
            }
        });
    });
});