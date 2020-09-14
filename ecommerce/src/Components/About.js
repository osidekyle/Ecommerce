import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"




const About = () => {

    const aboutStyle={
        color:" #718db7"
    }

    return ( 
        <div style={aboutStyle} className="container">
            <div className="col-12 ">
            <h1 className="mb-5">About Gamez</h1>
           
            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus enim, egestas vel suscipit quis, ultricies vel mi. Mauris maximus magna at nulla pulvinar, et dapibus nibh placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent tortor lorem, pulvinar facilisis sem ac, consequat egestas nisi. Quisque eu quam vitae justo tristique varius. Sed convallis elit in justo lacinia, et convallis risus sodales. Mauris dignissim tempus pharetra. Aliquam ipsum lorem, iaculis semper leo quis, lacinia sollicitudin turpis.</p>
            
            <img src={require("../images/teamwork.jpg")}></img>
           
            <p className="mt-5 pb-5">Proin mattis imperdiet urna, sit amet iaculis lacus suscipit vel. Integer mollis sem eget massa egestas viverra. Duis placerat nec diam vel cursus. Morbi consequat semper tristique. Sed nulla nisl, porta lacinia rutrum vitae, vehicula a sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent eu egestas augue. Proin ullamcorper nulla est, sed pretium urna accumsan ut. Nunc interdum consectetur metus, eu malesuada diam tincidunt a. Maecenas id ex sapien. Pellentesque tempus nunc ac ante dignissim volutpat. Ut non enim molestie, interdum sapien quis, luctus diam. Proin non arcu mattis, efficitur mauris non, placerat justo. Phasellus congue dictum odio, id suscipit diam vestibulum ac.</p>
            </div>

           
        </div>
     );
}
 
export default About;