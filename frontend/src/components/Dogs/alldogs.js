import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import './dogs.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function AllDogs() {
    const [dogs, setDogs] = useState([])

    const names = "Abraham,Rocco,Aryan,Phillip,Neil,Rodney,Jordon,Anne,Abbey,Turner,Bryant,Adrienne,Lillian,Emiliano,Alanna,Mariana,Santos,Lucille,Gillian,Kyla,Sage,Paityn,Keegan,Stephen,Esteban,Titus,Angel,Madeline,Lukas,Lucian,Sidney,Amiyah,Kadyn,Bryce,Aracely,Marlene,Vincent,Ulises,Cohen,Leonel,Baylee,Derek,Danny,Travis,Raegan,Jeffery,Shane,Josephine,Adyson,Nathen"
    const split = names.split(",")


    const get50Dogs = () => {
        axios.get("https://dog.ceo/api/breeds/image/random/50").then(res => {
            const dogs = res.data.message
            setDogs(dogs)
        })
    }

    useEffect(() => {
        get50Dogs()
        
    }, [])

    return (
        <>
        <Container>

        </Container>


        <Container className='dog-container'>
            {dogs.map((dog, index) => (
                <div>
                 <Card style={{ width: '18rem' }}>
                    <Card.Img style={{height: '300px', width: '100%'}} variant="top" src={dog} />
                    <Card.Body>
                        <Card.Title><img style={{marginRight: 10}} className="dog-circle" src={dog} alt="" /> {split[index]} </Card.Title>
                        {/* <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text> */}
                        <Button style={{marginTop: 5}} variant="primary">Message Me</Button>
                    </Card.Body>
                </Card>
                {/* <img className="all-dogs" src={dog} alt="" />
                <div className="dog-info">
                    
                <Button className="heart-button" variant='light' size="lg">
                <i style={{color: "#FF5A5F", fontSize: '1.5rem'}} class="fa-solid fa-heart"></i>
                </Button>
                </div> */}
                
                </div>
                
            ))}
        </Container>
        </>
    )
}
