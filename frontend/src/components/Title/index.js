import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import dogImage from './iphone6.png'
import axios from 'axios'
import {useState, useEffect} from 'react'

export default function Title() {
  let [image, setImage] = useState("")
  
  
  const getDog = () => {
    axios.get("https://dog.ceo/api/breeds/image/random").then(res => {
      setImage(res.data.message)
      console.log(res.data.message)
    })
  }

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random").then(res => {
      setImage(res.data.message)
      
    })
  }, [])

  

  return (
    <>
    <Container className="contain">
      <div className="row">
        <div className="col-lg-6">
          <h1 style={{fontFamily: 'Montserrat', fontSize: '3rem', lineHeight: 1.5, color: 'white'}}>Meet New and Interesting Dogs Nearby</h1>
          <div className="titlebuttons">
          <Button variant="dark btn-lg"><i class="fa-brands fa-apple"></i> Download</Button>
          <Button variant="outline-light btn-lg"><i class="fa-brands fa-google-play"></i> Download</Button>
          <Button  onClick={getDog} variant="dark btn-lg">Next Dog</Button>
          </div>
          
          </div>
          
        <div className="col-lg-6">
          <h1 style={{fontFamily: 'Montserrat', fontSize: '3rem', lineHeight: 1.5, color: 'white'}}>This could be your next best friend!</h1>
        <img style={{borderRadius: '5%'}} id="dog-api" src={image} alt="This thing needs to work" />
          </div>
      </div>
    </Container>
  </>
  )
}

