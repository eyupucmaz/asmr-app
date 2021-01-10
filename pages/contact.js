import { Headc, Navbar } from "../Components";

export default function Home() {
	return (
		<div>
			<Headc title={"custom header"} />
			<Navbar />
			<div className="contact">Contact</div>
		</div>
	);
}
