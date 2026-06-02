import React from 'react'
import '../styles/Icons.css'
import { FaNode } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaGit } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { SiPandas, SiSequelize, SiLooker } from 'react-icons/si'
import { FaSnowflake } from "react-icons/fa";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { SiGooglesearchconsole } from "react-icons/si";
import { SiGoogleanalytics } from 'react-icons/si'
import { SiGoogletagmanager } from 'react-icons/si'
import { PiFileSql } from "react-icons/pi";




export default function Icons() {
    return (
        <div>
            <h1 id="skills">Skills</h1>
            <div id="icons">
                <div className="grid-container">
                    <div className='centered-label'><SiLooker className="skill-icon" color="white" size="4rem" /><span>Tableau</span></div>
                    <div className='centered-label'><PiFileSql className="skill-icon" color="#c73030" size="4rem" /><span>SQL</span></div>
                    <div className='centered-label'><SiSequelize className="skill-icon" color="#2069fa" size="4rem" /><span>Sequelize</span></div>
                    <div className='centered-label'><DiMongodb className="skill-icon" color="green" size="4rem" /><span>MongoDB</span></div>
                    <div className='centered-label'><SiGoogletagmanager className="skill-icon" color="blue" size="4rem" /><span>Tag Manager</span></div>
                    <div className='centered-label'><SiPandas className="skill-icon" color="darkblue" size="4rem" /><span>Python Pandas</span></div>
                    <div className='centered-label'><FaNode className="skill-icon" color="green" size="4rem" /><span>NodeJS</span></div>
                    <div className='centered-label'><SiGoogleanalytics className="skill-icon" color="orange" size="4rem" /><span>Google Analytics</span></div>
                    <div className='centered-label'><SiGooglesearchconsole className="skill-icon" color="#ffcc00" size="4rem" /><span>Google Search Console</span></div>
                    <div className='centered-label'><FaGithub className="skill-icon" color="white" size="4rem" /><span>GitHub</span></div>
                    <div className='centered-label'><FaJsSquare className="skill-icon" color="yellow" size="4rem" /><span>JS</span></div>
                    <div className='centered-label'><FaSnowflake className="skill-icon" color="#00ccff" size="4rem" /><span>Snowflake</span></div>
                    <div className='centered-label'><DiGoogleCloudPlatform className="skill-icon" color="#0066ff" size="4rem" /><span>Google Cloud</span></div>
                    <div className='centered-label'><FaGit className="skill-icon" color="white" size="4rem" /><span>Git</span></div>
                </div>
            </div>
        </div>
    );
}
