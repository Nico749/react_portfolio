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

      <section className="hero about-hero">

        <div className=" hero-body">
          <div className="columns">
            <div className="column is-8 is-offset-2 about-copy has-text-white is-size-5">
              <p>
                Hi, I'm Nico, a data analyst with a background that blends finance,
                business, project management, and coding.
              </p>
              <p>
                I have always been interested in data and technology, but my path into
                analytics began with economics. I graduated from the University of Bologna
                in 2018 with a Master's Degree in Finance, then moved to Australia to
                complete a Master of Business Administration at Kaplan Business School in
                Melbourne.
              </p>
              <p>
                During my MBA, I became especially interested in project management and
                completed additional courses to connect my economics and management
                experience with more practical delivery skills. After graduating, I
                completed the Monash University Coding Bootcamp and began my data analytics
                journey at NewsPerform Australia.
              </p>
            </div>
          </div>
        </div>
        <Icons />
      </section>
      <Footer />
    </div>
  );
}
