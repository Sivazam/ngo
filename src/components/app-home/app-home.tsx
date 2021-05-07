import { Component, h } from '@stencil/core';
import Data from '../data';






 console.log(new Data().data.description[0]);
var qwer = (new Data().data.activities[2]);





@Component({
  tag: 'app-home',
  
  shadow: true,

  
})







export class AppHome {

  
 
 
  render() {
   
    return (

      <div id ="homepage">

{/* css files */}
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
        
          





<div class="page-overlay">
    <div class="preloader-wrap">
        <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    </div>
</div>


<header>

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                
                <div id="logo">
                    <a href="home-tab.tsx">
                        <img class="logo" src="assets/icon/images/logo-light.png" alt=""/>
                        <img class="logo-2" src="assets/icon/images/logo-dark.png" alt=""/>
                    </a>
                </div>
                
                <span id="menu-btn"></span>
                
                <nav>
                    <ul id="mainmenu">
                    
                        <li><a href="">Home</a>
          <ul class="mega">
            <li>


            </li>                                        
                            </ul>
        </li>
        <li><a href="home-tab.tsx">About Us</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="src/components/my-alert/my-alert.tsx">Contact</a></li>
                    </ul>
                </nav>
    

            </div>

        </div>
    </div>
</header>

<div id="content" class="no-bottom no-top">
    <div id="top"></div>

    
    <section id="section-intro" class="full-height relative owl-slide-wrapper text-light no-top no-bottom" data-bgimage="url(assets/icon/images/background/9.jpg)" data-stellar-background-ratio=".2">
        <div class="overlay-bg t50">

            <div class="center-y relative">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="spacer-double d-block d-sm-none d-md-block"></div>
          <h3>Awards Winning</h3>
                            <h1 class="big b">Creative Advertising <span class="id-color">&amp;</span> Branding Agency</h1>
                            <div class="spacer-single"></div>
                            <a href="https://themeforest.net/item/bolo-onepage-creative-website-template/25030305" class="btn-custom">Buy Bolo Now</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <a href="#section-services" class="scroll-to">
            <span class="mouse">
     <span class="scroll"></span>
            </span>
        </a>
    </section>
    
    <section id="section-services">
        <div class="container">

            <div class="row align-items-center">
    <div class="col-md-8">
      <div class="row sequence">
      
        <div class="col-md-6 mb40 sq-item wow sq-item wow">
          <div class="feature-box style-2 left">
            <i class="icon-pencil"></i>
            <div class="text">
              <h3>Website Design</h3>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </div>
          </div>
        </div>
        
        <div class="col-md-6 feature-box mb40 sq-item wow">
          <div class="feature-box style-2 left">
            <i class="icon-envelope"></i>
            <div class="text">
              <h3>Marketing</h3>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </div>
          </div>
        </div>
        
        <div class="col-md-6 feature-box sm-mb40 sq-item wow">
          <div class="feature-box style-2 left">
            <i class="icon-pricetags"></i>
            <div class="text">
              <h3>Branding</h3>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </div>
          </div>
        </div>
        
        <div class="col-md-6 feature-box sm-mb40 sq-item wow">
          <div class="feature-box style-2 left">
            <i class="icon-tools"></i>
            <div class="text">
              <h3>Development</h3>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
    <div class="col-md-4">
      <figure class="picframe invert transparent hover-shadow rounded">
                            <span class="overlay-v">
            <span class="v-center">
              <span>
                <a id="play-video" class="video-play-button popup-youtube" href="https://www.youtube.com/watch?v=CmCIZ_aUAeQ">
                  <span></span>
                </a>
              </span>
            </span>
          </span>
                        <img src="assets/icon/images/misc/2.jpg" class="img-fullwidth" alt=""/>
                    </figure>
    </div>
  </div>
  
        </div>
    </section>
    
    <section class="bg-color text-light pt60 pb60">
        <div class="container">

            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-6 mb-sm-30">
                    <div class="de_count">
                        <h3 class="timer" data-to="8240" data-speed="2500">0</h3>
                        <span>Hours of Works</span>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6 col-xs-6 mb-sm-30">
                    <div class="de_count">
                        <h3 class="timer" data-to="315">0</h3>
                        <span>Projects Done</span>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6 col-xs-6 mb-sm-30">
                    <div class="de_count">
                        <h3 class="timer" data-to="250">0</h3>
                        <span>Satisfied Customers</span>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6 col-xs-6 mb-sm-30">
                    <div class="de_count">
                        <h3 class="timer" data-to="32" data-speed="2500">0</h3>
                        <span>Awards Winning</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section data-bgcolor="#f9f9f9">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-md-6">
                    <img src="assets/icon/images/misc/laptop.png" class="mb-sm-30 img-fluid" alt="" />
                </div>

                <div class="col-md-5 offset-md-1">
                    <h2 class="mb20">{qwer}</h2>
                    <p> {qwer}    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div class="spacer-half"></div>
                    <a href="#section-portfolio" class="btn-custom scroll-to">See Our Works</a>
                </div>

                <div class="clearfix"></div>
            </div>
        </div>
    </section>
    
    <section id="section-portfolio" aria-label="section-portfolio" class="no-top no-bottom" data-bgcolor="#fafafa">
        <div class="container-fluid">
            <div class="row no-gutters gallery-wrap sequence_pf">

                <div class="col-lg-4 col-md-6 col-sm-6 sq-item">
                    <div class="picframe wow">
                        <div class="pf-click" data-value="project-details-image.html">
                            <span class="overlay">
              <span class="title">
                <span>Single Image</span>
                            </span>
                            </span>
                            <img src="assets/icon/images/portfolio/pf%20(1).jpg" class="wow" alt="" />
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 col-sm-6 sq-item">
                    <div class="picframe wow">
                        <div class="pf-click" data-value="project-details-slider.html">
                            <span class="overlay">
              <span class="title">
                <span>Multi Images Slider</span>
                            </span>
                            </span>
                            <img src="assets/icon/images/portfolio/pf%20(2).jpg" class="wow" alt="" />
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 col-sm-6 sq-item wow">
                    <div class="picframe wow">
                        <div class="pf-click" data-value="project-details-youtube.html">
                            <span class="overlay">
              <span class="title">
                <span>Youtube Video</span>
                            </span>
                            </span>
                            <img src="assets/icon/images/portfolio/pf%20(3).jpg" class="wow" alt="" />
                        </div>
                    </div>
                </div>
               
                <div class="col-lg-4 col-md-6 col-sm-6 sq-item">
                    <div class="picframe wow">
                        <div class="pf-click" data-value="project-details-image-big.html">
                            <span class="overlay">
              <span class="title">
                <span>Single Image Big</span>
                            </span>
                            </span>
                            <img src="assets/icon/images/portfolio/pf%20(4).jpg" class="wow" alt="" />
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 col-sm-6 sq-item">
                    <div class="picframe wow">
                        <div class="pf-click" data-value="project-details-slider-big.html">
                            <span class="overlay">
              <span class="title">
                <span>Multi Images Slider Big</span>
                            </span>
                            </span>
                            <img src="assets/icon/images/portfolio/pf%20(5).jpg" class="wow" alt="" />
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 col-sm-6 sq-item">
                    <div class="picframe wow">
                        <div class="pf-click" data-value="project-details-youtube-big.html">
                            <span class="overlay">
              <span class="title">
                <span>Youtube Video Big</span>
                            </span>
                            </span>
                            <img src="assets/icon/images/portfolio/pf%20(6).jpg" class="wow" alt="" />
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    </section>
    

    <div id="loader-area">
        <div class="container">
            <div class="project-load"></div>
        </div>
    </div>

    
    <section id="section-blog" data-bgcolor="#f9f9f9">
        <div class="container">
            <div class="row">

                <div class="col-md-12">
                    <div id="blog-carousel" class="owl-carousel owl-theme">
                        <div class="post-item s1 item">
                            <div class="date-box">
                                <div class="m">10</div>
                                <div class="d">JUN</div>
                            </div>

                            <div class="post-content">
                                <div class="post-text">
                                    <h3><a href="#">Make Better User Interface</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div class="post-item s1 item">
                            <div class="post-content">
                                <div class="date-box">
                                    <div class="m">15</div>
                                    <div class="d">JUN</div>
                                </div>

                                <div class="post-text">
                                    <h3><a href="#">Experts Web Design Tips</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div class="post-item s1 item">
                            <div class="post-content">
                                <div class="date-box">
                                    <div class="m">20</div>
                                    <div class="d">JUN</div>
                                </div>

                                <div class="post-text">
                                    <h3><a href="#">Importance Of Web Design</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>


                            </div>
                        </div>

                        <div class="post-item s1 item">
                            <div class="post-content">
                                <div class="date-box">
                                    <div class="m">22</div>
                                    <div class="d">JUN</div>
                                </div>

                                <div class="post-text">
                                    <h3><a href="#">Avoid Erros In UI Design</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div class="post-item s1 item">
                            <div class="post-content">
                                <div class="date-box">
                                    <div class="m">28</div>
                                    <div class="d">JUN</div>
                                </div>

                                <div class="post-text">
                                    <h3><a href="#">Make Your Website Faster</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div class="post-item s1 item">
                            <div class="post-content">
                                <div class="date-box">
                                    <div class="m">30</div>
                                    <div class="d">JUN</div>
                                </div>

                                <div class="post-text">
                                    <h3><a href="#">Create Marketing Website</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    

    </div>
   

  
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-6 sm-mb10">
                    <div class="mt10">&copy; Copyright 2021 - Grassroots </div>
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
   
    {/* <a href="#" id="back-to-top"></a>

    <div id="preloader">
        <div class="preloader1"></div>
    </div> */}

{/* <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="page-app-home" exact={true} />
              <stencil-route url= "['app-portfolio', 'portfolio' ]" component="page-app-portfolio" />
              <stencil-route url= "['app-portfolio', 'portfolio' ]" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main> */}
    


{/* js files */}
    
<script><script type="text/javascript" src="assets/icon/js/jquery.min.js" defer></script>
<script type="text/javascript" src="assets/icon/js/bootstrap.min.js" ></script>
<script type="text/javascript" src="assets/icon/js/jquery.isotope.min.js" ></script>
<script type="text/javascript" src="assets/icon/js/easing.js" ></script>
<script type="text/javascript" src="assets/icon/js/owl.carousel.js" ></script>
<script type="text/javascript" src="assets/icon/js/jquery.countTo.js" ></script>
<script type="text/javascript" src="assets/icon/js/wow.min.js" ></script>
<script type="text/javascript" src="assets/icon/js/jquery.magnific-popup.min.js" ></script>
<script type="text/javascript" src="assets/icon/js/enquire.min.js" ></script>
<script type="text/javascript" src="assets/icon/js/jquery.stellar.min.js" ></script>
<script type="text/javascript" src="assets/icon/js/jquery.plugin.js" ></script>		
<script type="text/javascript" src="assets/icon/js/jquery.easeScroll.js" ></script>
<script type="text/javascript" src="assets/icon/js/designesia.js" ></script>
<script type="text/javascript" src="assets/icon/js/validation.js" ></script> 

</script>

{/* 
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
      


<stencil-route-link url="../app-home">
          
        </stencil-route-link>  */}
      
</div>  

        
    );
  }
}
