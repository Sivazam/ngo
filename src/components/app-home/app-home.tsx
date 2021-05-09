import { Component, h } from '@stencil/core';
import Data from '../data';

//  final customized homepage
var qwer = (new Data().data.description);
console.log(qwer);





@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
  
})







export class AppHome {

  
 
 
  render() {
   
    return (

      <div id ="homepage">
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


<header>

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                
                <div id="logo">
                    <a href="home-tab.tsx">
                        
                        <img class="logo resize-1" src={new Data().data.review[13].ngo.logo.url} alt=""/>
                        <img class="logo-2 resize-2" src={new Data().data.review[13].ngo.logo.url} alt=""/>
                    </a>
                </div>
                
                <span id="menu-btn"></span>
                
                <nav>
                    <ul id="mainmenu">
                    
                        <li><a  href="#section-content">Home</a>
         
        </li>
                        <li><a href="#section-aboutus">About Us</a></li>
                        <li><a href="#section-projects">Projects</a></li>
                        <li><a href="portfolio.html">Register</a></li>
                        <li><a href="blog.html">Donate</a></li>
                        <li><a href="../app-contactus">Conatct Us</a></li>
                    </ul>
                </nav>
    

            </div>

        </div>
    </div>
</header>

<div id="content" class="no-bottom no-top">
    <div id="top"></div>

    <section id="section-intro" class="full-height relative owl-slide-wrapper text-light no-top no-bottom" data-stellar-background-ratio=".2">
                <div class="overlay-bg t50">

                    <div class="owl-slider-nav">
                        <div class="next"></div>
                        <div class="prev"></div>
                    </div>

                    <div id="custom-owl-slider" class="owl-carousel owl-theme owl-slide" data-scroll-speed="2">
                        <div class="item">
                            <img src="assets/images/slider/d1.jpg" alt=""/>
                        </div>
                        <div class="item">
                            <img src="assets/images/slider/d2.jpg" alt=""/>
                        </div>
                    </div>

                    <div class="center-y relative">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="spacer-double d-block d-sm-none d-md-block"></div>
                                    <h1 class="big">We make a Living by what we get, But We make a Life from What We Give</h1>
                                    <div class="spacer-single"></div>
                                    {/* <div class="subtitle s2"><span><i class="fa fa-envelope-o id-color"></i>{new Data().data.reachOut.email}</span><span><i class="fa fa-map-marker id-color"></i>{new Data().data.address}</span></div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


    

    
    {/* <section id="section-intro" class="full-height relative owl-slide-wrapper text-light no-top no-bottom" data-bgimage="url(assets/icon/images/background/9.jpg)" data-stellar-background-ratio=".2">
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
    </section> */}

    
    <section id= "aboutus" data-bgcolor="#f9f9f9">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-md-6">
                    <img src={new Data().data.awards[6].photo.url} class="mb-sm-30 img-fluid" alt="" />
                </div>

                <div class="col-md-5 offset-md-1">
                    <h2 class="mb20">About us</h2>
                    <a href ="mailto:tejarongala@gmail.com">tejarongala@gmail.com</a>
                    <a href ="tel:9014882779">9014882779</a>
                    <p> {qwer}   </p>
                    <div class="spacer-half"></div>
                    <a href="#section-portfolio" class="btn-custom scroll-to">What we do</a>
                </div>

                <div class="clearfix"></div>
            </div>
        </div>
    </section>


    <section  class="bg-color text-light pt60 pb60">
        <div class="container">

            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-6 mb-sm-30">
                    <div class="de_count">
                        <h3 class="timer" data-to= {new Data().data.aggregate.award} data-speed="2500">0</h3>
                        <span>Award Winnings</span>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6 col-xs-6 mb-sm-30">
                    <div class="de_count">
                        <h3 class="timer" data-to={new Data().data.aggregate.event}>0</h3>
                        <span>Events</span>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6 col-xs-6 mb-sm-30">
                    <div class="de_count">
                        <h3 class="timer" data-to={new Data().data.aggregate.volunteer}>0</h3>
                        <span>Volunteers</span>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6 col-xs-6 mb-sm-30">
                    <div class="de_count">
                        <h3 class="timer" data-to={new Data().data.aggregate.mediaRecognition} data-speed="2500">0</h3>
                        <span>Media Recognition</span>
                    </div>
                </div>
            </div>
        </div>
    </section>



    <section id="projects" aria-label="section">
				
				<div class="col-md-12 text-center">
							<h4 class="uptitle id-color">Stronger Together</h4>
                            <h2>Latest Projects</h2>
                        </div>
			
                <div id="project-carousel" class="owl-carousel owl-theme">
					
					
                        <div class="sq-item">
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
                        

                        
                        <div class="sq-item">
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
                        

                       
                        {/* <div class="sq-item wow">
                            <div class="picframe wow">
                                <div class="pf-click" data-value="project-details-youtube.html">
                                    <span class="overlay">
											<span class="title">
												<span>Youtube Video</span>
                                    </span>
                                    </span>
                                    <img src={new Data().data.projects[2].photo.url} class="wow" alt="" />
                                </div>
                            </div>
                        </div> */}
                        

                        
                        {/* <div class="sq-item">
                            <div class="picframe wow">
                                <div class="pf-click" data-value="project-details-image-big.html">
                                    <span class="overlay">
											<span class="title">
												<span>Single Image Big</span>
                                    </span>
                                    </span>
                                    <img src={new Data().data.projects[3].photo.url} class="wow" alt="" />
                                </div>
                            </div>
                        </div> */}
                        

                     
                        <div class="sq-item">
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
                        
                        
                        <div class="sq-item">
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
            </section>

            <section id="section-side" class="side-bg no-padding text-light" data-bgcolor="#202020">
                
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
              <h3>{new Data().data.activities[0]}</h3>
              {new Data().data.awards[1].description}
            </div>
          </div>
        </div>
        
        {/* <div class="col-md-6 feature-box mb40 sq-item wow">
          <div class="feature-box style-2 left">
            <i class="icon-envelope"></i>
            <div class="text">
              <h3>Marketing</h3>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </div>
          </div>
        </div> */}
        
        <div class="col-md-6 feature-box sm-mb40 sq-item wow">
          <div class="feature-box style-2 left">
            <i class="icon-pricetags"></i>
            <div class="text">
              <h3>{new Data().data.activities[2]}</h3>
              {new Data().data.awards[5].description}
            </div>
          </div>
        </div>
        
        {/* <div class="col-md-6 feature-box sm-mb40 sq-item wow">
          <div class="feature-box style-2 left">
            <i class="icon-tools"></i>
            <div class="text">
              <h3>Development</h3>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
            </div>
          </div>
        </div> */}
        
      </div>
    </div>

 
    
    <div class="col-md-4">
      <figure class="picframe invert transparent hover-shadow rounded">
                            <span class="overlay-v">
            <span class="v-center">


              <span>
                <a id="play-video" class="video-play-button popup-youtube" href={new Data().data.media[11].video.url}>
                  <span></span>
                </a>
              </span>
            </span>
          </span>
                        <img src={new Data().data.media[11].photo.url} alt=""/>
                    </figure>
    </div>
  </div>
  
        </div>
    </section>



    {/* <section id="section-side" class="side-bg no-padding text-light bg-color pt60 pb60"  data-bgcolor="#202020">
                <div class="image-container col-md-6 pull-left d-block d-sm-none d-md-block">
                    <div class="background-image" data-bgimage="url(assets/icon/images/background/22.jpg)"></div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="inner-padding">
                            <div class="col-md-5 offset-md-7 wow fadeIn">
								<h4 class="uptitle"><span class="id-color">What We Do</span></h4>
                                <h2 class="mb20">We Make Your Dream</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                                <div class="spacer-half"></div>
                                <a href="#section-contact" class="btn-custom scroll-to ">Contact Us</a>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section id="section-side-1" class="side-bg no-padding bg-color text-light">
                <div class="image-container col-md-6 pull-left d-block d-sm-none d-md-block" data-bgimage="url({new Data().data.awards[0],photo.url})">
                </div>

                <div class="container">
                    <div class="row">
                        <div class="inner-padding">
                            <div class="col-md-5 offset-md-7 wow fadeIn">
                                <h2 class="mb20">Join Us Now</h2>
                                <p>{new Data().data.projects[1].description}
                                </p>
                                <div class="spacer-half"></div>
                                <a href="#section-contact" class="btn-border scroll-to">Register Now</a>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>

    

    

    






            

    
    
    
    
    
    

    <div class="clearfix"></div>

    

           



            
			
			<div id="loader-area" data-bgcolor="#fafafa">
                <div class="container">
                    <div class="project-load"></div>
                </div>
            </div>
    
    

{/* potrait slide bar added............ */}

    {/* <section id="section-screenshots" aria-label="section" class="text-light" data-bgcolor="#2d3840">
                <div id="ss-carousel" class="owl-carousel owl-theme">

                    <figure class="picframe">
                        <a class="image-popup" href="images/ss/1.jpg">
                            <span class="overlay-v">
										<span class="v-center text-center">
											<span>
												View larger
											</span>
                            </span>
                            </span>
                        </a>
                        <img src="assets/images/ss/1.jpg" class="img-fullwidth" alt=""/>
                    </figure>

                    <figure class="picframe">
                        <a class="image-popup" href="images/ss/2.jpg">
                            <span class="overlay-v">
										<span class="v-center text-center">
											<span>
												View larger
											</span>
                            </span>
                            </span>
                        </a>
                        <img src="assets/images/ss/2.jpg" class="img-fullwidth" alt=""/>
                    </figure>

                    <figure class="picframe">
                        <a class="image-popup" href="images/ss/3.jpg">
                            <span class="overlay-v">
										<span class="v-center text-center">
											<span>
												View larger
											</span>
                            </span>
                            </span>
                        </a>
                        <img src="assets/images/ss/3.jpg" class="img-fullwidth" alt=""/>
                    </figure>

                    <figure class="picframe">
                        <a class="image-popup" href="images/ss/4.jpg">
                            <span class="overlay-v">
										<span class="v-center text-center">
											<span>
												View larger
											</span>
                            </span>
                            </span>
                        </a>
                        <img src="assets/images/ss/4.jpg" class="img-fullwidth" alt=""/>
                    </figure>

                    <figure class="picframe">
                        <a class="image-popup" href="images/ss/5.jpg">
                            <span class="overlay-v">
										<span class="v-center text-center">
											<span>
												View larger
											</span>
                            </span>
                            </span>
                        </a>
                        <img src="assets/images/ss/5.jpg" class="img-fullwidth" alt=""/>
                    </figure>

                    <figure class="picframe">
                        <a class="image-popup" href="images/ss/6.jpg">
                            <span class="overlay-v">
										<span class="v-center text-center">
											<span>
												View larger
											</span>
                            </span>
                            </span>
                        </a>
                        <img src="images/ss/6.jpg" class="img-fullwidth" alt=""/>
                    </figure>

                    <figure class="picframe">
                        <a class="assets/image-popup" href="images/ss/7.jpg">
                            <span class="overlay-v">
										<span class="v-center text-center">
											<span>
												View larger
											</span>
                            </span>
                            </span>
                        </a>
                        <img src="assets/images/ss/7.jpg" class="img-fullwidth" alt=""/>
                    </figure>

                    <figure class="picframe">
                        <a class="image-popup" href="images/ss/8.jpg">
                            <span class="overlay-v">
										<span class="v-center text-center">
											<span>
												View larger
											</span>
                            </span>
                            </span>
                        </a>
                        <img src="assets/images/ss/8.jpg" class="img-fullwidth" alt=""/>
                    </figure>
                </div>
            </section> */}

{/* project static overview............... */}
    
    {/* <section id="section-portfolio" aria-label="section-portfolio" class="no-top no-bottom" data-bgcolor="#fafafa">
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
    </section> */}
    

    <div id="loader-area">
        <div class="container">
            <div class="project-load"></div>
        </div>
    </div>

    <section id="section-team">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Team Of Awesome</h2>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6 mb-md-30">
                            <div class="profile_pic text-center">
                                <figure class="picframe sc-icon gray mb20">
                                {/* <div class="icons">
                                        <a href={new Data().data.team[0].reachOut.facebook}><i class="fa fa-facebook fa-lg"></i></a>
                                        <a href={new Data().data.team[0].reachOut.twitter}><i class="fa fa-twitter fa-lg"></i></a>
                                        <a href={new Data().data.team[0].reachOut.linkedin}><i class="fa fa-linkedin fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                    </div> */}
                                    <img src={new Data().data.team[0].photo.url} class="img-fluid" alt=""/>
                                </figure>

                                <h3>{new Data().data.team[0].name}</h3>
                                <span class="subtitle">{new Data().data.team[0].role}</span>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6 mb-md-30">
                            <div class="profile_pic text-center">
                                <figure class="picframe sc-icon gray mb20">
                                {/* <div class="icons">
                                    <a href={new Data().data.team[1].reachOut.facebook}><i class="fa fa-facebook fa-lg"></i></a>
                                        <a href={new Data().data.team[1].reachOut.twitter}><i class="fa fa-twitter fa-lg"></i></a>
                                        <a href={new Data().data.team[1].reachOut.linkedin}><i class="fa fa-linkedin fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                    </div> */}
                                    <img src={new Data().data.team[1].photo.url} class="img-fluid" alt=""/>
                                </figure>

                                <h3>{new Data().data.team[1].name}</h3>
                                <span class="subtitle">{new Data().data.team[1].role}</span>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6 mb-md-30">
                            <div class="profile_pic text-center">
                                <figure class="picframe sc-icon gray mb20">
                                {/* <div class="icons">
                                    <a href={new Data().data.team[2].reachOut.facebook}><i class="fa fa-facebook fa-lg"></i></a>
                                        <a href={new Data().data.team[2].reachOut.twitter}><i class="fa fa-twitter fa-lg"></i></a>
                                        <a href={new Data().data.team[2].reachOut.linkedin}><i class="fa fa-linkedin fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                    </div> */}
                                    <img src={new Data().data.team[2].photo.url} class="img-fluid" alt=""/>
                                </figure>

                                <h3>{new Data().data.team[2].name}</h3>
                                <span class="subtitle">{new Data().data.team[2].role}</span>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6 mb-md-30">
                            <div class="profile_pic text-center">
                                <figure class="picframe sc-icon gray mb20">
									{/* <div class="icons">
                                    <a href={new Data().data.team[3].reachOut.facebook}><i class="fa fa-facebook fa-lg"></i></a>
                                        <a href={new Data().data.team[3].reachOut.twitter}><i class="fa fa-twitter fa-lg"></i></a>
                                        <a href={new Data().data.team[3].reachOut.linkedin}><i class="fa fa-linkedin fa-lg"></i></a>
                                        <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                    </div> */}
                                    <img src={new Data().data.team[3].photo.url} class="img-fluid" alt=""/>
                                </figure>

                                <h3>{new Data().data.team[3].name}</h3>
                                <span class="subtitle">{new Data().data.team[3].role}</span>
                            </div>
                        </div>
                    </div>
				</div>
            </section>



    
    {/* <section id="section-blog" data-bgcolor="#f9f9f9">
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

    </section> */}


    

 


            <section id="section-contact" class="bg-color text-light">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Contact Us</h2>
                        </div>

                        <div class="col-md-8 mb-md-30">
                            <form name="contactForm" id='contact_form' class="de_form form_underline" method="post" action='email.php'>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="field-set">
                                            <input type='text' name='name' id='name' class="form-control" placeholder="Your Name"/>
                                            <div class="line-fx"></div>
                                        </div>

                                        <div class="field-set">
                                            <input type='text' name='email' id='email' class="form-control" placeholder="Your Email"/>
                                            <div class="line-fx"></div>
                                        </div>

                                        <div class="field-set">
                                            <input type='text' name='phone' id='phone' class="form-control" placeholder="Your Phone"/>
                                            <div class="line-fx"></div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="field-set">
                                            <textarea name='message' id='message' class="form-control" placeholder="Your Message"></textarea>
                                            <div class="line-fx"></div>
                                        </div>
                                    </div>

                                    <div class="spacer-single"></div>

                                    <div class="col-md-12">
                                        <div id='submit'>
                                            <input type='submit' id='send_message' value='Submit Form' class="btn-border"/>
                                        </div>
                                        <div id='mail_success' class='success'>Your message has been sent successfully.</div>
                                        <div id='mail_fail' class='error'>Sorry, error occured this time sending your message.</div>
                                    </div>


                                </div>
                            </form>

                        </div>

                        <div class="col-md-4">
                            <h6 class="id-color">Call Us</h6>
                            <a  id = "dail" href = {new Data().data.reachOut.phone1}> {new Data().data.reachOut.phone1}</a> 
                            <div class="spacer-single"></div>
                            <h6 class="id-color">Address</h6>
                            {new Data().data.address}
                            <div class="spacer-single"></div>
                            <h6 class="id-color">Email Us</h6>
                           <a  id = "mail" href = {new Data().data.reachOut.email}> {new Data().data.reachOut.email}</a> 
                        </div>

                    </div>

                </div>
            </section>
    

    </div>

   

  
    <footer>
        <div class="container" >
            <div class="row">
                <div class="col-md-6 sm-mb10">
                    <div class="mt10">&copy; Copyright 2021 - {new Data().data.slug} </div>
                </div>

                <div class="col-md-6 text-left text-md-right">
                    <div class="social-icons">
                                 <a href={new Data().data.reachOut.facebook}><i class="fa fa-facebook fa-lg"></i></a>
                                <a href={new Data().data.reachOut.twitter}><i class="fa fa-twitter fa-lg"></i></a>
                                <a href={new Data().data.reachOut.linkedin}><i class="fa fa-linkedin fa-lg"></i></a>
                                {/* <a href="#"><i class="fa fa-google-plus fa-lg"></i></a> */}
                                {/* <a href="#"><i class="fa fa-rss fa-lg"></i></a> */}
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
</div>
        
    );
  }
}
