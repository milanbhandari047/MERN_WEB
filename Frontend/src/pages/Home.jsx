import React from "react";
import Analytics from "../components/Analytics";

const Home = () => {
  return (
    <>
      <main>
        <section className="section-home">
          <div className="container grid grid-two-cols ">
            <div className="home-content">
              <p>We are the Best IT Company</p>
              <h1>Welcome to MilTech</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                eligendi suscipit voluptatibus magnam quod odit sapiente
                voluptatem saepe est eum nesciunt quam a nulla fugit ipsum,
                velit, et distinctio libero? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consequatur eligendi ad delectus.
                Beatae voluptates at quis consequuntur tempore sunt asperiores
                amet voluptate dolorem maiores maxime libero minus, eos officiis
                eligendi.
              </p>

              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect now</button>
                </a>

                <a href="/services">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>

            {/* home image  */}
            <div className="home-image">
              <img
                src="images/register.jpg"
                height={500}
                width={400}
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section */}
     <Analytics/>
      {/* 3rd section  */}
      <section className="section-home">
        <div className="container grid grid-two-cols">
          {/* home images  */}
          <div className="home-image">
            <img
              src="/images/register.jpg"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="home-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's  MilTech can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
