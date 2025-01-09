"use client";
import Home_GameDev from "./home-game-dev";
import Home_Hero from "./home-hero";
import Home_Hobbies from "./home-hobbies";
import Home_WebDev from "./home-webdev";
import Home_Education from "./home-education";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
export default function Home_Main() {
	useEffect(() => {
		gsap.registerPlugin(MotionPathPlugin);
		gsap.registerPlugin(ScrollTrigger);
		gsap.to("#rect", {
			duration: 5,
			motionPath: "#lineAC",
			scrollTrigger: {
				trigger: "home_education",
				start: "top top",
				scrub: 1,
				end: "+=900",
			},
		});
	}, []);
	return (
		<main style={{ overflow: "hidden" }}>
			<Home_Hero />
			<div>
				<path
					id="lineAC"
					d="M 100 350 q 150 -300 300 0"
					stroke="blue"
					fill="none"
					strokeWidth="4"
				/>
				<div
					style={{
						position: "absolute",
						backgroundColor: "blue",
						padding: "50px",
					}}
					id="rect"
				>
					hi
				</div>

				<Home_Education />
				<Home_WebDev />
				<Home_GameDev />
				<Home_Hobbies />
			</div>
		</main>
	);
}
