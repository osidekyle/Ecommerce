import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"




const Home = () => {


    const topStyle={
        color:"  #718db7",
        textAlign:"center",
        
    }
    


    return ( 
        <div className="container justify-content-center">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-1" style={topStyle}>Gamez</h1>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-12">
                    <h1 className="display-4" style={topStyle}>The Best Video Game Market on the Web!</h1>
                </div>
            </div>
     <div className="row mt-5 justify-content-center ">  
        <div className="col-10 mb-5">
 <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={require("../images/skyrim.jpg")}></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={require("../images/batman.jpg")} alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={require("../images/assassinscreed.webp")} alt="Third slide"></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
</div>   
</div>
     );
}
 
export default Home;