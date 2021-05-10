import { Component,Prop,  h } from '@stencil/core';
import Data from "../data"

@Component({
  tag: 'app-contactus',
  styleUrl: 'app-contactus.css',
  
})
export class AppContactus {

    @Prop()  name6: string;


    render() {
  
   <p>{this.name6}</p>
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
                        <stencil-route-link url="/"  exact= {true}>
                            <img class="logo resize-1" src={new Data().data.review[13].ngo.logo.url} alt=""/>
                            <img class="logo-2 resize-2" src={new Data().data.review[13].ngo.logo.url} alt=""/>
                        </stencil-route-link>
                            
                            </a>
                        </div>
                        

                        
                        <span id="menu-btn"></span>
                        

                       
                        <nav>
                        <ul id="mainmenu">
                    <stencil-route-link url="/"  exact= {true}>
                    <li><a >Home</a></li>
                    </stencil-route-link>
                    <stencil-route-link url="/aboutus"> 
                    <li><a >About Us</a></li>
                    </stencil-route-link>
                    <stencil-route-link url="/projects">
                    <li><a >Projects</a></li>
                    </stencil-route-link>
                    <stencil-route-link url="/register" exact={true}>
                    <li><a >Register</a></li>
                    </stencil-route-link>
                    <stencil-route-link url="/donate">
                    <li><a >Donate</a></li>
                    </stencil-route-link>
                    <stencil-route-link url="/contactus">
                    <li><a>Conatct Us</a></li>
                    </stencil-route-link>
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
                                <h1>Contact Us</h1>
								<p>Get in touch with us</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            
            <section id="section-contact" data-bgcolor="#f9f9f9">
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
                                            <input type='submit' id='send_message' value='Submit' class="btn btn-custom color-2"/>
                                        </div>
                                        
                                        <div id='mail_success' class='success'>Your message has been sent successfully.</div>
                                        <div id='mail_fail' class='error'>Sorry, error occured this time sending your message.</div>
                                    </div>
                                    <div>

                                    <p id = "note">(Note : kindly allow us, We will revert back within <b>12-24 hrs</b> )</p>
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
