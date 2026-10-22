import React from 'react'
import ReviewsGrid from '../components/Sharedsections/ReviewsGrid'
import Hero from '../components/Sharedsections/Hero'

const Reviews = () => {
  return (
    <div>
      <Hero
        variant="page"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
        title={<>Stories  <span className="font-medium">of Success ,</span><br/>  Told by Our Authors</>}
        description="Discover real stories and experiences from writers who brought their vision to life with Author House Inc. We take pride in building strong partnerships with authors across every genre, delivering exceptional quality, dedicated support, and proven publishing success. "
        formTitle = "Send us a message"
        formDescription = "end us a messag"
      />
      <ReviewsGrid />
    </div>
  )
}

export default Reviews
