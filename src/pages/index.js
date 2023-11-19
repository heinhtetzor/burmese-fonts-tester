import DeliveryModal from '@/components/DeliveryModal';
import NextMoveLogo from '@/components/NextMoveLogo';
import getAllFonts from '@/helper/getAllFonts';
import { useState } from "react";

const Home = ({fonts}) => {

	const [selectedFont, setSelectedFont] = useState(fonts[0]);
	const [isBold, setIsBold] = useState(false);
	const [isItalic, setIsItalic] = useState(false);
	const [isLineThrough, setIsLineThrough] = useState(false);
	const [fontSize, setFontSize] = useState(18);
	const [showModal, setShowModal] = useState(false);

    return (
		<>
			<div className="flex flex-col h-screen w-screen">

				{/* title bar */}
				<div className="flex justify-center items-center h-12 border-b border-b-gray-200">
					<span className="font-serif font-bold italic text-lg">
						Burmese Fonts Tester
					</span>
				</div>

				{/* font | preview columns */}
				<div className="flex-1 flex flex-row overflow-hidden">

					{/* fonts */}
					<div className="flex flex-col w-1/4 border-r border-r-gray-200 hidden sm:flex">
											
						{/* title */}
						<div className="flex justify-center items-center h-8 border-b border-b-gray-200 shadow">
							<span className="font-bold text-xs">Fonts</span>
						</div>

						{/* desktop font list scroll */}
						<div className="flex-1 overflow-auto">
							{ fonts.map( (font, index) => 
								<div 
									key={index} 
									className={`flex items-center justify-center h-14 mx-3 my-2 cursor-pointer rounded-xl ${ font.fileName === selectedFont.fileName ? 'bg-sky-100' : ''}`}
									onClick={ () => setSelectedFont(font) }
								>
									<span className={`text-sm font-semibold text-center ${ font.fileName === selectedFont.fileName ? 'text-black' : 'text-gray-500'}`}>
										{font.displayName}
									</span>
								</div>
							)}
						</div>

					</div>
						
					{/* preview */}
					<div className="flex-1 flex flex-col overflow-hidden">

						{/* title */}
						<div className="flex justify-center items-center h-8 border-b border-b-gray-200 shadow">
							<span className="font-bold text-xs">Preview</span>
						</div>

						{/* tools */}
						<div className="flex flex-row space-x-2 justify-end m-3">

							<div className="flex flex-row rounded border border-gray-300">
								<button 
									className={`flex items-center justify-center h-8 w-8 rounded-l ${ isBold && 'bg-gray-500'}`}
									onClick={() => setIsBold( prev => !prev )}
								>
									<span className={`font-serif ${ isBold ? 'text-white' : 'text-black' }`}>B</span>
								</button>
								<button 
									className={`flex items-center justify-center h-8 w-8 border-x border-x-gray-300 ${ isItalic && 'bg-gray-500'}`}
									onClick={() => setIsItalic( prev => !prev )}
								>
									<span className={`font-serif ${ isItalic ? 'text-white' : 'text-black' }`}>I</span>
								</button>
								<button 
									className={`flex items-center justify-center h-8 w-8 rounded-r ${ isLineThrough && 'bg-gray-500'}`}
									onClick={() => setIsLineThrough( prev => !prev )}
								>
									<span className={`font-serif line-through ${ isLineThrough ? 'text-white' : 'text-black' }`}>W</span>
								</button>
							</div>

							<div className="flex flex-row rounded border border-gray-300 px-1">
								
								<div className="flex items-center justify-center h-8 w-36 rounded-r">
									<input
										type="range"
										min="10"
										max="200"
										step="1"
										value={fontSize}
										onChange={ input => setFontSize(Number(input.currentTarget.value)) }
									/>
								</div>
								<div className="flex items-center justify-center w-8 h-8">
									<span className="text-xs">{fontSize}px</span>
								</div>
							</div>

							<div className="flex flex-row rounded border border-gray-300">
								<button 
									className="flex items-center justify-center h-8 w-8 rounded active:bg-gray-300"
									onClick={ () => setShowModal(true)}
								>
									<span>&#x2193;</span>
								</button>
							</div>

						</div>

						{/* mobile font list scroll */}
						<div className="flex overflow-x-auto sm:hidden bg-gray-100">
							<div className="flex flex-row">
								{ fonts.map( (font, index) => 
									<div 
										key={index} 
										className={`flex items-center justify-center w-24 m-2 cursor-pointer rounded-xl ${ font.fileName === selectedFont.fileName ? 'bg-sky-200' : ''}`}
										onClick={ () => setSelectedFont(font) }
									>
										<span className={`text-xs m-1 font-semibold text-center ${ font.fileName === selectedFont.fileName ? 'text-black' : 'text-gray-500'}`}>
											{font.displayName}
										</span>
									</div>
								)}
							</div>
						</div>

						<textarea
							className="flex-1 focus:outline-none placeholder:font-sans text-black w-full h-full resize-none p-8"
							style={{
								fontFamily: selectedFont.fileName,
								fontSize: fontSize,
								fontWeight: isBold ? 700 : 400,
								fontStyle: isItalic ? 'italic' : '',
								textDecorationLine: isLineThrough ? 'line-through' : ''
							}}
							defaultValue="သီဟိုဠ်မှ ဉာဏ်ကြီးရှင်သည် အာယုဝဍ္ဎနဆေးညွှန်းစာကို ဇလွန်ဈေးဘေး ဗာဒံပင်ထက် အဓိဋ္ဌာန်လျက် ဂဃနဏဖတ်ခဲ့သည်။"
							placeholder="Type something..."
						/>
					</div>
				</div>

				<div className="flex items-center justify-end border-t border-t-gray-200 h-8">
					<div className="flex flex-row items-center space-x-2 mr-4">
						<span className="text-2xs italic text-gray-400">Brought To You By</span>
						<NextMoveLogo theme="dark"/>
					</div>
				</div>

			</div>

			<DeliveryModal
				show={showModal}
				onClose={ () => setShowModal(false)}
				selectedFont={selectedFont}
			/>
		</>
    );
}

export async function getStaticProps() {

	const snakeCaseToReadableCase = (str) => {
		return str.replace(/_([a-z])/g, function(match, letter) {
			return letter.toUpperCase();
		}).replace(/^([a-z])/, function(match, letter) {
			return letter.toUpperCase();
		}).replace(/([a-z])([A-Z])/g, function(match, first, second) {
			return first + ' ' + second;
		});
	}

	const allFonts = getAllFonts();

	const fonts = allFonts.map( font => {
		return {
			displayName: snakeCaseToReadableCase(font.fileName),
			...font
		}
	})
	return {
		props: {
			fonts: fonts,
		},
	};
}

export default Home;