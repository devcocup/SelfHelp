const Colors = {
    primaryBgColor: 'rgb(0 , 131, 105)',
    secondaryBgColor: 'rgb(0, 143, 120)',
    lightGreen: 'rgb(58, 152, 132)',
    darkGreen: '#205547',
    orange: '#F7A553',
    lightOrange: '#E9EED7',
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
    hintFS: 14,
    pinHeaderFS: 22,
    pinContentFS: 16,
    textHeaderFS: 23,
    textContentFS: 18
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
    elementM: 10,
    containerM: 20,
    lM: 30,
    xlM: 40
}

const PanelLabels = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Clear', '0'
]

const SecurityQuestions = [
    {
        value: 'What was the name of your first pet?'
    },
    {
        value: 'What is your favorite sport?'
    },
    {
        value: 'What was the name of the street that you grew up on?'
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
                description: 'Reduce, anxiety, tension, and stress with this guided audio exercies.',
                bgImage: require('../Assets/Images/at_the_beach_bg-min.jpg')
            },
            {
                icon: require('../Assets/Images/focusing_on_the_present.png'),
                subTopic: 'Focusing on the Present',
                description: 'An exercise to ground yourself in the Pressent to reduce stress',
                bgImage: require('../Assets/Images/focusing_on_the_present_bg-min.jpg')
            },
            {
                icon: require('../Assets/Images/guided_breathing.png'),
                subTopic: 'Guided Breathing',
                description: 'Breathing techniques to help you relax when you are overwhelmed.',
                bgImage: require('../Assets/Images/guided_breathing_bg-min.jpg')
            },
            {
                icon: require('../Assets/Images/guided_muscle_relaxation.png'),
                subTopic: ' Guided Muscle Relaxation',
                description: 'Reduce tension with this audio guided muscle relaxationexercise.',
                bgImage: require('../Assets/Images/guided_muscle_relaxation_bg-min.jpg')
            },
            {
                icon: require('../Assets/Images/listening_to_soothing_sounds.png'),
                subTopic: 'Listening to Soothing Sounds',
                description: 'Feel more relaxed by listening to these soothing sounds.',
                bgImage: require('../Assets/Images/listening_to_soothing_sounds_bg-min.jpg')
            },
            {
                icon: require('../Assets/Images/my_safe_place.png'),
                subTopic: 'My Safe Place',
                description: 'This exercise will help you visualize being at the beach to reduce stress.',
                bgImage: require('../Assets/Images/my_safe_place_bg-min.jpg')
            },
            {
                icon: require('../Assets/Images/people_I_can_call.png'),
                subTopic: 'People I Can Call',
                description: 'Make a list of the people you can call when you need to talk to them.',
                bgImage: require('../Assets/Images/people_I_can_call_bg-min.jpg')
            },
            {
                icon: require('../Assets/Images/things_that_make_me_smile.png'),
                subTopic: 'Things that make me smile',
                description: 'Make a gallery of your favorite things that make you smile and happy.',
                bgImage: require('../Assets/Images/things_that_make_me_smile_bg-min.jpg')
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
                You would\'t say that about me. That\'s messed up.\"',
                subContent: 'Asking why someone is saying these things is a good lead into telling them why what they\'re saying is harmful. As a peer they may be more likely to listen to what you have to say.'
            },
            {
                choiceCaption: 'C',
                content: 'Tell your commanding officer or your training instructor \
                about what you witnessed.',
                subContent: 'What your coworkers are saying about other members in your unit undermines the strength of your team and can lead to a hostile working environment. Your CO may have additional ways to address the problem at hand and make it a safer working environment for everyone in your unit'
            }
        ]
    },
    {
        title: 'Harassment',
        question: 'Your friend confides in you that a coworker has been making comments about how attractive she is, even after she asked him to stop, and the other day blocked the door of the breakroom so that the only way she could leave was to press against him through the doorway. She says that it\'s been making her nervous about what they\'ll do next and she\'s not sure how to stop it. As she tells you more, you realize that she\'s talking about someone in your unit. What can you do to help?',
        answers: [
            {
                choiceCaption: 'A',
                content: 'Let them know that what\'s happening to them isn\'t their fault, and that you\'re there to support them. Ask if there\'s a particular place where this person usually approaches them and offer to accompany them.',
                subContent: 'This is a good option and shows that you care about your friend. Brainstorming options shows that you take your friend\'s situation seriously and acknowledges the ways that the harassment is affecting their life.'
            },
            {
                choiceCaption: 'B',
                content: 'Talk to the guy harassing your friend. Tell them that what they\'re doing is unacceptable. Not only that, it affects your unit\'s readiness and is punishable.',
                subContent: 'This could be a difficult conversation, but he might not know how he has been coming across. This option should only be taken if the friend that confided in you is comfortable with it, because it may cause more problems for you or your friend if the harasser responds negatively.'
            },
            {
                choiceCaption: 'C',
                content: 'Offer to go with your friend to meet with a professional resource. (Sexual Assault Response Coordinator (SARC), Sexual Assault Prevention and Response Victim Advocate (SAPR VA), an Equal Employment Opportunity Counselor, Special Victims Counsel or Victims Legal Counsel, Chaplain)',
                subContent: 'It\'s important to let your friend make the next decision that they feel most comfortable making. The fact that your friend told you about what has been going on was really brave, and they may be open to additional support. Offer to reach out to support personnel for them.  Asking them how you can support them can be empowering and help them regain control of the situation.'
            }
        ]        
    },
    {
        title: 'Hazing',
        question: 'A new soldier was recently transferred from another base to your unit, so everyone is in the barracks drinking and being loud. It\'s tradition. But the last time that happened, things got weird at the end of the night. The staff sergeant had the new guy naked and doing push ups. You went to bed early, but you heard some messed up stuff about what happened after that. The staff sergeant is already inebriated and you\'re worried about what might happen tonight. What can you do to help?',
        answers: [
            {
                choiceCaption: 'A',
                content: 'Confer with your peers. \"Guys, let\'s make sure things don\'t end up like last time.\"',
                subContent: 'Sometimes, it just takes one person to break through the groupthink that can take over a large group of people.  It can be helpful to approach people individually, rather than all at once, both for your own safety and to get individual opinions.',
            },
            {
                choiceCaption: 'B',
                content: 'Get help if things go too far.',
                subContent: 'Find someone that can help you intervene in the situation if you don\'t feel safe doing so. This may be another senior Service member that you trust, your CO, a SARC or another professional. This is a good option as it can help keep you safe, and bring others into the fold about what\'s going on.'
            },
            {
                choiceCaption: 'C',
                content: 'Find an opportunity to get them out of harm\'s way.',
                subContent: 'You know the situation best. Taking into consideration what\'s going on, find an opportunity to remove the person from the situation. This might also be an opportunity to look for long-term solutions to address what has been happening.'
            }
        ]
    },
    {
        title: 'Sexual abuse',
        question: 'A friend confides in you that he\'s being forced to have sex with someone. He jokes about it at first, but you can tell it really bothers him.  He shares that the person is a woman, and an officer, but won\'t say who. He says he\'s ashamed and has no idea how make it stop. He\'s afraid that no one will believe him because he\'s a man, and why wouldn\'t he want to have sex with her. What can you do to help?',
        answers: [
            {
                choiceCaption: 'A',
                content: '\"I believe you.\"',
                subContent: 'Some of the most important words that a survivor can hear is \"I believe you.\" Validate how they\'re feeling and offer your support to get them the help they need. Sexual assault isn\'t something that only happens to women, or can only be perpetrated by men.'
            },
            {
                choiceCaption: 'B',
                content: 'Suggest that they talk to a supervisor they are comfortable approaching.',
                subContent: 'Please note that if the supervisor they reach out to is in their chain of command, it will automatically trigger an Unrestricted Report. This is a good option if your friend is ready to file an Unrestricted report against their abuser. You can learn more about Restricted and Unrestricted Report here, or speak to a Safe Helpline staff member at online.safehelpline.org or by calling 877-995-5247.'
            },
            {
                choiceCaption: 'C',
                content: 'Offer to go with them to see a Sexual Assault Response Coordinator (SARC) or Sexual Assault Prevention and Response Victim Advocate (SAPR VA).',
                subContent: 'This is a good option. SARCs are a confidential resource who ensure that survivors receive appropriate and responsive care. SARCs manage an installation or unit\'s Sexual Assault Prevention and Response (SAPR) program, and serve as the single point of contact to coordinate care. They will be able to talk through different reporting options with your friend, and how they can get long-term support.'
            }
        ]
    },
    {
        title: 'Stalking',
        question: 'Your friend shares that her ex-girlfriend, another Service member on base, won\'t stop calling or texting her, and has been \"dropping by\" her house after work. She says she feels unsafe and is having trouble sleeping and focusing at work, but she isn\'t sure she wants to report it. What can you do to help?',
        answers: [
            {
                choiceCaption: 'A',
                content: '\"That must be so frightening, I\'m sorry that she\'s acting that way.  Do you need me to stay over tonight?\" Ask if there\'s a particular time or day of the week her ex usually approaches them and offer to stay overnight.',
                subContent: 'This is a good option and shows that you care about your friend. Offering to stay with them can help them feel safer. However, this is a temporary solution because you won\'t be able to be with your friend all the time.'
            },
            {
                choiceCaption: 'B',
                content: 'Ask her if she would consider telling her supervisor.',
                subContent: 'Respect her decision to not want to report but suggest possibly confiding in her supervisor or another superior about what has been going to help her gain an ally in this situation.'
            },
            {
                choiceCaption: 'C',
                content: 'Suggest that she reach out to an advocate for support.',
                subContent: 'Local rape crisis centers have resources to help victims of stalking and can help your friend with obtaining a protection order with law enforcement if she chooses to get one. You can look up local rape crisis centers here, but remember to let her decide if she wants to connect with them or not. You may also suggest that she reach out to a counselor at the Equal Employment Opportunity Commission.'
            }
        ]
    }
]

const PastPlansLabels = [
    {
        date: 'January 15, 2018',
        time: '22: 41'
    },
    {
        date: 'January 12, 2018',
        time: '12: 41'
    },
    {
        date: 'January 12, 2018',
        time: '15: 41'
    },
    {
        date: 'January 11, 2018',
        time: '17: 41'
    },
    {
        date: 'January 5, 2018',
        time: '09: 41'
    },
]

const QuizResultsLabels = [
    {
        status: 'Sadness',
        frequency: 'Sometimes'
    },
    {
        status: 'Anxiety',
        frequency: 'Always'
    },
    {
        status: 'Sleep issues',
        frequency: 'Never'
    },
    {
        status: 'Loneliness',
        frequency: 'Sometimes'
    },
    {
        status: 'Stress & Fear',
        frequency: 'Sometimes'
    },
    {
        status: 'Hopelessness',
        frequency: 'Sometimes'
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
    SearchResultLabels,
    PastPlansLabels,
    QuizResultsLabels
}

export default Constants
