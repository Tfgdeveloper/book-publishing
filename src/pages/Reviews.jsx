import React from 'react'
import ReviewsGrid from '../components/Sharedsections/ReviewsGrid'
import Hero from '../components/Sharedsections/Hero'

const Reviews = () => {
  return (
    <div>
      <title>Author Reviews & Testimonials | Author House Inc</title>
      <meta name="description" content="Read real author reviews and success stories from writers who published with Author House Inc. See how our editing, design and marketing helped."></meta>
      <meta name="keywords" content="Author House Inc reviews, book publishing reviews, author testimonials, ghostwriting reviews, self publishing company reviews"></meta>
      <Hero
        variant="page"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
        title={<>Stories  <span className="font-medium">of Success ,</span><br/>  Told by Our Authors</>}
        description="Discover real stories and experiences from writers who brought their vision to life with Author House Inc. We take pride in building strong partnerships with authors across every genre, delivering exceptional quality, dedicated support, and proven publishing success. "
        formTitle = "Schedule a Complimentary Strategy Session"
        formDescription = "Share your literary goals and let’s map out your complete journey."
      />
      <ReviewsGrid />
    </div>
  )
}

export default Reviews
