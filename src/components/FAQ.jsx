import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "How do I place an order?",
      answer:
        "To place an order on our tech shop, simply browse our products, select the items you want, and add them to your cart. Then, proceed to the checkout page where you can provide your shipping information and make payment securely using various payment options.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept a wide range of payment methods, including credit cards, debit cards, PayPal, and more. You can choose the payment option that is most convenient for you during the checkout process.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We have a hassle-free return policy. If you are not satisfied with your purchase, you can initiate a return within 30 days of receiving the product. Please make sure the item is in its original condition and packaging for a smooth return process.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Our customer support team is available 24/7 to assist you. You can reach out to us through our contact page on the website, or you can email us at support@yourtechshop.com. We are here to help with any questions or concerns you may have.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Quick Solutions to Common Queries and Concerns"
        />
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-200  bg-gray-100 dark:bg-slate-700 dark:text-gray-200 text-gray-900 border dark:border-slate-600 rounded-lg  ${
                index === activeIndex ? "shadow-lg" : ""
              } cursor-pointer hover:bg-gray-50`}
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleAccordion(index)}
              >
                <span className="flex text-lg font-semibold ">
                  {faq.question}
                </span>

                <svg
                  className={`w-6 h-6 text-gray-400 ${
                    index === activeIndex ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {index === activeIndex && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-lg font-normal">
                  <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
