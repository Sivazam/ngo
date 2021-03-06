import { Component,  h } from '@stencil/core';
import Data from "../data"
@Component({
  tag: 'app-index',
 
})
export class AppIndex {

  render() {
    return (  
      <div id= "homepage">

<div class="page-overlay">
        <div class="preloader-wrap">
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
        </div>
    </div>

    <div id="logo-container">

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                   
                    <div id="logo">
                        <a data-menuanchor="Home" href="#Home">
                            <img class="logo" src="assets/icon/images/logo-red.png" alt=""/>
                        </a>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>

    <div id="pagepiling">

        
        <section id="section-intro" class="section pp-scrollable full-height owl-slide-wrapper text-light no-top no-bottom" data-bgimage="url(assets/icon/images/background/4.jpg)">
            <div class="overlay-bg t50">
				
                <div class="center-y relative">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="spacer-double d-block d-sm-none d-md-block"></div>
                                <h1 class="big b">{new Data().data.whyHelpMatters[0].text}</h1>
                                <div class="spacer-single"></div>
                                <a data-menuanchor="About" href="#About" class="btn-custom">About Company</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <a data-menuanchor="About" href="#About">
                <span class="mouse">
					<span class="scroll"></span>
                </span>
            </a>
        </section>

        <section class="section pp-scrollable" data-bgcolor="#f9f9f9">
            <div class="container">
                <div class="row align-items-center">

                    <div class="col-md-6">
                        <img src={new Data().data.projects[0].photo.url} class="mb-sm-30 img-fluid" alt=""/>
                    </div>

                    <div class="col-md-5 offset-md-1">
                        <h2 class="mb20">{new Data().data.projects[0].name}</h2>
                        <p>{new Data().data.projects[0].description}</p>
                        <div class="spacer-half"></div>
                        <a data-menuanchor="Services" href="#projects" class="btn-custom">projects</a>
                    </div>

                    <div class="clearfix"></div>
                </div>
            </div>
        </section>

        <section class="section pp-scrollable text-light" data-bgcolor="#111111">
            <div class="container">

                <div class="row align-items-center">
                    
                    <div class="col-md-4 col-sm-6 feature-box mb40">
                        <div class="feature-box left">
                            <i class="icon-pencil id-color"></i>
                            <div class="text">
                                <h3>Website Design</h3>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                            </div>
                        </div>
                    </div>
                   
                    <div class="col-md-4 col-sm-6 feature-box mb40">
                        <div class="feature-box left">
                            <i class="icon-envelope id-color"></i>
                            <div class="text">
                                <h3>Marketing</h3>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-sm-6 feature-box mb40">
                        <div class="feature-box left">
                            <i class="icon-camera id-color"></i>
                            <div class="text">
                                <h3>Photography</h3>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-sm-6 feature-box sm-mb40">
                        <div class="feature-box left">
                            <i class="icon-pricetags id-color"></i>
                            <div class="text">
                                <h3>Branding</h3>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-sm-6 feature-box sm-mb40">
                        <div class="feature-box left">
                            <i class="icon-tools id-color"></i>
                            <div class="text">
                                <h3>Development</h3>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-sm-6 feature-box sm-mb40">
                        <div class="feature-box left">
                            <i class="icon-magnifying-glass id-color"></i>
                            <div class="text">
                                <h3>Search Engine Optimisation</h3>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        <section class="section pp-scrollable">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="spacer-single"></div>
                        <div class="box-icon-simple right">
                            <span class="num">1</span>
                            <div class="text">
                                <h3>In Page Portfolio</h3>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                        <div class="spacer-single"></div>
                        <div class="box-icon-simple right">
                            <span class="num">2</span>
                            <div class="text">
                                <h3>Responsive layouts</h3>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                        <div class="spacer-single"></div>
                        <div class="box-icon-simple right mb-sm-30">
                            <span class="num">3</span>
                            <div class="text">
                                <h3>HTML 5 and CSS 3</h3>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <img src="assets/icon/images/misc/deco_1.png" class="img-fluid" alt=""/>
                    </div>

                    <div class="col-md-4">
                        <div class="spacer-single"></div>
                        <div class="box-icon-simple left">
                            <span class="num">4</span>
                            <div class="text">
                                <h3>W3C Valid HTML</h3>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                        <div class="spacer-single"></div>
                        <div class="box-icon-simple left">
                            <span class="num">5</span>
                            <div class="text">
                                <h3>Animated Elements</h3>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                        <div class="spacer-single"></div>
                        <div class="box-icon-simple left">
                            <span class="num">6</span>
                            <div class="text">
                                <h3>Bootstrap 4 Powered</h3>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="text-light section pp-scrollable" data-bgcolor="#111111">
            <div class="container">
                <div class="row">

                    <div class="col-lg-3 col-md-6 col-sm-6 mb-md-30">
                        <div class="profile_pic text-center">
                            <figure class="picframe gray sc-icon mb20">
                                <div class="icons">
                                    <a href="#"><i class="fa fa-facebook fa-lg"></i></a>
                                    <a href="#"><i class="fa fa-twitter fa-lg"></i></a>
                                    <a href="#"><i class="fa fa-linkedin fa-lg"></i></a>
                                    <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                </div>
                                <img src="assets/icon/images/team/1.jpg" class="img-fluid" alt=""/>
                            </figure>

                            <h3>Oscar Helman</h3>
                            <span class="subtitle">Founder & CEO</span>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 mb-md-30">
                        <div class="profile_pic text-center">
                            <figure class="picframe gray sc-icon mb20">
                                <div class="icons">
                                    <a href="#"><i class="fa fa-facebook fa-lg"></i></a>
                                    <a href="#"><i class="fa fa-twitter fa-lg"></i></a>
                                    <a href="#"><i class="fa fa-linkedin fa-lg"></i></a>
                                    <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                </div>
                                <img src="assets/icon/images/team/2.jpg" class="img-fluid" alt=""/>
                            </figure>

                            <h3>Isaac Nicholas</h3>
                            <span class="subtitle">Founder & CEO</span>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 mb-md-30">
                        <div class="profile_pic text-center">
                            <figure class="picframe gray sc-icon mb20">
                                <div class="icons">
                                    <a href="#"><i class="fa fa-facebook fa-lg"></i></a>
                                    <a href="#"><i class="fa fa-twitter fa-lg"></i></a>
                                    <a href="#"><i class="fa fa-linkedin fa-lg"></i></a>
                                    <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                </div>
                                <img src="assets/icon/images/team/3.jpg" class="img-fluid" alt=""/>
                            </figure>

                            <h3>Rose Shipp</h3>
                            <span class="subtitle">Founder & CEO</span>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-6 mb-md-30">
                        <div class="profile_pic text-center">
                            <figure class="picframe gray sc-icon mb20">
                                <div class="icons">
                                    <a href="#"><i class="fa fa-facebook fa-lg"></i></a>
                                    <a href="#"><i class="fa fa-twitter fa-lg"></i></a>
                                    <a href="#"><i class="fa fa-linkedin fa-lg"></i></a>
                                    <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                </div>
                                <img src="assets/icon/images/team/4.jpg" class="img-fluid" alt=""/>
                            </figure>

                            <h3>John Arnold</h3>
                            <span class="subtitle">Founder & CEO</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 mb-md-30">
                        <form name="contactForm" id='contact_form' class="de_form" method="post" action='email.php'>
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

                                <div class="col-md-12">
                                    <div id='submit'>
                                        <input type='submit' id='send_message' value='Submit Form' class="btn btn-custom color-2"/>
                                    </div>
                                    <div id='mail_success' class='success'>Your message has been sent successfully.</div>
                                    <div id='mail_fail' class='error'>Sorry, error occured this time sending your message.</div>
                                </div>


                            </div>
                        </form>

                    </div>

                    <div class="col-md-4">
                        <h6 class="id-color">Call Us</h6>
                        (208) 333 9296
                        <div class="spacer-single"></div>
                        <h6 class="id-color">Address</h6>
                        Collins Street West, London, UK
                        <div class="spacer-single"></div>
                        <h6 class="id-color">Email Us</h6>
                        contact@bolostudio.com
                    </div>

                </div>

            </div>
        </section>
        </div>
        {/* <div id="preloader">
        <div class="preloader1"></div>
    </div> */}
    {/* <script>
        var deleteLog = false;

        jQuery(document).ready(function() {
            jQuery('#pagepiling').pagepiling({
                menu: '#mainmenu',
                anchors: ['Home', 'About', 'Services', 'Features', 'Team', 'Contact'],
                navigation: {
                    'textColor': '#f2f2f2',
                    'bulletsColor': '#ccc',
                    'position': 'right',
                    'tooltips': ['Home', 'About', 'Services', 'Features', 'Team', 'Contact'],
                }
            });
        });
    </script>
     */}











    </div>
    

    );
  }

}
