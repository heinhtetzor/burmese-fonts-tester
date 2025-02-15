export default (fontFiles) => {

    const fontFaces = fontFiles.map( fontFile => {
        return `
            @font-face {
                font-family: '${fontFile.fileName}';
                src: url('https://burmesefonts.vercel.app/api/fonts/${fontFile.fileName}.${fontFile.extension}') format('truetype'),
            }
        `
    }).join('\n');

    const cssFile = `
        /* Auto-generated font-faces */
        /* Brought to you by NextMove.inc */
        ${fontFaces}
    `;
    
    return cssFile;
}