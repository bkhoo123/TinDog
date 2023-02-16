import React from 'react'
import dogImage from './dog-img.jpg'
import Carousel from 'react-bootstrap/Carousel';
import ladyImage from './lady-img.jpg'
import Button from 'react-bootstrap/Button';

import TechCrunch from './TechCrunch.png'
import TNW from './tnw.png'
import Insider from './bizinsider.png'
import Mash from './mashable.png'
import Container from 'react-bootstrap/Container';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Title from '../Title';


export default function MainPage() {
  return (
    <>
    
    <section id="title">
    <Title/>
    </section>
    
    <section id="features">
        <div className="feature1">
        <i class="fas fa-solid fa-circle-check fa-4x"></i>
        <h3>Easy to use.</h3>    
        <p>So easy to use, even your dog could do it.</p>
        </div>

        <div className="feature2">
        <i class="fas fa-solid fa-bullseye fa-4x"></i>
        <h3>Elite Clientele</h3>
        <p>We have all the dogs, the greatest dogs.</p>
        </div>

        <div className="feature3">
        <i class="fas fa-solid fa-heart fa-4x"></i>
        <h3>Guaranteed to work.</h3>
        <p>Find the love of your dog's life or your money back.</p>
        </div>
    </section>

    <section id="testimonials">
      <h1 id="testy">Testimonials</h1>
      <Carousel>
        <Carousel.Item>
          <h2>I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
          <img className='testimonialimage' src={dogImage} alt="dog-profile"></img>
          <em>Pebbles, New York</em>
        </Carousel.Item>
        <Carousel.Item>
          <h2>My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
          <img className='testimonialimage' src={ladyImage} alt="" />
          <em>Beverly, Illinois</em>
        </Carousel.Item>
      </Carousel>
    </section>


    <section id="press">
      
        <img class="press-logo" src={TechCrunch} alt="" />
        <img class="press-logo" src={TNW} alt="" />
        <img class="press-logo" src={Insider} alt="" />
        <img class="press-logo" src={Mash} alt="" />
        
    </section>


    

    <section id="cta">
      <h3>Find the True Love of Your Dog's Life Today</h3>
      <div id="calltoaction">
      <Button variant="dark btn"><i class="fa-brands fa-apple"></i> Download</Button>
      <Button variant="outline-primary"><i class="fa-brands fa-google-play"></i> Download</Button>
      </div>
    </section>


    <footer id="footer">
        <p>© Copyright TinDog</p>
    </footer>
    </>
  )
}
