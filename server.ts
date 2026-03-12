import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files (CSS, Images)
app.use('/static', express.static(path.join(__dirname, 'static')));

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

// Main route to serve the dashboard
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
