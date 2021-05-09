import { Component,  h } from '@stencil/core';
import Data from "../data"

@Component({
  tag: 'app-portfolio',
  styleUrl: 'app-portfolio.css'
  
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
                
                {/* <div class="col-lg-4 col-md-6 col-sm-6 sq-item wow">
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
                </div> */}
                
                {/* <div class="col-lg-4 col-md-6 col-sm-6 sq-item">
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
                </div> */}
                
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
