import React from 'react'
import Hero from '../components/Sharedsections/Hero'
import ContactSection from '../components/Sharedsections/ContactSection'

const Contact = () => {
  return (
    <div>
      <title>Contact Author House Inc | Free Book Publishing Quote</title>
      <meta name="description" content="Contact Author House Inc in Clearwater, FL for a free book publishing quote. Call (727) 618-7790 or send a message about your manuscript today."></meta>
      <meta name="keywords" content="contact Author House Inc, book publishing quote, publishing agency Clearwater FL, talk to a publishing expert"></meta>
      <Hero
        variant="legal"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        title="Let's Bring Your Book to Life"
        description="Have questions about your manuscript or ready to take the next step in your publishing journey? Our team at Author House Inc is here to provide expert guidance and support. Reach out to us today and let's discuss how we can bring your book to life. "
        formTitle = "Send us a message"
        formDescription = "end us a messag"
      />
      <ContactSection/>
    </div>
  )
}

export default Contact
