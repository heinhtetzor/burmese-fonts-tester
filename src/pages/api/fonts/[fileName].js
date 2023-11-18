const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
    
    const fileName = req.query.fileName;
    const filePath = path.join(process.cwd(), `public/fonts/${fileName}`);

    if (!fs.existsSync(filePath)) {
		return res.status(404).json({ error: "Resource not found" });
    }

    const fontFile = fs.readFileSync(filePath);

    res.setHeader('Content-Type', 'font/ttf');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.end(fontFile);
}
  