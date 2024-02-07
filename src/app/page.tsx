'use client'
import { useState, useEffect } from "react";

export default function Home() {
	const [noCount, setNoCount] = useState(0);
	const [yesPressed, setYesPressed] = useState(false);
	const [text, setText] = useState('No');
	const [noClicked, setNoClicked] = useState(false);

	const yesButtonSize = noCount + 4;

	const handleClick = () => {
		setText('Click the other button!!!');
		setNoCount(noCount + 1);
		setNoClicked(true);
	}

	useEffect(() => {
		if (noClicked) {
			const timer = setTimeout(() => {
				setText('No');
				setNoClicked(false);
			}, 500);

			return () => clearTimeout(timer);
		}
	}, [noClicked]);

	return (
		<div className="valentine-container flex flex-col items-center justify-center h-screen" style={{backgroundColor: yesPressed ? '#f8f3f2' : '#fcfefc'}}>
			{yesPressed ? (
				<>
					<h1>Yay!!!!</h1>
					<img
						src="https://s6.ezgif.com/tmp/ezgif-6-619140af9f.gif"
					/>
				</>
			) : (
				<>
					<h1>Happy Valentine's Day Jade!!!</h1>
					<h1>Will you be my valentine?</h1>
					<img
						src="https://gifdb.com/images/high/bear-love-bouncing-mocha-with-flowers-n4m0fyne6h4e6y2x.gif"
					/>
					<div>
						<button
							className="button"
							style={{fontSize: `${yesButtonSize}vw`}}
							onClick={() => setYesPressed(true)}
						>Yes</button>
						<button className="button" onClick={handleClick}>{text}</button>
					</div>
				</>
			)}
		</div>
	);
}
