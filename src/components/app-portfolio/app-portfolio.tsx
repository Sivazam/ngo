import { Component,  h } from '@stencil/core';
import Data from "../data"

@Component({
  tag: 'app-portfolio',
  
})
export class AppPortfolio {

  render() {
    return (
      <div>
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


<header class="header-light">

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                
                <div id="logo">
                    <a href="index.html">
                        <img class="logo" src="assets/icon/images/logo-light.png" alt=""/>
                        <img class="logo-2" src="assets/icon/images/logo-dark.png" alt=""/>
                    </a>
                </div>
                
                <span id="menu-btn"></span>
               
                <nav>
                    <ul id="mainmenu">
                                <li><a href="index.html">Home</a></li>
							                	<li><a href="">About Us</a></li>
                                <li><a href="services.html">projects</a></li>
                                <li><a href="portfolio.html">Volunteer Registration</a></li>
                                <li><a href="blog.html">Donate</a></li>
                                <li><a href="contact.html">Contact-Us</a></li>
                    </ul>
                </nav>
    

            </div>

        </div>
    </div>
</header>

<div id="content" class="no-bottom no-top">
    <div id="top"></div>
    

    <section id="section-portfolio" aria-label="section-portfolio" class="no-top no-bottom">
<div class="spacer-double d-none d-lg-block"></div>
<div class="spacer-double d-none d-lg-block"></div>

<div class="container-fluid">
            <div class="row no-gutters gallery-wrap sequence_pf">

              
                <div class="col-lg-4 col-md-6 col-sm-6 sq-item">
                    <div class="picframe wow">
                        <div class="pf-click" data-value="project-details-image.html">
                            <span class="overlay">
              <span class="title">
                <span>{new Data().data.projects[0].photo.caption}</span>
                            </span>
                            </span>
                            <img src= {new Data().data.projects[0].photo.url} class="wow" alt="" />
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 col-sm-6 sq-item">
                    <div class="picframe wow">
                        <div class="pf-click" data-value="project-details-slider.html">
                            <span class="overlay">
              <span class="title">
                <span>{new Data().data.projects[1].photo.caption}</span>
                            </span>
                            </span>
                            <img src={new Data().data.projects[1].photo.url} class="wow" alt="" />
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 col-sm-6 sq-item wow">
                    <div class="picframe wow">
                        <div class="pf-click" data-value="project-details-youtube.html">
                            <span class="overlay">
              <span class="title">
                <span>{new Data().data.projects[2].photo.caption}</span>
                            </span>
                            </span>
                            <img src={new Data().data.projects[2].photo.url} class="wow" alt="" />
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 col-sm-6 sq-item">
                    <div class="picframe wow">
                        <div class="pf-click" data-value="project-details-image-big.html">
                            <span class="overlay">
              <span class="title">
                <span>{new Data().data.projects[3].photo.caption}</span>
                            </span>
                            </span>
                            <img src={new Data().data.projects[3].photo.url} class="wow" alt="" />
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 col-sm-6 sq-item">
                    <div class="picframe wow">
                        <div class="pf-click" data-value="project-details-slider-big.html">
                            <span class="overlay">
              <span class="title">
                <span>{new Data().data.projects[4].photo.caption}</span>
                            </span>
                            </span>
                            <img src={new Data().data.projects[4].photo.url} class="wow" alt="" />
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 col-sm-6 sq-item">
                    <div class="picframe wow">
                        <div class="pf-click" data-value="project-details-youtube-big.html">
                            <span class="overlay">
              <span class="title">
                <span>{new Data().data.projects[5].photo.caption}</span>
                            </span>
                            </span>
                            <img src={new Data().data.projects[5].photo.url} class="wow" alt="" />
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    </section>
   

    <div id="loader-area" data-bgcolor="#fafafa">
        <div class="container">
            <div class="project-load"></div>
        </div>
    </div>

    </div>
    
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
<script src="assets/icon/js/jquery.min.js"></script>
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
        <script src="assets/icon/js/validation.js"></script>

        <link rel="stylesheet" href="assets/icon/css/bootstrap.min.css" type="text/css"/>
	<link rel="stylesheet" href="assets/icon/css/bootstrap-grid.min.css" type="text/css"/>
	<link rel="stylesheet" href="assets/icon/css/bootstrap-reboot.min.css" type="text/css"/>
    <link rel="stylesheet" href="assets/icon/css/animate.css" type="text/css"/>
    <link rel="stylesheet" href="assets/icon/css/owl.carousel.css" type="text/css"/>
    <link rel="stylesheet" href="assets/icon/css/owl.theme.css" type="text/css"/>
    <link rel="stylesheet" href="assets/icon/css/owl.transitions.css" type="text/css"/>
    <link rel="stylesheet" href="assets/icon/css/magnific-popup.css" type="text/css"/>
    <link rel="stylesheet" href="assets/icon/css/jquery.countdown.css" type="text/css"/>
    <link rel="stylesheet" href="assets/icon/css/style.css" type="text/css"/>
    <link rel="stylesheet" href="assets/icon/css/colors/red.css" type="text/css"/>

      </div>
    );
  }

}
