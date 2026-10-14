
import Hero from "../components/sections/Hero";
import Services from "../components/home/Services";
import SupportCTA from "../components/home/Supportcta";
import RecentBooks from "../components/home/Recentbooks";
import ProcessSteps from "../components/home/ProcessSteps";
import PlatformLogos from "../components/home/PlatformLogos";
import BookWriting from "../components/home/BookWriting";
import Testimonials from "../components/home/Testimonials";





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