"use client";
import styles from "../styles/page.module.css";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	const closeSidebar = () => {
		gsap.to("#sidebar", { duration: 0.5, left: "100%", ease: "expo.out" });
	};
	const pathname = usePathname();

	return (
		<aside className={styles.sidebar} id="sidebar">
			<div>
				<div className={styles.ctas_icon}>
					<a
						className={`${styles.logo} ${styles.nav_icon}`}
						style={{ margin: "2em" }}
						onClick={closeSidebar}
					>
						<Image width={20} height={20} src={"/vector/cross.svg"} alt={""} />
					</a>
				</div>

				<ul className={`${styles.ctas} ${styles.sidebar_ul}`}>
					<li>
						<Link
							className={pathname == "/" ? styles.primary : styles.secondary}
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
								pathname == "/experience" ? styles.primary : styles.secondary
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
							className={pathname == "/art" ? styles.primary : styles.secondary}
						>
							Art
						</a>
					</li>
				</ul>
			</div>
			<div style={{ marginBottom: "2em" }}>
				<ul className={`${styles.ctas_icon} ${styles.sidebar_icon_ul}`}>
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
			</div>
		</aside>
	);
}
