import Head from "next/head";

const Headc = ({ title }) => {
	return (
		<>
			<Head>
				<title>ASMR-{title}</title>
				<meta
					name="description"
					content="Free ASMR sounds for relaxing and studing."
				/>
				<meta
					name="keywords"
					content="ASMR,relax sounds, study sounds, chill sounds, rainy sounds"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
		</>
	);
};

export default Headc;
