import Image from "next/image";
import "react-tooltip/dist/react-tooltip.css";
import styles from "/src/styles/page.module.css";
import subpagess from "/src/styles/specific-styles.module.css";
import React, { useState } from "react";
import { Tooltip } from "react-tooltip";

export default function Home_Hero() {
	return (
		<div className={styles.home_hero}>
			<h1>XUÂN BOONE</h1>
			<p>
				{/* Étudiant en dernière année d’Ingénieur en Informatique et Systèmes
				d'Information À l’UTT */}
				Final year student in Computer Science and Information Systems
				Engineering at UTT
			</p>

			{/* <p>Actuellement en recherche de stage | Stage de fin d’études</p> */}
			<div className={styles.ctas}>
				<a
					className={styles.primary}
					href="education"
					rel="noopener noreferrer"
				>
					See Education
				</a>
			</div>
		</div>
	);
}
