const review = [
    {
        id: 0,
        clientName: 'syed Huzaifa bin Hamid',
        clientLocation: 'karachi',
        clientSource: 'friend',
        clientReview: 'It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a knowledge of the work he does. I look forward to our next collaboration.'
    },
    {
        id: 2,
        clientName: 'M.khadim Hussain',
        clientLocation: 'Karachi',
        clientSource: 'Friend',
        clientReview: 'He is very good with communication, great experience to work with him. '
    },
    {
        id: 3,
        clientName: 'Muhammad Fasih',
        clientLocation: 'Karachi',
        clientSource: 'Friend',
        clientReview: "Inshal is  knowledgeable and helpful. He knows in and out of web app development . His learning of different technologies and frameworks in the space is also very impressive. I hope I get the chance to work with him again"
    },

]
export default function handler(req, res) {
    res.status(200).json(review)
}
