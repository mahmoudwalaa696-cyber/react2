import React from "react";
import { about6, aboutV } from "../../assets";
import { Link } from "react-router";
const Aabout = () => {
  return (
    <div>
      {/* Section About */}
      <section id="about_head" className="section-p1">
        <img src={about6} alt="About Us" />
        <div>
          <h2>Who Are You?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere
            reprehenderit, impedit molestiae consequuntur nam quae rerum
            dignissimos quis non exercitationem, itaque distinctio eaque
            voluptates aliquid soluta perspiciatis maiores rem!
          </p>
          <abbr title="More info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere
            reprehenderit.
          </abbr>
          <br />
          <br />
          <marquee bgcolor="aqua" loop="-1" scrollamount="5" width="100%">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere
            reprehenderit.
          </marquee>
        </div>
      </section>

      {/* Section About App */}
      <section id="about_app" className="section-p1">
        <h1>
          Download Our <Link to="#">App</Link>
        </h1>
        <div className="video">
          <video autoPlay muted loop src={aboutV}></video>
        </div>
      </section>
    </div>
  );
};

export default Aabout;
