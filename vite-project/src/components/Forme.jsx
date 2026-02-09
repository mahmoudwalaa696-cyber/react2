import React from "react";

const Forme = () => {
  return (
    <div>
      <section id="newsLetter" className="section-p1 section-m1">
        <div className="newText">
          <h4>Sign Up For NewsLetters</h4>
          <p>
            Get E-mail Updates About Our Latest Shop And{" "}
            <span>Special Offers</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your Emaill Adress" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </div>
  );
};

export default Forme;
