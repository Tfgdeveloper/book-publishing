
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
      <title>Book Publishing Services & Ghostwriting | Author House Inc</title>
      <meta name="description" content="Author House Inc offers end-to-end book publishing: ghostwriting, editing, cover design, global distribution & marketing. Get your free quote today."></meta>
      <meta name="keywords" content="book publishing services, ghostwriting services, book editing, book cover design, self publishing company, audiobook production, book marketing, Author House Inc"></meta>
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