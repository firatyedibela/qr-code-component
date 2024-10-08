import React from 'react';
import qrCodeImage from '../assets/image-qr-code.png';

function QrCode() {
  return (
    <div className="content">
      <img src={qrCodeImage} alt="" />
      <div className="text">
        <p>Improve your front-end skills by building projects</p>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default QrCode;
