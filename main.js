/**
 * PROJECT: VeritasAI Forensic Lab
 * AUTHOR: Ankit Kumar (IITRAM, Ahmedabad)
 * VERSION: 1.0.4
 * MODULE: System Neural Core
 * DESCRIPTION: Lead Engineering & Architecture
 */
console.log("%c VERITAS AI %c System Engineered by Ankit Kumar ", "background: #00E8FF; color: #000; font-weight: bold;", "background: #000; color: #00E8FF;");

// --- GLOBAL UI ENHANCEMENTS ---
document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Tab Visibility (Easter Egg)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            document.title = "TERMINAL_IDLE | VeritasAI";
        } else {
            document.title = "SECURE_SESSION | VeritasAI";
        }
    });

    console.log(">> VeritasAI Neural Core: Online");
});


document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    lucide.createIcons();

    // 2. Mobile Menu Logic
    const menuTrigger = document.getElementById('menu-trigger');
    const navMenu = document.getElementById('nav-menu');

    if (menuTrigger) {
        menuTrigger.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            
            const icon = menuTrigger.querySelector('i');
            const isOpened = navMenu.style.display === 'flex';
            icon.setAttribute('data-lucide', isOpened ? 'x' : 'menu');
            lucide.createIcons();
        });
    }

    // 3. GATEKEEPER LOGIC
    const heroCta = document.getElementById('hero-cta');
    if (heroCta) {
        heroCta.addEventListener('click', function(e) {
            e.preventDefault();
            
            // This checks your browser memory for a "logged in" user
            const isLoggedIn = localStorage.getItem('veritas_user');
            
            this.innerHTML = '<span class="loading-spinner"></span> VERIFYING SESSION...';

            setTimeout(() => {
                if (isLoggedIn) {
                    window.location.href = './dashboard.html';
                } else {
                    // This will trigger if you haven't logged in yet
                    window.location.href = './auth.html'; 
                }
            }, 800);
        });
    }

    // 4. Smooth button loading state helper
    const allButtons = document.querySelectorAll('.btn-cyan, .btn-outline');
    allButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Don't trigger this for the Scan button or Submit buttons
            if (this.type === 'submit' || this.id === 'scan-btn' || this.id === 'hero-cta') return; 
            
            const originalText = this.innerHTML;
            this.style.width = this.offsetWidth + 'px';
            this.innerHTML = '<span class="loading-spinner"></span>';
            setTimeout(() => { this.innerHTML = originalText; }, 2000);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Select ALL elements that lead to the lab
    const gatekeeperLinks = document.querySelectorAll('.nav-cta, #hero-cta, .nav-link-secondary');

    gatekeeperLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const isLoggedIn = localStorage.getItem('veritas_user');

            if (isLoggedIn) {
                window.location.href = './dashboard.html';
            } else {
                // If not logged in, always send to the access terminal
                window.location.href = './auth.html';
            }
        });
    });
});