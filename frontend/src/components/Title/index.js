import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import DogImage from './can-dogs-fall-in-love_intro.jpg'

export default function Title() {
  let [image, setImage] = useState("")
  const navigate = useNavigate()
  
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
          <h1 style={{fontFamily: 'Montserrat', fontSize: '3rem', lineHeight: 1.5, color: 'white', marginTop: '50px'}}>Meet New and Interesting Dogs Nearby</h1>
          
          <div className="titlebuttons">
          <Button onClick={() => navigate('/download')} variant="dark btn-lg"><i class="fa-brands fa-apple"></i> Download</Button>
          <Button onClick={() => navigate('/download')} variant="outline-light btn-lg"><i class="fa-brands fa-google-play"></i> Download</Button>
          </div>

          <div style={{marginTop: 10}} className="titlebuttons">
          <Button onClick={() => navigate('/dogs')} variant="dark btn-lg">Click Me</Button>
          <Button onClick={() => navigate('/dogs/matchmaking')} variant="outline-light btn-lg">Available Dogs</Button>
          </div>

          </div>
          
        <div className="col-lg-6">
          <h1 style={{fontFamily: 'Montserrat', fontSize: '3rem', lineHeight: 1.5, color: 'white', marginTop: '50px'}}>This could be your next best friend!</h1>
        <img style={{borderRadius: '5%'}} id="dog-api" src={DogImage} alt="This thing needs to work" />
          </div>
      </div>
    </Container>
  </>
  )
}

