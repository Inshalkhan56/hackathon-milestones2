const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'CIT  ',
                degree: 'Computer Information Technology',
                detail: "Certified in Computer Technology  from Instiute.",
                year: '2018-2018'
            },
            {
                id: 1,
                title: 'Government Degree Boys College',
                degree: 'HSSC, commerce',
                detail: "Completed HSC part 1 and part 2 in Commerce from Government Degree Boys College.",
                year: '2020-2022'
            },
            {
                id: 2,
                title: 'Nasra School',
                degree: 'SSC, Science Subjects',
                detail: "Completed SSC part 1 and part 2 in Science subjects from Education Trust Nasra School",
                year: '2018-2020'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: '',
                role: 'Frontend Developer',
                url: 'no Website',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '11/2024 - Present',
                location: 'karachi, Pakistan'
            },
            {
                id: 2,
                title: 'GIAIC',
                role: 'Learning',
                url: 'no website',
                desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
                year: '08/2023 - Present',
                location: 'Karachi, Pakistan'
            },
            {
                id: 3,
                title: 'Garments',
                role: 'Machine Operator',
                url: 'no Website',
                desc: "I work there as a Machine Operator , there I learned how to do CRUD'S operations in Singer, also I worked on overlack",
                year: '02/2020 - Present',
                location: 'Karachi, Pakistan'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
