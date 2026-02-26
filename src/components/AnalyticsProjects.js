import React from 'react';
import Footer from './Footer'
import 'bulma/css/bulma.min.css';
import { Columns } from 'react-bulma-components';
import { Card } from 'react-bulma-components';
import '../styles/Projects.css'
import '../styles/PortfolioContainer.css'
import covidScreen from '../Demo_photos/CovidAnalysys.png'
import finScreen from '../Demo_photos/FinancialAna.png'


export default function AnalyticsProjects() {
  return (
    <div className="page-shell projects-page">
      <h1 className="page-title lineUp">ANALYTICS PROJECTS</h1>
      <p className="page-subtitle">Dashboards and quantitative analysis projects.</p>

      <Columns id="col">



        <Columns.Column >

          <Card style={{ width: 300, margin: 'auto' }}>
            <Card.Image className=" card-image"
              size="16by9"
              src={covidScreen}
            />

            <Card.Content >

              <a href="https://public.tableau.com/views/Covid_Analysis_16675352455890/CovidCrisisOverall?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" target="_blank" rel="noopener noreferrer" id='cardtitle' className=' is-size-3 has-text-black' onClick={()=>window.dataLayer.push({
            event: 'title_click',
            eventProps: {
                category: "analytics",
                label: "covid ",
                page: window.location.href.split('#').pop()
            
            }
          })}>COVID ANALYSIS</a>

              <p id='cardbody' className="is-size-5 has-text-black">
              This project is an overall analysis of Covid data until April 2021. The analysis shows data for infections and deaths splitted by continents, countries and Italy.
              The data has been prepared with multiple SQL queries and visualized with Tableau.<br></br>
                <a id="cardlink" href="https://github.com/Nico749/SQL_Covid/blob/main/SQLCovid.sql" target="_blank" rel="noopener noreferrer" 
                onClick={()=>window.dataLayer.push({
                  event: 'project_click',
                  eventProps: {
                      category: "analytics",                        
                      label: "covid",
                      page: window.location.href.split('#').pop()
                  
                  }
                })}>Click</a> to see the SQL file or have a look at the <a id="cardlink" href="https://public.tableau.com/views/Covid_Analysis_16675352455890/CovidCrisisOverall?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" target="_blank" rel="noopener noreferrer" 
                onClick={()=>window.dataLayer.push({
                  event: 'project_click',
                  eventProps: {
                      category: "analytics",                        
                      label: "covid",
                      page: window.location.href.split('#').pop()
                  
                  }
                })}> dashboard</a>. <br></br>
                <a id="cardlink"
                  href="https://github.com/Nico749/SQL_Covid" target="_blank" rel="noopener noreferrer" onClick={()=>window.dataLayer.push({
                    event: 'github_click',
                    eventProps: {
                        category: "analytics",                        
                        label: "covid",
                        page: window.location.href.split('#').pop()
                    
                    }
                  })}>Here</a> you can see the Github repo.<br></br>
                Built with:
                <ul className='techlist'>
                  <li className='tech'>- SQL</li><br></br>
                  <li className='tech'>- Tableau</li><br></br>
  
                </ul>

              </p>
            </Card.Content>
          </Card>
        </Columns.Column>


        <Columns.Column >

<Card style={{ width: 300, margin: 'auto' }}>
  <Card.Image className=" card-image"
    size="16by9"
    src={finScreen}
  />

  <Card.Content >

    <a href="https://github.com/Nico749/Financial_Analysis" target="_blank" rel="noopener noreferrer" id='cardtitle' className=' is-size-3 has-text-black' onClick={()=>window.dataLayer.push({
  event: 'title_click',
  eventProps: {
      category: "analytics",      
      label: "financial analysis",
      page: window.location.href.split('#').pop()
  
  }
})}>FINANCIAL ANALYSIS</a>

    <p id='cardbody' className="is-size-5 has-text-black">
    A financial analysis of different stocks looking for insights and anomalies. The analysis considers indicators such as daily returns, MACD, volatility and correlation and considers
    Google, Oracle, and SalesForce share prices. Data is taken from Yahoo Finance and manipulated with Python. <br></br>
      <a id="cardlink" href="https://github.com/Nico749/Financial_Analysis" target="_blank" rel="noopener noreferrer" onClick={()=>window.dataLayer.push({
                    event: 'github_click',
                    eventProps: {
                        category: "analytics",                        
                        label: "financial analysis",
                        page: window.location.href.split('#').pop(),
                        
                    
                    }
                  })}> Click here</a> to go to the Github repo or have a look at the <a id="cardlink" href="https://github.com/Nico749/Financial_Analysis/blob/main/Google_SF_Oracle.ipynb" target="_blank" rel="noopener noreferrer" onClick={()=>window.dataLayer.push({
                    event: 'project_click',
                    eventProps: {
                        category: "analytics",                        
                        label: "financial analysis",
                        page: window.location.href.split('#').pop(),
                        
                    
                    }
                  })}> analysis</a>. <br></br>
  
      Built with:
      <ul className='techlist'>
        <li className='tech'>- Python Pandas</li><br></br>

      </ul>

    </p>
  </Card.Content>
</Card>
</Columns.Column>
        
        
      </Columns>
      <Footer />
    </div>
  );
}
