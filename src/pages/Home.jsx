
import Hero from "../components/Sharedsections/Hero";
import Services from "../components/home/Services";
import SupportCTA from "../components/home/Supportcta";
import RecentBooks from "../components/home/Recentbooks";
import ProcessSteps from "../components/home/ProcessSteps";
import PlatformLogos from "../components/home/PlatformLogos";
import BookWriting from "../components/home/BookWriting";
import Testimonials from "../components/home/Testimonials";
import HomeHero from "../components/Sharedsections/Test";





function Home() {
  

  return (
    <div className="min-h-screen bg-[#fff]">
      <Hero/>
      <Services/>
      <SupportCTA/>
      <RecentBooks />
      <SupportCTA variant="publish" />
      <ProcessSteps/>
      <PlatformLogos/>
      <BookWriting/>
      <SupportCTA variant="stats" />
      <Testimonials/>

      
    
     
    </div>
  );
}

export default Home;