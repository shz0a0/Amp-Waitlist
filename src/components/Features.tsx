import { Feature } from "./Feature";

const features = [
  {
    title: "BOT/LEAD GENERATOR",
    description: `
      <ul class="list-disc pl-5 space-y-4">
        <li><strong>Automated Customer Outreach:</strong> Effortlessly reach potential customers on Reddit and Twitter through automated direct messages, tailored to individuals interested in related products or services.</li>
        <li><strong>Community-Based Product Promotion:</strong> Promote products in relevant Twitter communities and Reddit subreddits with targeted posts, identifying niche communities for maximum visibility.</li>
        <li><strong>Sentiment Analysis for Targeting:</strong> Use AI-driven sentiment analysis to identify dissatisfied users on Reddit and Twitter, offering personalized solutions.</li>
        <li><strong>Customizable Messaging Campaigns:</strong> Create and deploy customized messaging campaigns across platforms, aligning with each community's tone and interests.</li>
        <li><strong>Performance Analytics Dashboard:</strong> Gain insights with a comprehensive analytics dashboard, tracking key metrics for data-driven decision making.</li>
      </ul>
    `,
  },
  {
    title: "Deploy Instant AI Sales Bot on your website",
    description: `
      <ul class="list-disc pl-5 space-y-4">
        <li><strong>Conversational AI Chatbot:</strong> Understands user intent and delivers accurate, human-like responses for customer queries about your product. The AI adapts to various question formats, providing precise answers regardless of phrasing.</li>
        <li><strong>Effortless Integration via Script Tag:</strong> Deploy the chatbot on any website with a simple HTML script tag. No complex setup or technical expertise required—just copy and paste the script, and the chatbot is live.</li>
        <li><strong>Automatic Website Scanning:</strong> The chatbot scans your entire website, analyzing content and product details to provide relevant, accurate responses. It stays up-to-date with your offers and updates its knowledge base dynamically.</li>
        <li><strong>24/7 Availability:</strong> Ensure customers always have access to support, even outside regular business hours. The chatbot works around the clock, enhancing customer engagement and satisfaction with instant answers.</li>
        <li><strong>Analytics Dashboard:</strong> Access a powerful dashboard to monitor chatbot performance, customer interactions, and engagement rates. Use this data to enhance support strategies and optimize product recommendations.</li>
      </ul>
    `,
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Features</h2>
        <div className='max-w-xl mx-auto'></div>
        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8'>
          {features.map(({title, description}) => (
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};