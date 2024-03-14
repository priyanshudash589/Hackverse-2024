import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
    const faqs = [
        {
            question: "Who can participate in the technical event?",
            answer:
                "The event is open to Engineering and Technology students. Participants from diverse backgrounds and expertise levels are encouraged to join.",
        },
        {
            question: "Can I receive a certificate of participation?",
            answer:
                "Participants who attend the event and actively engage in sessions and activities will receive a certificate of participation. Details on how to obtain the certificate will be provided at the event venue or through the event website.",
        },
        {
            question: "How can I stay updated on event announcements and changes?",
            answer:
                "To stay informed about event updates, follow our official social media channels and regularly check the event website for announcements, schedule changes, and additional information.",
        },
        {
            question: "Is there a registration fee?",
            answer:
                "Details regarding registration fees can be found on the event website. Some events may offer discounted rates for students, early birds, or group registrations. Be sure to check the pricing information during the registration process.",
        },
        {
            question: "Are there any competitions or hackathons during the event?",
            answer:
                "Yes, the event may include competitions, hackathons, or coding challenges. Keep an eye on the event schedule for details on specific contests and how to participate.",
        },
        {
            question: "Team Size?",
            answer:
                "(1-3)",
        },

        {
            question: "Who can participate?",
            answer:
                "Anyone passionate about coding can participate in a hackathon. Whether you’re a beginner or an experienced developer, hackathons offers a great opportunity to learn, collaborate, and showcase your skills. 🚀👩‍💻",
        },
        {
            question: "Is this an offline event?",
            answer:
                "Yes,this is an offline event",
        },
        {
            question: "Can we apply as a team?",
            answer:
                "Yes, you can participate either as a team or individually",
        },
        {
            question: "What if we don't have a team?",
            answer:
                "No worries, participants can hack solo also",
        },
        {
            question: "Will there be arrangements for food and resting area ?",
            answer:
                    "Yes,food is on us.We will provide you resting area as well",
        },
        {
            question: "Once I am accepted,what do I need to bring?",
            answer:
                    "Your college id card,laptop,phone,charger",
        },
        {
            question: "Is it possible to attend it virtually?",
            answer:
                "No, the hackathon is going to be held offline only.",
        },
        {
            question: "Did we miss something?",
            answer:
                "If we missed anything or you have other queries ,contact us on satapathyprayasu@gmail.com",
        },
        
    ];

    return (
        <div className="w-screen bg-black">
            <div className="container-fix">
                <h1 className="text-center text-7xl text-white font-bold decoration-ui-primary">
                 FAQs
                </h1>

                <div className="border mt-8 container-fix max-w-5xl rounded-lg">
                    <Accordion type="single" collapsible>
                        {faqs.map(({ question, answer }, index) => (
                            <AccordionItem key={index} value={index.toString()}>
                                <AccordionTrigger className="text-left">
                                    {question}
                                </AccordionTrigger>
                                <AccordionContent className="text-ui-primary text-left">
                                    {answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
