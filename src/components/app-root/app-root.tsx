import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  
 
  
})
export class AppRoot {
  render() {

    return (
      
    <ion-app>
<main>

      <stencil-router >
     <stencil-route-switch scrollTopOffset={0}>
        <stencil-route url= "/" component ="app-home" exact={true} />
        <stencil-route url= "/aboutus"  component ="app-aboutus" exact={true} />
        <stencil-route url= "/projects" component ="app-projects" exact={true} />
        <stencil-route url= "/register" component ="app-reg" exact={true} />
        <stencil-route url= "/donate" component ="app-donate" exact={true}/>
        <stencil-route url= "/contactus" component ="app-contactus" exact={true} />
        </stencil-route-switch>
     
      </stencil-router>
      </main>
    
      </ion-app>
      
      
    );
  }
}
