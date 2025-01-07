"use client";
import styles from "../styles/page.module.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();

	return (
		<div className={styles.navbar_container}>
			<nav className={styles.navbar}>
				<a href="/">
					<Image
						aria-hidden
						src={"/logo.png"}
						alt={""}
						width={119}
						height={50}
					/>
				</a>
				<div>
					<ul className={styles.ctas}>
						<li>
							<a
								className={pathname == "/" ? styles.primary : styles.secondary}
								href="/"
							>
								Home
							</a>
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
						<li>
							<a
								href="/hobbies"
								className={
									pathname == "/hobbies" ? styles.primary : styles.secondary
								}
							>
								Hobbies
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
									src={"/youtube.svg"}
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
									src={"/spotify.svg"}
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
									src={"/artstation.svg"}
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
									src={"/github.svg"}
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
									src={"/itchio.svg"}
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
									src={"/linkedin.svg"}
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
						offset={40}
					/>
				</div>
			</nav>
		</div>
	);
}
