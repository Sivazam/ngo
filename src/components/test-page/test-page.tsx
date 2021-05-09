import { Component, h } from '@stencil/core';
import Data from "../data";

@Component({
  tag: 'test-page',
  styleUrl: 'test-page.css'
  
})
export class TestPage {

  render() {
    return (
      <div class = "de_light">

<link rel="stylesheet" href="assets/icon/css/bootstrap.min.css" type="text/css"/>
            <link rel="stylesheet" href="assets/css/bootstrap-grid.min.css" type="text/css"/>
            <link rel="stylesheet" href="assets/css/bootstrap-reboot.min.css" type="text/css"/>
            <link rel="stylesheet" href="assets/css/animate.css" type="text/css"/>
            <link rel="stylesheet" href="assets/css/owl.carousel.css" type="text/css"/>
            <link rel="stylesheet" href="assets/css/owl.theme.css" type="text/css"/>
            <link rel="stylesheet" href="assets/css/owl.transitions.css" type="text/css"/>
            <link rel="stylesheet" href="assets/css/magnific-popup.css" type="text/css"/>
            <link rel="stylesheet" href="assets/css/jquery.countdown.css" type="text/css"/>
            <link rel="stylesheet" href="assets/css/style.css" type="text/css"/>
            <link rel="stylesheet" href="assets/css/colors/red.css" type="text/css"/>


        <div id="wrapper">

<div class="page-overlay">
    <div class="preloader-wrap">
        <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    </div>
</div>

<header class="transparent scroll-light header-mobile">

<div class="container">
    <div class="row">
        <div class="col-md-12">
            {/* <!-- logo begin --> */}
            <div id="logo">
                <a href="#">
                    <img class="logo" src="assets/images/logo-light.png" alt=""/>
                    <img class="logo-2" src="assets/images/logo-dark.png" alt=""/>
                </a>
            </div>
            {/* <!-- logo close --> */}

            {/* <!-- small button begin --> */}
            <span id="menu-btn"></span>
            
            {/* <!-- small button close --> */}

            {/* <!-- mainmenu begin --> */}
            <nav>
                <ul id="mainmenu" class ="no-separator">
                    <li><a href="#">Home</a>
      
                
                {/* <div class="clearfix"></div> */}
              
    </li>
    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
{/* <!-- mainmenu close --> */}

        </div>

    </div>
</div>
</header>
{/* <!-- header close --> */}
<div id= "content" class = "no-bottom no-top">
<div id= "top" class = "no-bottom no-top"></div>

<section  id="subheader" class="text-light"  data-bgimage={new Data().data.team[0].photo.url} data-stellar-background-ratio=".2">
                <div class="overlay-bg t50">
				
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h1>About Us</h1>
								<p>Advertising &amp; Branding Agency</p>
                            </div>
                        </div>
                    </div>
					
                </div>
				
            </section>
            <section id="section-side" class="side-bg no-padding" data-bgcolor="#f9f9f9">
                <div class="image-container col-md-7 pull-left d-block d-sm-none d-md-block">
                    <div class="background-image" data-bgimage="url(assets/images/background/11.jpg)"></div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="inner-padding">
                            <div class="col-md-4 offset-md-8 wow fadeIn">
                                <h2 class="mb20">Who We Are</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                    laborum.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
</div>
<section id="section-services">
                <div class="container">

                    <div class="row align-items-center">
						<div class="col-md-8">
							<div class="row sequence">
								
								<div class="col-md-6 mb40 sq-item wow sq-item wow">
									<div class="feature-box style-2">
										<i class="icon-pencil"></i>
										<div class="text">
											<h3>Our Vision</h3>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</div>
									</div>
								</div>
								

								
								<div class="col-md-6 feature-box mb40 sq-item wow">
									<div class="feature-box style-2">
										<i class="icon-envelope"></i>
										<div class="text">
											<h3>Our Mission</h3>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
										</div>
									</div>
								</div>
								
								
							</div>
						</div>
						
						<div class="col-md-4">
							<figure class="picframe invert transparent hover-shadow">
                                    <span class="overlay-v">
										<span class="v-center">
											<span>
												<a id="play-video" class="video-play-button popup-youtube" href="https://www.youtube.com/watch?v=CmCIZ_aUAeQ">
													<span></span>
												</a>
											</span>
										</span>
									</span>
                                <img src="assets/images/misc/3.jpg" class="img-fullwidth" alt=""/>
                            </figure>
						</div>
					</div>
					
                </div>
            </section>


<section class="bg-color text-light pt40 pb40">
				<div class="container">
                    <div class="row">
						<div class="col-md-12 text-center">
							<h2 class="no-bottom">Meet The Team</h2>
						</div>
					</div>
				</div>
			</section>
			
			
			
            <section id="section-team" class="no-padding">
                <div class="container-fluid">
                    <div class="row no-gutters">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="profile_pic text-center">
                                <figure class="picframe sc-icon mb20">
                                    <div class="icons">
                                        <a href="#"><i class="fa fa-facebook fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-twitter fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-linkedin fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                    </div>
                                    <img src="assets/images/team/1.jpg" class="img-fluid" alt=""/>
                                </figure>

                                <h3>Oscar Helman</h3>
                                <span class="subtitle">Founder & CEO</span>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="profile_pic text-center">
                                <figure class="picframe sc-icon mb20">
                                    <div class="icons">
                                        <a href="#"><i class="fa fa-facebook fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-twitter fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-linkedin fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                    </div>
                                    <img src="assets/images/team/2.jpg" class="img-fluid" alt=""/>
                                </figure>

                                <h3>Isaac Nicholas</h3>
                                <span class="subtitle">Founder & CEO</span>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="profile_pic text-center">
                                <figure class="picframe sc-icon mb20">
                                    <div class="icons">
                                        <a href="#"><i class="fa fa-facebook fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-twitter fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-linkedin fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                    </div>
                                    <img src="assets/images/team/3.jpg" class="img-fluid" alt=""/>
                                </figure>

                                <h3>Rose Shipp</h3>
                                <span class="subtitle">Founder & CEO</span>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="profile_pic text-center">
                                <figure class="picframe sc-icon mb20">
                                    <div class="icons">
                                        <a href="#"><i class="fa fa-facebook fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-twitter fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-linkedin fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                    </div>
                                    <img src="assets/images/team/4.jpg" class="img-fluid" alt=""/>
                                </figure>

                                <h3>John Arnold</h3>
                                <span class="subtitle">Founder & CEO</span>
                            </div>
                        </div>
                    </div>
				</div>
            </section>
            

            

            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 sm-mb10">
                            <div class="mt10">&copy; Copyright 2020 - Bolo by Designesia </div>
                        </div>

                        <div class="col-md-6 text-left text-md-right">
                            <div class="social-icons">
                                <a href="#"><i class="fa fa-facebook fa-lg"></i></a>
                                <a href="#"><i class="fa fa-twitter fa-lg"></i></a>
                                <a href="#"><i class="fa fa-linkedin fa-lg"></i></a>
                                <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                <a href="#"><i class="fa fa-rss fa-lg"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

            <a href="#" id="back-to-top"></a>

            {/* <div id="preloader">
                <div class="preloader1"></div>
            </div> */}


</div>
 <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/jquery.isotope.min.js"></script>
        <script src="assets/js/easing.js"></script>
        <script src="assets/js/owl.carousel.js"></script>
        <script src="assets/js/jquery.countTo.js"></script>
        <script src="assets/js/wow.min.js"></script>
        <script src="assets/js/jquery.magnific-popup.min.js"></script>
        <script src="assets/js/enquire.min.js"></script>
        <script src="assets/js/jquery.stellar.min.js"></script>
        <script src="assets/js/jquery.plugin.js"></script>		
        <script src="assets/js/jquery.easeScroll.js"></script>
        <script src="assets/js/designesia.js"></script>
        <script src="assets/js/validation.js"></script> 



</div>


    
    );
  }

}
