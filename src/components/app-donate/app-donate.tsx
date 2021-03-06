import { Component,Prop, h } from '@stencil/core';
import Data from "../data"

@Component({
  tag: 'app-donate',
  styleUrl:'app-donate.css'
  
 
})
export class Doante {

    @Prop()  name5: string;


    render() {
  
   <p>{this.name5}</p>
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
                    <li>
                    <stencil-route-link url="/"  exact= {true}>
                    <a >Home</a>
                    </stencil-route-link>
                    </li>
                    <li>
                    <stencil-route-link url="/aboutus"> 
                    <a >About Us</a>
                    </stencil-route-link>
                    </li>
                    <li>
                    <stencil-route-link url="/projects">
                    <a >Projects</a>
                    </stencil-route-link>
                    </li>
                    <li>
                    <stencil-route-link url="/register" exact={true}>
                    <a >Register</a>
                    </stencil-route-link>
                    </li>
                    <li>
                    <stencil-route-link url="/donate">
                    <a >Donate</a>
                    </stencil-route-link>
                    </li>
                    <li>
                    <stencil-route-link url="/contactus">
                    <a>Conatct Us</a>
                    </stencil-route-link>
                    </li>
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
                        <p>Giving is Living</p>
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
                                    
                                        <div class="field-set">
                                            <textarea name='Address' id='Address' class="form-control" placeholder="Your Address"></textarea>
                                            <div class="line-fx"></div>
                                        </div>
                                   
                                    <div class="field-set">
                                            <input type='text' name='Donation' id='phone' class="form-control" placeholder="Donation in rupees"/>
                                            <div class="line-fx"></div>
                                        </div>
                               
                                    <div class="field-set">
                                            <input type='text' name='Towards' id='towards' class="form-control" placeholder="Donation Towards"/>
                                            <div class="line-fx"></div>
                                        </div>
                                        
                                        <div id='submit'>
                                            <input type='submit' id='send_message' value='Donate' class="btn btn-custom color-2"/>
                                        </div>

                                        <div id='mail_success' class='success'>Your message has been sent successfully.</div>
                                        <div id='mail_fail' class='error'>Sorry, error occured this time sending your message.</div>
                                    </div>


                                    <div class="col-md-6 ">
                                        
                                    <img id= "resize"  src={new Data().data.projects[2].photo.url}/>
                                    </div>

                                   

                                    

                                    
                                    
                                    


                                </div>
                            </form>

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

    {/* <div id="preloader">
        <div class="preloader1"></div>
    </div> */}

</div>
      </div>


      
    );
  }

}
