import styles from "/src/styles/page.module.css";

export default function Home_Hobbies() {
	return (
		<div className={styles.home_hobbies}>
			<h2>Hobbies</h2>
			<p>
				Xuân&apos;s hobbies covers a vast range of digital arts, giving him a
				unique basis for his works
			</p>
			<p>
				Web and game development aside, he masters photography, cinematography,
				drawing, digital painting, music, sound design, and 3d animation
				{/* // gsap
				scroll here */}
			</p>
			<div className={styles.ctas}>
				<a className={styles.secondary} href="/art" rel="noopener noreferrer">
					Let me take you into my world
				</a>
			</div>
		</div>
	);
}
