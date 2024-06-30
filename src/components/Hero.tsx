function Hero() {
    return (
		<>
			<div className="w-full h-screen content-center relative z-0">
				<div className="grid relative parallax">
					<div className="text-center content-center title-and-name">
						<h1 className="text-4xl font-bold sm:text-6xl">Ruben Puga</h1>
						<p>Frontend Developer - Fullstack Engineer</p>
					</div>
					<img id="svg-ground-1" src="src/assets/parallax/ground-1.svg"></img>
					<img id="svg-ground-2" src="src/assets/parallax/ground-2.svg"></img>
					<img id="svg-ground-3" src="src/assets/parallax/ground-3.svg"></img>
					<img id="svg-mountains-1" src="src/assets/parallax/mountains-1.svg"></img>
					<img id="svg-mountains-2" src="src/assets/parallax/mountains-2.svg"></img>
					<img id="svg-stars" src="src/assets/parallax/stars.svg"></img>
					{/* These will be used in a latter implementation */}
					{/* <img id="svg-falling-star-1" src="src/assets/parallax/falling-star-1.svg"></img>
					<img id="svg-falling-star-2" src="src/assets/parallax/falling-star-2.svg"></img> */}
				</div>
			</div>
		</>
    );
}

export default Hero