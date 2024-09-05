import { Feature } from "./Feature";

const features = [
  {
    title: "Customer Chatbot",
    description:
      "Automated chatbot that directly integrates into your website bby making simple html changes. The Chatbot is eqquipped with an AI model that goes through the website information thereby providing information to potential customers",
  },
  {
    title: "Lead Generator",
    description:
      "Automated lead identification through AI-based predictive analytics, Providing advanced filtering and targeting based on industry, demographics, behaviours, and other relevant criteria and offer customizable messaging to potential leads across reddit ",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tighter'>Features</h2>
        <div className='max-w-xl mx-auto'>
        </div>
        <div className='mt-16 flex flex-col sm:flex-row gap-4'>
          {features.map(({title,description})=>(
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};
