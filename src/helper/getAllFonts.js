const fs = require('fs');
const path = require('path');

export default () => {
    const fontsDirectory = path.join(process.cwd(), 'public/fonts');
    const fontFiles = fs.readdirSync(fontsDirectory);

    const fonts = [];

    fontFiles.map((fontFile) => {
        const fileName = path.basename(fontFile, path.extname(fontFile)).replace(/\.[^/.]+$/, '');
        const extension = path.extname(fontFile).slice(1);

        //to skip DS_store
        if(fileName !== ''){
            fonts.push({
                fileName,
                extension 
            });
        }
    });

    return fonts;
}