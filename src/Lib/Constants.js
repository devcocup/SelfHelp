const Colors = {
    primaryBgColor: 'rgb(0 , 131, 105)',
    secondaryBgColor: 'rgb(0, 143, 120)',
    lightGreen: 'rgb(58, 152, 132)',
    darkGreen: '#205547',
    orange: '#F7A553',
    gray: '#6D6F72',
    lightGray: '#E6E6E6',
    red: '#FF3739'
}

const FontSizes = {
    menuFS: 23,
    headingFS: 32,
    topicFS: 18,
    contentFS: 16,
    quizTitleFS: 20,
    quizCaptionFS: 22,
    quizQuestionFS: 16,
    quizAnswerFS: 14,
    listFS: 16,
    hintFS: 14
}

const BorderRadii = {
    boxBR: 4,
    buttonBR: 8
}

const Paddings = {
    elementP: 10,
    containerP: 20,
    listPV: 20,
    listPH: 10,
    lP: 30
}

const Margins = {
    elementMT: 10,
    elementMB: 10,
    containerM: 20
}

const PanelLabels = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Clear', '0'
]

const SecurityQuestions = [
    {
        value: 'What was the name of your first pet?',
    },
    {
        value: 'What is your favorite sport?',
    }
]

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

const SoothingSoundsLabels = [
    {
        content: [
            {
                icon: require('../Assets/Images/crickets.png'),
                subTopic: 'Crickets',
                description: 'Listen to the sound of crickets chirping in the night.'   
            },
            {
                icon: require('../Assets/Images/forest.png'),
                subTopic: 'Forest',
                description: 'Embrace the nature filled sounds of the forest.'
            },
            {
                icon: require('../Assets/Images/harp.png'),
                subTopic: 'Harp',
                description: 'Listen to the beautiful sounds of a soothing harp.'
            },
            {
                icon: require('../Assets/Images/ocean.png'),
                subTopic: 'Ocean',
                description: 'Listen to the sounds of the waves by the ocean.'
            },
            {
                icon: require('../Assets/Images/rain.png'),
                subTopic: 'Rain',
                description: 'Listen to the sounds of rain falling.'
            },
            {
                icon: require('../Assets/Images/white_noise.png'),
                subTopic: 'White Noise',
                description: 'Listen to the soothing sound of white noise.'
            },
            {
                icon: require('../Assets/Images/wind_chimes.png'),
                subTopic: 'Wind Chimes',
                description: 'Listen to the rings of wind chimes moving in the wind.'
            }
        ]
    }
]

const PastJournalsLabels = [
    {
        checked: false,
        label: 'How are you feeling today?'
    },
    {
        checked: true,
        label: 'What is your favorite thing about life?'
    },
    {
        checked: false,
        label: 'How long are prompts going to be?'
    },
    {
        checked: true,
        label: 'Are we going to ask long questions that take up 2 lines?'
    },
    {
        checked: false,
        label: 'What is your dream job?'
    },
    {
        checked: false,
        label: 'Do you feel lucky punk? Do you?'
    }
]

const SearchLabels = [
    {
        content: [
            {
                icon: '',
                label: 'Local Resources'
            },
            {
                icon: '',
                label: 'Transitioning Service Resources'
            },
            {
                icon: require('../Assets/Images/talk_to_someone.png'),
                label: 'Talk to Someone'
            }
        ]
    }
]

const LocalSearchCategoryLabels = [
    {
        content: [
            {
                label: 'Army'
            },
            {
                label: 'Navy'
            },
            {
                label: 'Air Force'
            },
            {
                label: 'Marines'
            },
            {
                label: 'National Guard'
            },
            {
                label: 'Reserves'
            },
            {
                label: 'Coast Guard'
            }
        ]
    }
]

const SearchResultLabels = [
    {
        content: [
            {
                label: 'Sexual Assault Response Coordinator (SARC)',
                subContent: [
                    {
                        subLabel: 'Reserve Training Centers (RTC) in Utah',
                        phoneNumber: '1-877-432-2215',
                        location: 'SLAT LAKE CITY, UT'
                    },
                    {
                        subLabel: 'Utah Reserves',
                        phoneNumber: '1-844-663-3269',
                        location: 'SALT LAKE CITY, UT'
                    }
                ]
            },
            {
                label: 'Military Chaplain'
            },
            {
                label: 'Jusdge Advocate General (JAG)'
            },
            {
                label: 'Medical Personnel'
            },
            {
                label: 'Civilian Sexual Assault Service Provider'
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

const AtTheBeachLabels = {
    title: 'At the Beach',
    content: 'This exercise will help you visualize being at the beach, by channelling your feelings, \
    sense of sight, smell, and touch. This exercise may elp to reduce anxiety, tension, and stress. \
    It can make your arms or legs feel \"heavy\". You may also feel half awake or like you are \
    \"wandering off\" mentally. These aer natural reactions to relaxation. If you feel uncomfortable \
    at any time during the exercise, just open your eyes and remind yourself that you are in control and \
    you are safe. Please avoid doing this exercise while driving.'
}

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
    PanelLabels,
    SecurityQuestions,
    LearnLabels,
    ExercisesLabels,
    SoothingSoundsLabels,
    WhatCanIDoToHelpLabels,
    AtTheBeachLabels,
    PastJournalsLabels,
    QuizLabels,
    SearchLabels,
    LocalSearchCategoryLabels,
    SearchResultLabels
}

export default Constants
