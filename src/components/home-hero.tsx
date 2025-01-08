
import "react-tooltip/dist/react-tooltip.css";
import styles from "/src/styles/page.module.css";
import React from "react";
import Image from "next/image";

export default function Home_Hero() {
	return (
		<div className={styles.home_hero}>
			<video autoPlay muted loop className={styles.video_bg}>
				<source src="banner.mp4" type="video/mp4" />
			</video>
			<h1>XUÂN BOONE</h1>
			<p>
				{/* Étudiant en dernière année d’Ingénieur en Informatique et Systèmes
				d'Information À l’UTT */}
				Final year student in Computer Science and Information Systems
				Engineering at UTT
			</p>

			{/* <p>Actuellement en recherche de stage | Stage de fin d’études</p> */}
			<div className={styles.ctas} style={{ justifyContent: "center" }}>
				<a
					className={styles.primary}
					href="education"
					rel="noopener noreferrer"
				>
					See Education
				</a>
			</div>	
			<div>
				<Image src={"arrow-double-down.svg"} alt={""} style={{marginTop:200}} width={20} height={20} className={styles.logo}/>
			</div>				
		</div>
	);
}
