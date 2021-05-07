import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-donate',
  
  shadow: true
})
export class Doante {

  render() {
    return (
      <div>

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
    <link rel="stylesheet" href="assets/icon/css/colors/red.css" type="text/css"></link>




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
                        <img class="logo" src="assets/icon/images/logo-light.png" alt=""/>
                        <img class="logo-2" src="assets/icon/images/logo-dark.png" alt=""/>
                    </a>
                </div>
                
                <span id="menu-btn"></span>
                
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
    

            </div>

        </div>
    </div>
</header>

<div id="content" class="no-bottom no-top">
    <div id="top"></div>

   
    <section id="subheader" class="text-light" data-bgimage="url(assets/icon/images/background/12.jpg)" data-stellar-background-ratio=".2">
        <div class="overlay-bg t50">

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Donate</h1>
        <p>We Make a living by what we get, We make a Life by What we</p>
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

                                    <div class="col-md-7 ">
                                        <div class="field-set">
                                            <textarea name='Address' id='Address' class="form-control" placeholder="Your Address"></textarea>
                                            <div class="line-fx"></div>
                                        </div>
                                    </div>
                                    <div class="col-md-7 ">
                                    <div class="field-set">
                                            <input type='text' name='Donation' id='phone' class="form-control" placeholder="Donation in rupees"/>
                                            <div class="line-fx"></div>
                                        </div>
                                        </div>
                                        <div class="col-md-7 ">
                                    <div class="field-set">
                                            <input type='text' name='Towards' id='towards' class="form-control" placeholder="Donation Towards"/>
                                            <div class="line-fx"></div>
                                        </div>
                                        </div>

                                    <div class="col-md-6">
                                        <div id='submit'>
                                            <input type='submit' id='send_message' value='Donate' class="btn btn-custom color-2"/>
                                        </div>

                                        <div id='mail_success' class='success'>Your message has been sent successfully.</div>
                                        <div id='mail_fail' class='error'>Sorry, error occured this time sending your message.</div>
                                    </div>
                                    


                                </div>
                            </form>

                        </div>

                        

                    </div>

                </div>
            </section>
            
    
    <section id="section-clients" aria-label="section" class="pt60 pb40" data-bgcolor="#f9f9f9">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center wow fadeInUp">
                    <div class="owl-carousel owl-sponsors gray">
                        <div class="item"><img src="assets/icon/images/logo/1.png" alt=""/></div>
                        <div class="item"><img src="assets/icon/images/logo/2.png" alt=""/></div>
                        <div class="item"><img src="assets/icon/images/logo/3.png" alt=""/></div>
                        <div class="item"><img src="assets/icon/images/logo/4.png" alt=""/></div>
                        <div class="item"><img src="assets/icon/images/logo/5.png" alt=""/></div>
                        <div class="item"><img src="assets/icon/images/logo/6.png" alt=""/></div>
                        <div class="item"><img src="assets/icon/images/logo/7.png" alt=""/></div>
                        <div class="item"><img src="assets/icon/images/logo/8.png" alt=""/></div>
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
      </div>


      
    );
  }

}
