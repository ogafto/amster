import Navbar from "@/components/navbar/navbar";
import Header from "@/components/sections/header";
import Links from "@/components/sections/links";
import Players from "@/components/sections/players";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative z-20">
      <Navbar />
      <Header />
      <Links />
      <Players />
      <Contact />
      <Footer />
    </main>
  );
}
