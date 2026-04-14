
"use client";

import { H4 } from "../ui/H4";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

const tableOfContents: TOCItem[] = [
    {
        title: "Introduction",
        items: [
            "What This Article Covers",
            "Who This Guide Is For"
        ]
    },
    {
        title: "Understanding the Core Concepts",
        items: [
            "Key Terminologies Explained",
            "Why These Concepts Matter"
        ]
    },
    {
        title: "Project Setup & Prerequisites",
        items: [
            "Tools and Technologies Used",
            "Recommended Folder Structure"
        ]
    },
    {
        title: "Architecture Overview",
        items: [
            "Application Flow",
            "Choosing the Right Design Pattern"
        ]
    },
    {
        title: "Implementation Guide",
        items: [
            "Step-by-Step Development Process",
            "Writing Clean and Maintainable Code"
        ]
    },
    {
        title: "Performance Optimization",
        items: [
            "Improving Load Times",
            "Caching and Resource Management"
        ]
    },
    {
        title: "Security Best Practices",
        items: [
            "Common Security Risks",
            "How to Protect Your Application"
        ]
    },
    {
        title: "Testing & Debugging",
        items: [
            "Unit and Integration Testing",
            "Debugging Common Issues"
        ]
    },
    {
        title: "Deployment & Production Readiness",
        items: [
            "Environment Configuration",
            "Monitoring and Logging"
        ]
    },
    {
        title: "Common Mistakes to Avoid",
        items: [
            "Beginner Pitfalls",
            "Lessons Learned from Real Projects"
        ]
    },
    {
        title: "Future Improvements",
        items: [
            "Scaling the Application",
            "Upcoming Features & Enhancements"
        ]
    },
    {
        title: "Conclusion",
        items: [
            "Key Takeaways",
            "Final Thoughts"
        ]
    }
];

type TOCItem = {
    title: string;
    items: string[];
};


export default function TOC() {

    return (
        <div className="col-span-4 lg:col-span-1">
            <H4>Table of Content</H4>
            <Accordion
                type="multiple"
                className="max-w-lg"
                defaultValue={[tableOfContents[0].title]}
            >
                {tableOfContents.map((toc) => (
                    <AccordionItem key={toc.title} value={toc.title}>
                        <AccordionTrigger>{toc.title}</AccordionTrigger>
                        <AccordionContent>
                            <ul className="my-2 ml-6 list-disc [&>li]:mt-2">
                                {toc.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
