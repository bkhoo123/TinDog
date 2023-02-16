import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './pricing.css'

export default function Pricing() {
  return (
    <section id="pricing">
      <div id="top-price-container">
      <h2 id="price-title">A Plan for Every Dog's Needs</h2>
      <p>Simple and affordable price plans for you and your dog</p>
      </div>

      <div id='price-container'>
        <Card className='card' style ={{width: '14rem'}}>
        <h3>Chihuahua</h3>
        <h2>Free</h2>
        <p>5 Matches per Day</p>
        <p>10 Messages per Day</p>
        <p>Unlimited App Usage</p>
        <Button className="cardbutton" variant="dark" style={{width: '40%'}}>Sign Up</Button>
        </Card>
        
        <Card className='card' style ={{width: '14rem'}}>
        <h3>Labrador</h3>
        <h2>$49 / mo</h2>
        <p>Unlimited Matches</p>
        <p>Unlimited Messages</p>
        <p>Unlimited App Usage</p>
        <p>Guaranteed to find dog love</p>
        <Button className="cardbutton" variant="dark" style={{width: '40%'}}>Sign Up</Button>
        </Card>

        <Card className='card' style ={{width: '14rem', height: '22rem'}}>
        <h3>Mastiff</h3>
        <h2>$99 / mo</h2>
        <p>Priority Listing</p>
        <p>Unlimited Matches</p>
        <p>Unlimited Messages</p>
        <p>Unlimited App Usage</p>
        <p>Guaranteed Dog Soulmate</p>
        <Button className="cardbutton" variant="dark" style={{width: '40%'}}>Sign Up</Button>
      </Card>
      </div>

      <div style={{paddingLeft: 15, paddingRight: 15, paddingTop: 15}}>
        <h2 style={{textAlign: 'center', fontFamily: 'Montserrat'}}>Promotion: Purchase a Year Subscription and we will personally find you your dog soulmate</h2>
      </div>

    </section>
  )
}
