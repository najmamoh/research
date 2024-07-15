import React from "react";

export const About = (props) => {
  return (
    <div id="about" class="about">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="about-img">
                    <div class="about-img-1">
                        <img src="/Berbera.jpg" alt="Image"/>
                    </div>
                    <div class="about-img-2">
                        <img src="/img.jpeg" alt="Image"/>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="section-header font-weight-bold">
                    <p>Learn About Us</p>
                 </div>
                <div class="about-text">
                    <p>
                        The Horn of Africa Research and Strategic Advisory (HORASA) is an independent research consultancy focused on providing timely research, analysis, advisory services, and policy recommendations for the Horn of Africa region.                             
                    </p>
                    <p>
                        Based in Hargeisa, Somaliland, HORASA has a multidisciplinary team of experts specializing in issues related to security, trade, geopolitics and the climate change and environment in the Horn. The center conducts rigorous policy studies, convenes key regional players, advises governments and organizations, and promotes fact-based policymaking all with the aim of supporting peace, prosperity, cooperation, and development in the region. 
                    </p>
                    <a class="btn" href="">Learn More</a>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};
