import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

export default function AllDogs() {
    const [dogs, setDogs] = useState([])


    const get50Dogs = () => {
        axios.get("https://dog.ceo/api/breeds/image/random/50").then(res => {
            console.log(res.data.message)
            const dogs = res.data.message
            setDogs(dogs)
        })
    }

    useEffect(() => {
        get50Dogs()
        console.log(dogs, 'dogs')
    }, [])

    return (
        <Container>
            {dogs.map(dog => (
                <img style={{height: 100, width: 100, display: 'flex', gap: 10}} src={dog} alt="" />
            ))}
        </Container>
    )
}
