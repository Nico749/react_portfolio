import React from 'react';
import Footer from './Footer'
import '../styles/Home.css';
import personalPhoto from '../Demo_photos/personal-photo-modified.png'
const styles = {
  img: {
    maxWidth:  '400px',
  }
};


export default function Home() {
  return (
    <div className="home-page page-shell">
    <div className="hero is-fullheight ">
              
        <div className=" hero-body">
            <div className="container">
              <div className='img-cont'>
                <figure className="image center home-image-frame">
                    <img src={personalPhoto} alt="" style={styles.img} className="home-image"/>
                </figure>
              </div>
            </div>

            
        </div>
        <div className="container ">
            <h1 className="center is-size-1 home-title">Nico Pasqualini
            </h1>
            <h2 className="has-text-centered home-subtitle">Data Analyst</h2>
        </div>
        <div>

        </div>
        <Footer />

    </div>
    </div>
  );
}
