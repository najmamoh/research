import React from "react";
  import  { useState, useEffect } from 'react';
  import OwlCarousel from 'react-owl-carousel';
  import 'owl.carousel/dist/assets/owl.carousel.css';
  import 'owl.carousel/dist/assets/owl.theme.default.css';
  import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { About } from "./about";
import { Team } from "./Team";
import { Contact } from "./contact";
  export const Header = (props) => {
  

  const [sticky, setSticky] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setSticky(scrollTop > 0);
    setShowBackToTop(scrollTop > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
     <div className="top-bar ">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="top-bar-left">
                            {/* <!-- <div className="text">
                                <i className="far fa-clock"></i>
                                <h2>8:00 - 9:00</h2>
                                <p>Mon - Fri</p>
                            </div> --> */}
                            {/* <!-- <div className="text">
                                <i className="fa fa-phone-alt"></i>
                                <h2>+123 456 7890</h2>
                                <p>For Appointment</p>
                            </div> --> */}
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="top-bar-right">
                            <div className="social">
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-linkedin-in"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
        {/* <div className={`navbar ${sticky ? 'nav-sticky' : ''}`}> */}
        <Navbar expand="lg" className= {`py-3  custom-navbar ${sticky ? 'nav-sticky' : ''}`} >
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-auto mx-3 Navbar.Toggle"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="  gap-lg-5 justify-content-end  w-100    container-fluid">
              <Nav.Link className="" href="#home">Home</Nav.Link>
              <Nav.Link className=""href="#About">About</Nav.Link>
              <Nav.Link as={Link} to="services" className="">Services</Nav.Link>
              <Nav.Link className=""href="#Strategic">Strategic Objectives</Nav.Link>

              {/* <NavDropdown className=""  title="Strategic Objectives" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2" className="">Topics</NavDropdown.Item>
              <NavDropdown.Divider />

                <NavDropdown.Item href="#action/3.2">Security issues</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Trade flows</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Humanitarian and Climate Change HOA</NavDropdown.Item>
              

                <NavDropdown.Divider />
              </NavDropdown> */}
              <NavDropdown className=""  title="Reasources" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Ministerial meeting</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Annual Reports</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">presentations</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Events</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Publications</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Medi Converage</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Press Releases</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Speeches</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Newsletters</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Gallery</NavDropdown.Item>


              </NavDropdown>
                {/* <Nav.Link className=""href="#link">Review</Nav.Link> */}
                <Nav.Link className=""href="#link">CONTACT</Nav.Link>
 </Nav>
          </Navbar.Collapse>
    </Navbar>     

{/* </div> */}

    <div className="carousel ">
    <div className="container-fluid ">
        <div className="">
         
            <div className="carousel-item">
                <div className="carousel-img">
                    <img src="/img.jpeg" alt="Image"/>
                </div>
                <div className="carousel-text">
                    <h1>HORASA   RESEARCH </h1>
                    <p>
                        Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis, orci sodales varius fermentum, tortor
                    </p>
                    <div className="carousel-btn">
                        <a className="btn" href=""><i className="fa fa-link"></i>CONTACT</a>
                        <a className="btn btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal"><i className="fa fa-play"></i>Watch Video</a>
                    </div>
                </div>
            </div>
            {/* <div className="carousel-item">
                <div className="carousel-img">
                    <img src="img/img.jpeg" alt="Image"/>
                </div>
                <div className="carousel-text">
                    <h1>Horn of Africa Research </h1>
                    <p>
                        Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam. Proin pellentesque odio
                    </p>
                    <div className="carousel-btn">
                        <a className="btn" href=""><i className="fa fa-link"></i>CONTACT</a>
                        <a className="btn btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal"><i className="fa fa-play"></i>Watch Video</a>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
</div>
<About  />
<Team/>
<Contact/>
</div>

  );
};
