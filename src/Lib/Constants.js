const Colors = {
    primaryBgColor: 'rgb(0 , 131, 105)',
    secondaryBgColor: 'rgb(0, 143, 120)',
    lightGreen: 'rgb(58, 152, 132)'
}

const FontSizes = {
    menuFS: 23,
    headingFS: 32
}

const LearnLabels = [
    {
        topic: 'Understanding Sexual Assault',
        content: [
            {
                icon: require('../Assets/Images/building_hope.png'),
                subTopic: 'Building Hope & Resiliency',
                description: 'A self guided education program that helps you begin to recover and heal.'
            },
            {
                icon: require('../Assets/Images/what_to_do.png'),
                subTopic: 'What to do',
                description: 'Learn what to do if you or someone you know has been sexually assaulted.'
            },
            {
                icon: require('../Assets/Images/effects_of_sexual_assault.png'),
                subTopic: 'Effects of Sexual Assault',
                description: 'Here are some common effects survivors of sexual assault may face.'
            },
            {
                icon: require('../Assets/Images/reduce_your_risk.png'),
                subTopic: 'Reduce Your Risk',
                description: 'Tips on how to reduce your risk of being sexually assaulted.'
            }
        ]
    },
    {
        topic: 'Transitioning Service Member',
        content: [
            {
                icon: require('../Assets/Images/tsm_overview.png'),
                subTopic: 'TSM Overview',
                description: 'Sexual assault Information for Transitioning Service Members.'
            },
            {
                icon: require('../Assets/Images/benefits_and_services.png'),
                subTopic: 'Benefits and Services',
                description: 'Services & Benefits for survivors of sexual assault who are TSMs'
            }
        ]
    }
]

const Constants = {
    Colors,
    FontSizes,
    LearnLabels
}

export default Constants
