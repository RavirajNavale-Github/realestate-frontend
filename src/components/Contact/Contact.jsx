import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { FaVideo } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Right Section */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We always ready to help by providing hte best service
          </span>

          <div className="flexColStart contactModes">
            {/* First Row */}
            <div className="flexStart row">
              {/* First Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primartText">Call</span>
                    <span className="secondaryText">1234567890</span>
                  </div>
                </div>

                <div className="flexCenter button">Call Now</div>
              </div>

              {/* Second Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primartText">Chat</span>
                    <span className="secondaryText">1234567890</span>
                  </div>
                </div>

                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>


            {/* Second Row */}
            <div className="flexStart row">
               {/* Third Mode */} 
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaVideo size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primartText">Video Call</span>
                    <span className="secondaryText">1234567890</span>
                  </div>
                </div>

                <div className="flexCenter button">Video Call Now</div>
              </div>

              {/* Forth Mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primartText">Message</span>
                    <span className="secondaryText">1234567890</span>
                  </div>
                </div>

                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* Left Section */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
