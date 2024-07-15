// import React from "react";
// import  { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// export const Navigation = (props) => {
//   const [sticky, setSticky] = useState(false);

//   const handleScroll = () => {
//     if (window.scrollY > 0) {
//       setSticky(true);
//     } else {
//       setSticky(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
//   return (
//     <>
//       <div class="top-bar ">
//             <div class="container-fluid">
//                 <div class="row">
//                     <div class="col-md-8">
//                         <div class="top-bar-left">
//                             {/* <!-- <div class="text">
//                                 <i class="far fa-clock"></i>
//                                 <h2>8:00 - 9:00</h2>
//                                 <p>Mon - Fri</p>
//                             </div> --> */}
//                             {/* <!-- <div class="text">
//                                 <i class="fa fa-phone-alt"></i>
//                                 <h2>+123 456 7890</h2>
//                                 <p>For Appointment</p>
//                             </div> --> */}
//                         </div>
//                     </div>
//                     <div class="col-md-4">
//                         <div class="top-bar-right">
//                             <div class="social">
//                                 <a href=""><i class="fab fa-twitter"></i></a>
//                                 <a href=""><i class="fab fa-facebook-f"></i></a>
//                                 <a href=""><i class="fab fa-linkedin-in"></i></a>
//                                 <a href=""><i class="fab fa-instagram"></i></a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
   
//     <div className={`navbar ${sticky ? 'nav-sticky' : ''}  navbar-expand-lg bg-dark navbar-dark`}>
//     <div class="container-fluid">
//         {/* <!-- <a href="index.html" class="navbar-brand">Confer</a> --> */}
//         <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
//             <span class="navbar-toggler-icon"></span>
//         </button>

//         <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
//             <div class="navbar-nav ml-auto">
//                 <a href="index.html" class="nav-item nav-link active">Home</a>
//                 <a href="#about"  class="nav-item nav-link">About</a>
//                 <a href="#LEADERSHIP" class="nav-item nav-link">Leadership</a>
//                 <div class="nav-item dropdown">
//                     <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Research</a>
//                     <div class="dropdown-menu">
//                         <a href="#" class="dropdown-item">Security issues  </a>
//                         <a href="#" class="dropdown-item">Trade flows.</a>
//                         <a href="#" class="dropdown-item">Climate </a>

                        
//                     </div>
//                 </div>
//                 <a href="#" class="nav-item nav-link">Activities</a>
//                 <a href="review.html" class="nav-item nav-link">Review</a>
//                 {/* <!-- <div class="nav-item dropdown"> -->
//                     <a href="#Strategic" class="nav-link  nav-item active" >Strategic Objectives</a>
//                     <!-- <div class="dropdown-menu">
//                         <a href="blog.html" class="dropdown-item">Security </a>
//                         <a href="single.html" class="dropdown-item">Geopolitics.</a>
//                         <a href="single.html" class="dropdown-item">Trade</a>

                        
//                     </div> --> */}
//                 <a href="contact.html" class="nav-item nav-link">Contact</a>
//             </div>
//         </div>
//     </div>
// </div> </>
//   );
// };
