const Colors = {
    primaryBgColor: 'rgb(0 , 131, 105)',
    secondaryBgColor: 'rgb(0, 143, 120)',
    lightGreen: 'rgb(58, 152, 132)',
    darkGreen: '#205547',
    orange: '#F7A553',
    gray: '#6D6F72'
}

const FontSizes = {
    menuFS: 23,
    headingFS: 32,
    topicFS: 18,
    quizTitleFS: 20,
    quizCaptionFS: 22,
    quizQuestionFS: 16,
    quizAnswerFS: 14
}

const BorderRadii = {
    boxBR: 4
}

const Paddings = {
    elementP: 10,
    containerP: 20
}

const Margins = {
    elementMT: 10
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

const ExercisesLabels = [
    {
        content: [
            {
                icon: require('../Assets/Images/at_the_beach.png'),
                subTopic: 'At the Beach',
                description: 'Reduce, anxiety, tension, and stress with this guided audio exercies.'
            },
            {
                icon: require('../Assets/Images/focusing_on_the_present.png'),
                subTopic: 'Focusing on the Present',
                description: 'An exercise to ground yourself in the Pressent to reduce stress'
            },
            {
                icon: require('../Assets/Images/guided_breathing.png'),
                subTopic: 'Guided Breathing',
                description: 'Breathing techniques to help you relax when you are overwhelmed.'
            },
            {
                icon: require('../Assets/Images/guided_muscle_relaxation.png'),
                subTopic: ' Guided Muscle Relaxation',
                description: 'Reduce tension with this audio guided muscle relaxationexercise.'
            },
            {
                icon: require('../Assets/Images/listening_to_soothing_sounds.png'),
                subTopic: 'Listening to Soothing Sounds',
                description: 'Feel more relaxed by listening to these soothing sounds.'
            },
            {
                icon: require('../Assets/Images/my_safe_place.png'),
                subTopic: 'My Safe Place',
                description: 'This exercise will help you visualize being at the beach to reduce stress.'
            },
            {
                icon: require('../Assets/Images/people_I_can_call.png'),
                subTopic: 'People I Can Call',
                description: 'Make a list of the people you can call wehn you need to talk to them.'
            },
            {
                icon: require('../Assets/Images/things_that_make_me_smile.png'),
                subTopic: 'Things that make me smile',
                description: 'Make a gallery of your favorite things that make you smile and happy.'
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

const QuizLabels = [
    {
        title: 'At a bar',
        question: 'You are at a bar with some people in your training uint. \
        Some of the guys start saying lewd and disrespectful comments about \
        the women in your unit who aren\'t there. What can you do to intervene?',
        answers: [
            {
                choiceCaption: 'A',
                content: 'Interject and refocus the conversation on something else: \
                \"Did you all watch the game last night?',
                subContent: 'Distraction can be a good option in the moment \
                if you\'re not sure how to address their comments long-term or don\'t feel safe \
                discussing why it\'s not okay for them to make those comments.'
            },
            {
                choiceCaption: 'B',
                content: 'Interrupt the conversation and tell them that what \
                they\'re saying isn\'t okay: \"Why would you say that about Sue or Julia? \
                You would\'t say that about me. That\'s messed up.\"'
            },
            {
                choiceCaption: 'C',
                content: 'Tell your commanding officer or your training instructor \
                about what you witnessed.'
            }
        ]
    }
]

const Constants = {
    Colors,
    FontSizes,
    BorderRadii,
    Paddings,
    Margins,
    LearnLabels,
    ExercisesLabels,
    WhatCanIDoToHelpLabels,
    QuizLabels
}

export default Constants
