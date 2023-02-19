import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import DoginLove from './can-dogs-fall-in-love_intro.jpg'
import "./downloads.css"
import { useNavigate } from 'react-router-dom';

export default function Downloads() {
    const navigate = useNavigate()
    return (
        <>
        <div className="download-container">

        <div className="download-appbutton">
            <Button variant="dark" onClick={() => navigate("/tba")} ><i class="fa-brands fa-apple"></i> Download</Button>
            <Button variant="light" onClick={() => navigate("/tba")} ><i class="fa-brands fa-google-play"></i> Download</Button>
        </div>

        <Container className="downloads">

        <Card className="download-card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={DoginLove} />
          <Card.Body style={{backgroundColor: 'lavenderblush'}}>
          <Card.Text className="dog-text">
              Your Dog's Soul Mate Awaits
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="download-card"  style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.petcompanionmag.com/wp-content/uploads/2020/04/AdobeStock_171856611-e1585764692571.jpeg " />
          <Card.Body style={{backgroundColor: 'lavenderblush'}}>
            <Card.Text className="dog-text">
              Download Links Above to Live out your dogs Dreams
            </Card.Text>

          </Card.Body>
        </Card>

        <Card className="download-card"  style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://static.wixstatic.com/media/9d4654_5cde2e14652c48b4ac4f09b2212cc678~mv2.jpg/v1/fill/w_640,h_280,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9d4654_5cde2e14652c48b4ac4f09b2212cc678~mv2.jpg" />
          <Card.Body style={{backgroundColor: 'lavenderblush'}}>
            <Card.Text className="dog-text">
              Don't deprive your dog of true love click the download button
            </Card.Text>

          </Card.Body>
        </Card>
        </Container>
        </div>
        </>
      );
}
