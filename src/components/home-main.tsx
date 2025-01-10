"use client";
import Home_GameDev from "./home-game-dev";
import Home_Hero from "./home-hero";
import Home_Hobbies from "./home-hobbies";
import Home_WebDev from "./home-webdev";
import Home_Education from "./home-education";

export default function Home_Main() {
	return (
		<main style={{ overflow: "hidden" }}>
			<Home_Hero />
			<Home_Education />
			<Home_WebDev />
			<Home_GameDev />
			<Home_Hobbies />
		</main>
	);
}
