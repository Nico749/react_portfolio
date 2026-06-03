import React from 'react';
import Footer from './Footer'
import '../styles/Home.css';
import personalPhoto from '../Demo_photos/IMG_NO_BKGR.png'


export default function Home() {
  return (
    <div className="home-page page-shell">
    <div className="hero home-hero" style={{ '--home-bg': `url(${personalPhoto})` }}>
        <div className="home-photo-edge" aria-hidden="true"></div>
        <div className="home-background-name" aria-hidden="true">
          <span>Nico</span>
          <span>Pasqualini</span>
          <small>Data Analyst</small>
        </div>
        <div className="hero-body"></div>
        <Footer />

    </div>
    </div>
  );
}
