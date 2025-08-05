# Ecommerce Store

A modern, responsive ecommerce website built with React, Vite, and Tailwind CSS.

## Features

- 🛍️ **Product Catalog** - Browse products with search and filtering
- 🛒 **Shopping Cart** - Add, remove, and manage cart items
- 💳 **Checkout Process** - Complete purchase with shipping and payment forms
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Beautiful design with Tailwind CSS
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 🔄 **State Management** - React Context for cart management

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd ecommerce-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar
│   └── Footer.jsx      # Footer component
├── context/            # React Context providers
│   └── CartContext.jsx # Shopping cart state management
├── data/               # Static data
│   └── products.js     # Product catalog
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── Products.jsx    # Products listing
│   ├── ProductDetail.jsx # Individual product page
│   ├── Cart.jsx        # Shopping cart
│   └── Checkout.jsx    # Checkout process
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## Key Features Explained

### 1. Product Management
- Product catalog with categories
- Search and filtering functionality
- Product details with images and descriptions
- Rating and review system

### 2. Shopping Cart
- Add/remove products
- Quantity management
- Cart persistence using React Context
- Real-time total calculation

### 3. Checkout Process
- Shipping information form
- Payment information form
- Order summary
- Order confirmation

### 4. Responsive Design
- Mobile-first approach
- Responsive navigation
- Adaptive product grid
- Touch-friendly interactions

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Adding New Products

Edit `src/data/products.js` to add new products:

```javascript
{
  id: 9,
  name: "New Product",
  price: 49.99,
  description: "Product description",
  category: "Electronics",
  image: "https://example.com/image.jpg",
  rating: 4.5,
  reviews: 100,
  inStock: true,
  features: ["Feature 1", "Feature 2"]
}
```

### Styling

The project uses Tailwind CSS for styling. You can:

1. Modify `tailwind.config.js` for theme customization
2. Add custom styles in `src/index.css`
3. Use Tailwind utility classes in components

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation if needed

## Learning Resources

This project demonstrates several React concepts:

- **Hooks**: useState, useEffect, useContext
- **Context API**: State management across components
- **React Router**: Navigation and routing
- **Component Composition**: Reusable components
- **Event Handling**: User interactions
- **Conditional Rendering**: Dynamic UI
- **Form Handling**: Controlled components

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help, please open an issue on GitHub.
