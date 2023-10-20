import { SectionHeader } from "./SectionHeader";
import TestimonialCart from "./TestimonialCart";

const data = [
  {
    name: "Alex Carter",
    profession: "Tech Enthusiast",
    review:
      "Shopping at your tech store has been a delightful experience. The wide range of products, competitive prices, and expert guidance from your team have made me a loyal customer. I highly recommend your shop to fellow tech enthusiasts!",
    image:
      "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=",
  },
  {
    name: "Sophia Patel",
    profession: "Gamer",
    review:
      "As a passionate gamer, I've found my gaming haven at your store. Your selection of gaming gear is incredible, and your prices are unbeatable. The products are top-notch, and the customer service is exceptional. Keep up the great work!",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww",
  },
  {
    name: "Michael Chang",
    profession: "DIY Tech Enthusiast",
    review:
      "Your e-commerce shop is a DIY tech lover's dream come true. I've purchased various components and tools for my projects, and the quality is outstanding. Your fast shipping and helpful resources are a huge plus!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
  },
];

const Section = () => {
  return (
    <section className="py-12  sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* <div className="text-center">
            <p className="text-lg font-medium text-gray-600 font-pj">
              2,157 people have said how good Rareblocks
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Our happy clients say about us
            </h2>
          </div> */}
          <SectionHeader title="Our happy clients say about us" />

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter">
                <div className="bg-gradient-to-r from-[#44ff9a] via-[#44b0ff] to-[#8b44ff] via-[#ff6644] to-[#ebff70] h-full w-full"></div>
              </div>
            </div>

            {/*  */}
            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {data.map((review, idx) => (
                <TestimonialCart key={idx} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
