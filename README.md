# Isaac's Store - E-commerce Website

A modern, responsive e-commerce website for Isaac's store featuring shoes, electronics, groceries, and football jerseys.

## Features

### Product Categories
- **Shoes**: Men's and women's footwear including sneakers, formal shoes, boots, heels, and casual flats
- **Electronics**: Smartphones, laptops, headphones, smartwatches, speakers, and tablets
- **Groceries**: Fresh fruits, vegetables, dairy, bakery items, seafood, and beverages
- **Football Jerseys**: Official team jerseys from major leagues (Premier League, La Liga, etc.)

### Key Functionality
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Product Search**: Real-time search across all products and categories
- **Advanced Filtering**: Filter by category and price range
- **Shopping Cart**: Add, remove, and manage items with quantity controls
- **Product Details**: Modal view with detailed product information
- **Local Storage**: Cart persistence across browser sessions
- **Modern UI**: Clean, professional design with smooth animations
- **Mobile Navigation**: Hamburger menu for mobile devices

## File Structure

```
isaac-store/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## Technologies Used

- **HTML5**: Semantic markup with modern structure
- **CSS3**: 
  - Flexbox and Grid layouts
  - CSS animations and transitions
  - Media queries for responsive design
  - Custom properties and modern styling
- **Vanilla JavaScript**: 
  - ES6+ features
  - Local Storage API
  - DOM manipulation
  - Event handling

## Setup Instructions

1. **Clone or Download** the repository to your local machine
2. **Open** `index.html` in a modern web browser
3. **No build process required** - the website runs directly in the browser

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## Product Data Structure

Products are organized in JavaScript objects with the following properties:

```javascript
{
    id: unique_identifier,
    name: "Product Name",
    category: "shoes|electronics|groceries|jerseys",
    price: 99.99,
    description: "Product description",
    image: "emoji_icon",
    // Category-specific properties
}
```

## Responsive Breakpoints

- **Mobile**: 480px and below
- **Tablet**: 481px to 768px
- **Desktop**: 769px and above
- **Large Desktop**: 1200px and above

## Features in Detail

### Navigation
- Fixed header with smooth scrolling
- Responsive hamburger menu for mobile
- Shopping cart icon with item count
- Active states and hover effects

### Product Display
- Grid layout that adapts to screen size
- Product cards with images, descriptions, and prices
- Add to cart and view details buttons
- Category-based organization

### Shopping Cart
- Modal interface for cart management
- Quantity controls (+/- buttons)
- Remove individual items
- Clear entire cart
- Real-time total calculation
- Persistent storage

### Search & Filter
- Live search across product names and descriptions
- Category filtering (All, Shoes, Electronics, Groceries, Jerseys)
- Price range filtering ($0-50, $51-100, $101-200, $201+)
- "No results" messaging

### User Experience
- Loading animations
- Success notifications
- Smooth transitions
- Touch-friendly mobile interface
- Keyboard navigation support

## Customization

### Adding New Products
Edit the `products` object in `script.js`:

```javascript
const products = {
    categoryName: [
        {
            id: nextAvailableId,
            name: "Product Name",
            category: "categoryName",
            price: 0.00,
            description: "Description",
            image: "📦"
        }
    ]
};
```

### Styling Changes
Modify `styles.css` to customize:
- Colors and branding
- Layout and spacing
- Typography
- Animation effects

### Adding New Categories
1. Add category to HTML structure in `index.html`
2. Add products to `script.js`
3. Update filters in HTML
4. Modify display functions in JavaScript

## Performance Features

- CSS Grid and Flexbox for efficient layouts
- Optimized animations using transform and opacity
- Minimal DOM manipulation
- Efficient event delegation
- Local storage for data persistence

## Accessibility Features

- Semantic HTML structure
- Keyboard navigation support
- Focus indicators
- Alt text for images (emoji fallbacks)
- Screen reader friendly

## Future Enhancements

Potential features for future development:
- User authentication
- Payment processing integration
- Product reviews and ratings
- Wishlist functionality
- Advanced search with filters
- Product image galleries
- Inventory management
- Order tracking
- Email notifications

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions about this website, please contact Isaac's Store support.

---

*Built with modern web technologies for optimal performance and user experience.*