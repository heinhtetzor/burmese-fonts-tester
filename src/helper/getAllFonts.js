const fs = require('fs');
const path = require('path');

export default () => {
    const getFonts = (folderName, unicode) => {
        const fontsDirectory = path.join(process.cwd(), `public/fonts/${folderName}`);
        const fontFiles = fs.readdirSync(fontsDirectory);
        const fonts = [];
        
        fontFiles.map( fontFile => {
            const fileName = path.basename(fontFile, path.extname(fontFile)).replace(/\.[^/.]+$/, '');
            const extension = path.extname(fontFile).slice(1);
            if(fileName !== ''){
                fonts.push({
                    fileName,
                    extension,
                    unicode
                })
            }
        });

        return fonts;
    };

    const unicodeFonts = getFonts('unicodes', true);
    const nonUnicodeFonts = getFonts('non_unicodes', false);

    return [...unicodeFonts, ...nonUnicodeFonts];
};
