import { Component,Prop,  h } from '@stencil/core';
import Data from "../data"


@Component({
  tag: 'app-projects',
  styleUrl: 'app-projects.css',
  
})
export class AppProjects {

 
    @Prop()  name3: string;


  render() {

 <p>{this.name3}</p>
    return (

      <div id="homepage">


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
                    <stencil-route-link url="/"  exact= {true}>
                            <img class="logo resize-1" src={new Data().data.review[13].ngo.logo.url} alt=""/>
                            <img class="logo-2 resize-2" src={new Data().data.review[13].ngo.logo.url} alt=""/>
                        </stencil-route-link>
                    </a>
                </div>
                {/* <!-- logo close -->

                <!-- small button begin --> */}
                <span id="menu-btn"></span>
                {/* <!-- small button close -->

                <!-- mainmenu begin --> */}
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
            {/* <!-- mainmenu close --> */}

        </div>
    </div>
</header>
{/* <!-- header close --> */}


<section id="subheader" class="text-light" data-bgimage="url(assets/icon/images/background/21.jpg)" data-stellar-background-ratio=".2">
                <div class="overlay-bg t50">

                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h1>Projects</h1>
							                  	<p>"An effort made for the happiness of others lifts us above <b>Ourselves</b>"</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>


  

    {/* Projects section begin */}
    <section data-bgcolor="#f9f9f9">
        <div class="container">
            <div class="row align-items-center">

            <div  class="col-md-5 offset-md-1">
                <img  id= "space" src={new Data().data.projects[0].photo.url} class="mb-sm-30 img-fluid" alt=""/>
                </div>
                <div class="clearfix"></div>
                <div class="col-md-4 offset-md-2">
                <h2 class="mb20">{new Data().data.projects[0].photo.caption}</h2>
                    <p>{new Data().data.projects[0].description.slice(0,200)}.......[....]</p>
                    <div class="spacer-half"></div>
                    <a href="#section-portfolio" class="btn-custom scroll-to">Read more</a>
                </div>

                

                

                
            </div>


            
        </div>

        
    </section>


    <section data-bgcolor="#f9f9f9">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-md-4 offset-md-2">
                    <h2 class="mb20">{new Data().data.projects[1].photo.caption}</h2>
                    <p>{new Data().data.projects[1].description.slice(0,200)}.......[....]</p>
                    <div class="spacer-half"></div>
                    <a id = "pad" href="#section-portfolio" class="btn-custom scroll-to">Read more</a>
                </div>

                <div class="col-md-5 offset-md-1">
                <img id="space" src={new Data().data.projects[1].photo.url} class="mb-sm-30 img-fluid" alt=""/>
                </div>

                

                <div class="clearfix"></div>
            </div>


            
        </div>

        
    </section>


    
    <section data-bgcolor="#f9f9f9">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-md-5 offset-md-1">
                <img id= "space" src={new Data().data.projects[2].photo.url} class="mb-sm-30 img-fluid" alt=""/>
                </div>

                <div class="col-md-4 offset-md-2">
                <h2 class="mb20">{new Data().data.projects[2].photo.caption}</h2>
                    <p>{new Data().data.projects[2].description.slice(0,200)}.......[....]</p>
                    <div class="spacer-half"></div>
                    <a href="#section-portfolio" class="btn-custom scroll-to">Read more</a>
                </div>

                

                <div class="clearfix"></div>
            </div>


            
        </div>

        
    </section>

    <section data-bgcolor="#f9f9f9">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-md-4 offset-md-2">
                    <h2 class="mb20">{new Data().data.projects[3].photo.caption}</h2>
                    <p>{new Data().data.projects[3].description.slice(0,200)}.......[....]</p>
                    <div class="spacer-half"></div>
                    <a href="#section-portfolio" class="btn-custom scroll-to">Read more</a>
                </div>

                <div class="col-md-5 offset-md-1">
                <img id="space" src={new Data().data.projects[3].photo.url} class="mb-sm-30 img-fluid" alt=""/>
                </div>

                

                <div class="clearfix"></div>
            </div>


            
        </div>

        
    </section>

    <section data-bgcolor="#f9f9f9">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-md-5 offset-md-1">
                <img id= "space" src={new Data().data.projects[4].photo.url} class="mb-sm-30 img-fluid" alt=""/>
                </div>

                <div class="col-md-4 offset-md-2">
                <h2 class="mb20">{new Data().data.projects[4].photo.caption}</h2>
                    <p>{new Data().data.projects[4].description.slice(0,200)}.......[....]</p>
                    <div class="spacer-half"></div>
                    <a href="#section-portfolio" class="btn-custom scroll-to">Read More</a>
                </div>

                

              
            </div>


            
        </div>

        
    </section>
    {/* <!-- section close --> */}


    <div id="loader-area" data-bgcolor="#fafafa">
        <div class="container">
            <div class="project-load"></div>
        </div>
    </div>

  
 

    {/* <!-- footer begin --> */}
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
    {/* <!-- footer close --> */}

    <a href="#" id="back-to-top"></a>

    {/* <div id="preloader">
        <div class="preloader1"></div>
    </div> */}

</div>


      </div>
      
    );
  }

}
