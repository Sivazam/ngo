import { Component,  h } from '@stencil/core';
import Data from "../data";

@Component({
  tag: 'app-aboutus',
//   styleUrl: 'app-aboutus.css',

  
})
export class AppAboutus {

  render() {
      console.log('About us :: Render');
    return (
        <span>
        
        {/* <!-- CSS Files
            ================================================== --> */}
            {/* <link rel="stylesheet" href="assets/icon/css/bootstrap.min.css" type="text/css"/>
            <link rel="stylesheet" href="assets/icon/css/bootstrap-grid.min.css" type="text/css"/>
            <link rel="stylesheet" href="assets/icon/css/bootstrap-reboot.min.css" type="text/css"/>
            <link rel="stylesheet" href="assets/icon/css/animate.css" type="text/css"/>
            <link rel="stylesheet" href="assets/icon/css/owl.carousel.css" type="text/css"/>
            <link rel="stylesheet" href="assets/icon/css/owl.theme.css" type="text/css"/>
            <link rel="stylesheet" href="assets/icon/css/owl.transitions.css" type="text/css"/>
            <link rel="stylesheet" href="assets/icon/css/magnific-popup.css" type="text/css"/>
            <link rel="stylesheet" href="assets/icon/css/jquery.countdown.css" type="text/css"/>
            <link rel="stylesheet" href="assets/icon/css/style.css" type="text/css"/>
            <link rel="stylesheet" href="assets/icon/css/colors/red.css" type="text/css"/> */}
        
        
        
              
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
        
        {/* <!-- header begin --> */}
        <header>
        
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        {/* <!-- logo begin --> */}
                        <div id="logo">
                            <a href="index.html">
                                <img class="logo" src="assets/icon/images/logo-light.png" alt=""/>
                                <img class="logo-2" src="assets/icon/images/logo-dark.png" alt=""/>
                            </a>
                        </div>
                        {/* <!-- logo close --> */}
        
                        {/* <!-- small button begin --> */}
                        <span id="menu-btn"></span>
                        {/* <!-- small button close --> */}
        
                        {/* <!-- mainmenu begin --> */}
                        <nav>
                            <ul id="mainmenu">
                                <li><a href="index.html">Home</a>
                            
                                </li>
                                <li><a href="about-us.html">About Us</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="portfolio.html">Portfolio</a></li>
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </nav>
                        {/* <!-- mainmenu close --> */}
        
                    </div>
        
                </div>
            </div>
        </header>
        {/* <!-- header close --> */}
        
        {/* <!-- content begin --> */}
        <div id="content" class="no-bottom no-top">
            <div id="top"></div>
        
            {/* <!-- section begin --> */}
            <section id="subheader" class="text-light" data-bgimage= "url(assets/images/background/10.jpg)"  data-stellar-background-ratio=".2">
                <div class="overlay-bg t50">
                
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h1>About Us</h1>
                                <p>{new Data().data.description}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </section>
            {/* <!-- section close --> */}
            
            {/* <!-- section begin --> */}
            <section id="section-side" class="side-bg no-padding" data-bgcolor="#f9f9f9">
                <div class="image-container col-md-7 pull-left d-block d-sm-none d-md-block">
                    <div class="background-image" data-bgimage="url(assets/images/background/11.jpg)"></div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="inner-padding">
                            <div class="col-md-4 offset-md-8 wow fadeIn">
                                <h2 class="mb20">Who We Are</h2>
                                <p>{new Data().data.projects[0].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- section close --> */}
        
            {/* <!-- section begin --> */}
            <section id="section-services">
                <div class="container">
        
                    <div class="row align-items-center">
                        <div class="col-md-8">
                            <div class="row sequence">
                                {/* <!-- feature box begin --> */}
                                <div class="col-md-6 mb40 sq-item wow sq-item wow">
                                    <div class="feature-box style-2">
                                        <i class="icon-pencil"></i>
                                        <div class="text">
                                            <h3>Our Vision</h3>
                                            {new Data().data.vision}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- feature box close --> */}
        
                                {/* <!-- feature box begin --> */}
                                <div class="col-md-6 feature-box mb40 sq-item wow">
                                    <div class="feature-box style-2">
                                        <i class="icon-envelope"></i>
                                        <div class="text">
                                            <h3>Our Mission</h3>
                                            {...new Data().data.mission}
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- feature box close --> */}
                                
                            </div>
                        </div>
                        
                        <div class="col-md-4">
							<figure class="picframe invert transparent hover-shadow">
                                    <span class="overlay-v">
										<span class="v-center">
											<span>
												<a id="play-video" class="video-play-button popup-youtube" href={new Data().data.media[1].link}>
													<span></span>
												</a>
											</span>
										</span>
									</span>
                                <img src={new Data().data.media[1].photo.url} class="img-fullwidth" alt=""/>
                            </figure>
						</div>
                    </div>
                    
                </div>
            </section>
            {/* <!-- section close --> */}
            
