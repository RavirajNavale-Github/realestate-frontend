import React from "react";
import "./Hero.css";
import {MdLocationOn} from 'react-icons/md'
import CountUp from 'react-countup'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left Section */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"/>

            <motion.h1
            initial={{y: "2rem", opacity:0}}
            animate={{y: 0, opacity: 1}}
            transition={{
              duration: 2,
              type: "spring"
            }}>
            <h1>Discover <br/>Most Suitable <br />Property</h1>
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a veriety of properties that suit you very easily</span>
            <span className="secondaryText">Forgot all difficulties in finding a residense for you</span>
          </div>

          <div className="flexCenter search-bar">
            <MdLocationOn color="var(--blue)" size={25}/>
            <input type="text" />
             <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span><CountUp start={8800} end={9000} duration={4}/>
              <span>+</span>
              </span>

              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span><CountUp start={1950} end={2000} duration={4}/>
              <span>+</span>
              </span>

              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span><CountUp end={28} duration={4}/>
              <span>+</span>
              </span>

              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flexCenter hero-right">
          <motion.div
          initial={{x: "7rem", opacity: 0}}
          animate={{x:0, opacity: 1}}
          transition={{
            duration: 2,
            type: "spring"
          }}>
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
