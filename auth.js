/**
 * PROJECT: VeritasAI Forensic Lab
 * AUTHOR: Ankit Kumar (IITRAM, Ahmedabad)
 * VERSION: 1.0.4
 * MODULE: System Neural Core
 * DESCRIPTION: Lead Engineering & Architecture
 */
console.log("%c VERITAS AI %c System Engineered by Ankit Kumar ", "background: #00E8FF; color: #000; font-weight: bold;", "background: #000; color: #00E8FF;");

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const authForm = document.getElementById('auth-form');
    const submitBtn = document.getElementById('auth-submit-btn');
    let isLogin = true;

    // 1. Toggle Logic (Event Delegation)
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'auth-toggle') {
            e.preventDefault();
            isLogin = !isLogin;
            
            const authTitle = document.getElementById('auth-title');
            const authSubtitle = document.getElementById('auth-subtitle');
            const nameField = document.getElementById('name-field');
            const toggleText = document.getElementById('toggle-text');

            if (isLogin) {
                authTitle.innerText = "Security Login";
                authSubtitle.innerText = "Initialize your forensic session.";
                submitBtn.innerText = "Authorize Access";
                toggleText.innerHTML = 'New Agent? <a href="#" id="auth-toggle">Request Credentials</a>';
                nameField.style.display = "none";
            } else {
                authTitle.innerText = "Agent Registration";
                authSubtitle.innerText = "Create institutional credentials.";
                submitBtn.innerText = "Create Account";
                toggleText.innerHTML = 'Existing Personnel? <a href="#" id="auth-toggle">Login here</a>';
                nameField.style.display = "block";
            }
            lucide.createIcons();
        }
    });

    // 2. Submit Logic
    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Visual feedback
            submitBtn.innerHTML = '<span class="loading-spinner"></span> AUTHORIZING...';
            submitBtn.style.opacity = '0.7';
            submitBtn.disabled = true;

            // Simulate the "Handshake"
            setTimeout(() => {
                // THE MOST IMPORTANT LINE: Set the key for main.js to find
                localStorage.setItem('veritas_user', 'active_session_' + Date.now());

                // Redirect to Dashboard
                window.location.href = './dashboard.html';
            }, 1200);
        });
    }
});