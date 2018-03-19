const Colors = {
    primaryBgColor: 'rgb(0 , 131, 105)',
    secondaryBgColor: 'rgb(0, 143, 120)',
    lightGreen: 'rgb(58, 152, 132)',
    orange: '#F7A553',
    gray: '#6D6F72'
}

const FontSizes = {
    menuFS: 23,
    headingFS: 32,
    topicFS: 18,
    quizTitleFS: 20
}

const LearnLabels = [
    {
        topic: 'Understanding Sexual Assault',
        content: [
            {
                icon: require('../Assets/Images/what_can_I_do_to_help.png'),
                subTopic: 'What can I do to help?',
                description: 'Learn how to help someone who has been harassed or sexual assaulted.',
                subContent: []
            },
            {
                icon: require('../Assets/Images/learn.png'),
                subTopic: 'Educational Programs',
                description: 'Summary goes here',
                subContent: []
            },
            {
                icon: require('../Assets/Images/building_hope.png'),
                subTopic: 'Building Hope & Resiliency',
                description: 'A self guided education program that helps you begin to recover and heal.',
                subContent: []
            },
            {
                icon: require('../Assets/Images/what_to_do.png'),
                subTopic: 'What to do',
                description: 'Learn what to do if you or someone you know has been sexually assaulted.',
                subContent: []
            },
            {
                icon: require('../Assets/Images/effects_of_sexual_assault.png'),
                subTopic: 'Effects of Sexual Assault',
                description: 'Here are some common effects survivors of sexual assault may face.',
                subContent: [ 'Depression', 'Eating Disorders', 'PTSD', 'Self Harm', 'Sleep Disturbances', 'Substance Abuse', 'Suicide']
            },
            {
                icon: require('../Assets/Images/reduce_your_risk.png'),
                subTopic: 'Reduce Your Risk',
                description: 'Tips on how to reduce your risk of being sexually assaulted.',
                subContent: []
            }
        ]
    },
    {
        topic: 'Transitioning Service Member',
        content: [
            {
                icon: require('../Assets/Images/tsm_overview.png'),
                subTopic: 'TSM Overview',
                description: 'Sexual assault Information for Transitioning Service Members.',
                subContent: []
            },
            {
                icon: require('../Assets/Images/benefits_and_services.png'),
                subTopic: 'Benefits and Services',
                description: 'Services & Benefits for survivors of sexual assault who are TSMs',
                subContent: []
            }
        ]
    }
]

const WhatCanIDoToHelpLabels = [
    'The following five scenarios provide helpful ways to step in to support others.\
     The Scenarios cover a range of harmful behavior in the spectrum of sexual assault\
     and harassment. Each scenario includes different courses of action and how or why\
     that action can be helpful. Every stuation is different, but hopefully this \
     tool can help prepare you to support people at rist. You don\'t have to be a hero \
    to make a big difference in someone\'s life.',
    'If you need additional support about a situation you are dealing with, you can \
    reach out to a Safe Helpline by calling 877-995-5247 or by visiting online.safehelpline.org. \
    A trained Safe Helpline staff member is available to support you 24/7.'
]

const Constants = {
    Colors,
    FontSizes,
    LearnLabels,
    WhatCanIDoToHelpLabels
}

export default Constants
