"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  { question: "Who are you?", answer: "I am Peter" },
  { question: "Who are me?", answer: "I am Paul" },
];

function Questions() {
  return (
    <div id="questions" className="min-h-screen py-20">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-600 dark:text-white transition-colors mb-14 self-start">
        Questions & Answers
      </h2>
      <div>
        <Accordion type="multiple">
          {questions.map((e, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border mb-3 border-yellow-500 p-1 px-3 dark:hover:text-yellow-600 rounded-lg dark:text-white dark:hover:bg-zinc-700"
            >
              <AccordionTrigger className="hover:text-yellow-500 transition-colors hover:no-underline no-underline font-extralight cursor-pointer py-1 tracking-wide">
                {e.question}
              </AccordionTrigger>
              <AccordionContent className="p-1 dark:text-gray-200 font-extralight tracking-wide text-gray-900 first-letter:pl-3 border-t">
                {e.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Questions;
