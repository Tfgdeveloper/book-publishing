/* ==================================================================
   Content for the legal pages: /privacy-policy, /terms-and-conditions,
   /refund-policy

   - Wrap words in *asterisks* inside a hero `title` to make them medium
     weight, like the rest of the site.
   - Content blocks inside each section:
       { type: "p", text, lead? }   paragraph (lead = bold opening words)
       { type: "list", items }      bulleted list
       { type: "table", head, rows } table
       { type: "contact" }          company contact details (from CONTACT)
   - Replace every [bracketed placeholder] before going live, and have
     an attorney review these policies.
   ================================================================== */



export const CONTACT = {
  company: "Author House Inc.",
  address: "1548 S Missouri Ave, Clearwater, FL 33756",
  phone: "(727) 618-7790",
  email: "support@authorhouseinc.com",
};

export const legalPages = {
  /* ---------------------------------------------------------------- */
  /*  PRIVACY POLICY                                                  */
  /* ---------------------------------------------------------------- */
  "privacy-policy": {
    name: "Privacy Policy",
    seo: {
      title: "Privacy Policy ",
      description: "Learn how Author House Inc collects, uses and protects your personal information and the manuscripts and creative work you share with us.",
    },
    hero: {
      badge: "Legal",
      title: "Your *Privacy* Matters to Us",
      description: "How we collect, use and protect your personal information and the creative work you trust us with.",
    },
    intro: [
      "Author House Inc. (\u201cAuthor House,\u201d \u201cwe,\u201d \u201cus\u201d or \u201cour\u201d) respects your privacy. This Privacy Policy explains what personal information we collect when you visit our website or use our book writing, editing, design, publishing, marketing, video and audio services (the \u201cServices\u201d), how we use and share it, and the choices you have.",
      "By using our website or Services, you agree to this Privacy Policy. If you do not agree, please do not use the website or Services.",
    ],
    sections: [
      {
        id: "information-we-collect",
        title: "Information We Collect",
        blocks: [
          { type: "p", lead: "Information you give us.", text: "When you fill out a consultation form, request a quote, place an order, sign up for our newsletter or contact us, we may collect:" },
          {
            type: "list",
            items: [
              "Your name, email address, phone number and mailing address",
              "Your company or pen name, if you provide one",
              "Details about your book project, including manuscripts, outlines, notes, artwork, recordings and other materials you share",
              "Billing details such as billing address. Card numbers are entered directly with our payment processors, and we do not store full card numbers",
              "Messages, call recordings (with notice where required), feedback and reviews you send us",
            ],
          },
          { type: "p", lead: "Information collected automatically.", text: "When you visit our website, we and our service providers may collect:" },
          {
            type: "list",
            items: [
              "IP address, browser type, device type and operating system",
              "Pages viewed, links clicked, referring website and time spent on pages",
              "Approximate location based on your IP address",
              "Information from cookies, pixels and similar technologies (see Cookies and Tracking Technologies)",
            ],
          },
          { type: "p", lead: "Information from third parties.", text: "We may receive information from advertising partners, analytics providers, payment processors and publishing platforms you ask us to work with, such as confirmation that a book listing or ad campaign is active." },
        ],
      },
      {
        id: "how-we-use",
        title: "How We Use Your Information",
        blocks: [
          { type: "p", text: "We use your information to:" },
          {
            type: "list",
            items: [
              "Respond to your inquiries and provide free consultations and quotes",
              "Deliver the Services you order, including writing, editing, design, publishing, distribution, marketing and production work",
              "Set up and manage publishing, distribution and marketing accounts in your name when you ask us to",
              "Process payments, send invoices and prevent fraud",
              "Send project updates, service messages and customer support replies",
              "Send marketing emails, texts or calls where you have agreed to receive them",
              "Improve our website, Services and customer experience",
              "Comply with legal obligations and enforce our Terms and Conditions",
            ],
          },
        ],
      },
      {
        id: "manuscripts",
        title: "Your Manuscripts and Creative Materials",
        blocks: [
          { type: "p", text: "We treat your manuscripts, ideas, artwork and other creative materials as confidential. We use them only to provide the Services you ordered. Our staff and contractors who work on your project are bound by confidentiality obligations. We will not publish, sell or share your materials without your permission, except as needed to deliver your project, such as uploading files to a platform you selected." },
          { type: "p", text: "We may show finished work in our portfolio only with your written permission. Ghostwriting projects are never shown publicly without your written consent." },
        ],
      },
      {
        id: "sharing",
        title: "How We Share Your Information",
        blocks: [
          { type: "p", text: "We do not sell your personal information. We may share it with:" },
          {
            type: "list",
            items: [
              "Service providers who help us run our business, such as hosting, email, payment processing, customer relationship management, analytics and cloud storage providers",
              "Contractors and team members, such as writers, editors, illustrators, narrators and designers working on your project, under confidentiality obligations",
              "Publishing and distribution platforms, such as Amazon KDP, IngramSpark, Apple Books, Audible and ISBN agencies, when you ask us to publish or register your work",
              "Advertising and marketing platforms, when you order marketing services that require it",
              "Legal and safety recipients, when required by law, court order or government request, or to protect our rights, users or the public",
              "A successor business, if Author House is involved in a merger, acquisition or sale of assets, subject to this Privacy Policy",
            ],
          },
        ],
      },
      {
        id: "cookies",
        title: "Cookies and Tracking Technologies",
        blocks: [
          { type: "p", text: "We use cookies and similar technologies to keep the website working, remember your preferences, measure traffic and show relevant ads. These may include analytics tools such as Google Analytics and advertising pixels from platforms such as Google, Meta and others." },
          { type: "p", text: "You can block or delete cookies through your browser settings. Some parts of the website may not work properly without cookies. You can also opt out of interest-based ads through the Digital Advertising Alliance at optout.aboutads.info or the Network Advertising Initiative at optout.networkadvertising.org." },
        ],
      },
      {
        id: "communications",
        title: "Email, Text and Phone Communications",
        blocks: [
          { type: "p", text: "If you give us your phone number through our forms, you agree that we may contact you by phone, email or text about your inquiry and project. We will send marketing texts only with your express consent, and consent is not a condition of purchase. Message and data rates may apply." },
          { type: "p", text: "You can opt out at any time. Click \u201cunsubscribe\u201d in any marketing email, reply STOP to any text message, or contact us at support@authorhouseinc.com. We may still send you messages related to an active project or payment." },
        ],
      },
      {
        id: "retention",
        title: "Data Retention",
        blocks: [
          { type: "p", text: "We keep personal information for as long as needed to provide the Services, maintain business records, resolve disputes and meet legal, tax and accounting requirements. Project files are kept for [24 months] after project completion so we can support revisions and future editions, unless you ask us to delete them sooner." },
        ],
      },
      {
        id: "security",
        title: "Data Security",
        blocks: [
          { type: "p", text: "We use reasonable administrative, technical and physical safeguards to protect your information, including encrypted connections and access controls. No method of transmission or storage is completely secure, so we cannot guarantee absolute security. Please keep backup copies of your manuscripts and materials." },
        ],
      },
      {
        id: "your-rights",
        title: "Your Privacy Rights",
        blocks: [
          { type: "p", text: "Depending on where you live, you may have the right to:" },
          {
            type: "list",
            items: [
              "Know what personal information we collect and how we use it",
              "Access or receive a copy of your personal information",
              "Correct inaccurate information",
              "Delete your personal information, subject to legal exceptions",
              "Opt out of targeted advertising and the sale or sharing of personal information",
              "Withdraw consent where we rely on consent",
              "Not be discriminated against for exercising your rights",
            ],
          },
          { type: "p", text: "To make a request, email support@authorhouseinc.com or call (727) 618-7790. We may need to verify your identity before responding. You may use an authorized agent where the law allows. We will respond within the time required by applicable law." },
          { type: "p", lead: "California residents.", text: "Under the California Consumer Privacy Act, as amended, you have the rights listed above. In the past 12 months we have collected identifiers, commercial information, internet activity information, approximate geolocation and the content of materials you share. We do not sell personal information, and we do not knowingly sell or share the personal information of consumers under 16." },
          { type: "p", lead: "Visitors from the EU, UK and similar regions.", text: "We process personal information to perform our contract with you, based on our legitimate interests in running our business, to meet legal obligations, or with your consent. You may also lodge a complaint with your local data protection authority. Your information may be transferred to and processed in the United States." },
        ],
      },
      {
        id: "children",
        title: "Children\u2019s Privacy",
        blocks: [
          { type: "p", text: "Our Services are intended for adults. Although we help authors create children\u2019s books, we do not knowingly collect personal information from children under 13. If you believe a child has given us personal information, contact us and we will delete it." },
        ],
      },
      {
        id: "third-party-links",
        title: "Third-Party Links and Platforms",
        blocks: [
          { type: "p", text: "Our website may link to third-party websites and platforms. We are not responsible for their privacy practices. Please read their privacy policies before sharing information with them." },
        ],
      },
      {
        id: "changes",
        title: "Changes to This Privacy Policy",
        blocks: [
          { type: "p", text: "We may update this Privacy Policy from time to time. We will post the updated version on this page with a new effective date. If changes are significant, we may also notify you by email." },
        ],
      },
      { id: "contact", title: "Contact Us", blocks: [{ type: "contact" }] },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  TERMS AND CONDITIONS                                            */
  /* ---------------------------------------------------------------- */
  "terms-and-conditions": {
    name: "Terms and Conditions",
    seo: {
      title: "Terms and Conditions ",
      description: "Read the Terms and Conditions for Author House Inc, covering our writing, publishing and marketing services, payments, ownership and revisions.",
    },
    hero: {
      badge: "Legal",
      title: "Terms and *Conditions*",
      description: "The agreement between you and Author House Inc. for using our website and our writing, publishing and marketing services.",
    },
    intro: [
      "These Terms and Conditions (\u201cTerms\u201d) are a binding agreement between you and Author House Inc. (\u201cAuthor House,\u201d \u201cwe,\u201d \u201cus\u201d or \u201cour\u201d). They govern your use of our website and all services we provide, including book writing, ghostwriting, editing, proofreading, formatting, illustration, design, publishing, distribution, marketing, publicity, video, animation and audiobook production (the \u201cServices\u201d).",
      "By using our website, submitting a form, approving a quote or paying for Services, you agree to these Terms, our Privacy Policy and our Refund Policy. If you do not agree, do not use the website or Services.",
    ],
    sections: [
      {
        id: "eligibility",
        title: "Eligibility",
        blocks: [
          { type: "p", text: "You must be at least 18 years old and able to enter a binding contract to order Services. If you order on behalf of a company or another person, you confirm that you have authority to bind them to these Terms." },
        ],
      },
      {
        id: "scope",
        title: "Our Services and Project Scope",
        blocks: [
          { type: "p", text: "Each project is defined by a written quote, proposal, invoice or service agreement (an \u201cOrder\u201d). The Order states the deliverables, price, number of revisions, estimated timeline and any payment milestones. If an Order conflicts with these Terms, the Order controls for that project." },
          { type: "p", text: "Work outside the agreed scope, such as added chapters, extra illustrations, additional formats or major direction changes after approval, may require a new quote and additional fees. We will tell you before starting any extra paid work." },
        ],
      },
      {
        id: "payment",
        title: "Quotes, Pricing and Payment",
        blocks: [
          {
            type: "list",
            items: [
              "Quotes are valid for [30] days unless stated otherwise.",
              "Prices are in US dollars and exclude taxes, which are added where required.",
              "Payment may be due in full upfront or in milestones as stated in your Order. Work begins after the first payment clears.",
              "If a payment is late, we may pause work until it is received. Paused time is added to the project timeline.",
              "Third-party costs, such as ISBN fees, copyright filing fees, printing, proof copies, ad spend, stock images, music licenses, press release distribution and platform fees, are billed separately unless your Order says they are included.",
              "By providing a payment method, you authorize us to charge it for the amounts in your Order.",
            ],
          },
        ],
      },
      {
        id: "timelines",
        title: "Timelines",
        blocks: [
          { type: "p", text: "Timelines in quotes and on our website are estimates. They depend on prompt feedback, approvals and materials from you. Delays caused by late feedback, scope changes, third-party platforms or events outside our control may extend the timeline. If you do not respond to us for [30] consecutive days, we may treat the project as on hold. After [90] days without response, we may close the project as described in our Refund Policy." },
        ],
      },
      {
        id: "responsibilities",
        title: "Your Responsibilities",
        blocks: [
          { type: "p", text: "You agree to:" },
          {
            type: "list",
            items: [
              "Provide accurate information and the materials we need on time",
              "Review drafts and give clear, consolidated feedback within the agreed review periods",
              "Review final files carefully before approval. Once you approve a deliverable, later corrections may be billed as new work",
              "Keep backup copies of all materials you send us",
              "Communicate respectfully with our team",
            ],
          },
        ],
      },
      {
        id: "your-content",
        title: "Content You Provide",
        blocks: [
          { type: "p", text: "You keep ownership of all content you provide. You grant us a limited license to use it only to perform the Services." },
          { type: "p", text: "You confirm that your content and instructions:" },
          {
            type: "list",
            items: [
              "Are original to you, or that you have permission to use them",
              "Do not infringe anyone\u2019s copyright, trademark, privacy or other rights",
              "Are not defamatory, obscene, hateful or illegal",
              "Do not include false claims presented as fact that could harm others",
            ],
          },
          { type: "p", text: "We may refuse or stop work on content that we believe violates these Terms, the law or the rules of a publishing platform." },
        ],
      },
      {
        id: "ownership",
        title: "Ownership of Deliverables",
        blocks: [
          { type: "p", text: "When you have paid in full for a project, you own the final deliverables created for you, including the manuscript, illustrations, cover design and other final files described in your Order. We assign to you all rights we hold in those final deliverables, and you keep 100% of your royalties. We do not take a share of your book sales." },
          { type: "p", text: "Until payment is complete, we keep ownership of the work in progress and you may not publish or use it." },
          { type: "p", text: "The following are not transferred to you: our pre-existing tools, templates, fonts and know-how; unused concepts, sketches and drafts you did not select; and third-party materials such as licensed stock images, fonts or music, which are covered by their own license terms. We will tell you about any third-party license limits that apply to your deliverables." },
        ],
      },
      {
        id: "ghostwriting",
        title: "Ghostwriting and Credit",
        blocks: [
          { type: "p", text: "For ghostwriting projects, you are credited as the author. We will not claim authorship or publicly identify the project as ours without your written consent." },
        ],
      },
      {
        id: "portfolio",
        title: "Portfolio Use",
        blocks: [
          { type: "p", text: "We may display finished work, such as covers, illustrations or trailers, in our portfolio and marketing only with your written permission. You may withdraw permission at any time for future use." },
        ],
      },
      {
        id: "revisions",
        title: "Revisions",
        blocks: [
          { type: "p", text: "Each Order states the number of revisions included. A revision is a change to an existing deliverable within the agreed scope. A request that changes the project\u2019s direction, style or scope after approval is not a revision and may require a new quote. Unused revisions expire when the project closes." },
        ],
      },
      {
        id: "platforms",
        title: "Publishing Platforms and Accounts",
        blocks: [
          { type: "p", text: "When we set up publishing, distribution or marketing accounts for you, they are created in your name and you control them. You are responsible for following the terms of each platform, such as Amazon KDP, IngramSpark, Apple Books, Audible, Google and social media platforms." },
          { type: "p", text: "Author House is an independent company. We are not affiliated with, endorsed by or connected to Amazon or any other publishing platform, retailer or marketplace. Platforms may reject, delay, change or remove listings, ads or content at their sole discretion. We are not responsible for their decisions, fees, policy changes or outages." },
        ],
      },
      {
        id: "no-guarantees",
        title: "No Guaranteed Results",
        blocks: [
          { type: "p", text: "We work hard to help your book succeed, but we cannot guarantee sales, royalties, bestseller status, rankings, reviews, media coverage, bookstore or library placement, followers, publishing contracts, agent representation, awards or any specific outcome. Results depend on many factors outside our control, including market demand and platform algorithms." },
          { type: "p", text: "We do not buy, write or arrange fake or paid reviews. Any review outreach we perform follows the rules of the platforms involved." },
        ],
      },
      {
        id: "confidentiality",
        title: "Confidentiality",
        blocks: [
          { type: "p", text: "We keep your manuscripts, ideas and project information confidential, as described in our Privacy Policy. You agree to keep our non-public pricing, processes and internal materials confidential. These duties do not cover information that is public, already known, independently developed or required to be disclosed by law." },
        ],
      },
      {
        id: "communications",
        title: "Communications",
        blocks: [
          { type: "p", text: "You agree that we may contact you by email, phone and text about your inquiry and project. Marketing messages are sent only as described in our Privacy Policy, and you can opt out at any time." },
        ],
      },
      {
        id: "refunds",
        title: "Refunds and Cancellations",
        blocks: [
          { type: "p", text: "Refunds and cancellations are governed by our Refund Policy, which is part of these Terms." },
        ],
      },
      {
        id: "chargebacks",
        title: "Chargebacks",
        blocks: [
          { type: "p", text: "If you have a concern about a charge, please contact us first at support@authorhouseinc.com so we can resolve it. If you file a chargeback for Services that were delivered as agreed, we may pause or stop work, provide records of the work and your approvals to your bank, and seek recovery of the amount plus reasonable collection costs where allowed by law." },
        ],
      },
      {
        id: "termination",
        title: "Termination",
        blocks: [
          { type: "p", text: "You may cancel a project as described in our Refund Policy. We may suspend or end a project if you breach these Terms, fail to pay, provide unlawful content or behave abusively toward our team. If we end a project without cause, we will refund amounts paid for work not yet performed." },
          { type: "p", text: "Sections on ownership, confidentiality, payment owed, disclaimers, limitation of liability, indemnification and governing law survive termination." },
        ],
      },
      {
        id: "website-use",
        title: "Website Use",
        blocks: [
          { type: "p", text: "You may use our website only for lawful purposes. You may not copy, scrape or reuse our website content, designs or logos without permission, attempt to break or overload the website, or submit false information through our forms. All website content is owned by Author House or our licensors." },
        ],
      },
      {
        id: "warranties",
        title: "Disclaimer of Warranties",
        blocks: [
          { type: "p", text: "Except as expressly stated in these Terms or your Order, the website and Services are provided \u201cas is\u201d and \u201cas available.\u201d To the fullest extent allowed by law, we disclaim all implied warranties, including merchantability, fitness for a particular purpose and non-infringement." },
        ],
      },
      {
        id: "liability",
        title: "Limitation of Liability",
        blocks: [
          { type: "p", text: "To the fullest extent allowed by law, Author House will not be liable for any indirect, incidental, special, consequential or punitive damages, or for lost profits, royalties, sales or data, arising from the website or Services. Our total liability for any claim related to a project will not exceed the amount you paid us for that project in the [12] months before the claim arose." },
        ],
      },
      {
        id: "indemnification",
        title: "Indemnification",
        blocks: [
          { type: "p", text: "You agree to defend and hold harmless Author House and its owners, employees and contractors from claims, losses and costs, including reasonable attorney fees, arising from content you provide, your breach of these Terms, or your use of the deliverables in violation of law or third-party rights." },
        ],
      },
      {
        id: "governing-law",
        title: "Governing Law and Disputes",
        blocks: [
          { type: "p", text: "These Terms are governed by the laws of the State of Florida, without regard to conflict of law rules. Before filing any claim, you agree to contact us and try to resolve the dispute informally for at least [30] days. Any legal action must be brought in the state or federal courts located in Pinellas County, Florida, and you consent to their jurisdiction." },
        ],
      },
      {
        id: "changes",
        title: "Changes to These Terms",
        blocks: [
          { type: "p", text: "We may update these Terms from time to time. Updated Terms apply from their effective date. Changes do not affect Orders already accepted unless you agree in writing." },
        ],
      },
      {
        id: "general",
        title: "General",
        blocks: [
          { type: "p", text: "If any part of these Terms is found unenforceable, the rest remains in effect. Our failure to enforce a right is not a waiver of it. You may not transfer your rights under these Terms without our written consent. These Terms, your Order, our Privacy Policy and our Refund Policy are the entire agreement between us about the Services." },
        ],
      },
      { id: "contact", title: "Contact Us", blocks: [{ type: "contact" }] },
    ],
  },

  /* ---------------------------------------------------------------- */
  /*  REFUND POLICY                                                   */
  /* ---------------------------------------------------------------- */
  "refund-policy": {
    name: "Refund Policy",
    seo: {
      title: "Refund Policy ",
      description: "Review the Author House Inc refund and cancellation policy, including refunds by project stage, non-refundable items and how to request a refund.",
    },
    hero: {
      badge: "Legal",
      title: "Our *Refund* Policy",
      description: "Clear, fair rules for cancellations and refunds, based on how far your project has progressed.",
    },
    intro: [
      "At Author House Inc. (\u201cAuthor House,\u201d \u201cwe,\u201d \u201cus\u201d or \u201cour\u201d), we want you to be happy with your project. Because our Services involve custom creative work and time reserved by our team, refunds depend on how much work has been completed when you ask. This policy is part of our Terms and Conditions.",
    ],
    sections: [
      {
        id: "making-it-right",
        title: "Our First Step: Making It Right",
        blocks: [
          { type: "p", text: "If you are not happy with your work, please tell us first. In most cases, we can fix the problem through revisions, a new concept or by assigning a different writer, editor or designer at no extra cost within your project\u2019s scope. We ask that you give us a fair chance to resolve your concern before requesting a refund." },
        ],
      },
      {
        id: "refunds-by-stage",
        title: "Refunds by Project Stage",
        blocks: [
          {
            type: "table",
            head: ["Project stage when you cancel", "Refund"],
            rows: [
              ["Within [24 hours] of payment, before any work begins", "[100%] of the amount paid"],
              ["After project kickoff, before the first draft or concept is delivered", "[75%] of the amount paid"],
              ["After the first draft, sample or concept is delivered", "[50%] of the amount paid for the current milestone, plus unpaid milestones are cancelled"],
              ["After a milestone or deliverable is approved", "No refund for that milestone"],
              ["After final files are delivered or the project is complete", "No refund"],
            ],
          },
          { type: "p", text: "For projects paid in milestones, completed and approved milestones are not refundable. Refunds apply only to milestones not yet delivered." },
        ],
      },
      {
        id: "non-refundable",
        title: "Non-Refundable Items",
        blocks: [
          { type: "p", text: "The following are not refundable once paid or used:" },
          {
            type: "list",
            items: [
              "Third-party fees paid on your behalf, such as ISBN purchases, barcodes, copyright filing fees, printing, proof copies, shipping, stock images, fonts, music licenses and press release distribution",
              "Advertising budgets already spent on Amazon, social media or other platforms",
              "Marketing, publicity and social media services already performed, including monthly management fees for the current month",
              "Consultations, manuscript assessments and reports already delivered",
              "Rush fees, once rush work has started",
              "Services completed and delivered as described in your Order",
            ],
          },
        ],
      },
      {
        id: "when-refunds-dont-apply",
        title: "When Refunds Do Not Apply",
        blocks: [
          { type: "p", text: "Refunds are not available when:" },
          {
            type: "list",
            items: [
              "You change your mind about the project direction after approving a concept or draft",
              "You do not provide feedback, materials or approvals needed to continue, and the project is closed after [90] days without response",
              "Results such as sales, rankings, reviews, media coverage or bookstore placement do not meet your expectations, since these are not guaranteed",
              "A publishing platform rejects, removes or limits your book or ads because of its own policies or your content",
              "The project is stopped because of content that breaks our Terms or the law, or because of abusive behavior toward our team",
              "The request is made more than [30] days after final delivery",
            ],
          },
        ],
      },
      {
        id: "delivery-guarantee",
        title: "Our Delivery Guarantee",
        blocks: [
          { type: "p", text: "If we fail to deliver the agreed Services and do not fix the issue within [14] days after you notify us in writing, you may request a refund for the undelivered portion of your project, regardless of the stage table above." },
        ],
      },
      {
        id: "how-to-request",
        title: "How to Request a Refund",
        blocks: [
          { type: "p", text: "Email support@authorhouseinc.com with the subject line \u201cRefund Request\u201d and include:" },
          {
            type: "list",
            items: [
              "Your full name and the email used for your order",
              "Your order or invoice number",
              "The service purchased",
              "The reason for your request",
            ],
          },
          { type: "p", text: "We will confirm receipt within [2] business days and review your request within [7] business days. We may ask for a call to understand the issue and offer a solution." },
        ],
      },
      {
        id: "processing",
        title: "Processing Approved Refunds",
        blocks: [
          { type: "p", text: "Approved refunds are issued to the original payment method within [7 to 10] business days. Your bank or card issuer may take additional time to show the credit. Payment processing fees charged by third parties may be deducted where allowed by law." },
        ],
      },
      {
        id: "ownership-after-refund",
        title: "Ownership After a Refund",
        blocks: [
          { type: "p", text: "When a refund is issued, rights to any work in progress or unpaid deliverables stay with Author House. You may not publish or use deliverables from a refunded portion of the project. Materials you originally provided remain yours, and we will return or delete them on request." },
        ],
      },
      {
        id: "recurring",
        title: "Monthly and Recurring Services",
        blocks: [
          { type: "p", text: "For monthly services such as social media management or ad management, you may cancel at any time by emailing us at least [7] days before your next billing date. Cancellation stops future charges. Fees for the current billing period are not refundable." },
        ],
      },
      {
        id: "chargebacks",
        title: "Chargebacks",
        blocks: [
          { type: "p", text: "Please contact us before filing a chargeback so we can resolve your concern quickly. Filing a chargeback while a refund request is under review may delay the process. Chargebacks for Services delivered as agreed are handled as described in our Terms and Conditions." },
        ],
      },
      {
        id: "changes",
        title: "Changes to This Policy",
        blocks: [
          { type: "p", text: "We may update this Refund Policy from time to time. The version in effect when you paid for your Order applies to that Order." },
        ],
      },
      { id: "contact", title: "Contact Us", blocks: [{ type: "contact" }] },
    ],
  },
};