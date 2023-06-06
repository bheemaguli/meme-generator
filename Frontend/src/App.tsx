import { Button, TextInput } from "flowbite-react";
import "./App.css";
import memesData from "./memesData";

function App() {
	function handleClick() {
		const memesArray = memesData.data.memes;
		const randId = Math.floor(Math.random() * memesArray.length);
		const imgUrl = memesArray[randId].url;
		console.log("imgUrl: " + imgUrl);
	}
	return (
		<div className="bg-violet-300 w-screen h-screen overflow-scroll pb-3">
			<nav className="flex flex-row gap-4 relative top-0 left-0 bg-violet-700 text-white h-24 py-4 px-7 items-center">
				<img src={"./troll-face.png"} className="w-20 h-16 flex-none"></img>
				<h1 className="text-5xl font-extrabold">Meme Generator</h1>
				<h5 className="font-light text-xl ml-auto">React Course - Project 3</h5>
			</nav>
			<div className="container mx-auto mt-5" id="page-body">
				<div className="flex flex-row gap-4 w-full mt-24">
					<div className="basis-1/2">
						<TextInput
							id="base"
							placeholder="Top Text"
							type="text"
							sizing="lg"
							color="gray"
						></TextInput>
					</div>
					<div className="basis-1/2">
						<TextInput
							id="base"
							placeholder="Bottom Text"
							type="text"
							sizing="lg"
							color="gray"
						></TextInput>
					</div>
				</div>
				<div className="my-5">
					<Button fullSized={true} onClick={handleClick}>
						<p className="text-2xl font-bold">
							Get a new meme image <span className="text-green-200">🖼</span>
						</p>
					</Button>
				</div>
				<img
					className="object-contain mx-auto rounded-lg"
					src={"./meme-sample.jpg"}
				></img>
			</div>
		</div>
	);
}

export default App;
