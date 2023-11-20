import getAllFonts from '@/helper/getAllFonts';
import generateCssFontFaces from '@/helper/generateCssFontFaces';

export default (req, res) => {

	//remove extension
	const fileName = req.query.fileName.replace(/\.[^/.]+$/, '');;
	const allFonts = getAllFonts();

	const targetFonts = (fileName === 'all') ? allFonts : allFonts.filter( e => e.fileName === fileName );

	if(targetFonts.length < 1){
		return res.status(404).json({ error: "Resource not found" });
	}

	const cssFile = generateCssFontFaces(targetFonts);

	res.setHeader('Content-Type', 'text/css');
	res.status(200).send(cssFile);
};

