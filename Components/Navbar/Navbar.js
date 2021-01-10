import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.nav}>
				<div className={styles.nav__logo}>
					<Link href="/">
						<a>ASMR</a>
					</Link>
				</div>
				<div className={styles.nav__menu}>
					<div className={styles.menu}>
						<Link href="/">
							<a className={styles.menu__link}>Home</a>
						</Link>
						<Link href="">
							<a
								href="https://www.github.com"
								target="_blank"
								className={styles.menu__link}
							>
								Github
							</a>
						</Link>
						<Link href="/contact">
							<a className={styles.menu__link}>Contact</a>
						</Link>
					</div>
					<div className={styles.burger}></div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
