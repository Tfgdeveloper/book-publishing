import React from 'react'
import Hero from '../components/Sharedsections/Hero'
import SupportCTA from '../components/home/Supportcta'
import RecentBooks from '../components/Sharedsections/Recentbooks'
import ServicesSection from '../components/Service/ServicesSection'
import FaqSection from '../components/Service/FaqSection'

const Service = () => {
  return (
    <div className='bg-white'>
      <Hero
        variant="page"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        title={<>Everything You <span className="font-medium"> Need to Publish </span> Your Book</>}
        description="Comprehensive publishing solutions tailored to bring your book to life. From expert ghostwriting and detailed editing to custom cover design, global distribution, and targeted marketing, Author House Inc provides everything you need to succeed in today’s publishing industry. "
        formTitle = "Send us a message"
        formDescription = "end us a messag"
      />
      <ServicesSection/>
      <SupportCTA variant="publish" />
      <div className='mt-25'><RecentBooks/></div>
      
      <SupportCTA/>
      <FaqSection/>
      
    </div>
  )
}

export default Service
