import React from 'react';
import './LoveYou.css';

import heart from '../images/heart.jpg'
import smile from '../images/smile.jpg'
import dread from '../images/dread.jpg'
import grad from '../images/grad.png'
const LoveYou = () => {
  return (
    <div className="birthday-fullscreen">
      {/* Replace these with your real photos */}
      <img src={dread} alt="Love" className="ppphoto photo-one" />
      <img src={heart} alt="Love" className="ppphoto photo-two" />
      <img src={smile} alt="Love" className="ppphoto photo-three" />
      <img src={grad} alt="Love" className="ppphoto photo-four" />



        <div className="love-overlay"></div>

      {/* Decorative blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
    </div>
  );
};

export default LoveYou;