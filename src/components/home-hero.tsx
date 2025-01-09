"use client";
import "react-tooltip/dist/react-tooltip.css";
import styles from "/src/styles/page.module.css";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

export default function Home_Hero() {
	gsap.registerPlugin(ScrollToPlugin);
	const about = useRef(null);
	const description = useRef(null);
	const highlight = useRef(null);
	const title = useRef(null);
	useEffect(() => {
		const timeline = gsap.timeline();

		timeline
			.to(highlight.current, {
				width: "100%",
				duration: 0.5,
				keyframes: [
					{ width: "60%", ease: "steps(1)" },
					{ width: "70%", ease: "steps(1)" },
					{ width: "90%", ease: "steps(1)" },
					{ width: "95%", ease: "steps(1)" },
					{ width: "100%", ease: "steps(5)" },
					{ opacity: "0%", ease: "steps(1)" },
					{ opacity: "100%", ease: "steps(1)" },
					{ left: "100%", ease: "steps(5)" },
					{ width: "0%", ease: "steps(5)" },
				],
			})
			.to(
				title.current,
				{
					duration: 0.4,
					keyframes: [
						{
							opacity: 0,
							letterSpacing: "-10px",
							fontSize: "12em",
							ease: "steps(1)",
						},
						{ opacity: 100, letterSpacing: "0px", ease: "steps(1)" },
						{ opacity: 0, letterSpacing: "-10px", ease: "steps(1)" },
					],
				},
				"<" // Play simultaneously with the previous animation
			)

			.to(
				title.current,
				{
					duration: 0.4,
					keyframes: [
						{ letterSpacing: "-1px", fontSize: "12em", ease: "steps(1)" },
						{ opacity: 100, letterSpacing: "-10px", ease: "steps(1)" },
						{ letterSpacing: "-0.5px", ease: "steps(1)" },
						{ letterSpacing: "-0.9px", fontSize: "11em", ease: "steps(1)" },

						{ letterSpacing: "-0px", ease: "steps(1)" },
					],
				}
				// Play simultaneously with the previous animation
			)
			.to(
				description.current,
				{
					duration: 0.2,
					keyframes: [
						{ backgroundColor: "white", ease: "steps(1)" },
						{ backgroundColor: "transparent", ease: "steps(1)" },
						{ backgroundColor: "white", color: "white", ease: "steps(1)" },
						{ backgroundColor: "transparent", ease: "steps(1)" },
					],
				}
				// Play simultaneously with the previous animation
			);
	}, []);

	return (
		<div className={styles.home_hero}>
			<video autoPlay muted loop className={styles.video_bg}>
				<source src="banner.mp4" type="video/mp4" />
			</video>
			<div
				style={{
					display: "inline-block",
					padding: 0 /* Remove padding for tight fit */,
					marginBottom: "-2em",
					position: "relative", // Add relative positioning to parent
				}}
			>
				<div
					ref={highlight}
					id="animation"
					style={{
						height: "100%",
						position: "absolute",
						width: "0%",
						backgroundColor: "white",
					}}
				></div>
				<h1 style={{ margin: 0, display: "inline" }} ref={title}>
					XUAN BOONE
				</h1>
			</div>

			<p style={{ color: "transparent" }} ref={description}>
				{/* Étudiant en dernière année d’Ingénieur en Informatique et Systèmes
				d'Information À l’UTT */}
				Final year student in Computer Science and Information Systems
				Engineering at UTT
			</p>
			{/* <p>Actuellement en recherche de stage | Stage de fin d’études</p> */}
			<div className={styles.about_container}>
				<div className={styles.about} ref={about}>
					<div className={styles.ctas}>
						<a
							className={styles.primary}
							rel="noopener noreferrer"
							onClick={() => {
								gsap.to(about.current, {
									top: "-12em",
									duration: 1,
									ease: "expo.out",
								});
								gsap.to(description.current, {
									duration: 0.5,
									opacity: 1,
									ease: "expo.out",
								});
							}}
						>
							Hide
						</a>
					</div>
					<p>
						Born in Versailles, France, I was lucky enough to have lived most of
						my life in Asia. My passions for computer development and various
						arts, my studies and my professional experiences have confirmed my
						choice to move towards software development. Thank you for your time
						you are taking to explore my portfolio.
					</p>
					<div className={styles.ctas}>
						<a
							className={styles.primary}
							rel="noopener noreferrer"
							onClick={() => {
								gsap.to(about.current, {
									top: "-20px",
									duration: 1,
									ease: "expo.out",
								});
								gsap.to(description.current, {
									duration: 0.5,
									opacity: 0,
									ease: "expo.out",
								});
							}}
						>
							About me
						</a>
					</div>
				</div>
			</div>
			<div className={styles.ctas_icon}>
				<a
					className={`${styles.logo} ${styles.nav_icon} `}
					style={{
						position: "relative",
						bottom: "-50px",
					}}
					onClick={() => {
						gsap.to(window, {
							duration: 1,
							scrollTo: { y: "#home_education", offsetY: 250 },
							ease: "expo.out",
						});
					}}
				>
					<Image
						src={"arrow-double-down.svg"}
						alt={""}
						width={20}
						height={20}
					/>
				</a>
			</div>
		</div>
	);
}
