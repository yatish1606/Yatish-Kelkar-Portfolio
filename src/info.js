import comex from './assets/images/comex.svg'
import itsa from './assets/images/itsa.svg'
import dsc from './assets/images/dsc.svg'
import diabeat from './assets/images/diabeat.svg'

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
        description: 'projects done, including hobby ones'
    },
]

export const workExperienceList = [
    {
        icon: <Box size={24} color="white"/>,
        title: 'Product Designer',
        where: "FortyTwoLabs LLP",
        link: 'http://github.com/yatish1606',
        duration : 'September 2020 - December 2020, 3 months'
    },
    {
        icon: <Smartphone size={24} color="white"/>,
        title: 'React Native Developer',
        where: "Mavoix Solutions",
        link: 'http://github.com/yatish1606',
        duration : 'April 2020 - July 2020, 4 months'
    },
    {
        icon: <PenTool size={24} color="white"/>,
        title: 'UI and UX Expert',
        where: "Google DSC",
        link: 'http://github.com/yatish1606',
        duration : 'August 2020 - present, 10 months'
    },
]

export const projectImagesList = [
    {
        name: 'Google DSC 2020-21',
        image:dsc,
        link:'https://dscpvgcoet.github.io',
        description:"Designed and developed the website for Google's Developer Students Clubs PVGCOET"
    },
    {
        name : 'DiaBeat',
        image:diabeat,
        link:'https://dscpvgcoet.github.io',
        description:"DiaBeat is an application for helping diabetic people for helping to assess, manage and control their diabetes through online consultation, lab booking and lab testing"
    },
    {
        name : '',
        image:comex,
        link:'https://dscpvgcoet.github.io',
        description:"Designed and developed the website for Google's Developer Students Clubs PVGCOET"
    },
    {
        name : 'ITSA 2020-21',
        image:itsa,
        link:'https://dscpvgcoet.github.io',
        description:"Designed and developed the website for Google's Developer Students Clubs PVGCOET"
    },
    {
        name: 'Comex',
        image:comex,
        link:'https://dscpvgcoet.github.io',
        description:"Designed the Comex application in which people will be able to exchange items in and around their localities for currency"
    },
]

export const EducationalInfoList = [
    {
        title: 'Savitribai Phule Pune University',
        degree : 'Bachelors Engineering (BE) IT',
        score: '9.66',
        scoreInfo : 'GPA',
        when : 'graduating in June 2022',
        link : 'https://github.com'
    },
    {
        title: 'PACE Institute Pune',
        degree : 'Higher Secondary Certificate (HSC)',
        score: '87%',
        scoreInfo : 'percent',
        when : 'passed in June 2018',
        link : 'https://github.com'
    },
    {
        title: 'Abhinava Vidyalaya English Medium School',
        degree : 'Secondary School Certificate (SSC)',
        score: '94%',
        scoreInfo : 'percent',
        when : 'passed in May 2016',
        link : 'https://github.com'
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