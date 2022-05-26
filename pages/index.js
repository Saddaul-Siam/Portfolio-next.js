import Head from "next/head";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MyProjects from "../components/MyProjects";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import SkillsAndExperience from "../components/SkillsAndExperience";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 scroll-smooth">
      <Head>
        <title>Saddaul Siam</title>
        <meta name="description" content="Saddaul Siam personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection /> 
      <Services />
      <SkillsAndExperience />
      <AboutMe />
      <MyProjects />
      <ContactMe />
      <Footer />
    </main>
  );
}
