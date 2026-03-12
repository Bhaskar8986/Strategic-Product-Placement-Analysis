import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    // Try multiple possible paths where images might be
    const possiblePaths = [
      path.join(process.cwd(), 'dist/static/images'),
      path.join(process.cwd(), 'static/images'),
      path.join(process.cwd(), 'public/static/images'),
    ];
    
    let imagesDir = null;
    for (const dir of possiblePaths) {
      if (fs.existsSync(dir)) {
        imagesDir = dir;
        break;
      }
    }
    
    if (!imagesDir) {
      res.json([]);
      return;
    }

    const files = fs.readdirSync(imagesDir);
    const imageFiles = files.filter(file => 
      /\.(png|jpg|jpeg|gif|webp)$/i.test(file)
    );
    
    res.status(200).json(imageFiles);
  } catch (err) {
    console.error('Error reading images directory:', err);
    res.status(500).json({ error: 'Failed to load images' });
  }
}
