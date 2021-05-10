import { Component,  h } from '@stencil/core';
import Data from "../data"


@Component({
  tag: 'app-reg',
  styleUrl:'app-reg.css'
 
})
export class AppReg {

  render() {
    return (
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
                            <a href="index.html">
                            <img class="logo resize-1" src={new Data().data.review[13].ngo.logo.url} alt=""/>
                        <img class="logo-2 resize-2" src={new Data().data.review[13].ngo.logo.url} alt=""/>
                            </a>
                        </div>
                        

                        
                        <span id="menu-btn"></span>
                        

                       
                        <nav>
                            <ul id="mainmenu">
                                <li><a href="index.html">Home</a></li>
							                	<li><a href="">About Us</a></li>
                                <li><a href="services.html">projects</a></li>
                                <li><a href="portfolio.html">Register</a></li>
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

            
            <section id="subheader" class="text-light" data-bgimage="url(assets/icon/images/background/14.jpg)" data-stellar-background-ratio=".2">
                <div class="overlay-bg t50">

                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h1>Register With Us</h1>
								<p>Together let's solve Social problems and make the World a Better place</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            
            <section id="section-contact" data-bgcolor="#f9f9f9">
                <div class="container">
                    <div class="row">

                        <div class="col-md-6 mb-md-30">
                            <form name="contactForm" id='contact_form' class="de_form" method="post" action=''>
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

                                            <div class="field-set">
                                            <input type='text' name='place' id='place' class="form-control" placeholder="Your Place"/>
                                            <div class="line-fx"></div>
                                        </div>

                                        <div class="field-set">
                                            <input type='text' name='interest' id='interest' class="form-control" placeholder="Your Area of Interest"/>
                                            <div class="line-fx"></div>
                                        </div>

                                        </div>
                                    
                                    
                                   

                                    <div class="col-md-6">
                                        <div id='submit'>
                                            <input type='submit' id='send_message' value='Register' class="btn btn-custom color-2"/>
                                        </div>
                                        <div id='mail_success' class='success'>Your message has been sent successfully.</div>
                                        <div id='mail_fail' class='error'>Sorry, error occured this time sending your message.</div>
                                    </div>


                                    



                                    </div>
                                    
                                    


                                </div>
                            </form>
                            

                        </div>
                        <div class="col-6 mb-md-30">
                                        
                                        <img id= "resize"  src={new Data().data.projects[2].photo.url}/>
                                        </div>

                        {/* <div class="col-md-4">
                            <h6 class="id-color">Call Us</h6>
                            {new Data().data.reachOut.phone1}
                            <div class="spacer-single"></div>
                            <h6 class="id-color">Address</h6>
                            {new Data().data.address}
                            <div class="spacer-single"></div>
                            <h6 class="id-color">Email Us</h6>
                            {new Data().data.reachOut.email}
                        </div> */}

                    </div>

                </div>
            </section>
            

        </div>
        
        <footer>
            <div class="container">
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
        

        <a href="#" id="back-to-top"></a>
{/* 
        <div id="preloader">
            <div class="preloader1"></div>
        </div> */}

    </div>
      
    );
  }

}
