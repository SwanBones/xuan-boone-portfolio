import styles from "./styles/page.module.css";
import Main from "./components/main";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
	return (
		<div className={styles.page}>
			<Navbar />
			<Main />
			<Footer />
		</div>
	);
}
