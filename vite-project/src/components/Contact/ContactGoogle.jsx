import {
  Contact1,Contact2,Contact3
} from "../../assets";

const ContactGoogle = () => {
  return (
    <div>
          <section id="contact_detaails" className="section-p1">
        <div className="deatails">
            <span>GET IN TOUTCH</span>
            <h2>Visit One Of Agancy Loactions Or Contact Us Today</h2>
            <h3>Head Office</h3>
            
            <div>
                <li>
                    <i className="fa-regular fa-map"></i>
                    <p>56 Glassford Street Glassgow Gl 1Ul New Yourk</p>
                </li>
                <li>
                    <i className="fa-solid fa-envelope"></i>
                    <p>01062501682</p>
                </li>
                <li>
                    <i className="fa-solid fa-phone"></i>
                    <p>mahmoudhabib55200@gmail.com</p>
                </li>
                <li>
                    <i className="fa-regular fa-clock"></i>
                    <p>Monday To Suterday: 9:00am to 16.pm</p>
                </li>
                 
            </div>
        </div>

        <div className="Google_Map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27389.71213437951!2d31.939430611159192!3d30.894660315714216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f835dd922e9131%3A0x39ba9406e54f1fd4!2z2YXYs9is2K8g2KPYqNmIINi62YrYp9i2!5e0!3m2!1sen!2seg!4v1669911513229!5m2!1sen!2seg"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


      </section>
      {/* start Section Google Map  */}
     {/*  start section form  */}
     <section id="form_deatails" className="section-p1">
        <form action="">
            <span>LEAVE A MESSAGE</span>
            <h2>We Love To Hear From You</h2>
            <input type="text" placeholder="Your Name"/>
            <input type="text" placeholder="E-mail"/>
            <input type="text" placeholder="Subject"/>
            <textarea name="" id="" cols="30" rows="10"  placeholder="TYour Message"></textarea>
            <button className="normal">Submit</button>
        </form>

        <div className="people">
            <div>
                <img src={Contact1} alt=""/>
                <p>
                    <span>John Doe</span>
                    <br/> Senior Marketing Manager
                    <br/> Phone: +0001230007788
                    <br/> Email: Concate@gmail.com
                    </p>
            </div>

            <div>
                <img src={Contact2} alt=""/>
                <p>
                    <span>Wiliam Smith</span>
                    <br/> Senior Marketing Manager
                    <br/> Phone: +0001230007788
                    <br/> Email: Concate@gmail.com
                    </p>
            </div>

            <div>
                <img src={Contact3} alt=""/>
                <p>
                    <span>Emama Stone</span>
                    <br/> Senior Marketing Manager
                    <br/> Phone: +0001230007788
                    <br/> Email: Concate@gmail.com
                    </p>
            </div>
        </div>
        
     </section>
    </div>
  )
}

export default ContactGoogle
