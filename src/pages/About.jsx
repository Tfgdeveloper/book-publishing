import React from 'react'
import Hero from '../components/Sharedsections/Hero'
import WhoWeAre from '../components/about/Whoweare'
import WhyChooseUs from '../components/about/Whychooseus'
import MissionVision from '../components/about/Missionvision'
import ProcessSteps from '../components/home/ProcessSteps'

const About = () => {
  return (
    <div className='bg-white'>
      <Hero
        variant="page"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        badge="Children’s Book Writing & Publishing"
        title={<>We Bring Children’s <span className="font-medium">Stories</span> to Life</>}
        description="We help aspiring authors and storytellers turn their ideas into beautifully written and professionally published children’s books."
        formTitle = "Send us a message"
        formDescription = "end us a messag"
      />
      <WhoWeAre/>
      <WhyChooseUs/>
      <MissionVision/>
      <ProcessSteps/>
    </div>
  )
}

export default About
