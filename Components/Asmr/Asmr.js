import styles from "./Asmr.module.css";
import { WiRain } from "react-icons/wi";

const Asmr = () => {
	return (
		<div className={styles.container}>
			<div className={styles.icon}>
				<WiRain></WiRain>
				ASMR COMPONETSs
			</div>
		</div>
	);
};

export default Asmr;
