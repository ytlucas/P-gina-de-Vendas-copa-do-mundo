document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Smooth Scroll for CTA buttons
    const ctaButtons = document.querySelectorAll('a[href^="#"]');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // URGENCY TIMER
    let timeLeft = 600; // 10 minutes in seconds
    const countdownElement = document.getElementById('countdown');
    
    if (countdownElement) {
        setInterval(() => {
            if (timeLeft <= 0) return; // Keep at 0
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            countdownElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    // FAKE PURCHASE NOTIFICATIONS
    const names = ['Ana', 'Carlos', 'João', 'Maria', 'Pedro', 'Lucas', 'Fernanda', 'Rafael', 'Juliana', 'Marcos', 'Camila', 'Rodrigo', 'Aline', 'Diego', 'Letícia'];
    const lastNames = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira', 'Lima', 'Gomes'];
    const times = ['agora mesmo', 'há 1 min', 'há 2 min', 'há 5 min'];

    function createNotification() {
        const randomName = names[Math.floor(Math.random() * names.length)] + ' ' + lastNames[Math.floor(Math.random() * lastNames.length)];
        const randomTime = times[Math.floor(Math.random() * times.length)];
        
        const container = document.getElementById('notification-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'purchase-notification';
        
        toast.innerHTML = `
            <div class="football-icon">⚽</div>
            <div class="purchase-content">
                <strong>${randomName}</strong>
                <span>garantiu o Pack! (${randomTime})</span>
            </div>
        `;
        
        container.appendChild(toast);
        
        // trigger animation
        setTimeout(() => toast.classList.add('show'), 100);
        
        // remove after 5 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 500);
        }, 5000);
        
        // Schedule next (between 10s and 25s)
        setTimeout(createNotification, Math.floor(Math.random() * (25000 - 10000) + 10000));
    }

    // Start notifications after 3 seconds
    setTimeout(createNotification, 3000);
});