            {/* <!-- section begin --> */}
            <section class="bg-color text-light pt40 pb40">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h2 class="no-bottom">Meet The Team</h2>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- section close --> */}
            
            {/* <!-- section begin --> */}
            <section id="section-team" class="no-padding">
                <div class="container-fluid">
                    <div class="row no-gutters">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="profile_pic text-center">
                                <figure class="picframe sc-icon mb20">
                                    <div class="icons">
                                        <a href={new Data().data.team[0].reachOut.facebook}><i class="fa fa-facebook fa-lg"></i></a>
                                        <a href={new Data().data.team[0].reachOut.twitter}><i class="fa fa-twitter fa-lg"></i></a>
                                        <a href={new Data().data.team[0].reachOut.linkedin}><i class="fa fa-linkedin fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                    </div>
                                    <img src={new Data().data.team[0].photo.url} class="img-fluid" alt=""/>
                                </figure>
        
                                <h3>{new Data().data.team[0].name}</h3>
                                <span class="subtitle">{new Data().data.team[0].role}</span>
                            </div>
                        </div>
        
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="profile_pic text-center">
                                <figure class="picframe sc-icon mb20">
                                    <div class="icons">
                                    <a href={new Data().data.team[1].reachOut.facebook}><i class="fa fa-facebook fa-lg"></i></a>
                                        <a href={new Data().data.team[1].reachOut.twitter}><i class="fa fa-twitter fa-lg"></i></a>
                                        <a href={new Data().data.team[1].reachOut.linkedin}><i class="fa fa-linkedin fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                    </div>
                                    <img src={new Data().data.team[1].photo.url} class="img-fluid" alt=""/>
                                </figure>
        
                                <h3>{new Data().data.team[1].name}</h3>
                                <span class="subtitle">{new Data().data.team[1].role}</span>
                            </div>
                        </div>
        
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="profile_pic text-center">
                                <figure class="picframe sc-icon mb20">
                                    <div class="icons">
                                    <a href={new Data().data.team[2].reachOut.facebook}><i class="fa fa-facebook fa-lg"></i></a>
                                        <a href={new Data().data.team[2].reachOut.twitter}><i class="fa fa-twitter fa-lg"></i></a>
                                        <a href={new Data().data.team[2].reachOut.linkedin}><i class="fa fa-linkedin fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                    </div>
                                    <img src={new Data().data.team[2].photo.url} class="img-fluid" alt=""/>
                                </figure>
        
                                <h3>{new Data().data.team[2].name}</h3>
                                <span class="subtitle">{new Data().data.team[2].role}</span>
                            </div>
                        </div>
        
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="profile_pic text-center">
                                <figure class="picframe sc-icon mb20">
                                    <div class="icons">
                                    <a href={new Data().data.team[3].reachOut.facebook}><i class="fa fa-facebook fa-lg"></i></a>
                                    <a href={new Data().data.team[3].reachOut.twitter}><i class="fa fa-twitter fa-lg"></i></a>
                                    <a href={new Data().data.team[3].reachOut.linkedin}><i class="fa fa-linkedin fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                    </div>
                                    <img src={new Data().data.team[3].photo.url} class="img-fluid" alt=""/>
                                </figure>
        
                                <h3>{new Data().data.team[3].name}</h3>
                                <span class="subtitle">{new Data().data.team[3].role}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- section close --> */}
        
            </div>
            {/* <!-- content close --> */}
        
            {/* <!-- footer begin --> */}
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 sm-mb10">
                            <div class="mt10">&copy; Copyright 2020 - Bolo by Designesia </div>
                        </div>
        
                        <div class="col-md-6 text-left text-md-right">
                            <div class="social-icons">
                                <a href={new Data().data.reachOut.facebook}><i class="fa fa-facebook fa-lg"></i></a>
                                <a href={new Data().data.reachOut.twitter}><i class="fa fa-twitter fa-lg"></i></a>
                                <a href={new Data().data.reachOut.linkedin}><i class="fa fa-linkedin fa-lg"></i></a>
                                <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                <a href="#"><i class="fa fa-rss fa-lg"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
        
            </footer>
            {/* <!-- footer close --> */}
        
            <a href="#" id="back-to-top"></a>
        
            {/* <div id="preloader">
                <div class="preloader1"></div>
            </div> */}
        
        </div>
        
        {/* <!-- Javascript Files
        ================================================== --> */}
        {/* <script src="assets/icon/js/jquery.min.js"></script>
        <script src="assets/icon/js/bootstrap.min.js"></script>
        <script src="assets/icon/js/jquery.isotope.min.js"></script>
        <script src="assets/icon/js/easing.js"></script>
        <script src="assets/icon/js/owl.carousel.js"></script>
        <script src="assets/icon/js/jquery.countTo.js"></script>
        <script src="assets/icon/js/wow.min.js"></script>
        <script src="assets/icon/js/jquery.magnific-popup.min.js"></script>
        <script src="assets/icon/js/enquire.min.js"></script>
        <script src="assets/icon/js/jquery.stellar.min.js"></script>
        <script src="assets/icon/js/jquery.plugin.js"></script>		
        <script src="assets/icon/js/jquery.easeScroll.js"></script>
        <script src="assets/icon/js/designesia.js"></script>
        <script src="assets/icon/js/validation.js"></script> */}
        
        </span>

    );
  }

}




