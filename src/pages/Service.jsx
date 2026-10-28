import React from 'react'
import Hero from '../components/Sharedsections/Hero'
import SupportCTA from '../components/home/Supportcta'
import RecentBooks from '../components/Sharedsections/Recentbooks'
import ServicesSection from '../components/Service/ServicesSection'
import FaqSection from '../components/Service/FaqSection'

const Service = () => {
  return (
    <div className='bg-white'>
      <title>Book Publishing Services: Writing, Editing & Design | Author House Inc</title>
      <meta name="description" content="Explore 31 professional book publishing services: ghostwriting, editing, formatting, cover design, global distribution and marketing. Get your free quote."></meta>
      <meta name="keywords" content="book publishing services, ghostwriting, book editing, proofreading, book formatting, children's book writing, manuscript assessment, global book distribution, Author House Inc"></meta>
      <Hero
        variant="page"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        title={<>Everything You <span className="font-medium"> Need to Publish </span> Your Book</>}
        description="Comprehensive publishing solutions tailored to bring your book to life. From expert ghostwriting and detailed editing to custom cover design, global distribution, and targeted marketing, Author House Inc provides everything you need to succeed in today’s publishing industry. "
        formTitle = "Schedule a Complimentary Strategy Session"
        formDescription = "Share your literary goals and let’s map out your complete journey."
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
