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
      <title>About Author House Inc | Book Publishing Agency</title>
      <meta name="description" content="Learn about Author House Inc, a book publishing agency helping authors turn manuscripts into bestsellers with expert editing, design and marketing."></meta>
      <meta name="keywords" content="about Author House Inc, book publishing agency, self-publishing agency, publishing company Clearwater FL, author publishing partner"></meta>
      <Hero
        variant="page"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        title={<>Your   <span className="font-medium">Story Deserves</span><br/> to Be Told </>}
        description="Empowering authors to share their unique stories with the world. At Author House Inc, we combine publishing expertise, creative design, and comprehensive marketing strategies to transform manuscript drafts into bestsellers. Dedicated to excellence, transparency, and author success, we are your trusted publishing partner at every step. "
        formTitle = "Schedule a Complimentary Strategy Session"
        formDescription = "Share your literary goals and let’s map out your complete journey."
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
