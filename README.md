# Historic Tours of Texas Website

A modern, responsive static website for a Texas historic tour company, built with HTML, CSS, and JavaScript.

## Project Overview

This website showcases Texas's rich heritage through expert-guided historic tours. The design features a Texas-inspired color palette with warm browns, golds, and sandstone tones, creating an authentic and professional appearance.

## Features

- **Responsive Design**: Fully responsive for desktop, tablet, and mobile devices
- **Modern UI**: Clean, elegant design with smooth animations and hover effects
- **Interactive Elements**: Functional navigation, contact forms, and filtering system
- **Accessibility**: Semantic HTML5 structure with proper ARIA labels
- **Performance**: Optimized CSS and JavaScript for fast loading

## Pages

### 1. Home Page (`index.html`)
- Hero section with call-to-action
- Featured tours showcase
- Company overview snippet
- Contact information cards
- Customer testimonials

### 2. Tours Page (`tours.html`)
- Comprehensive tour listings
- Regional filtering system
- Detailed tour information
- Booking integration

### 3. About Page (`about.html`)
- Company history and mission
- Founder biography
- Team member profiles
- Company values and awards

### 4. Contact Page (`contact.html`)
- Multi-channel contact information
- Interactive contact form
- FAQ section
- Office location map

### 5. Dashboard (`dashboard.html`)
- Admin-style interface
- Statistics and analytics
- Booking management
- Tour and guide performance

## Technical Implementation

### HTML Structure
- Semantic HTML5 elements
- Proper heading hierarchy
- Accessible form elements
- SEO-optimized meta tags

### CSS Features
- CSS custom properties for theming
- Flexbox and Grid layouts
- Responsive media queries
- Smooth animations and transitions
- Mobile-first design approach

### JavaScript Functionality
- Mobile navigation toggle
- Form validation and submission
- Dynamic content filtering
- Scroll effects and animations
- Interactive FAQ system
- Dashboard statistics animation

## Design System

### Color Palette
- **Primary**: #8B4513 (Saddle brown)
- **Secondary**: #DAA520 (Goldenrod)
- **Accent**: #DEB887 (Burlywood)
- **Text Dark**: #2C1810 (Dark brown)
- **Text Light**: #F5F5DC (Beige)
- **Background Light**: #FAF0E6 (Linen)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Lato (sans-serif)
- **Weights**: 300, 400, 700 for hierarchy

### Components
- Buttons with hover states
- Cards with shadow effects
- Forms with validation states
- Navigation with mobile toggle
- Tables for dashboard data

## File Structure

```
Historic Tours/
├── index.html          # Home page
├── tours.html           # Tour listings
├── about.html           # Company information
├── contact.html         # Contact page
├── dashboard.html        # Admin dashboard
├── css/
│   └── style.css        # Main stylesheet
├── js/
│   └── main.js          # JavaScript functionality
└── images/
    └── README.md        # Image guidelines
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Features

- Optimized CSS delivery
- Minimal JavaScript footprint
- Responsive image handling
- Efficient animation using CSS transforms
- Semantic HTML for better SEO

## Getting Started

1. Open `index.html` in a web browser to view the website
2. All pages are interconnected through navigation
3. Images are placeholders using Picsum Photos service
4. Forms are functional (UI only, no backend)

## Customization

### Colors
Edit CSS variables in `:root` section of `css/style.css`:

```css
:root {
    --primary-color: #8B4513;
    --secondary-color: #DAA520;
    --accent-color: #DEB887;
    /* ... other variables */
}
```

### Fonts
Update Google Fonts import in `css/style.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Fonts&display=swap');
```

### Content
Edit HTML files directly or use a code editor with live preview for real-time changes.

## Images

The `images/` folder contains a README with guidelines for:
- Image specifications
- Recommended file names
- Size requirements
- Usage suggestions

Replace placeholder images with actual tour photos, team photos, and company assets.

## Deployment

This is a static website and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static web server
- Traditional web hosting

## Future Enhancements

- Add real image assets
- Implement backend for form submissions
- Add booking system integration
- Include customer review system
- Add multilingual support
- Implement search functionality

## License

This project is for demonstration purposes. Ensure proper licensing for any images or assets used in production.

## Contact Information

For questions about this website implementation, refer to the contact page design or create an issue in the project repository.
