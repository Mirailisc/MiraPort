import Image1 from '../../image/Project1.png'
import Image2 from '../../image/Project2.png'
import ImageErr from '../../image/ProjectNotFound.png'

export const projectCards = [
    {
        name: 'MiraBot',
        key: 'card1',
        detail: 'An utility bot for MiraCommunity Discord Server',
        url: 'https://github.com/Mirailisc/mirabot-discord',
        image: Image2,
    },
    {
        name: 'MiraPort',
        key: 'card2',
        detail: "My Portfolio website which shows some of my information",
        url: 'https://github.com/Mirailisc/MiraPort',
        image: Image1,
    },
    {
        name: 'MiraSchool',
        key: 'card3',
        detail: "A website to manage my school's work schedule, class schedule, and Google Meet attendance.",
        url: 'https://github.com/Mirailisc/MiraSchool',
        image: ImageErr,
    },
    {
        name: 'MiraStudy',
        key: 'card4',
        detail: "A community website which is suitable for my high school community.",
        url: 'https://mirastudy.vercel.app/',
        image: ImageErr,
    },
]