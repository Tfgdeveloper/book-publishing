
import Hero from "../components/Sharedsections/Hero";
import Services from "../components/home/Services";
import SupportCTA from "../components/home/Supportcta";
import RecentBooks from "../components/Sharedsections/Recentbooks";
import ProcessSteps from "../components/home/ProcessSteps";
import BookWriting from "../components/home/BookWriting";
import Testimonials from "../components/Sharedsections/Testimonials";
import PlatformLogos from "../components/Sharedsections/PlatformLogos";






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