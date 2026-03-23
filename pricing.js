/**
 * VeritasAI Pricing Controller
 * Handles subscription toggles and tier selection feedback
 */

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('#billing-toggle');
    const prices = document.querySelectorAll('.price');
    const priceValues = {
        standard: { monthly: 0, annual: 0 },
        pro: { monthly: 79, annual: 65 },
        enterprise: { monthly: 'Custom', annual: 'Custom' }
    };

    if (toggle) {
        toggle.addEventListener('change', function() {
            const isAnnual = this.checked;
            
            // Update Pro Price (index 1 in our grid)
            const proDisplay = prices[1];
            const newValue = isAnnual ? priceValues.pro.annual : priceValues.pro.monthly;
            
            proDisplay.innerHTML = `$${newValue}<span>/mo</span>`;
            
            // Add a subtle "pulse" effect to show the change
            proDisplay.style.transform = 'scale(1.1)';
            setTimeout(() => proDisplay.style.transform = 'scale(1)', 200);
        });
    }

    // Add loading states to pricing buttons
    const planButtons = document.querySelectorAll('.pricing-card button');
    planButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const originalText = this.innerText;
            this.innerHTML = '<span class="loading-spinner"></span> Initializing...';
            this.disabled = true;

            // Simulate redirect to Stripe/Checkout
            setTimeout(() => {
                alert("Redirecting to secure payment gateway...");
                this.innerText = originalText;
                this.disabled = false;
            }, 1500);
        });
    });
});
