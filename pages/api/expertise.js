const expertise = [
  {
    id: 0,
    title: "Front-end Development",
    desc: "I am a skilled Front-end developer with extensive experience in building mini project. using   TypeScript, Express.js, React.js, and Node.js. I possess a  understanding of server-side rendering. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients in future.",
  },
  {
    id: 1,
    title: "Html and CSS",
    desc: "As a developer, I'm proficient in html and CSS . I use Html to simplify project structure. tasks like task assignment, hacakathon, and practical test. CSS has improved my styling, and enchancing the appearance of web pages. it control layout,colors,fonts , spacing and overall design, allowing for more visually appealing and user-freindly experience.  .",
  },
  {
    id: 2,
    title: "Designing (UI/UX)",
    desc: "I am good in using design software such as Figma, , and Adobe Illustrator. Through participating in hackathons and class work, I have gained practical experience in UI/UX design  Designing is my passion, and it has allowed me to continue to develop my creative skills and grow in the field.",
  },
  {
    id: 3,
    title: "Github",
    desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
  },
  {
    id: 4,
    title: "Open Source Contributor",
    desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
