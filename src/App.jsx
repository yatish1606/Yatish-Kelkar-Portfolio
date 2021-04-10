import React, { useEffect, useState } from 'react'
import { Instagram, Dribbble, GitHub, Linkedin, Box, Smartphone, PenTool, ArrowUpRight } from 'react-feather'
import me from './assets/images/yatish.svg'
import './app.css'
import { ArrowRight } from 'react-feather'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import comex from './assets/images/comex.svg'
import itsa from './assets/images/itsa.svg'
import dsc from './assets/images/dsc.svg'
import diabeat from './assets/images/diabeat.svg'

const menuList = [
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

const numberInfoList = [
    {
        value: '9.66',
        description: 'average engineering GPA'
    },
    {
        value: '10+',
        description: 'projects done, including hobby ones'
    },
]

const workExperienceList = [
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

const projectImagesList = [
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

const EducationalInfoList = [
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

const skillsInfoList = [
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

const MenuItem = ({title, scrollTo, isActive, index, setActiveMenu}) => {
    return (
        
        <div 
            className="menu-item" 
            key={index} 
            onClick={() => {
                setActiveMenu(index)
                document.querySelector(`.${scrollTo}-container`).scrollIntoView()
            }}
        >
            
            <p className={isActive ? "h5 white" : "h5 grey"}>{title}</p>
            {isActive ? <div className="yellow-dot"/> : <div className="transparent-dot"/>}
        </div>
        
    )
}

const NumberInfoItem = ({value, description, index}) => {
    return (
        <div className="number-info-item" key={index}>
            <p className="h3 primary">{value}</p>
            <p className="t3 white">{description}</p>
        </div>
    )
} 

const WorkExperienceItem = ({icon, title, where, link, index, isActive}) => {
    return (
        <div className={isActive ? "work-experience-box active-box" : "work-experience-box"}>
            <div className="work-experience-icon">{icon}</div>
            <div>
                <p className="t00 white margin-20">{title}.</p>
                <a href={link}><p className="t3 white margin-15">@ {where}</p></a>
            </div>
        </div>
    )
}

const InternshipExperienceItem = ({title, where, link, duration, index}) => {
    return (
        <div key={index} style={{marginBottom: 30}}>

            <a href={link}><p className="t0 white margin-10">{where} <ArrowUpRight size={20} color='white' style={{marginLeft: 10}}/> </p></a>
            <p className="t2 white">{title}</p>
            <p className="t3 grey margin-10">{duration}</p>
        </div>
    )
}

const EducationItem = ({title, when, link, degree, score, scoreInfo, index}) => {
    return (
        <div key={index} style={{marginBottom: 30}}>

            <p className="t0 white margin-10">{degree}</p>
            <a href={link}><p className="t2 grey ">{title} <ArrowUpRight size={20} color='grey' style={{marginLeft: 10}}/> </p></a>
            
            <p className="t3 grey margin-15">{when} with <span className="t0 primary">{score }</span> {scoreInfo}</p>
        </div>
    )
}





const App = () => {


    const [activeMenu, setActiveMenu] = useState(0)

    useEffect(() => {

        window.scroll({top: 0, left: 0, behavior: 'smooth'})
        
        document.addEventListener('load', () => {
            document.querySelector('body').classList.add('loaded')
        })

    }, [])

    return (
        
        
        <div className="container">


            
            
            
            <div className="inner-container landing-container lightBG">
                
                <div className="landing-left">
                    
                    <img src={me} alt="me" className="my-photo"/>
                    
                    <div>
                        <p className="t2 grey margin-15">HEY THERE 👋🏼</p>
                        <p className="h1 white">Yatish <br/> Kelkar. <br/> <div className="title-underline margin-20"></div> </p>
                    </div>
                    
                    <div className="social-media">
                        <a link href="https://instagram.com/yatish.kelkar"><Dribbble className="social-media-icon"/></a>
                        <a link href="https://instagram.com/yatish.kelkar"><Instagram className="social-media-icon"/></a>
                        <a link href="https://instagram.com/yatish.kelkar"><GitHub className="social-media-icon"/></a>
                        <a link href="https://instagram.com/yatish.kelkar"><Linkedin className="social-media-icon"/></a>
                    </div>
                
                </div>

                <div className="landing-right">
                    
                    <div className="menu">
                    {
                        menuList.map(({title, scrollTo}, index) => <MenuItem title={title} scrollTo={scrollTo} isActive={activeMenu === index} index={index} setActiveMenu={setActiveMenu}/> )
                    }
                    </div>

                    <div>
                        <p className="t2 grey margin-15">~ Introduction</p>
                        <p className="t00 white margin-20">Student, full stack developer and IT undergrad</p>
                        <p className="t3 grey margin-15">Currently completing my engineering at Pune University. Aspire to follow my passion of becoming a full stack professional</p>
                    </div>

                    <p className="h6 primary link-projects">Check out my projects <ArrowRight size={20} style={{marginLeft: 5}}/></p>
                    

                </div>
            
            </div>




            <div className="inner-container contact-container darkBG">
                
                <div className="contact-left" style={{height: 200}}>
                    
                    <div>
                        <p className="t2 grey margin-15">~ Contact</p>
                        <p className="t00 white margin-20">Mail or chat to get in contact</p>
                        <p className="t3 grey margin-15">I'm active on email, chat and Instagram</p>
                    </div>
                    
                </div> 

                <div className="contact-left" style={{height: 160, justifyContent: 'center'}}>
                    <a href="mailto:yatish1606@gmail.com"><p className="h6 primary link-projects">yatish1606@gmail.com <ArrowRight size={20} style={{marginLeft: 5}}/></p></a>
                    <a href="https://wa.me/919552503187"><p className="h6 primary link-projects">wa.me/919552503187<ArrowRight size={20} style={{marginLeft: 5}}/></p></a>
                </div>

                
            </div>




            <div className="inner-container contact-container darkBG space-below" style={{paddingTop: 0}}>
                
                <div className="contact-left" style={{width: '40%'}}>
                    
                    <img src={me} alt="yatish" className="my-photo-big"/>
                </div> 

                <div className="contact-left" style={{width: '60%'}}>
                    
                    <div>
                        <p className="t00 white margin-20">I'm mostly involved in web development, product design, web design and full stack MERN projects</p>
                        <p className="t3 grey margin-15" style={{marginTop: 30}}>I am currently in my third year of Information Technology Engineering at PVG's COET and will graduate in 2022. I am a quick learner, passionate about what I do and focused. <br/> <br/> I am actively involved in various extra curricular activites and am an active member of Google's Developer Students Club</p>
                    </div>

                    <div className="social-media" style={{marginTop: 40}}>
                    {
                        numberInfoList.map(({value, description}, index) => <NumberInfoItem value={value} description={description} index={index}/>)
                    }
                    </div>

                </div>

            </div>



            <div className="work-experience">
            {
                workExperienceList.map(({title, where, icon, link}, index) => <WorkExperienceItem title={title} where={where} icon={icon} link={link} index={index} isActive={index===2}/>)
            }
            </div>



            <div className="projects-list-container lightBG">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 2}}
                >
                    <Masonry gutter={80}>
                        
                        <div style={{margin: '50px 0 0 0'}}>
                            <p className="t2 grey">~ Work</p>
                            <p className="t00 white margin-15 ta-left">Projects and Work Experience</p>
                            <p className="t3 grey ta-left">Some of the projects I have completed or been a part of. All projects are avalaible on Github</p>
                            <a href="https://github.com/yatish1606"><p className="h6 primary link-projects margin-15">Check out on GitHub<ArrowRight size={20} style={{marginLeft: 5}}/></p></a>
                        </div>
                        
                        {projectImagesList.map((item, index) => (
                            <div>
                                <a href={item.link} target="_blank">
                                    <img
                                        key={index}
                                        src={item.image}
                                        style={{width: "100%", display: "block"}}
                                        alt={`project-${index}`}
                                        className="project-image"
                                    />
                                </a>
                                <p className="t3 grey margin-50">{item.description}</p>
                            </div>
                        ))}

                    </Masonry>
                </ResponsiveMasonry>
            </div>




            <div className="experience-container inner-container darkBG experience1-container">
                
                <div className="experience-container-inner">
                    
                    <p className="t00 white ta-left">Education</p>
                    <div className="title-underline margin-10" style={{marginBottom: 80}}></div>

                    {
                        workExperienceList.map(({title, where, link, duration}, index) => <InternshipExperienceItem title={title} where={where} link={link} duration={duration} index={index}/>)
                    }
                </div>

                <div className="experience-container-inner" style={{marginLeft: '10%'}}>
                    
                    <p className="t00 white ta-left">Internship Experience</p>
                    <div className="title-underline margin-10" style={{marginBottom: 80}}></div>

                    {
                        EducationalInfoList.map(({title, when, link, degree, score, scoreInfo}, index) => <EducationItem title={title} when={when} link={link} degree={degree} index={index} scoreInfo={scoreInfo} score={score}/>)
                    }
                </div>


            </div>

            <div className="skills-container inner-container lightBG">
                
                <p className="t00 white ta-left">Skills and Competencies</p>
                <div className="title-underline margin-10" style={{marginBottom: 80, width: 100}}></div>

                <div className="skills-container-inner">
                {
                    skillsInfoList.map((item, index) => {
                        return (
                            <div style={{width: '25%'}} key={index}>
                                <p className="white margin-20 t0">{item.title}</p>
                                {
                                    item.skillList.map(skill => <p className="grey t3 margin-15">{skill}</p>)
                                }
                            </div>
                        )
                    })
                }
                  
                </div>
                


            </div>


            <div className="skills-container inner-container darkBG" style={{alignItems: "center"}}>
                
                <p className="t2 white ta-center margin-20">Designed and developed by Yatish Kelkar</p>
                


            </div>



            
            



        </div>
    )
}

export default App
