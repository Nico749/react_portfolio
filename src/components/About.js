import React from 'react';
import Footer from './Footer'
import Icons from './Icons'
import '../styles/About.css'
import '../styles/PortfolioContainer.css'

export default function About() {
  return (
    <div className="page-shell">
      <h1 className="page-title lineUp">ABOUT</h1>
      <p className="page-subtitle">Background, training, and the path into data analytics.</p>

      <section className="hero is-fullheight about-hero">

        <div className=" hero-body">
          <div className="columns">
            <div className="column is-8 is-offset-2 about-copy has-text-white is-size-5">
              Hi! I'm Nico and I am a Data Analyst.
              Even if I have always been interested in coding and data, my background is a bit uncommon
              because during the first years of university I studied economics and then I graduated from University of Bologna in 2018 with a
              Master's Degree in Finance. After that I started my journey in Australia where
              I achieved a Master in Business Administration at Kaplan Business School, Melbourne.
              During the Master, I got into project management aspects that fascinated me so whilst there
              I completed various extra courses regarding that, in a way to combine
              economics and management skills.
              Once the Master was over, I completed a Monash University Coding Bootcamp and then I started my journey in data analytics at NewsPerform Australia.
            </div>
          </div>
        </div>
        <Icons />
      </section>
      <Footer />
    </div>
  );
}
