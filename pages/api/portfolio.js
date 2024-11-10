const portfolio = [
    {
        id: 0,
        projectName: "esh-calculator",
        url: "https:",
        image: "projects/calculator.png",
        projectDetail: "A simple and efficient calculator built with HTML, CSS, and JavaScript, designed for seamless user interaction and accurate, real-time calculations.",
        technologiesUsed: [
            {
                tech: "Javascript"
            },
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: " Design"
            },
            {
                tech: "TypeScript"
            },
        ]
    },
    {
        id: 0,
        projectName: "atm-machine",
        url: "https:",
        image: "projects/atm-machine.png",
        projectDetail: "This project is an interactive ATM machine interface, designed to simulate essential banking functions, including balance inquiries, deposits, and withdrawals, providing users with a realistic and user-friendly experience",
        technologiesUsed: [
            {
                tech: "Javascript"
            },
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: " Design"
            },
            {
                tech: "TypeScript"
            },
        ]
    },
    {
        id: 0,
        projectName: "Number-Guessing-Game",
        url: "https:",
        image: "projects/numbergame.png",
        projectDetail: 
        "A dynamic Number Guessing Game where players challenge themselves to guess a hidden number within a given range, featuring interactive visuals and responsive gameplay.",
        technologiesUsed: [
            {
                tech: "Javascript"
            },
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: " Design"
            },
            {
                tech: "TypeScript"
            },
        ]

    
    },
   
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
