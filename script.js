// Product Data
const products = {
    shoes: [
        {
            id: 1,
            name: "Men's Running Sneakers",
            category: "shoes",
            price: 89.99,
            description: "Comfortable running shoes with excellent cushioning and breathable design.",
            gender: "men",
            type: "sneakers",
            image: "👟"
        },
        {
            id: 2,
            name: "Women's High Heels",
            category: "shoes",
            price: 129.99,
            description: "Elegant high heels perfect for formal occasions and special events.",
            gender: "women",
            type: "heels",
            image: "👠"
        },
        {
            id: 3,
            name: "Men's Formal Oxford",
            category: "shoes",
            price: 159.99,
            description: "Classic leather oxford shoes for business and formal wear.",
            gender: "men",
            type: "formal",
            image: "👞"
        },
        {
            id: 4,
            name: "Women's Athletic Sneakers",
            category: "shoes",
            price: 79.99,
            description: "Lightweight athletic sneakers perfect for workouts and daily wear.",
            gender: "women",
            type: "sneakers",
            image: "👟"
        },
        {
            id: 5,
            name: "Men's Work Boots",
            category: "shoes",
            price: 189.99,
            description: "Durable work boots with steel toe protection and waterproof design.",
            gender: "men",
            type: "boots",
            image: "🥾"
        },
        {
            id: 6,
            name: "Women's Casual Flats",
            category: "shoes",
            price: 59.99,
            description: "Comfortable casual flats perfect for everyday wear and walking.",
            gender: "women",
            type: "flats",
            image: "🥿"
        }
    ],
    electronics: [
        {
            id: 7,
            name: "Smartphone Pro Max",
            category: "electronics",
            price: 999.99,
            description: "Latest flagship smartphone with advanced camera system and 5G connectivity.",
            brand: "TechBrand",
            type: "smartphone",
            image: "📱"
        },
        {
            id: 8,
            name: "Wireless Headphones",
            category: "electronics",
            price: 249.99,
            description: "Premium noise-cancelling wireless headphones with superior sound quality.",
            brand: "AudioTech",
            type: "headphones",
            image: "🎧"
        },
        {
            id: 9,
            name: "Gaming Laptop",
            category: "electronics",
            price: 1299.99,
            description: "High-performance gaming laptop with dedicated graphics card and RGB lighting.",
            brand: "GameTech",
            type: "laptop",
            image: "💻"
        },
        {
            id: 10,
            name: "Smart Watch",
            category: "electronics",
            price: 399.99,
            description: "Advanced smartwatch with health monitoring and fitness tracking features.",
            brand: "WearTech",
            type: "smartwatch",
            image: "⌚"
        },
        {
            id: 11,
            name: "Bluetooth Speaker",
            category: "electronics",
            price: 89.99,
            description: "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
            brand: "SoundTech",
            type: "speaker",
            image: "🔊"
        },
        {
            id: 12,
            name: "Tablet Pro",
            category: "electronics",
            price: 649.99,
            description: "Professional tablet with stylus support and high-resolution display.",
            brand: "TabletTech",
            type: "tablet",
            image: "📲"
        }
    ],
    groceries: [
        {
            id: 13,
            name: "Fresh Organic Apples",
            category: "groceries",
            price: 4.99,
            description: "Crisp and sweet organic apples, perfect for snacking or baking.",
            type: "fruits",
            unit: "per lb",
            image: "🍎"
        },
        {
            id: 14,
            name: "Premium Salmon Fillet",
            category: "groceries",
            price: 19.99,
            description: "Fresh Atlantic salmon fillet, rich in omega-3 fatty acids.",
            type: "seafood",
            unit: "per lb",
            image: "🐟"
        },
        {
            id: 15,
            name: "Artisan Bread Loaf",
            category: "groceries",
            price: 6.99,
            description: "Freshly baked artisan bread with a crispy crust and soft interior.",
            type: "bakery",
            unit: "per loaf",
            image: "🍞"
        },
        {
            id: 16,
            name: "Organic Free-Range Eggs",
            category: "groceries",
            price: 5.99,
            description: "Farm-fresh organic eggs from free-range chickens.",
            type: "dairy",
            unit: "dozen",
            image: "🥚"
        },
        {
            id: 17,
            name: "Fresh Vegetables Mix",
            category: "groceries",
            price: 8.99,
            description: "Assorted fresh vegetables including carrots, broccoli, and bell peppers.",
            type: "vegetables",
            unit: "per bag",
            image: "🥕"
        },
        {
            id: 18,
            name: "Premium Coffee Beans",
            category: "groceries",
            price: 12.99,
            description: "Single-origin coffee beans with rich aroma and smooth taste.",
            type: "beverages",
            unit: "per bag",
            image: "☕"
        }
    ],
    jerseys: [
        {
            id: 19,
            name: "Manchester United Home Jersey",
            category: "jerseys",
            price: 89.99,
            description: "Official Manchester United home jersey with player name and number options.",
            team: "Manchester United",
            league: "Premier League",
            season: "2024/25",
            image: "👕"
        },
        {
            id: 20,
            name: "Real Madrid Away Jersey",
            category: "jerseys",
            price: 94.99,
            description: "Official Real Madrid away jersey featuring the latest design and technology.",
            team: "Real Madrid",
            league: "La Liga",
            season: "2024/25",
            image: "👕"
        },
        {
            id: 21,
            name: "Brazil National Team Jersey",
            category: "jerseys",
            price: 99.99,
            description: "Official Brazil national team jersey worn in international competitions.",
            team: "Brazil",
            league: "International",
            season: "2024",
            image: "👕"
        },
        {
            id: 22,
            name: "Barcelona Home Jersey",
            category: "jerseys",
            price: 92.99,
            description: "Classic Barcelona home jersey with iconic blue and red stripes.",
            team: "Barcelona",
            league: "La Liga",
            season: "2024/25",
            image: "👕"
        },
        {
            id: 23,
            name: "Arsenal Away Jersey",
            category: "jerseys",
            price: 87.99,
            description: "Arsenal away jersey with modern design and moisture-wicking fabric.",
            team: "Arsenal",
            league: "Premier League",
            season: "2024/25",
            image: "👕"
        },
        {
            id: 24,
            name: "PSG Third Jersey",
            category: "jerseys",
            price: 91.99,
            description: "Paris Saint-Germain third jersey with unique colorway and premium quality.",
            team: "PSG",
            league: "Ligue 1",
            season: "2024/25",
            image: "👕"
        }
    ]
};

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const cartCount = document.querySelector('.cart-count');
const cartModal = document.getElementById('cartModal');
const productModal = document.getElementById('productModal');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    updateCartCount();
    setupEventListeners();
});

