// Shopping Cart
let cart = [];

function addToCart() {
    cart.push({
        id: Date.now(),
        timestamp: new Date()
    });
    updateCartCount();
    showCartNotification();
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

function showCartNotification() {
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ Hinzugefügt';
    btn.style.backgroundColor = '#4caf50';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = '';
    }, 2000);
}

// Newsletter Signup
function newsletterSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    // Store email (in real app, send to backend)
    console.log('Newsletter signup:', email);
    
    // Show success message
    const button = form.querySelector('button');
    const originalText = button.textContent;
    button.textContent = '✓ Danke für die Anmeldung!';
    button.style.backgroundColor = '#4caf50';
    
    form.reset();
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
    }, 3000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});