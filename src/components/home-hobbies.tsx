import styles from "/src/styles/page.module.css";

export default function Home_Hobbies() {
	return (
		<div className={styles.home_hobbies} id="home_hobbies">
			<h2>Hobbies</h2>
			<p>
				My hobbies cover a vast range of digital arts, giving me a unique basis
				for any type of work
			</p>
			<p>
				Web and game development aside, I enjoy photography, cinematography,
				drawing, digital painting, music, sound design, and 3d animation
				{/* // gsap
				scroll here */}
			</p>
			<div className={styles.ctas} style={{ justifyContent: "flex-end" }}>
				<a className={styles.secondary} href="/art" rel="noopener noreferrer">
					Check them out!
				</a>
			</div>
		</div>
	);
}
