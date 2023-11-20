const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
    
    const fileName = req.query.fileName;
    
    const unicodesPath = path.join(process.cwd(), 'public/fonts/unicodes', fileName);
    const nonUnicodesPath = path.join(process.cwd(), 'public/fonts/non_unicodes', fileName);

    const filePath = fs.existsSync(unicodesPath) ? unicodesPath : nonUnicodesPath;

    if (!fs.existsSync(filePath)) {
		  return res.status(404).json({ error: "Resource not found" });
    }

    const fontFile = fs.readFileSync(filePath);

    res.setHeader('Content-Type', 'font/ttf');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.end(fontFile);
}
  