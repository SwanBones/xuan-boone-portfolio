import Home_GameDev from "./home-game-dev";
import Home_Hero from "./home-hero";
import Home_Hobbies from "./home-hobbies";
import Home_WebDev from "./home-webdev";

export default function Home_Main() {
	return (
		<main>
			<Home_Hero />
			<Home_WebDev />
			<Home_GameDev />
			<Home_Hobbies />
		</main>
	);
}
