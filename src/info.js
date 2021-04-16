import comex from './assets/images/comex.svg'
import itsa from './assets/images/itsa.svg'
import dsc from './assets/images/dsc.svg'
import diabeat from './assets/images/diabeat.svg'
import learnspace from './assets/images/learnspace.svg'

import { Box, Smartphone, PenTool, } from 'react-feather'


export const menuList = [
    {
        title: 'Me',
        scrollTo : 'landing'
    },
    {
        title: 'Work',
        scrollTo : 'projects-list'
    },
    {
        title: 'About',
        scrollTo : 'experience1'
    },
]

export const numberInfoList = [
    {
        value: '9.66',
        description: 'average engineering GPA'
    },
    {
        value: '10+',
        description: 'projects done, including hobby projects'
    },
]

export const workExperienceList = [
    {
        icon: <Box size={24} color="white"/>,
        title: 'Product Designer',
        where: "FortyTwoLabs LLP",
        link: 'https://www.fortytwolabs.com/',
        duration : 'September 2020 - December 2020, 3 months'
    },
    {
        icon: <Smartphone size={24} color="white"/>,
        title: 'React Native Developer',
        where: "Mavoix Solutions",
        link: 'https://www.mavoix.in/',
        duration : 'April 2020 - July 2020, 4 months'
    },
    {
        icon: <PenTool size={24} color="white"/>,
        title: 'UI and UX Expert',
        where: "Google DSC PVGCOET",
        link: 'https://dscpvgcoet.github.io/',
        duration : 'August 2020 - present, 10 months'
    },
]

export const projectImagesList = [
    {
        name: 'Google DSC 2020-21',
        image:dsc,
        link:'https://dscpvgcoet.github.io',
        description:"Designed and developed the website for Google's Developer Students Clubs PVGCOET",
        
    },
    {
        name : 'DiaBeat',
        image:diabeat,
        link:'https://play.google.com/store/apps/details?id=in.mavoix.diabeat',
        description:"DiaBeat is an application for helping diabetic people for helping to assess, manage and control their diabetes through online consultation, lab booking and lab testing",
        
    },
    {
        name : 'ITSA 2020-21',
        image:itsa,
        link:'https://itsa-pvg.github.io/website2021/#/',
        description:"Designed and developed the website for Google's Developer Students Clubs PVGCOET",
        
    },
    {
        name : 'LearnSpace',
        image:learnspace,
        link:'http://dbms-front.herokuapp.com/registerlogin',
        description:"LearnSpace™ is an application that is aimed at helping the students and teachers with online learning. Within LearnSpace™, teachers will be able to create a 'course' within their own personal classroom. Within this course, the teacher will be able to share study material, post assignments, collect and grade responses, post the quizzes which will deliver students responses by 'autograding' them and share important messages with the students. Similarly, students will be able to join courses, view and download study material and assignments, upload their own submissions for the assignments, attempt quizzes and chat with the rest of the class.",
        
    },
    {
        name: 'Comex',
        image:comex,
        link:'',
        description:"Designed the Comex application in which people will be able to exchange items in and around their localities for currency",
        
    },
    {
        name: 'Free Online Video Chat',
        image: '',
        link: 'https://freevideochatio.netlify.app/',
        description:"A simple and free application made in React which uses Socket.io and Peer to enable free one to one video chatting",
        
    },
    {
        name: 'CLI for MongoDB',
        image: '',
        link: 'https://github.com/yatish1606/Node.js/tree/master/CommandLineInterface',
        description:"A simple command line interface to interact with MongoDB through only the command line",
        
    },
    {
        name: 'Simple Text to Speech Engine',
        image: '',
        link: 'https://github.com/yatish1606/Node.js/tree/master/TextToSpeech',
        description:"Simple small application to download speech in mp3 format from a specified text",
        
    },
    {
        name: 'Chat App with Socket IO',
        image: '',
        link: 'https://github.com/yatish1606/ChatAppUsingSocketIO',
        description:"Enables creation of 'rooms' in which multiple people can join and chat",
        
    },
    {
        name: 'FileShare',
        image: '',
        link: 'https://github.com/yatish1606/React/tree/master/FileShare',
        description:"Allows the users to share any types of files to another user over email. This involves zipping and storing these files with Amazon S3 and then providing the recipient with a download link",
        
    },
    {
        name: 'PVGCOET Alumni platform',
        image: '',
        link: '',
        description:"Our very own alumni platform currently under development for PVG students and alumnus to engage in productive discussions and interaction",
        
    },
    {
        name: 'I-AM Digital Identity Platform',
        image: '',
        link: '',
        description:"Worked on designing the mobile app for the I-AM Digital Identity platform @FortyTwoLabs",
        
    },
]

export const EducationalInfoList = [
    {
        title: 'Savitribai Phule Pune University',
        degree : 'Bachelors Engineering (BE) IT',
        score: '9.66',
        scoreInfo : 'GPA',
        when : 'graduating in June 2022',
        link : 'http://www.unipune.ac.in/'
    },
    {
        title: 'PACE Institute Pune',
        degree : 'Higher Secondary Certificate (HSC)',
        score: '87%',
        scoreInfo : 'percent',
        when : 'passed in June 2018',
        link : 'https://iitianspace.com/'
    },
    {
        title: 'Abhinava Vidyalaya English Medium School',
        degree : 'Secondary School Certificate (SSC)',
        score: '94%',
        scoreInfo : 'percent',
        when : 'passed in May 2016',
        link : 'https://asm.ac.in/avemhs-home/'
    },
]

export const skillsInfoList = [
    {
        title: 'Design',
        skillList : ['Product Design', 'UI UX Design', 'Wireframing', 'Prototyping']
    },
    {
        title: 'Development',
        skillList : ['Web Development', 'HTML5 & CSS3', 'ReactJS', 'Back-End Development', 'REST API', 'React Native Development', 'Node.js and Express']
    },
    {
        title: 'Programming',
        skillList : ['C/C++', 'Data Structures', 'Algorithms', 'Javascript and frameworks', 'Basic Python', 'SQL']
    },
    {
        title: 'Tools',
        skillList : ['Figma', 'MS Office', 'Visual Studio Code']
    },
]