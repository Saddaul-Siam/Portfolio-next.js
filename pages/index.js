import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Head>
        <title>Saddaul Siam</title>
        <meta name="description" content="Saddaul Siam personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroSection />
      <Services />
    </div>
  );
}
