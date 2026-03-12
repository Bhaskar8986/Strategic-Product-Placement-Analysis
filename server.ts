import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, Images)
app.use('/static', express.static(path.join(__dirname, 'static')));

// Serve built frontend from dist
app.use(express.static(path.join(__dirname, 'dist')));

// API endpoint to get the list of images in static/images
app.get('/api/images', (req, res) => {
    const imagesDir = path.join(__dirname, 'static/images');
    
    // Create directory if it doesn't exist (safety)
    if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
    }

    try {
        const files = fs.readdirSync(imagesDir);
        // Filter for image files
        const imageFiles = files.filter(file => 
            /\.(png|jpg|jpeg|gif|webp)$/i.test(file)
        );
        res.json(imageFiles);
    } catch (err) {
        console.error('Error reading images directory:', err);
        res.status(500).json({ error: 'Failed to load images' });
    }
});

// Main route - serve dist/index.html for SPA
app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'dist/index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.sendFile(path.join(__dirname, 'templates/index.html'));
    }
});

// Fallback for all other routes to index.html (SPA routing)
app.get('*', (req, res) => {
    const indexPath = path.join(__dirname, 'dist/index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.sendFile(path.join(__dirname, 'templates/index.html'));
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
