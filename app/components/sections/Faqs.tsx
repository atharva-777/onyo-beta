import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Faq = {
  Question: string;
  Answer: string;
};

const faqs: Faq[] = [
  {
    Answer:
      "Yoliday is a platform designed for travel enthusiasts to join unique experiences curated by experts and to create their own travel experiences, allowing others to join in on the adventure. Users can design personalized itineraries, share their unique insights, and invite fellow explorers to participate. This feature fosters a collaborative travel community where members can discover new experiences, connect with others, and make lasting memories together. Whether you’re looking for hidden gems, authentic local dishes, or winding streets off the beaten path, Yoliday helps you dive deeper into your travels. Connecting with like-minded adventurers can create lasting memories and build friendships while exploring together.",
    Question: "What is Yoliday and how does it work?",
  },
  {
    Answer:
      "Yoliday allows you to connect with other travelers by enabling you to join their experiences and vice versa. When you participate in a Yoliday-created experience, you'll have the opportunity to meet new people you may not have encountered before.",
    Question: "How do I connect with other travelers?",
  },
  {
    Answer:
      "Adventures Experiences, Trekking Experiences, Heritage Tours, Food Tours, Spiritual Experiences, Cultural Experiences, Leisure Tours, City Walks, and much more…",
    Question: "What type of experiences can you find on Yoliday?",
  },
  {
    Answer:
      "To join a Yoliday experience, simply sign up on our platform. Once you're registered, you can explore a variety of experiences created by Yoliday. When you find one that interests you, enter your name and preferences, and complete the booking payment to secure your spot.",
    Question: "How do I book an experience on Yoliday?",
  },
  {
    Answer:
      'Yes, you can create your own experience called "User Created Experience" on  Yoliday. To create your own experience on Yoliday, first sign up on our platform. After that, you can click the "plus" icon in the center to start creating your "user-created experience." You\'ll need to provide relevant photos, a name, duration, description, minimum and maximum participant details, pricing, inclusions, exclusions, and a cancellation policy. Additionally, Yoliday offers an AI feature to assist you in crafting your experience with ease.',
    Question: "Can I create my own experience on Yoliday?",
  },
  {
    Answer:
      "No, there's no fee to join Yoliday. You can browse through our experiences and create your own experiences without any charges. ",
    Question: "Is there a fee for joining Yoliday?",
  },
];
function Faqs() {
  return (
    <section className="mb-20 px-5 lg:px-0 mt-20 flex flex-col items-center justify-center">
      <h2 className="mb-10 text-left text-2xl font-medium text-black text-opacity-80">
        Frequently Asked Questions
      </h2>
      <div className="flex w-full max-w-[1250px] flex-col items-start gap-8 text-black text-opacity-80">
        {faqs.map((faq, i) => (
          <Accordion
            key={i}
            type="single"
            className="w-full rounded-lg shadow-md"
            collapsible
          >
            <AccordionItem value={`item-${i}`} className="w-full">
              <AccordionTrigger className="flex w-full items-center justify-between p-4 text-left">
                {faq.Question}
              </AccordionTrigger>
              <AccordionContent className="border-t border-gray-300 p-4">
                {faq.Answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
}

export default Faqs;
