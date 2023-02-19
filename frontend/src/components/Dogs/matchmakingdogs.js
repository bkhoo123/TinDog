import React from 'react'
import { useDogs } from '../../context/DogContext'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function MatchMakingDogs() {
  const {dogs, setDogs} = useDogs()
  const dogsArray = Object.values(dogs)
  console.log(dogsArray)
  


 

  return (
    <>
    <h1 style={{textAlign: 'center', fontFamily: 'montserrat', paddingTop: 15}}>Potential Dog Matches</h1>
    <Container className="dog-container">
      {dogsArray[0].map((dog, index) => (
        <>
          <Card style={{ width: '18rem' }}>
                    <Card.Img style={{height: '300px', width: '100%'}} variant="top" src={dog.url} />
                    <Card.Body>
                        
                        <Card.Title><img style={{marginRight: 10}} className="dog-circle" src={dog.url} alt="" /> {dog.dogName} </Card.Title>

                        <Card.Text style={{color: 'black'}}>
                          Breed: {dog.breed}
                        </Card.Text>

                        <Card.Text style={{ fontFamily: 'Montserrat'}}>
                        {dog.description}
                        </Card.Text>
                        
                        
                    </Card.Body>
                    <Button className="heart-button" variant='light' size="lg">
                          <i style={{color: "#FF5A5F", fontSize: '1.5rem'}} class="fa-solid fa-heart"></i>
                       </Button>
                       <Button style={{marginTop: 5}} variant="secondary">Message Me</Button>
                </Card>
                
        </>
      ))}
    </Container>
    </>
  )
}
