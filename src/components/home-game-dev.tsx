import styles from "/src/styles/page.module.css";

export default function Home_GameDev() {
	return (
		<div className={styles.home_gameDev}>
			<h2>Game Development</h2>
			<p>
				With experience in Unity, Unreal Engine and Godot Engine, I have
				developed independent games that have won first place in Game Jams.
			</p>

			<div className={styles.ctas}>
				<a
					className={styles.secondary}
					href="/game-dev"
					rel="noopener noreferrer"
				>
					See Projects
				</a>
			</div>
		</div>
	);
}
