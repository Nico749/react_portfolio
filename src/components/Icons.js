import React from 'react'
import '../styles/Icons.css'
import { FaNode } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaGit } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { DiMysql } from 'react-icons/di'
import { SiPandas, SiSequelize, SiLooker, SiMicrosoftsqlserver } from 'react-icons/si'
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
                    <div>
                        <div className='centered-label'><SiLooker id="icon" color="white" size="4rem" /> Tableau</div>
                        <div className='centered-label'><PiFileSql id="icon" color="#c73030" size="4rem" /> SQL</div>
                        <div className='centered-label'><SiSequelize id="icon" color="#2069fa" size="4rem" /> Sequelize</div>

                    </div>
                    <div>
                        <div className='centered-label'><DiMongodb id="icon" color="green" size="4rem" /> MongoDB</div>
                        <div className='centered-label'><SiGoogletagmanager id="icon" color="blue" size="4rem" />Tag Manager</div>
                        <div className='centered-label'><SiPandas id="icon" color="darkblue" size="4rem" />Python Pandas</div>
                    </div>
                    <div>
                        <div className='centered-label'><FaNode id="icon" color="green" size="4rem" /> NodeJS</div>
                        <div className='centered-label'><SiGoogleanalytics id="icon" color="orange" size="4rem" />Google Analytics </div>
                        <div className='centered-label'><SiGooglesearchconsole id="icon" color="#ffcc00" size="4rem" />Google Search Console </div>
                        <div className='centered-label'><FaGithub id="icon" color="white" size="4rem" /> GitHub</div>
                    </div>
                    <div>
                        <div className='centered-label'><FaJsSquare id="icon" color="yellow" size="4rem" /> JS</div>
                        <div className='centered-label'><FaSnowflake id="icon" color="#00ccff" size="4rem" /> Snowflake</div>
                        <div className='centered-label'><DiGoogleCloudPlatform id="icon" color="#0066ff" size="4rem" /> Google Cloud</div>
                        <div className='centered-label'><FaGit id="icon" color="white" size="4rem" /> Git</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
