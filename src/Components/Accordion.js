import React, { useState } from 'react';
import FAQ from './FAQ';

function Accordion () {
 const [faqs, setfaqs] = useState([
    {
      question: 'What are the programs available?',
      answer:"We have many programs available for students:\n 1.	Chanakya : For students of graduation , Engineering and MBA. \n 2.	Automobile technology : For engineering students with interest in Automobile. \n 3.	Entrepreneurship : Program for people looking to establish startups. \n 4.	Pre-Placement Training program : 15 days, 30 Days & 3 months comprehensive training program with campus placement orientation for students who will face campus placements. \n 5.	Walkin-Placement training program : 3 Months Training program with job orientation for pass out students or students who are looking for better jobs.",
      open: false
    },
    {
      question: 'What is Chanakya and how is it beneficiary to students?',
      answer: 'Chanakya is the flagship program of Sandhan learning. It is India’s only complete career coaching program which helps students prepare for Govt. Jobs, Private Jobs and entrepreneurship under one program at less than Rs 1650/- per month.\n  \n The program offers 100% employment and also inculcate 360 degree skills in an individual. Apart from that the program is completely in line with National Education policy-2020. The program can be considered as India’s only corporate coaching program.',
      open: false
    },
    {
      question: 'What will be the mode of teaching?',
      answer: 'The mode of teaching will be online with limited students per batch and 1-1 orientation.',
      open: false
    },
    {
      question: 'Do you offer onsite Training program?',
      answer: 'Yes, we do provide onsite Training program to Institutes or organizations.',
      open: false
    },
    {
      question: 'What support does it provides to low achievers? ',
      answer: 'The flagship program “Chanakya” is focused towards 360 degree skill development and 100% placement. The program does not require excellent grades, all it require is psychology to learn and grow. The program can be availed by anyone who thinks he deserves a better career. ',
      open: false
    },
     {
      question: 'Who are these Industry experts?',
      answer: 'Industry experts at Sandhan Learning are from diverse work profiles such as HR managers, Ex-defense officers, R&D specialists, Research scientists, Training specialists, Operation managers, Business heads, entrepreneurs, Automobile experts, public administrators who are mostly IIT/IIM Alumni holding/retired from senior positions with reputed organizations like TATA, Mahindra, Maruti, Vedanta, MEARSK, Merdedes, Nissan , Ashok Leyland and many more. ',
      open: false
    },
       {
      question: 'What is the mode of payment Available?',
      answer: 'Student can pay via net-banking, UPI, Cheque, Demand draft, Cash in favour of Sandhan Learning private limited.  ',
      open: false
    },
        {
      question: 'Is there any demo class?',
      answer: 'Sandhan learning is dedicated towards student’s development and usually conduct free programs/ webinars for student’s betterment. ',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="accordion">
    
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default Accordion;
