
const recommendationCard = [
  {
    id: 0,
    name: 'M.Khadim Hussain',
    image: "images/khadim.jpeg",
    designation: 'React JS | NEXT JS | Node | CSS',
    view: "Hey everyone! I wanted to take a moment to recommend inshal for any React.js opportunities. I had the pleasure of working with him on multiple projects where he showcased a understanding of React.js and Next.js concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Inshal is a reliable and dedicated team member who would be a great asset to any React.js team. recommended! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/m-khadim-hussain-ab22a4281/"
  },
  {
    id: 1,
    name: 'Muhammad Fasih',
    image: "images/muhammad fasih.jpeg",
    designation: ' Web Design and Frontend Development | Building Innovative Solutions with AI',
    view: "I had the privilege of working alongside inshal on multiple  projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic resume at giaic, where inshal professionalism and attention to detail shone brightly. I wholeheartedly endorse inshal for any opportunity that calls for a  skilled and dedicated individual.",
    linkednURL: "https://www.linkedin.com/in/muhammad-fasih-99023b314/"
  },
  {
    id: 2,
    name: 'Uzair Bokra',
    image: "images/uzair.jpeg",
    designation: 'MERN Stack expert | JAMStack | React & Next.js| JS, TS, Node.js, Express.js, Python',
    view: "I wholeheartedly recommend inshal as a talented frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities. Inshal attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any student team.",
    linkednURL: "https://www.linkedin.com/in/webdeveloper-nextjs-mernstack-expert/"
  },
  {
    id: 3,
    name: 'Syed Huzaifa Bin Hamid',
    image: "images/huzaifa.jpeg",
    designation: '" Petroleum and Gas Engineer " || " Typescript " || " HTML " || "CSS" ||',
    view: "I highly recommend Inshal Javed for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/s-huzaifa/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
