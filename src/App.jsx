import Header from "./components/Header";
import About from "./components/About";
import Stories from "./components/Story";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Features from "./components/Features";
import Team from "./components/Team";
import CtaSection from "./components/Cta";
import CoreValueSection from "./components/CoreValue";

const App = () => {
	return (
		<>
			<Header />
			<Services />
			<About />
			<Features />
			<Team />
			<CoreValueSection />
			<CtaSection />
			<Contact />

			<Footer />
		</>
	);
};

export default App;
