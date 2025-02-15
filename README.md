# Baidehi's Architecture Portfolio

A minimalist portfolio website showcasing architectural work with a focus on visual presentation and clean design.

## Features

- Clean, minimalist design
- Responsive layout for all devices
- Image-focused presentation
- Smooth transitions and animations
- Project modal with detailed views
- Lazy loading for optimal performance

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── images/            # Image directory
    ├── hero.jpg       # Hero section image
    ├── profile.jpg    # About section profile image
    └── project1/      # Project images directories
        ├── 1.jpg
        ├── 2.jpg
        └── 3.jpg
    └── project2/
        ├── 1.jpg
        ├── 2.jpg
        └── 3.jpg
    └── project3/
        ├── 1.jpg
        ├── 2.jpg
        └── 3.jpg
```

## Setup

1. Create an `images` directory and add your images:
   - Add a hero image as `hero.jpg`
   - Add a profile photo as `profile.jpg`
   - Create project directories (project1, project2, etc.) with images

2. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```

3. Visit the site:
   ```
   http://localhost:8000
   ```

## Customization

### Adding Projects

1. Add new project images to the `images` directory
2. Update the `projectData` object in `script.js` with your project details
3. Add a new project card in the HTML

### Modifying Styles

- Colors: Update the CSS variables in `:root`
- Typography: Change the font imports and font-family properties
- Spacing: Modify the `--spacing-unit` variable

### Content Updates

- Update text content in `index.html`
- Modify project descriptions in `script.js`
- Add or remove sections as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- Fonts: Work Sans (Google Fonts)
- Images: Replace with your own architectural work 