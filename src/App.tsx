import React, { useEffect, useState, Dispatch} from 'react'
import { Instagram, Dribbble, GitHub, Linkedin, ArrowUpRight, ArrowRight, Plus, Minus } from 'react-feather'
import me from './assets/images/yatish.svg'
import './app.css'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import {menuList, numberInfoList, workExperienceList, projectImagesList, EducationalInfoList, skillsInfoList} from './info.js'

declare module "*.svg" {
    const value: any;
}

// type declarations

type MenuItemProps = {
    title: string,
    scrollTo : string,
    isActive : boolean,
    index : number,
    setActiveMenu: Dispatch<React.SetStateAction<number>>
}

type NumberInfoItemProps = {
    value: string,
    description: string,
    index: number
}

type WorkExperienceItemProps = {
    icon: JSX.Element,
    title: string,
    where: string,
    link: string,
    isActive: boolean,
    index: number
}

type InternshipExperienceItemProps = {
    title: string,
    where: string,
    link: string,
    duration: string,
    index: number
}

type EducationItemProps = {
    title: string,
    when : string,
    link: string,
    degree: string,
    score: string,
    scoreInfo: string,
    index: number
}

type OtherProjectsItemProps = {
    name : string,
    image: string,
    link : string,
    description: string,
    index: number
}



const MenuItem = ({title, scrollTo, isActive, index, setActiveMenu} : MenuItemProps) => {
    return (
        
        <div 
            className="menu-item" 
            key={index} 
            onClick={() => {
                setActiveMenu(index)
                document.querySelector(`.${scrollTo}-container`)!.scrollIntoView()
            }}
        >
            
            <p className={isActive ? "h5 white" : "h5 grey"}>{title}</p>
            {isActive ? <div className="yellow-dot"/> : <div className="transparent-dot"/>}
        </div>
        
    )
}



const NumberInfoItem = ({value, description, index} : NumberInfoItemProps) => {
    return (
        <div className="number-info-item" key={index}>
            <p className="h3 primary">{value}</p>
            <p className="t2 white">{description}</p>
        </div>
    )
} 



const WorkExperienceItem = ({icon, title, where, link, index, isActive} : WorkExperienceItemProps) => {
    return (
        <div className={isActive ? "work-experience-box active-box" : "work-experience-box"}>
            <div className="work-experience-icon">{icon}</div>
            <div>
                <p className="t00 white margin-20">{title}.</p>
                <a href={link}><p className="t4 white margin-15">@ {where}</p></a>
            </div>
        </div>
    )
}



const InternshipExperienceItem = ({title, where, link, duration, index} : InternshipExperienceItemProps) => {
    return (
        <div key={index} style={{marginBottom: 30}}>

            <a href={link}><p className="t0 white margin-10">{where} <ArrowUpRight size={20} color='white' style={{marginLeft: 10}}/> </p></a>
            <p className="t2 white">{title}</p>
            <p className="t3 grey margin-10">{duration}</p>
        </div>
    )
}



const EducationItem = ({title, when, link, degree, score, scoreInfo, index} : EducationItemProps) => {
    return (
        <div key={index} style={{marginBottom: 30}}>

            <p className="t0 white margin-10">{degree}</p>
            <a href={link}><p className="t2 grey ">{title} <ArrowUpRight size={20} color='grey' style={{marginLeft: 10}}/> </p></a>
            
            <p className="t3 grey margin-15">{when} with <span className="t0 primary">{score }</span> {scoreInfo}</p>
        </div>
    )
}

const OtherProjectsItem = ({name, link, description, index} : OtherProjectsItemProps) => {
    
    const [isOpen, setisOpen] = useState(false)
    
    return (
        <>
            <div className="other-projects" onClick={() => setisOpen(!isOpen)} key={index}>
                <p className="white t1 margin-30">{name}</p>
                {isOpen ? 
                <Minus 
                    size={20} 
                    style={{margin: 20, textDecoration: 'underline', textUnderlineOffset: 10, cursor: 'pointer'}} 
                    className="primary"
                    onClick={() => setisOpen(!isOpen)}
                /> : 
                <Plus 
                    size={20} 
                    style={{margin: 20, textDecoration: 'underline', textUnderlineOffset: 10, cursor: 'pointer'}} 
                    className="primary"
                    onClick={() => setisOpen(!isOpen)}
                />}
            </div>
            <div className={isOpen ? "other-projects-info" : "other-projects-info hide"} style={{marginBottom: isOpen ? 50 : 10, borderWidth: isOpen ? 0 : 1}}>
                <p className="t2 grey margin-10">{description}</p>
                <a href={link} target="_blank"><p className="h6 primary link-projects margin-15">open project</p></a>
            </div>
        </>
    )
}




const App = () => {


    const [activeMenu, setActiveMenu] = useState(0)

    useEffect(() => {

        window.scroll({top: 0, left: 0, behavior: 'smooth'})
        
        document.addEventListener('load', () => {
            document.querySelector('body')!.classList.add('loaded')
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
                        <a href="https://dribbble.com/Yatish1606"><Dribbble className="social-media-icon"/></a>
                        <a href="https://www.instagram.com/yatishkelkar/"><Instagram className="social-media-icon"/></a>
                        <a href="https://github.com/yatish1606"><GitHub className="social-media-icon"/></a>
                        <a href="https://www.linkedin.com/in/yatish-kelkar-850507190/"><Linkedin className="social-media-icon"/></a>
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

                    <p className="h6 primary link-projects" onClick={() => document.querySelector('.projects-list-container')!.scrollIntoView()}>Check out my projects <ArrowRight size={20} style={{marginLeft: 5}}/></p>
                    

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
                    <Masonry gutter="80px">
                        
                        <div style={{margin: '50px 0 0 0'}}>
                            <p className="t2 grey">~ Work</p>
                            <p className="t00 white margin-15 ta-left">Projects and Work Experience</p>
                            <p className="t3 grey ta-left">Some of the projects I have completed or been a part of. All projects are avalaible on Github</p>
                            <a href="https://github.com/yatish1606"><p className="h6 primary link-projects margin-15">Check out on GitHub<ArrowRight size={20} style={{marginLeft: 5}}/></p></a>
                        </div>
                        
                        {projectImagesList.slice(0,5).map((item, index) => (
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

            <div className="other-projects-container inner-container lightBG">
                    <div style={{width: '40%'}}>
                        <p className="t00 white margin-20">Other Projects</p>
                        <p className="t3 grey margin-15">Some other projects I have completed or been a part of</p> 
                        <p className="t3 grey margin-15">Most projects except those completed under internships(bound under NDA's) are open source, and the source code is available <a href="https://github.com/yatish1606" target="_blank" className="primary" style={{color: '#efa649'}}>here</a> </p>  
                    </div>

                    <div style={{width: '60%', padding: '20px 0 20px 100px'}}>
                    {
                        projectImagesList.slice(5, projectImagesList.length).map((project, index) => <OtherProjectsItem name={project.name} description={project.description} link={project.link} index={index} image={project.image}/>)
                    }
                    </div>
            </div>




            <div className="experience-container inner-container darkBG experience1-container">
                
                <div className="experience-container-inner">
                    
                    <p className="t00 white ta-left">Technical Experience</p>
                    <div className="title-underline margin-10" style={{marginBottom: 80}}></div>

                    {
                        workExperienceList.map(({title, where, link, duration}, index) => <InternshipExperienceItem title={title} where={where} link={link} duration={duration} index={index}/>)
                    }
                </div>

                <div className="experience-container-inner" style={{marginLeft: '10%'}}>
                    
                    <p className="t00 white ta-left">Education</p>
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
