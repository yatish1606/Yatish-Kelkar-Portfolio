import React, { useEffect, useState } from 'react'
import { Instagram, Dribbble, GitHub, Linkedin } from 'react-feather'
import me from './assets/images/yatish.jfif'
import './app.css'
import { ArrowRight } from 'react-feather'

const menuList = [
    {
        title: 'Me',
        scrollTo : 'landing'
    },
    {
        title: 'Work',
        scrollTo : 'contact'
    },
    {
        title: 'Blogs',
        scrollTo : 'landing'
    },
]

const numberInfoList = [
    {
        value: '9.66',
        description: 'Engineering GPA'
    },
    {
        value: '10+',
        description: 'Projects done, including hobby ones'
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
            <p className="h4 primary">{value}</p>
            <p className="t3 white">{description}</p>
        </div>
    )
} 

const App = () => {


    const [activeMenu, setActiveMenu] = useState(0)

    useEffect(() => {
        window.scroll({top: 0, left: 0, behavior: 'smooth'})
    }, [])

    return (
        <div className="container">


            <div className="inner-container landing-container lightBG">
                
                <div className="landing-left">
                    
                    <img src={me} alt="me" className="my-photo"/>
                    
                    <div>
                        <p className="t2 grey margin-15">HEY THERE 👋🏼</p>
                        <p className="h1 white">Carlos <br/> Mendoza. <br/> <div className="title-underline margin-20"></div> </p>
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
                    
                    <a href="mailto:yatish1606@gmail.com"><p className="h6 primary link-projects">yatish1606@gmail.com <ArrowRight size={20} style={{marginLeft: 5}}/></p></a>
                </div> 

                <div className="contact-left">
                    
                    <div>
                        <p className="t00 white margin-20">I'm mostly involved in web development, product design, web design and full stack MERN projects</p>
                        <p className="t3 grey margin-15" style={{marginTop: 30}}>I am currently in my third year of Information Technology Engineering at PVG's COET and will graduate in 2022. I am a quick learner, passionate about what I do and focused.</p>
                    </div>

                    <div className="social-media" style={{marginTop: 40}}>
                    {
                        numberInfoList.map(({value, description}, index) => <NumberInfoItem value={value} description={description} index={index}/>)
                    }
                    </div>

                </div>

            </div>

            <div className="inner-container contact-container darkBG"></div>


        </div>
    )
}

export default App
