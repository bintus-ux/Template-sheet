import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import HeartIcon from '../SVGs/HeartIcon';

const Card = () => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
      setIsLiked(!isLiked);
    };
  return (
 <>
    <div className="cards">
     <article className="card">
       <div className="card_preview">
        <img src='/images/IMG_3934.PNG' alt="Afrotopia model elegance" />
          <div className="card_price">$4, 750,000</div> 
       </div>
       <div className="card_content"> 
         <h2 className="card_title">Lakeview Elegance</h2> 
         <p className="card_address">258 Serenity Lane, Crestwood Hills</ p> 
         <p className="card_description">Nestled along the tranquil shores.</p>
          <div className="card_bottom">
           <div className="card_properties">3 Bed | 2 Bath | 7,500 sq. ft </div>
           <button class="card_btn"><HeartIcon className={`heart-icon ${isLiked ? 'red' : ''}`} onClick={handleLikeClick} /></button> 
          </div>
        </div> 
     </article>
     <article className="card">
       <div className="card_preview">
        <img src='/images/IMG_3934.PNG' alt="Afrotopia model elegance" />
          <div className="card_price">$4, 750,000</div> 
       </div>
       <div className="card_content"> 
         <h2 className="card_title">Lakeview Elegance</h2> 
         <p className="card_address">258 Serenity Lane, Crestwood Hills</ p> 
         <p className="card_description">Nestled along the tranquil shores.</p>
          <div className="card_bottom">
           <div className="card_properties">3 Bed | 2 Bath | 7,500 sq. ft </div>
           <button class="card_btn"><FaRegHeart /></button> 
          </div>
        </div> 
     </article>
     <article className="card">
       <div className="card_preview">
        <img src='/images/IMG_3934.PNG' alt="Afrotopia model elegance" />
          <div className="card_price">$4, 750,000</div> 
       </div>
       <div className="card_content"> 
         <h2 className="card_title">Lakeview Elegance</h2> 
         <p className="card_address">258 Serenity Lane, Crestwood Hills</ p> 
         <p className="card_description">Nestled along the tranquil shores.</p>
          <div className="card_bottom">
           <div className="card_properties">3 Bed | 2 Bath | 7,500 sq. ft </div>
           <button class="card_btn"><FaRegHeart /></button> 
          </div>
        </div> 
     </article>
    </div>
 </>
  )
}

export default Card
