import styles from "../styles/page.module.css";
import Home_Main from "../components/home-main";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
	return (
		<div className={styles.page}>
			<Navbar />
			<Home_Main />
			<Footer />
		</div>
	);
}
