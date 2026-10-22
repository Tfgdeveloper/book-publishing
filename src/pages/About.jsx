import React from 'react'
import Hero from '../components/Sharedsections/Hero'
import BookWriting from '../components/about/BookWriting'
import SupportCTA from '../components/home/Supportcta'
import ProcessSteps from '../components/about/ProcessSteps'
import PlatformLogos from '../components/Sharedsections/PlatformLogos'
import Testimonials from '../components/Sharedsections/Testimonials'


const About = () => {
  return (
    <div className='bg-white'>
      <Hero
        variant="page"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        title={<>Your   <span className="font-medium">Story Deserves</span><br/> to Be Told </>}
        description="Empowering authors to share their unique stories with the world. At Author House Inc, we combine publishing expertise, creative design, and comprehensive marketing strategies to transform manuscript drafts into bestsellers. Dedicated to excellence, transparency, and author success, we are your trusted publishing partner at every step. "
        formTitle = "Send us a message"
        formDescription = "end us a messag"
      />
      <BookWriting/>
      <SupportCTA variant="stats" />
      <ProcessSteps/>
      <PlatformLogos/>
      <Testimonials/>



    </div>
  )
}

export default About
