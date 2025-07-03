// Smooth Scroll Navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Shopping Cart Functionality
let cart = [];
let cartCount = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    alert(`${name} added to cart!`);
}

// Search Functionality
document.getElementById('search-bar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const shoeCards = document.querySelectorAll('.shoe-card');

    shoeCards.forEach(card => {
        const shoeName = card.getAttribute('data-name').toLowerCase();
        card.style.display = shoeName.includes(searchTerm) ? 'block' : 'none';
    });
});

// Display Cart Items (Basic Alert for Demo)
document.querySelector('.cart').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        let cartDetails = 'Cart Items:\n';
        let total = 0;
        cart.forEach(item => {
            cartDetails += `${item.name}: KES ${item.price}\n`;
            total += item.price;
        });
        cartDetails += `Total: KES ${total}`;
        alert(cartDetails);
    }
});