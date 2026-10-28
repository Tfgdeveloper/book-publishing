/* ==================================================================
   Content for every inner service page.

   Page layout (ServiceDetail.jsx):
     1. hero      → Hero (title, description, consultation form)
     2. overview  → BookWriting (image, title, text, points, buttons)
     3. SupportCTA (shared, no data needed)
     4. process   → ProcessSteps (title, text, 3 steps)

   - The key is the last part of the URL: /services/<key>
     It must match the `href` of the service in servicesMenu
     (ServicesMegaMenu.jsx).
   - Wrap words in *asterisks* inside any `title` to emphasize them,
     like the rest of the site.
   - `overview.points` shows in two columns. An even number looks best.
   - `process.steps[].icon` is a name from the ICONS map in
     ProcessSteps.jsx: lightbulb, pen, book, file, search, palette,
     printer, globe, rocket, megaphone, message, check, video, mic,
     sparkles, clipboard. An image path also works.
   - `overview.image` paths are placeholders. Swap in your own images.
   ================================================================== */

export const servicePages = {
  /* ---------------------------------------------------------------- */
  /*  WRITING & EDITING                                               */
  /* ---------------------------------------------------------------- */
  "book-writing": {
    name: "Book Writing",
    category: "Writing & Editing",
    seo: {
      title: "Professional Book Writing Services",
      description: "Experienced writers who turn your idea, outline or notes into a complete, ready-to-publish book.",
    },
    hero: {
      badge: "Book Writing",
      title: "Transform Your Vision Into a *Published Reality* ",
      description: "Our dedicated wordsmiths guide your concept from the initial outline to the closing page, ensuring you receive a manuscript you'll proudly publish under your name with Author House Inc.",
    },
    overview: {
      title: "*Crafting Narratives* That Captivate Readers",
      description: "Every milestone novel begins with a spark of imagination and a dedicated partner to guide it to completion. At Author House Inc, our professional writers collaborate with you from the initial concept outline down to the final word, preserving your authentic tone on a reliable timeline. ",
      points: [
        "Immersive Fiction & Novels ",
        "Strategic Business & Self-Help ",
        "Authentic Voice Preservation ",
        "Comprehensive Revisions Included ",
        "Compelling Memoirs & Biographies ",
        "Structured Chapter Outlining ",
        "Regular Progress Reviews ",
        "Full Copyright & Royalties ",
      ],
      image: "/image/services/book-writing.png",
      imageAlt: "Books written by our team",
      ctaLabel: "Begin Writing ",
    },
    process: {
      title: "Your Book Development Journey, Simplified",
      description: "A clear three-tier framework guides your narrative from initial concept discussions to a finalized manuscript prepared for release. ",
      steps: [
        { icon: "lightbulb", title: "Share Your Vision ", text: "Connect with us during an introductory session to discuss your book concept, outline your target readership, and establish your preferred storytelling style. " },
        { icon: "clipboard", title: "Design the Blueprint ", text: "We collaborate on a detailed chapter-by-chapter structure, ensuring complete alignment on the direction of your book before drafting begins. " },
        { icon: "pen", title: "Draft & Refine ", text: "Your assigned writer composes each section while you provide continuous feedback, ensuring the final manuscript authentically reflects your voice. " },
      ],
    },
  },

    "ghostwriting": {
    name: "Ghostwriting",
    category: "Writing & Editing",
    seo: {
      title: "Confidential Ghostwriting Services",
      description: "Professional ghostwriters who write your book in your voice, with your name on the cover and full confidentiality.",
    },
    hero: {
      badge: "Ghostwriting",
      title: "Your Narrative, Your Signature, Our Craft",
      description:
        "A skilled ghostwriter adapts to your distinct tone and pens your book seamlessly, while you retain total authorship, ownership, and royalties.",
    },
    overview: {
      title: "Collaborative Writing Crafted in Your Authentic Tone",
      description:
        "You provide the background, concepts, and industry insights. A dedicated ghostwriter translates them into a cohesive book that mirrors your personal style, featuring your name proudly on the front and strict privacy protection.",
      points: [
        "Strict Privacy & NDA Support",
        "Engaging Memoirs & Life Stories",
        "Captivating Fiction & Narrative Arcs",
        "Author Credit on the Front Cover",
        "In-Depth Voice-Matching Interviews",
        "Corporate Leadership & Strategy Books",
        "Thorough Verification & Fact-Checking",
        "Full Ownership & 100% Royalties",
      ],
      image: "/image/services/ghostwriting.png",
      imageAlt: "Ghostwritten books",
      ctaLabel: "Launch Your Book",
    },
    process: {
      title: "Your Literary Journey Broken Down Step by Step",
      description:
        "We handle the drafting process while you remain the guiding voice behind your narrative at every phase.",
      steps: [
        {
          icon: "message",
          title: "Discuss Your Ideas",
          text: "Audio sessions help us capture your background, thoughts, and natural speaking rhythm.",
        },
        {
          icon: "pen",
          title: "Drafting in Your Unique Tone",
          text: "Your assigned professional composes the manuscript chapter by chapter, mirroring your preferred style and cadence.",
        },
        {
          icon: "check",
          title: "Inspect and Authorize",
          text: "You examine each section and suggest edits until the content communicates precisely what you intend.",
        },
      ],
    },
  },

  "childrens-book-writing": {
  name: "Children's Book Writing",
  category: "Writing & Editing",
  seo: {
    title: "Children's Book Writing Services",
    description: "Children's book writers who turn your idea into a story kids want to read again and again.",
  },
  hero: {
    badge: "Children's Book Writing",
    title: "Shape Your Concept Into a Tale Children Adore",
    description:
      "Our juvenile fiction writers sculpt your imagination into a narrative filled with the cadence, warmth, and fun young readers enjoy returning to evening after evening.",
  },
  overview: {
    title: "Juvenile Literature, Tales Young Readers Request Repeatedly",
    description:
      "Crafting stories for young minds demands precise cadence, emotional warmth, and careful vocabulary placement. Our specialized authors transform your concept into a book that both children and the adults reading aloud will deeply enjoy.",
    points: [
      "Illustrated Picture Books",
      "Engaging Chapter Books",
      "Poetic & Narrative Stories",
      "Crafted in Your Tone",
      "Books for Early Readers",
      "Middle-Grade Adventures",
      "Tailored, Age-Appropriate Language",
      "Fully Prepared for Artwork",
    ],
    image: "/image/services/childrens-writing.png",
    imageAlt: "Children's books written by our team",
    ctaLabel: "Start Your Story",
  },
  process: {
    title: "From Initial Inspiration to Illustrated Book Step by Step",
    description:
      "A straightforward journey guiding your raw concept into a tale fully prepared for artwork.",
    steps: [
      {
        icon: "lightbulb",
        title: "Share the Inspiration",
        text: "A single character, moral lesson, or emotion is all you need; we discuss your vision and your target audience.",
      },
      {
        icon: "book",
        title: "Structure the Narrative",
        text: "We map out the plot line and page transitions so the reading rhythm flows wonderfully when read aloud.",
      },
      {
        icon: "pen",
        title: "Draft and Refine",
        text: "We compose the text in your preferred style and collaborate with you until every single page hits the mark.",
      },
    ],
  },
},

  "book-editing": {
  name: "Book Editing",
  category: "Writing & Editing",
  seo: {
    title: "Professional Book Editing Services",
    description: "Developmental and line editing that strengthens your story, structure and style without losing your voice.",
  },
  hero: {
    badge: "Book Editing",
    title: "Elevate Your Manuscript to Perfection",
    description:
      "Our expert editors refine your narrative architecture, rhythm, and style, ensuring your book reads precisely the way you envisioned with Author House Inc.",
  },
  overview: {
    title: "Refine Your Prose, Enhance Every Chapter's Impact",
    description:
      "A thorough editorial revision sharpens your narrative architecture, rhythm, and style without altering your authentic voice as an author. At Author House Inc, our professionals are carefully selected to match your specific genre and walk you through every recommendation they offer.",
    points: [
      "Comprehensive developmental guidance",
      "Precise structure and pacing alignment",
      "Enhanced readability and flow",
      "Transparent tracked modifications",
      "Detailed line-by-line editing",
      "In-depth character and plot evaluation",
      "Specialized genre-matched professionals",
      "Comprehensive editorial feedback letter",
    ],
    image: "/image/services/editing.png",
    imageAlt: "Edited manuscripts",
    ctaLabel: "Request Professional Editing",
  },
  process: {
    title: "From Initial Draft to a Flawless Manuscript Step by Step",
    description:
      "We begin by examining the overarching narrative before refining every individual sentence to absolute perfection with Author House Inc.",
    steps: [
      {
        icon: "search",
        title: "Review & Evaluation",
        text: "Your dedicated editor reads through the entire manuscript, identifying strengths and pinpointing elements that need enhancement.",
      },
      {
        icon: "pen",
        title: "Comprehensive Editing",
        text: "We apply revisions using tracked changes and detailed notes, ensuring you see every recommendation along with the rationale behind it.",
      },
      {
        icon: "check",
        title: "Revision & Conclusion",
        text: "You review, accept, or decline modifications while our team collaborates with you on the finalized manuscript.",
      },
    ],
  },
},

"proofreading-copy-editing": {
  name: "Proofreading & Copy Editing",
  category: "Writing & Editing",
  seo: {
    title: "Proofreading & Copy Editing Services",
    description: "Careful copy editing and proofreading that catches errors and inconsistencies before your book goes to print.",
  },
  hero: {
    badge: "Proofreading & Copy Editing",
    title: "Eliminate Flaws Before Publication",
    description:
      "At Author House Inc., we resolve grammatical errors, spelling typos, punctuation slips, and stylistic inconsistencies to ensure nothing pulls readers away from your narrative.",
  },
  overview: {
    title: "Proofreading & Copy Editing, Error-Free Before Print",
    description:
      "Readers and reviewers notice mistakes. At Author House Inc., we fix grammar, spelling, punctuation and consistency so your book looks as professional as anything on the shelf.",
    points: [
      "Grammar and spelling",
      "Consistent names and terms",
      "US or UK English",
      "PDF proof corrections",
      "Punctuation",
      "Style guide checks",
      "Formatting consistency",
      "Fast turnaround",
    ],
    image: "/image/services/proofreading.png",
    imageAlt: "Proofread book pages",
    ctaLabel: "Get a Proofread",
  },
  process: {
    title: "Transitioning Your Draft into a Ready-to-Print Masterpiece Step by Step",
    description:
      "Author House Inc. employs two meticulous reviews to catch discrepancies in your text both initially and following layout formatting.",
    steps: [
      {
        icon: "file",
        title: "Submit Your Manuscript",
        text: "Upload your Word document while letting us know your desired style handbook and regional spelling preferences.",
      },
      {
        icon: "pen",
        title: "Professional Copy Editing",
        text: "We refine sentence structure, vocabulary, and flow using tracked changes that remain fully transparent for your inspection.",
      },
      {
        icon: "check",
        title: "Final Page Proofreading",
        text: "Once pagination is complete, we inspect the final proofs to eliminate any residual typos prior to publication.",
      },
    ],
  },
},

  "formatting-typesetting": {
  name: "Formatting & Typesetting",
  category: "Writing & Editing",
  seo: {
    title: "Book Formatting & Typesetting Services",
    description: "Professional typesetting for print and eBook, with clean layouts that pass every store's checks.",
  },
  hero: {
    badge: "Formatting & Typesetting",
    title: "Immaculate Layouts Designed for Publishing Success",
    description:
      "We transform your text into pristine, beautifully structured pages for both physical print and digital eBooks, prepared for instant distribution on any platform with Author House Inc.",
  },
  overview: {
    title: "Formatting & Typesetting, Crafting Pages That Look Professionally Published",
    description:
      "Impeccable formatting ensures your book is effortlessly readable and demonstrates to your audience that it was crafted with precision. At Author House Inc., we generate print and digital ebook files customized to fulfill every distributor's precise technical criteria.",
    points: [
      "Print-ready paperback and hardcover PDFs",
      "Artfully styled chapter headers and openers",
      "Seamless integration of images and data tables",
      "Optimized KDP and IngramSpark specifications",
      "Refined Kindle and EPUB digital files",
      "Professional headers and accurate page numbering",
      "Comprehensive front and back matter arrangement",
      "Complimentary revisions if any rejections occur",
    ],
    image: "/image/services/formatting.png",
    imageAlt: "Formatted book pages",
    ctaLabel: "Format My Book",
  },
  process: {
    title: "From Your Manuscript to Print-Ready Files Step by Step",
    description:
      "Author House Inc. delivers immaculate, store-compliant files entirely free of technical headaches.",
    steps: [
      {
        icon: "file",
        title: "Share Your Files",
        text: "Upload your finalized manuscript, accompanying images, and specify your required formats.",
      },
      {
        icon: "palette",
        title: "Page Layout & Design",
        text: "We typeset every single page and provide a preview for your review and approval.",
      },
      {
        icon: "printer",
        title: "Receive Final Deliverables",
        text: "You obtain both print and ebook files completely prepared for uploading to any distribution platform.",
      },
    ],
  },
},

  "manuscript-assessment": {
  name: "Manuscript Assessment",
  category: "Writing & Editing",
  seo: {
    title: "Manuscript Assessment & Critique",
    description: "An honest, detailed report on your manuscript's strengths, weaknesses and next steps.",
  },
  hero: {
    badge: "Manuscript Assessment",
    title: "Discover Precisely What to Improve Next",
    description:
      "A seasoned professional reads your entire manuscript and provides a candid, comprehensive evaluation detailing your strengths and areas for refinement with Author House Inc.",
  },
  overview: {
    title: "Manuscript Evaluation, Candid Feedback, and Clear Guidance",
    description:
      "Friends and family are wonderfully supportive, but they seldom tell you what is truly holding your book back. At Author House Inc., our expert editors provide honest feedback and a definitive roadmap for your next draft.",
    points: [
      "Complete manuscript review",
      "Character arc and voice analysis",
      "Market viability and genre alignment",
      "Clearly prioritized next steps",
      "Plot structure and development feedback",
      "In-depth pacing evaluation",
      "Comprehensive written report",
      "Dedicated follow-up consultation call",
    ],
    image: "/image/services/manuscript-assessment.png",
    imageAlt: "Manuscript with editor notes",
    ctaLabel: "Get My Assessment",
  },
  process: {
    title: "From Draft to Clear Direction Step by Step",
    description:
      "A focused review that tells you exactly where your manuscript stands.",
    steps: [
      {
        icon: "file",
        title: "Submit Your Manuscript",
        text: "Send your draft along with your goals and any questions you have.",
      },
      {
        icon: "search",
        title: "Expert Read-Through",
        text: "A genre-matched editor reads every page and takes detailed notes.",
      },
      {
        icon: "message",
        title: "Report and Call",
        text: "You receive a written report, then talk it through with your editor.",
      },
    ],
  },
},

  /* ---------------------------------------------------------------- */
  /*  PUBLISHING                                                      */
  /* ---------------------------------------------------------------- */
  "global-distribution": {
  name: "Global Distribution",
  category: "Publishing",
  seo: {
    title: "Global Book Distribution Services",
    description: "Get your book into online stores, bookshops and libraries around the world.",
  },
  hero: {
    badge: "Global Distribution",
    title: "Put Your Book *on Shelves Worldwide*",
    description:
      "We list your book with online stores, bookshops and library suppliers so readers can find it wherever they shop.",
  },
  overview: {
    title: "Global Distribution, Your Book in Stores Worldwide",
    description:
      "Amazon is only one place readers buy books. At Author House Inc., we list your book with online retailers, bookshops and library suppliers around the world, priced right for every market.",
    points: [
      "Amazon worldwide",
      "Apple Books and Kobo",
      "Bookstore catalogs",
      "Pricing for each country",
      "Barnes & Noble",
      "Google Play Books",
      "Library suppliers",
      "Royalties paid to you",
    ],
    image: "/image/services/distribution.png",
    imageAlt: "Books available in stores worldwide",
    ctaLabel: "Distribute My Book",
  },
  process: {
    title: "From Final Files to Global Shelves Step by Step",
    description:
      "One setup puts your book in front of readers in dozens of countries.",
    steps: [
      {
        icon: "clipboard",
        title: "Prepare Your Listing",
        text: "We set up your metadata, categories and pricing for each market.",
      },
      {
        icon: "globe",
        title: "List Everywhere",
        text: "Your book goes out to online stores, bookshop catalogs and library suppliers.",
      },
      {
        icon: "check",
        title: "Check and Monitor",
        text: "We confirm your book shows correctly in each catalog and fix any listing issues.",
      },
    ],
  },
},

  

  "ebook-publishing": {
  name: "Ebook Publishing",
  category: "Publishing",
  seo: {
    title: "Ebook Publishing Services",
    description: "We convert, upload and publish your ebook on Kindle, Apple Books, Kobo and more.",
  },
  hero: {
    badge: "Ebook Publishing",
    title: "Publish Your Book on Every Digital Screen",
    description:
      "At Author House Inc., we transform your manuscript into refined, professionally formatted eBook files ready for seamless distribution across Kindle, Apple Books, Kobo, Google Play, and beyond.",
  },
  overview: {
    title: "Ebook Publishing, Your Book on Every Screen",
    description:
      "Ebooks are the fastest way to reach readers worldwide, but each store has its own file rules and review process. We handle all of it so your ebook goes live without delays.",
    points: [
      "Kindle publishing",
      "Apple Books",
      "Kobo and Google Play",
      "EPUB conversion",
      "Fixed-layout ebooks",
      "Metadata and keywords",
      "Pricing strategy",
      "Accounts in your name",
    ],
    image: "/image/services/ebook-publishing.png",
    imageAlt: "Ebook on a tablet",
    ctaLabel: "Publish My Ebook",
  },
  process: {
    title: "From Manuscript to Live Ebook Step by Step",
    description:
      "Your ebook, converted, listed and live on the stores you choose.",
    steps: [
      {
        icon: "file",
        title: "Convert Your Book",
        text: "We turn your manuscript into clean EPUB and Kindle files that look great on any device.",
      },
      {
        icon: "clipboard",
        title: "Set Up Your Listings",
        text: "We write your metadata, pick categories and set pricing on each store.",
      },
      {
        icon: "rocket",
        title: "Go Live",
        text: "Your ebook is published and you get full access to every account.",
      },
    ],
  },
},

  "print-book-publishing": {
  name: "Print Book Publishing",
  category: "Publishing",
  seo: {
    title: "Print Book Publishing Services",
    description: "Paperback and hardcover publishing through print-on-demand, with proofs checked before release.",
  },
  hero: {
    badge: "Print Book Publishing",
    title: "Hold Your Book in Your Hands",
    description:
      "At Author House Inc., we publish your paperback and hardcover editions through print-on-demand, so readers can order a printed copy anywhere.",
  },
  overview: {
    title: "Print Book Publishing, Hold Your Book in Your Hands",
    description:
      "Seeing your book in print is a special moment. At Author House Inc., we set up paperback and hardcover editions, check the proofs and make sure every detail is right before it goes on sale.",
    points: [
      "Paperback editions",
      "Print-on-demand",
      "IngramSpark setup",
      "Proof copy review",
      "Hardcover editions",
      "Amazon KDP setup",
      "Trim size and paper advice",
      "Author copies at cost",
    ],
    image: "/image/services/print-publishing.png",
    imageAlt: "Printed paperback and hardcover books",
    ctaLabel: "Print My Book",
  },
  process: {
    title: "From Files to Printed Book Step by Step",
    description:
      "No stock to buy, no warehouse to manage, just a printed book readers can order. At Author House Inc., we make the print publishing journey effortless and professional.",
    steps: [
      {
        icon: "clipboard",
        title: "Choose Your Format",
        text: "We help you pick trim size, paper and cover finish for your book.",
      },
      {
        icon: "printer",
        title: "Set Up Printing",
        text: "We upload your files to print-on-demand platforms in your name.",
      },
      {
        icon: "check",
        title: "Approve the Proof",
        text: "We order and check a proof copy before your book goes on sale.",
      },
    ],
  },
},

  "isbn-barcode": {
  name: "ISBN & Barcode",
  category: "Publishing",
  seo: {
    title: "ISBN & Barcode Registration",
    description: "We register your ISBNs and create barcodes so your book is listed under your own name as publisher.",
  },
  hero: {
    badge: "ISBN & Barcode",
    title: "Your Book, Officially Registered",
    description:
      "At Author House Inc., we secure your official ISBNs and generate the exact barcodes your printer and retail stores require, registered entirely under your name as the publisher.",
  },
  overview: {
    title: "ISBN & Barcode, Registered in Your Name",
    description:
      "An ISBN uniquely identifies your book across every bookstore, library, and catalog. At Author House Inc., we register yours in your name, carefully input your book's details, and generate the professional barcode required for your back cover.",
    points: [
      "Official ISBN registration",
      "Listed as your personal imprint",
      "Custom back-cover barcode design",
      "Support for both print and ebook formats",
      "One dedicated ISBN per format",
      "Comprehensive book metadata setup",
      "Accurate price-encoded barcode",
      "You retain full ownership of every number",
    ],
    image: "/image/services/isbn.png",
    imageAlt: "Book back cover with barcode",
    ctaLabel: "Register My ISBN",
  },
  process: {
    title: "From Paperwork to Registered Book Step by Step",
    description:
      "We take care of the forms so your book is properly identified everywhere.",
    steps: [
      {
        icon: "clipboard",
        title: "Gather Book Details",
        text: "We collect your title, formats, imprint name and pricing.",
      },
      {
        icon: "file",
        title: "Register Your ISBNs",
        text: "We register an ISBN for each format, all in your name.",
      },
      {
        icon: "check",
        title: "Add Your Barcode",
        text: "We create the barcode and place it on your back cover file.",
      },
    ],
  },
},

  "copyright-assistance": {
  name: "Copyright Assistance",
  category: "Publishing",
  seo: {
    title: "Book Copyright Registration Assistance",
    description: "Help preparing and filing your book's copyright registration so your work is on record.",
  },
  hero: {
    badge: "Copyright Assistance",
    title: "Protect Your Work From Day One",
    description:
      "At Author House Inc., we help you prepare and file your copyright registration, so your book is officially on record as yours.",
  },
  overview: {
    title: "Copyright Assistance, Your Work on Official Record",
    description:
      "Your work is protected the moment you write it, and registration puts that on official record. At Author House Inc., we guide you through the filing so it's done right the first time. We're not a law firm, so legal disputes should go to a lawyer.",
    points: [
      "Registration filing support",
      "Co-author guidance",
      "Application review",
      "Filing status updates",
      "Copyright page for your book",
      "Illustration rights check",
      "Deposit copy guidance",
      "Plain-English explanations",
    ],
    image: "/image/services/copyright.png",
    imageAlt: "Book with copyright page",
    ctaLabel: "Protect My Book",
  },
  process: {
    title: "From Manuscript to Registered Copyright Step by Step",
    description:
      "A simple process that puts your ownership on record at Author House Inc.",
    steps: [
      {
        icon: "search",
        title: "Review Your Rights",
        text: "We check who wrote and illustrated the book so the right owners are listed.",
      },
      {
        icon: "file",
        title: "Prepare the Application",
        text: "We help you complete the forms and prepare your deposit copy.",
      },
      {
        icon: "check",
        title: "File and Track",
        text: "Your application is submitted and we keep you updated on its status.",
      },
    ],
  },
},

  /* ---------------------------------------------------------------- */
  /*  DESIGN & ILLUSTRATION                                           */
  /* ---------------------------------------------------------------- */
  "book-cover-design": {
  name: "Book Cover Design",
  category: "Design & Illustration",
  seo: {
    title: "Professional Book Cover Design",
    description: "Book covers that stand out on the shelf and in Amazon search results, designed for your genre.",
  },
  hero: {
    badge: "Book Cover Design",
    title: "A Cover That Gets Picked Up",
    description:
      "At Author House Inc., we design covers that stand out on the shelf and in Amazon search, and tell readers instantly what kind of book it is.",
  },
  overview: {
    title: "Book Cover Design, Judged by Its Cover",
    description:
      "Readers decide in seconds whether to click. Your cover needs a clear title, a strong image and a look that fits your genre, and we design every part of it.",
    points: [
      "Front, spine and back",
      "Custom or stock imagery",
      "Amazon thumbnail testing",
      "Audiobook cover version",
      "Genre-matched design",
      "Title typography",
      "Ebook cover version",
      "Full rights to the design",
    ],
    image: "/image/services/cover-design.png",
    imageAlt: "Book covers we designed",
    ctaLabel: "Design My Cover",
  },
  process: {
    title: "From Concept to Final Cover Step by Step",
    description:
      "A cover built around your story, your genre and your readers.",
    steps: [
      {
        icon: "message",
        title: "Share Your Vision",
        text: "Tell us about your book, your readers and covers you admire.",
      },
      {
        icon: "palette",
        title: "See Concepts",
        text: "We design two to three concepts, then refine the one you choose.",
      },
      {
        icon: "check",
        title: "Finalize the Files",
        text: "You receive print, ebook and promo versions sized for every platform.",
      },
    ],
  },
},

  "childrens-book-illustration": {
  name: "Children's Book Illustration",
  category: "Design & Illustration",
  seo: {
    title: "Children's Book Illustration Services",
    description: "Hand-painted or digital children's book illustrations in the art style your story needs.",
  },
  hero: {
    badge: "Children's Book Illustration",
    title: "Artwork That Makes Every Page Shine",
    description:
      "At Author House Inc., our illustrators create hand-painted or digital artwork for every page, in the style that fits your story.",
  },
  overview: {
    title: "Children's Book Illustration, Art That Tells the Story",
    description:
      "In a children's book, the illustrations do half the storytelling. At Author House Inc., our artists plan each spread around your words and show you sketches before any final artwork is painted.",
    points: [
      "Watercolor and digital",
      "Full-page spreads",
      "Cover artwork",
      "Consistent characters",
      "Cartoon and realistic styles",
      "Spot illustrations",
      "Sketch approval first",
      "Full commercial rights",
    ],
    image: "/image/services/illustration.png",
    imageAlt: "Children's book illustrations",
    ctaLabel: "Illustrate My Book",
  },
  process: {
    title: "From Sketch to Finished Art Step by Step",
    description:
      "You see and approve every page before the final artwork is created.",
    steps: [
      {
        icon: "palette",
        title: "Pick a Style",
        text: "We share style samples and you choose the look that fits your story.",
      },
      {
        icon: "pen",
        title: "Approve Sketches",
        text: "We sketch every page layout and adjust until you're happy.",
      },
      {
        icon: "sparkles",
        title: "Final Color",
        text: "Your illustrator paints the final art and delivers print-ready files.",
      },
    ],
  },
},

  "character-design": {
  name: "Character Design",
  category: "Design & Illustration",
  seo: {
    title: "Book Character Design Services",
    description: "Memorable characters designed to look the same on every page, cover and product.",
  },
  hero: {
    badge: "Character Design",
    title: "Characters Readers Can't Forget",
    description:
      "At Author House Inc., we design memorable characters with a look and personality that stays consistent on every page and every book in your series.",
  },
  overview: {
    title: "Character Design, Faces Readers Never Forget",
    description:
      "Readers remember characters long after they forget the plot. At Author House Inc., we design yours from personality first, then give you a character sheet any illustrator can follow.",
    points: [
      "Three initial concepts",
      "Front, side and back views",
      "Pose sheets",
      "Series-ready designs",
      "Personality-led design",
      "Expression sheets",
      "Color palette guide",
      "Merchandise-ready files",
    ],
    image: "/image/services/character-design.png",
    imageAlt: "Character design sheets",
    ctaLabel: "Design My Character",
  },
  process: {
    title: "From Description to Character Sheet Step by Step",
    description:
      "A character with a clear personality and a look that never drifts.",
    steps: [
      {
        icon: "message",
        title: "Describe Your Character",
        text: "Share their personality, age and any must-have details.",
      },
      {
        icon: "palette",
        title: "Review Concepts",
        text: "We design three concepts and refine the one you love.",
      },
      {
        icon: "check",
        title: "Get Your Sheet",
        text: "You receive turnarounds, expressions and poses ready for any illustrator.",
      },
    ],
  },
},

  "interior-design": {
    name: "Interior Design",
    category: "Design & Illustration",
    seo: {
      title: "Book Interior Design Services",
      description: "Beautiful, readable book interiors with custom chapter openers, fonts and layouts.",
    },
    hero: {
      badge: "Interior Design",
      title: "Pages Readers *Enjoy Turning*",
      description: "We design your book’s interior with fonts, chapter openers and layouts that match your cover and suit your genre.",
    },
    overview: {
      title: "*Interior Design,* Designed Inside and Out",
      description: "A great interior makes reading effortless. We carry your cover’s style through every page, from the title page to chapter openings, so your book feels like one complete piece.",
      points: [
        "Custom chapter openers",
        "Title and copyright pages",
        "Fonts chosen for your genre",
        "Drop caps and ornaments",
        "Image and caption layouts",
        "Workbook and cookbook layouts",
        "Print and ebook versions",
        "Editable source files",
      ],
      image: "/image/services/interior-design.png",
      imageAlt: "Designed book interior pages",
      ctaLabel: "Design My Interior",
    },
    process: {
      title: "From Plain Text to *Designed Pages* Step by Step",
      description: "An interior that looks as good as your cover.",
      steps: [
        { icon: "book", title: "Set the Style", text: "We choose fonts and design elements that match your cover and genre." },
        { icon: "palette", title: "Approve Samples", text: "You review sample pages before we lay out the whole book." },
        { icon: "printer", title: "Lay Out the Book", text: "We design every page and deliver print and ebook files." },
      ],
    },
  },

  "graphics-infographics": {
  name: "Graphics & Infographics",
  category: "Design & Illustration",
  seo: {
    title: "Book Graphics & Infographics Design",
    description: "Charts, diagrams and infographics that make your book's ideas clear and easy to share.",
  },
  hero: {
    badge: "Graphics & Infographics",
    title: "Make Complex Ideas Easy to See",
    description:
      "At Author House Inc., we turn your data, processes and big ideas into clear charts, diagrams and infographics for your book and marketing.",
  },
  overview: {
    title: "Graphics & Infographics, Ideas Readers Grasp Fast",
    description:
      "A good graphic explains in seconds what takes a page of text. At Author House Inc., we design visuals that match your book's style and work in print, in ebooks and on social media.",
    points: [
      "Charts and graphs",
      "Process flows",
      "Social media versions",
      "Color or grayscale",
      "Diagrams and frameworks",
      "Timelines",
      "Press and slide versions",
      "Matched to your book's style",
    ],
    image: "/image/services/infographics.png",
    imageAlt: "Book infographics and charts",
    ctaLabel: "Create My Graphics",
  },
  process: {
    title: "From Notes to Clear Visuals Step by Step",
    description:
      "Your ideas, turned into graphics readers remember and share.",
    steps: [
      {
        icon: "file",
        title: "Share Your Content",
        text: "Send your data, notes or a rough sketch of what you want to show.",
      },
      {
        icon: "palette",
        title: "Design Drafts",
        text: "We design first drafts and refine them with your feedback.",
      },
      {
        icon: "check",
        title: "Final Files",
        text: "You get files for print, ebook, social media and presentations.",
      },
    ],
  },
},

  "activity-book-design": {
  name: "Activity Book Design",
  category: "Design & Illustration",
  seo: {
    title: "Activity Book Design Services",
    description: "Coloring books, puzzle books and workbooks designed to engage kids and sell well.",
  },
  hero: {
    badge: "Activity Book Design",
    title: "Pages Kids Want to Fill In",
    description:
      "Coloring pages, puzzles, mazes and worksheets designed to keep kids busy, learning and coming back for more.",
  },
  overview: {
    title: "Activity Book Design, Pages Kids Love to Fill",
    description:
      "Activity books give kids more time with your characters and give parents and teachers something useful to share. We design every page for the right age group.",
    points: [
      "Coloring pages",
      "Dot-to-dot and matching",
      "Workbooks and worksheets",
      "Your characters throughout",
      "Mazes and puzzles",
      "Tracing and writing practice",
      "Age-matched activities",
      "KDP-ready files",
    ],
    image: "/image/services/activity-books.png",
    imageAlt: "Activity book pages",
    ctaLabel: "Design My Activity Book",
  },
  process: {
    title: "From Idea to Activity Book Step by Step",
    description:
      "Fun, age-right pages built around your story and characters.",
    steps: [
      {
        icon: "lightbulb",
        title: "Plan the Activities",
        text: "We pick activity types and page count to suit your readers' age.",
      },
      {
        icon: "palette",
        title: "Design the Pages",
        text: "We design each page in your illustration style and send previews.",
      },
      {
        icon: "printer",
        title: "Prepare for Print",
        text: "You get print-ready files and printable pages for free downloads.",
      },
    ],
  },
},

  /* ---------------------------------------------------------------- */
  /*  MARKETING & PUBLICITY                                           */
  /* ---------------------------------------------------------------- */
  "book-marketing": {
  name: "Book Marketing",
  category: "Marketing & Publicity",
  seo: {
    title: "Book Marketing Services for Authors",
    description: "A complete marketing plan that helps the right readers find, buy and recommend your book.",
  },
  hero: {
    badge: "Book Marketing",
    title: "Get Your Book in Front of Readers",
    description:
      "We build and run a marketing plan that helps the right readers find your book, buy it and tell their friends.",
  },
  overview: {
    title: "Book Marketing, Reach the Readers Who Need Your Book",
    description:
      "Without marketing, even great books go unnoticed. At Author House Inc., we start by understanding your readers, then combine the channels that reach them best and report on what's working.",
    points: [
      "Marketing strategy",
      "Positioning and messaging",
      "Social media campaigns",
      "Review campaigns",
      "Reader research",
      "Amazon optimization",
      "Email marketing",
      "Monthly reports",
    ],
    image: "/image/services/book-marketing.png",
    imageAlt: "Book marketing campaign",
    ctaLabel: "Market My Book",
  },
  process: {
    title: "From Plan to Growing Sales Step by Step",
    description:
      "A marketing plan built around your book and the readers who will love it.",
    steps: [
      {
        icon: "search",
        title: "Understand Your Readers",
        text: "We research who your book is for and where they discover new books.",
      },
      {
        icon: "clipboard",
        title: "Build the Plan",
        text: "We choose the right channels and set clear goals for your budget.",
      },
      {
        icon: "rocket",
        title: "Launch and Optimize",
        text: "We run your campaigns and adjust them based on monthly results.",
      },
    ],
  },
},

"amazon-marketing": {
  name: "Amazon Marketing",
  category: "Marketing & Publicity",
  seo: {
    title: "Amazon Book Marketing Services",
    description: "Optimized Amazon listings, keywords and ads that help readers find your book.",
  },
  hero: {
    badge: "Amazon Marketing",
    title: "Get Found on Amazon",
    description:
      "Optimized listings, keywords and ads that put your book in front of readers searching for their next read.",
  },
  overview: {
    title: "Amazon Marketing, Get Found Where Readers Shop",
    description:
      "Most books on Amazon are never seen because they don't show up in search. At Author House Inc., we fix your listing, then run ads that put your budget behind the searches that actually sell books.",
    points: [
      "Keyword research",
      "Book description copy",
      "Amazon ads setup",
      "Author Central setup",
      "Category selection",
      "A+ Content design",
      "Weekly ad optimization",
      "Sales reports",
    ],
    image: "/image/services/amazon-marketing.png",
    imageAlt: "Amazon book listing",
    ctaLabel: "Grow on Amazon",
  },
  process: {
    title: "From Listing to More Sales Step by Step",
    description:
      "A stronger listing and smarter ads, working together.",
    steps: [
      {
        icon: "search",
        title: "Audit Your Listing",
        text: "We review your keywords, categories, description and reviews.",
      },
      {
        icon: "pen",
        title: "Optimize the Page",
        text: "We rewrite your description, add A+ Content and fix your categories.",
      },
      {
        icon: "rocket",
        title: "Run Smart Ads",
        text: "We launch Amazon ads and adjust them weekly to lower costs and raise sales.",
      },
    ],
  },
},

  "book-launch": {
  name: "Book Launch",
  category: "Marketing & Publicity",
  seo: {
    title: "Book Launch Services",
    description: "Pre-orders, early reviews and launch-week promotion so your book starts strong.",
  },
  hero: {
    badge: "Book Launch",
    title: "Launch Your Book With a Bang",
    description:
      "We plan your launch from pre-orders to early reviews, so your book starts strong from day one.",
  },
  overview: {
    title: "Book Launch, Start Strong From Day One",
    description:
      "The first weeks after release decide how visible your book becomes. At Author House Inc., a planned launch builds early sales and reviews, which helps stores show your book to more readers.",
    points: [
      "Launch timeline",
      "Advance reader copies",
      "Launch-week promotions",
      "Email announcements",
      "Pre-order setup",
      "Early reviewer outreach",
      "Social media content",
      "Relaunch campaigns",
    ],
    image: "/image/services/book-launch.png",
    imageAlt: "Book launch celebration",
    ctaLabel: "Plan My Launch",
  },
  process: {
    title: "From Countdown to Launch Day Step by Step",
    description:
      "Momentum built before release, so launch week counts.",
    steps: [
      {
        icon: "clipboard",
        title: "Plan the Timeline",
        text: "We map out every task from six to eight weeks before release.",
      },
      {
        icon: "message",
        title: "Build Early Buzz",
        text: "We set up pre-orders and send advance copies to reviewers.",
      },
      {
        icon: "rocket",
        title: "Launch Week Push",
        text: "We run promotions across email, social media and Amazon.",
      },
    ],
  },
},

"social-media-marketing": {
  name: "Social Media Marketing",
  category: "Marketing & Publicity",
  seo: {
    title: "Social Media Marketing for Authors",
    description: "Posts and reels that grow your reader community on Instagram, TikTok and Facebook.",
  },
  hero: {
    badge: "Social Media Marketing",
    title: "Grow Your Reader Community",
    description:
      "Posts and reels that reach readers and fellow book lovers on Instagram, TikTok, Facebook and more.",
  },
  overview: {
    title: "Social Media Marketing, Where Readers Find Books",
    description:
      "Readers discover new books on social media every day, from BookTok to Bookstagram. At Author House Inc., we create content from your book, post on a steady schedule and grow your community.",
    points: [
      "Instagram and Facebook",
      "Pinterest and LinkedIn",
      "Reels and short videos",
      "Community management",
      "TikTok and BookTok",
      "Content calendar",
      "Graphics from your book",
      "Paid social ads",
    ],
    image: "/image/services/social-media.png",
    imageAlt: "Social media posts for a book",
    ctaLabel: "Grow My Audience",
  },
  process: {
    title: "From First Post to Loyal Following Step by Step",
    description:
      "Consistent content that keeps your book in front of readers.",
    steps: [
      {
        icon: "search",
        title: "Find Your Audience",
        text: "We identify where your readers spend time and what they engage with.",
      },
      {
        icon: "sparkles",
        title: "Create Content",
        text: "We plan a calendar and create posts and reels you approve in advance.",
      },
      {
        icon: "message",
        title: "Post and Engage",
        text: "We publish on schedule and reply to your growing community.",
      },
    ],
  },
},

  "author-branding": {
  name: "Author Branding",
  category: "Marketing & Publicity",
  seo: {
    title: "Author Branding Services",
    description: "A consistent look, voice and online presence that makes you recognizable across every book and platform.",
  },
  hero: {
    badge: "Author Branding",
    title: "A Brand Readers Recognize",
    description:
      "We give you a consistent look, voice and online presence across your books, website and social media.",
  },
  overview: {
    title: "Author Branding, A Name Readers Recognize",
    description:
      "The authors readers follow have a recognizable style across every book and post. At Author House Inc., we build that brand for you and an author website that ties it all together.",
    points: [
      "Author logo",
      "Author bio writing",
      "Author website",
      "Press kit design",
      "Brand colors and fonts",
      "Photo direction",
      "Social media templates",
      "Brand guidelines",
    ],
    image: "/image/services/author-branding.png",
    imageAlt: "Author brand kit",
    ctaLabel: "Build My Brand",
  },
  process: {
    title: "From First Impression to Lasting Brand Step by Step",
    description:
      "One consistent identity across every book, page and post.",
    steps: [
      {
        icon: "search",
        title: "Discover Your Brand",
        text: "We learn about your books, readers and the impression you want to make.",
      },
      {
        icon: "palette",
        title: "Design the Identity",
        text: "We create your logo, colors, fonts and brand guidelines.",
      },
      {
        icon: "globe",
        title: "Roll It Out",
        text: "We apply your brand to your website, social media and press kit.",
      },
    ],
  },
},

  "book-publicity": {
  name: "Book Publicity",
  category: "Marketing & Publicity",
  seo: {
    title: "Book Publicity & PR Services",
    description: "Media outreach, interviews and features that get your book talked about.",
  },
  hero: {
    badge: "Book Publicity",
    title: "Get Your Book Talked About",
    description:
      "We pitch you and your book to podcasts, blogs, newspapers and TV, so readers hear about it from trusted voices.",
  },
  overview: {
    title: "Book Publicity, Media That Builds Trust",
    description:
      "A press mention or podcast interview reaches readers who might never see an ad, and builds your credibility as an author. At Author House Inc., we find the right outlets and pitch them for you.",
    points: [
      "Media kit",
      "Podcast pitching",
      "Newspaper and magazine pitches",
      "Interview preparation",
      "Story angle development",
      "Blog and review outreach",
      "TV and radio pitches",
      "Coverage reports",
    ],
    image: "/image/services/publicity.png",
    imageAlt: "Author being interviewed",
    ctaLabel: "Get Media Coverage",
  },
  process: {
    title: "From Pitch to Press Coverage Step by Step",
    description:
      "Targeted outreach that gives your book a story the media wants to tell.",
    steps: [
      {
        icon: "lightbulb",
        title: "Find Your Angle",
        text: "We shape the story that makes you and your book newsworthy.",
      },
      {
        icon: "megaphone",
        title: "Pitch the Media",
        text: "We contact podcasts, blogs, press and broadcasters that fit your book.",
      },
      {
        icon: "mic",
        title: "Book Interviews",
        text: "We schedule interviews and prepare you with talking points.",
      },
    ],
  },
},

"press-releases": {
  name: "Press Releases",
  category: "Marketing & Publicity",
  seo: {
    title: "Book Press Release Writing & Distribution",
    description: "Professionally written press releases sent to news outlets and media networks.",
  },
  hero: {
    badge: "Press Releases",
    title: "Announce Your Book Like a Pro",
    description:
      "We write a newsworthy press release about your book and send it to news sites, journalists and media networks.",
  },
  overview: {
    title: "Press Releases, Announce Your Book Like a Pro",
    description:
      "A good press release gives journalists a ready-made story about why your book matters now. At Author House Inc., we write it, get your approval and send it to the outlets most likely to care.",
    points: [
      "Newsworthy angle",
      "Quotes and author bio",
      "Targeted journalist outreach",
      "Your approval first",
      "Professional writing",
      "Newswire distribution",
      "Search-friendly copy",
      "Pickup report",
    ],
    image: "/image/services/press-releases.png",
    imageAlt: "Book press release",
    ctaLabel: "Write My Release",
  },
  process: {
    title: "From Announcement to Media Pickup Step by Step",
    description:
      "Your book news, written the way the media expects.",
    steps: [
      {
        icon: "lightbulb",
        title: "Find the News Angle",
        text: "We identify what makes your launch, award or milestone newsworthy.",
      },
      {
        icon: "pen",
        title: "Write the Release",
        text: "We write a clear, professional release and send it for your approval.",
      },
      {
        icon: "megaphone",
        title: "Distribute and Report",
        text: "We send it out and share a report showing where it was picked up.",
      },
    ],
  },
},

  /* ---------------------------------------------------------------- */
  /*  VIDEO & AUDIO                                                   */
  /* ---------------------------------------------------------------- */
  "book-trailers": {
  name: "Book Trailers",
  category: "Video & Audio",
  seo: {
    title: "Book Trailer Video Services",
    description: "Short, cinematic videos that tease your book on social media, YouTube and Amazon.",
  },
  hero: {
    badge: "Book Trailers",
    title: "A Trailer That Sells the Story",
    description:
      "Short, eye-catching videos that tease your book and get readers clicking on social media, YouTube and Amazon.",
  },
  overview: {
    title: "Book Trailers, Sell the Story in Seconds",
    description:
      "A book trailer shows readers what your story feels like before they buy. At Author House Inc., we script, produce and edit it, then deliver versions sized for every platform you use.",
    points: [
      "Script writing",
      "Music and sound design",
      "Title animation",
      "Social media cuts",
      "Cinematic or animated styles",
      "Professional voiceover",
      "Amazon-ready version",
      "YouTube version",
    ],
    image: "/image/services/book-trailers.png",
    imageAlt: "Book trailer video frames",
    ctaLabel: "Create My Trailer",
  },
  process: {
    title: "From Script to Finished Trailer Step by Step",
    description:
      "A short video that captures the feeling of your book.",
    steps: [
      {
        icon: "pen",
        title: "Write the Script",
        text: "We write a script from your book and send it for approval.",
      },
      {
        icon: "video",
        title: "Produce the Trailer",
        text: "We create visuals, music and voiceover in the style you choose.",
      },
      {
        icon: "rocket",
        title: "Deliver Every Format",
        text: "You get versions for Amazon, YouTube, reels and stories.",
      },
    ],
  },
},

 "2d-animation": {
  name: "2D Animation",
  category: "Video & Audio",
  seo: {
    title: "2D Animation Services for Authors",
    description: "Smooth, colorful 2D animation that brings your book's characters and stories to life.",
  },
  hero: {
    badge: "2D Animation",
    title: "Watch Your Characters Come Alive",
    description:
      "We animate your characters and stories in smooth, colorful 2D, ready for YouTube, social media and your website.",
  },
  overview: {
    title: "2D Animation, From Page to Screen",
    description:
      "Readers, especially kids, meet stories on screens as often as on paper. We animate your characters from your existing illustrations, so they look exactly like the ones in your book.",
    points: [
      "Character animation",
      "Built from your illustrations",
      "Voiceover",
      "Social media clips",
      "Animated story videos",
      "Storyboarding",
      "Music and sound effects",
      "YouTube-ready videos",
    ],
    image: "/image/services/2d-animation.png",
    imageAlt: "Animated book characters",
    ctaLabel: "Animate My Story",
  },
  process: {
    title: "From Storyboard to Animated Story Step by Step",
    description:
      "Your characters, moving and talking just as readers imagined.",
    steps: [
      {
        icon: "clipboard",
        title: "Storyboard",
        text: "We plan every scene and send the storyboard for your approval.",
      },
      {
        icon: "video",
        title: "Animate",
        text: "Our animators bring each scene to life in smooth 2D.",
      },
      {
        icon: "mic",
        title: "Voice and Sound",
        text: "We add voiceover, music and sound effects, then deliver the final video.",
      },
    ],
  },
},

 "motion-graphics": {
  name: "Motion Graphics",
  category: "Video & Audio",
  seo: {
    title: "Motion Graphics for Books & Authors",
    description: "Animated text, quotes and graphics that make your book content stand out online.",
  },
  hero: {
    badge: "Motion Graphics",
    title: "Make Your Content Move",
    description:
      "Animated quotes, text, logos and graphics that make your book's ideas pop on social media and video.",
  },
  overview: {
    title: "Motion Graphics, Content That Stops the Scroll",
    description:
      "Moving visuals catch the eye far more than static images. At Author House Inc., we turn your quotes, stats and key ideas into short, shareable clips in your brand colors and fonts.",
    points: [
      "Animated quotes",
      "Logo animations",
      "Explainer graphics",
      "Ad creatives",
      "Text animations",
      "Title sequences",
      "Social media clips",
      "Brand-matched templates",
    ],
    image: "/image/services/motion-graphics.png",
    imageAlt: "Motion graphics frames",
    ctaLabel: "Create Motion Graphics",
  },
  process: {
    title: "From Idea to Moving Visuals Step by Step",
    description:
      "Short, branded clips made for the platforms your readers use.",
    steps: [
      {
        icon: "lightbulb",
        title: "Pick the Message",
        text: "We choose the quotes, ideas or stats that will hook your readers.",
      },
      {
        icon: "palette",
        title: "Design and Animate",
        text: "We design in your brand style and bring it to life with motion.",
      },
      {
        icon: "check",
        title: "Review and Deliver",
        text: "You review the clips and get files sized for each platform.",
      },
    ],
  },
},

 "promotional-videos": {
  name: "Promotional Videos",
  category: "Video & Audio",
  seo: {
    title: "Promotional Videos for Authors & Books",
    description: "Ads, author introductions and promo clips that help sell your book and build your platform.",
  },
  hero: {
    badge: "Promotional Videos",
    title: "Videos That Sell Your Book",
    description:
      "Video ads, author introductions and promo clips that build interest in your book and your work.",
  },
  overview: {
    title: "Promotional Videos, Put a Face to Your Book",
    description:
      "Readers connect with authors they can see and hear. At Author House Inc., we plan, script and produce videos for ads, your website, crowdfunding pages and social media.",
    points: [
      "Video ads",
      "Book announcements",
      "Website videos",
      "Stock footage and animation",
      "Author introductions",
      "Crowdfunding videos",
      "Remote filming guidance",
      "Ad-ready formats",
    ],
    image: "/image/services/promotional-videos.png",
    imageAlt: "Author promotional video",
    ctaLabel: "Make My Promo Video",
  },
  process: {
    title: "From Concept to Promo Video Step by Step",
    description:
      "Professional video, whether you appear on camera or not.",
    steps: [
      {
        icon: "lightbulb",
        title: "Plan the Concept",
        text: "We agree on the goal, message and style of your video.",
      },
      {
        icon: "video",
        title: "Film or Create",
        text: "You record at home with our guidance, or we build it from footage and animation.",
      },
      {
        icon: "rocket",
        title: "Edit and Deliver",
        text: "We edit the video and deliver versions for every platform.",
      },
    ],
  },
},


  "video-editing": {
  name: "Video Editing",
  category: "Video & Audio",
  seo: {
    title: "Video Editing Services for Authors",
    description: "Professional editing for interviews, readings, vlogs and social clips.",
  },
  hero: {
    badge: "Video Editing",
    title: "Raw Footage to Polished Video",
    description:
      "Send us your footage and we'll turn it into polished interviews, readings, vlogs and social clips.",
  },
  overview: {
    title: "Video Editing, Your Footage, Professionally Finished",
    description:
      "You don't need a film crew to make great video, you need good editing. We cut, color, caption and add music, and turn long videos into short clips for social media.",
    points: [
      "Cutting and pacing",
      "Audio cleanup",
      "Titles and graphics",
      "Short clips from long videos",
      "Color correction",
      "Captions and subtitles",
      "Royalty-free music",
      "Two revision rounds",
    ],
    image: "/image/services/video-editing.png",
    imageAlt: "Video editing timeline",
    ctaLabel: "Edit My Video",
  },
  process: {
    title: "From Raw Footage to Final Cut Step by Step",
    description:
      "Simple to send, quick to turn around, ready to post.",
    steps: [
      {
        icon: "file",
        title: "Upload Your Footage",
        text: "Share your files through Google Drive or Dropbox with any notes.",
      },
      {
        icon: "video",
        title: "Edit and Enhance",
        text: "We cut, color, clean up audio and add captions and music.",
      },
      {
        icon: "check",
        title: "Review and Deliver",
        text: "You review the edit, request changes and get the final files.",
      },
    ],
  },
},

 "audiobook-production": {
  name: "Audiobook Production",
  category: "Video & Audio",
  seo: {
    title: "Audiobook Production Services",
    description: "Professional narration, editing and mastering for audiobooks ready for Audible, Apple and Spotify.",
  },
  hero: {
    badge: "Audiobook Production",
    title: "A Story That Sounds as Good as It Reads",
    description:
      "Professional narrators, editing and mastering that bring your book to life for listeners at home, in the car or on the go.",
  },
  overview: {
    title: "Audiobook Production, Books Made for Listening",
    description:
      "Audiobooks let your story reach listeners wherever they are. You choose the narrator, and we handle recording, editing and mastering to the standards every major platform requires.",
    points: [
      "Narrator auditions",
      "Studio recording",
      "Music and sound effects",
      "Apple and Spotify files",
      "Author narration coaching",
      "Editing and mastering",
      "Audible-ready files",
      "Retail sample clip",
    ],
    image: "/image/services/audiobooks.png",
    imageAlt: "Audiobook recording studio",
    ctaLabel: "Produce My Audiobook",
  },
  process: {
    title: "From Text to Finished Audiobook Step by Step",
    description:
      "A professional audiobook, ready to sell on every major platform.",
    steps: [
      {
        icon: "message",
        title: "Hear Auditions",
        text: "Listen to narrators reading your book and pick the voice you love.",
      },
      {
        icon: "mic",
        title: "Record the Book",
        text: "Your narrator records in a professional studio, chapter by chapter.",
      },
      {
        icon: "check",
        title: "Master and Deliver",
        text: "We edit and master the audio to platform specs and deliver final files.",
      },
    ],
  },
},
};