// Event Listeners Setup
function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Search functionality
    searchBtn.addEventListener('click', searchProducts);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
    
    // Filter functionality
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
    
    // Cart modal
    document.querySelector('.cart-link').addEventListener('click', function(e) {
        e.preventDefault();
        showCartModal();
    });
    
    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    // Cart action buttons
    document.getElementById('clearCartBtn').addEventListener('click', clearCart);
    document.getElementById('checkoutBtn').addEventListener('click', checkout);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Display Products
function displayProducts(productsToShow = null) {
    const allProducts = productsToShow || getAllProducts();
    
    // Clear existing products
    Object.keys(products).forEach(category => {
        const grid = document.getElementById(`${category}-grid`);
        if (grid) grid.innerHTML = '';
    });
    
    // Display products by category
    allProducts.forEach(product => {
        const grid = document.getElementById(`${product.category}-grid`);
        if (grid) {
            grid.appendChild(createProductCard(product));
        }
    });
}

// Get All Products
function getAllProducts() {
    return Object.values(products).flat();
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    card.setAttribute('data-price', product.price);
    
    card.innerHTML = `
        <div class="product-image">${product.image}</div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-actions">
                <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                <button class="btn btn-outline" onclick="showProductDetails(${product.id})">View Details</button>
            </div>
        </div>
    `;
    
    return card;
}

// Add to Cart
function addToCart(productId) {
    const product = getAllProducts().find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }
    
    updateCartCount();
    saveCart();
    showNotification(`${product.name} added to cart!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    saveCart();
    displayCartItems();
}

// Update Cart Quantity
function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartCount();
        saveCart();
        displayCartItems();
    }
}

// Update Cart Count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Save Cart to Local Storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Show Cart Modal
function showCartModal() {
    displayCartItems();
    cartModal.style.display = 'block';
}

// Display Cart Items
function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #6c757d;">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                <button class="btn btn-secondary" style="margin-left: 10px;" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

// Clear Cart
function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        updateCartCount();
        saveCart();
        displayCartItems();
        showNotification('Cart cleared!');
    }
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Thank you for your purchase! Total: $${total.toFixed(2)}\n\nThis is a demo checkout. In a real store, you would be redirected to a payment processor.`);
    
    cart = [];
    updateCartCount();
    saveCart();
    cartModal.style.display = 'none';
}

// Show Product Details
function showProductDetails(productId) {
    const product = getAllProducts().find(p => p.id === productId);
    if (!product) return;
    
    const modalBody = document.getElementById('productModalBody');
    modalBody.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 8rem; margin-bottom: 20px;">${product.image}</div>
            <h2>${product.name}</h2>
            <p style="color: #6c757d; text-transform: uppercase; margin-bottom: 10px;">${product.category}</p>
            <p style="margin-bottom: 20px;">${product.description}</p>
            <div style="font-size: 1.5rem; color: #007bff; font-weight: bold; margin-bottom: 20px;">
                $${product.price.toFixed(2)}
            </div>
            <button class="btn btn-primary" style="width: 100%;" onclick="addToCart(${product.id}); productModal.style.display='none';">
                Add to Cart
            </button>
        </div>
    `;
    
    productModal.style.display = 'block';
}

// Search Products
function searchProducts() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
        displayProducts();
        return;
    }
    
    const allProducts = getAllProducts();
    const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );
    
    displayProducts(filteredProducts);
    
    if (filteredProducts.length === 0) {
        showNoResults();
    }
}

// Filter Products
function filterProducts() {
    const selectedCategory = categoryFilter.value;
    const selectedPriceRange = priceFilter.value;
    
    let filteredProducts = getAllProducts();
    
    // Filter by category
    if (selectedCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }
    
    // Filter by price range
    if (selectedPriceRange !== 'all') {
        const [min, max] = selectedPriceRange.split('-').map(p => {
            if (p.includes('+')) return [parseInt(p.replace('+', '')), Infinity];
            return parseInt(p);
        });
        
        if (Array.isArray(min)) {
            filteredProducts = filteredProducts.filter(product => product.price >= min[0]);
        } else {
            filteredProducts = filteredProducts.filter(product => product.price >= min && product.price <= max);
        }
    }
    
    displayProducts(filteredProducts);
    
    if (filteredProducts.length === 0) {
        showNoResults();
    }
}

// Show No Results Message
function showNoResults() {
    Object.keys(products).forEach(category => {
        const grid = document.getElementById(`${category}-grid`);
        if (grid && grid.children.length === 0) {
            grid.innerHTML = '<p style="text-align: center; color: #6c757d; grid-column: 1 / -1;">No products found matching your criteria.</p>';
        }
    });
}

// Show Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Scroll to Section (for CTA button)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Service Worker Registration (for offline functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}