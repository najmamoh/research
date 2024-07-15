import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export const Team = () => {
    const responsive = {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        }
      };
  return (

    <div id="Strategic" className="blog">
    <div className="container">
      <div className="section-header">
        <h2>Strategic Objectives</h2>
      </div>
      <OwlCarousel className='owl-theme' responsive={responsive} margin={10} autoplay>
        <div className="item">
          <div className="blog-item">
            <div className="blog-img">
              <img src="/11.jpg" alt="Blog" />
            </div>
            <div className="blog-content">
              <h2 className="blog-title">Security</h2>
              <div className="blog-text">
                <p>
                  - Monitor and analyze conflicts, terrorism, piracy, and other security threats across the region.
                  - Assess military capabilities and security partnerships of regional actors.
                  - Provide risk assessments and early warning for clients with regional operations and interests.
                </p>
                <a className="btn" href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="blog-item">
            <div className="blog-img img">
              <img src="/22.jpg" alt="Blog" />
            </div>
            <div className="blog-content">
              <h2 className="blog-title"> Geopolitics</h2>
              <div className="blog-text">
                <p>
                Track shifts in regional power dynamics and relationships between Horn of Africa states.
 Analyze impacts of competition and cooperation between extra-regional powers on the region.
Forecast geopolitical risk and opportunities for client decision-making.

                </p>
                <a className="btn" href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="blog-item">
            <div className="blog-img">
              <img src="/33.jpg" alt="Blog" />
            </div>
            <div className="blog-content">
              <h2 className="blog-title">Trade</h2>
              <div className="blog-text">
                <p>
                Research trends in regional trade and investment flows. 
Identify obstacles to and options for increasing intra-regional economic integration   
Advise clients on market entry, supply chains, and operational risks

                </p>
                <a className="btn" href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="blog-item">
            <div className="blog-img">
              <img src="/44.png" alt="Blog" />
            </div>
            <div className="blog-content">
              <h2 className="blog-title"> Climate </h2>
              <div className="blog-text">
                <p>
                Analyze drivers of food insecurity, displacement, and other humanitarian crises
                Evaluate effectiveness of responses by governmental, non-governmental, and external actors
                Provide expert guidance to enhance resilience and crisis response capabilities  


                </p>
                <a className="btn" href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
        {/* Add more items as needed */}
      </OwlCarousel>
    </div>
  </div>
);
};



