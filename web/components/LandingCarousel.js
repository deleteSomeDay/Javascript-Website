
const LandingCarousel = () =>
(
<div >
        <div id="carouselIndicator" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselIndicator" data-slide-to="0"></li>
                <li data-target="#carouselIndicator" data-slide-to="1"></li>
                <li data-target="#carouselIndicator" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src='/static/img/tutor.jpg' alt="First slide"></img>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>HelloWorld</h5>
                        <p>...</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src='static/img/tutor1.jpg' alt="Second slide"></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src='static/img/tutor2.jpg' alt="Third slide"></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselIndicator" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselIndicator" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        <div id="dropdown-front" className="dropdown" >
            <button className="btn btn-primary btn-lg dropdown-toggle" type="button" data-toggle="dropdown">Find Your Tutor
            <span className="caret"></span></button>
            <ul className="dropdown-menu">
            </ul>
        </div>
    </div>
);

export default LandingCarousel;