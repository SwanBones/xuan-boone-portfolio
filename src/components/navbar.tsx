"use client";
import styles from "../styles/page.module.css";
import subpageStyles from "../styles/subpages-styles.module.css";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Tooltip } from "react-tooltip";
import { usePathname } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Sidebar from "./sidebar";

export default function Navbar() {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);
	const pathname = usePathname();
	let xPercent = 0;
	let direction = 1;
	const step = 0.01;

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		// if (pathname == "/") {
		requestAnimationFrame(animation);
		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: "home_education",
				start: "top top",
				scrub: 1,
				end: "+=700",
			},
			opacity: 0,
		});
		gsap.to("#navbarContainer", {
			scrollTrigger: {
				trigger: "home_education",
				start: "top top",
				scrub: 1,
				end: "+=700",
			},
			paddingBottom: "20px",
		});
		// }

		gsap.to(slider.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				start: 0,
				end: window.innerHeight,
				scrub: true,
				onUpdate: (e) => {
					direction = e.direction * -1;
				},
			},
		});
	}, []);
	const openSidebar = () => {
		gsap.to("#sidebar", {
			duration: 0.5,
			left: "calc(100% - 400px)",
			ease: "expo.out",
		});
	};
	// gsap.to(slider.current, {
	// 	scrollTrigger: {
	// 		trigger: document.getElementsByClassName(styles.home_gameDev)[0],
	// 		start: 0,
	// 		end: 30,
	// 		scrub: true,
	// 	},
	// 	x: "-=300px",
	// 	color: "red",
	// });

	const animation = () => {
		gsap.set(firstText.current, { xPercent: xPercent });
		gsap.set(secondText.current, { xPercent: xPercent });
		xPercent += step * direction;
		if (xPercent < -100) {
			xPercent = 0;
		}
		if (xPercent > 0) {
			xPercent = -100;
		}
		requestAnimationFrame(animation);
	};
	return (
		<div>
			<Sidebar />
			<div className={styles.navbar_container} id="navbarContainer">
				<nav className={styles.navbar}>
					<Link href="/" className={styles.navbar_logo}>
						<Image
							aria-hidden
							src={"/images/logo.png"}
							alt={""}
							width={119}
							height={50}
						/>
					</Link>
					<div id={styles.desktop_navbar}>
						<ul className={styles.ctas}>
							<li>
								<Link
									className={
										pathname == "/" ? styles.primary : styles.secondary
									}
									href="/"
								>
									Home
								</Link>
							</li>
							<li>
								<a
									className={
										pathname == "/education" ? styles.primary : styles.secondary
									}
									href="/education"
								>
									Education
								</a>
							</li>
							<li>
								<a
									className={
										pathname == "/experience"
											? styles.primary
											: styles.secondary
									}
									href="/experience"
								>
									Experience
								</a>
							</li>
							<li>•</li>
							<li>
								<a
									href="/projects"
									className={
										pathname == "/projects" ? styles.primary : styles.secondary
									}
								>
									Projects
								</a>
							</li>
							<li>
								<a
									href="/art"
									className={
										pathname == "/art" ? styles.primary : styles.secondary
									}
								>
									Art
								</a>
							</li>
						</ul>

						<ul className={styles.ctas_icon}>
							<li>
								<a
									href="https://youtube.com/@swanbones"
									target="_blank"
									className={`${styles.nav_icon} ${styles.logo}`}
									data-tooltip-id="icon-tooltip"
									data-tooltip-content="YouTube Channel"
								>
									<Image
										src={"/vector/youtube.svg"}
										alt={"YouTube"}
										height={"20"}
										width={"20"}
									/>
								</a>
							</li>
							<li>
								<a
									href="https://open.spotify.com/artist/1tP96frSaPCw7vNXZnLIqW"
									target="_blank"
									className={`${styles.nav_icon} ${styles.logo}`}
									data-tooltip-id="icon-tooltip"
									data-tooltip-content="Spotify Artist Page"
								>
									<Image
										src={"/vector/spotify.svg"}
										alt={"Spotify"}
										height={"20"}
										width={"20"}
									/>
								</a>
							</li>
							<li>
								<a
									href="https://artstation.com/swanbones"
									target="_blank"
									className={`${styles.nav_icon} ${styles.logo}`}
									data-tooltip-id="icon-tooltip"
									data-tooltip-content="Artstation Portfolio"
								>
									<Image
										src={"/vector/artstation.svg"}
										alt={"Artstation"}
										height={"20"}
										width={"20"}
									/>
								</a>
							</li>
							<li>
								<a
									href="https://github.com/SwanBones"
									target="_blank"
									className={`${styles.nav_icon} ${styles.logo}`}
									data-tooltip-id="icon-tooltip"
									data-tooltip-content="GitHub Profile"
								>
									<Image
										src={"/vector/github.svg"}
										alt={"Github"}
										height={"20"}
										width={"20"}
									/>
								</a>
							</li>
							<li>
								<a
									href="https://swanbones.itch.io/"
									target="_blank"
									className={`${styles.nav_icon} ${styles.logo}`}
									data-tooltip-id="icon-tooltip"
									data-tooltip-content="Itch.io Page"
								>
									<Image
										src={"/vector/itchio.svg"}
										alt={"Itch.io"}
										height={"20"}
										width={"20"}
									/>
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/xuan-boone-732476181"
									target="_blank"
									className={`${styles.nav_icon} ${styles.logo}`}
									data-tooltip-id="icon-tooltip"
									data-tooltip-content="LinkedIn"
								>
									<Image
										src={"/vector/linkedin.svg"}
										alt={"LinkedIn"}
										height={"20"}
										width={"20"}
									/>
								</a>
							</li>
						</ul>
						<Tooltip
							id="icon-tooltip"
							place="bottom"
							arrowColor="transparent"
							disableStyleInjection
							opacity={1}
							className={styles.icon_tooltip}
							offset={65}
						/>
					</div>

					<div className={styles.ctas_icon} id={styles.sidebar_burger_button}>
						<a
							className={`${styles.nav_icon} ${styles.logo}`}
							onClick={openSidebar}
						>
							<Image
								src={"vector/menu-burger.svg"}
								alt={""}
								width={20}
								height={20}
							/>
						</a>
					</div>
				</nav>
				<div className={subpageStyles.slider_container}>
					<div className={subpageStyles.slider} ref={slider}>
						<p ref={firstText}>
							Website made using Typescript, React.js, and Next.js, hosted on
							Firebase, Domain: SquareSpace. Animations made using GSAP. Created
							using Visual Studio Code, design inspired by modern web standards
							and optimized for performance and accessibility. Continuous
							deployment from GitHub.
						</p>
						<p ref={secondText}>
							Website made using Typescript, React.js, and Next.js, hosted on
							Firebase, Domain: SquareSpace. Animations made using GSAP. Created
							using Visual Studio Code, design inspired by modern web standards
							and optimized for performance and accessibility. Continuous
							deployment from GitHub.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
