import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import HeartIcon from '../SVGs/HeartIcon';

const Card = () => {
  const [likeButton, setLikeButton] = useState(false)

  const cardDetails = [
    {
 'id': 1,
 'price': '$4,750,000',
 'title': 'Lakeview Elegance',
 'address': '258 Serenity Lane, Crestwood Hills',
 'desc': 'Nestled along the tranquil shores.',
 'properties': {
  'prop1': '3 Bed',
  'prop2': '2 Bath',
  'prop3': '7,500 sq.ft'
 }
  },
    {
 'id': 2,
 'price': '$4,750,000',
 'title': 'Lakeview Elegance',
 'address': '258 Serenity Lane, Crestwood Hills',
 'desc': 'Nestled along the tranquil shores.',
 'properties': {
  'prop1': '3 Bed',
  'prop2': '2 Bath',
  'prop3': '7,500 sq.ft'
 }
  },
    {
 'id': 3,
 'price': '$4,750,000',
 'title': 'Lakeview Elegance',
 'address': '258 Serenity Lane, Crestwood Hills',
 'desc': 'Nestled along the tranquil shores.',
 'properties': {
  'prop1': '3 Bed',
  'prop2': '2 Bath',
  'prop3': '7,500 sq.ft'
 }
  },
]

  const likeFunctionality = () => {
    if (!likeButton) {
      setLikeButton(true)
    } else {
      setLikeButton(false)
    }
  }
  return (
 <>
    <div className="cards">
    {cardDetails.map((card, i) => (
      <article className="card" key={card.id}>
      <div className="card_preview">
       <img src='/images/IMG_3934.PNG' alt="Afrotopia model elegance" />
         <div className="card_price">{card.price}</div> 
      </div>
      <div className="card_content"> 
        <h2 className="card_title">{card.title}</h2> 
        <p className="card_address">{card.address}</ p> 
        <p className="card_description">{card.desc}</p>
         <div className="card_bottom">
          <div className="card_properties">{card.properties.prop1} | {card.properties.prop2} | {card.properties.prop3} </div>
          <i
           className='fa-solid fa-heart fa-xl like-icon'
           id={likeButton[i] ? 'heart-icon' : 'void-heart-icon'}
           onClick={() => likeFunctionality(i)}></i>
         </div>
       </div> 
    </article>
    ))}
    </div>
 </>
  )
}

export default Card
