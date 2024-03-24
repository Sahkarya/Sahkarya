
import React, { useState } from 'react';

const About = () => {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />
      <div className="about-page">
        <div className="content">
          <h1>About Sahkarya</h1>
          <p>
            Welcome to Sahkarya, where we engineer innovative solutions to tackle one of the most pressing issues faced by municipalities
            worldwide: waste management. At Sahkarya, we are committed to revolutionizing the way communities manage their trash and
            dustbin overflow through cutting-edge digital systems and IoT-based technologies.
          </p>
          <h2>Our Mission</h2>
          <p>
            At Sahkarya, our mission is clear: to create a cleaner, healthier, and more sustainable environment for all. We believe that
            by harnessing the power of technology, we can streamline waste management processes, reduce environmental impact, and enhance
            overall quality of life.
          </p>
          <h2>Our Approach</h2>
          <p>
            Our team of dedicated engineers and experts work tirelessly to design and develop digital systems that efficiently gather and
            update dustbin overflow and trash information for Municipal Corporations. Through the integration of IoT devices and
            high-resolution imaging technology, we provide detailed insights into factors such as manholes, maintenance history, length,
            area, contractors, grants, and oversight.
          </p>
          <h2>What Sets Us Apart</h2>
          <p>
            At Sahkarya, innovation is at the heart of everything we do. We understand the challenges faced by municipalities in managing
            waste effectively, which is why we constantly strive to push the boundaries of what's possible. By leveraging advanced
            technologies and a deep understanding of the complexities of waste management, we offer solutions that are not only effective
            but also sustainable in the long run.
          </p>
          <h2>Our Commitment to Excellence</h2>
          <p>
            Quality and reliability are paramount to us at Sahkarya. We are committed to delivering products and services that meet the
            highest standards of excellence. Whether it's designing custom IoT devices or implementing state-of-the-art digital systems,
            we ensure that our solutions are robust, scalable, and tailored to the unique needs of each municipality we serve.
          </p>
          <h2>Get Involved</h2>
          <p>
            Join us in our mission to transform waste management for the better. Whether you're a Municipal Corporation looking to
            optimize your waste management processes or a concerned citizen eager to make a difference in your community, Sahkarya
            welcomes you to be a part of our journey towards a cleaner, greener future.
          </p>
          <h2>Contact Us</h2>
          <p>
            Ready to take the next step towards smarter waste management? Get in touch with us today to learn more about our solutions
            and how we can help you tackle dustbin overflow and trash issues in your area.
          </p>
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <p style={{background:"#8a9292", width:"60%", height:"40px", paddingTop:"8px", paddingLeft:"5px", borderRadius:"12px", fontWeight:"500"}}>

            Together, let's build a brighter tomorrow, one bin at a time.
          </p>
          <button id='btn1' style={{border:"none", backgroundColor:"#ffc107",borderRadius:"10px" , fontWeight:"600", height:"35px"}}>Join Us</button>
          </div>
        </div>
      </div>
      <footer className="footer" style={{ position:"inherit",bottom:"0", width:"100%"}}>
        <p style={{ color: "white" }}>&copy; 2024 Sahkarya. All rights reserved.</p>
        <div id='icon' style={{color:"white"}}>
          <i class="ri-instagram-fill" style={{marginRight:"20px"}}></i>
          <i class="ri-twitter-x-fill" style={{marginRight:"20px"}}></i>
          <i class="ri-code-box-fill" style={{marginRight:"20px"}}></i>
        </div>
      </footer>
      <style jsx>{`
        .about-page {
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        h1,
        h2 {
          margin-bottom: 1rem;
        }

        ul {
          list-style: disc;
          padding-left: 1rem;
        }

        .call-to-action {
          text-align: center;
          margin-top: 2rem;
        }

        .footer {
          text-align: center;
          margin-top: 2rem;
          padding: 1rem;
          background-color: #002447;
        }
        #icon i:hover{
          
          cursor: pointer;
          
          color: #ffde70;
        }
        #btn1:hover{
          color: white;
        }
      `}</style>
    </>
  );
};

export default About;
