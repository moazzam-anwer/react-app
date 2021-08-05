let image = "https://image.shutterstock.com/image-photo/delicious-birthday-cake-candle-on-260nw-1685164234.jpg";
let image2 = "https://image.shutterstock.com/image-photo/delicious-raspberry-cake-fresh-strawberries-260nw-791208676.jpg";
let image3 = "https://image.shutterstock.com/image-photo/classical-new-york-cheesecake-on-260nw-1704667090.jpg";


export function Carousel() {
  let bannerstyle = {height: 522}
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" style={bannerstyle} src={image} alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" style={bannerstyle} src={image2} alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" style={bannerstyle} src={image3} alt="Third slide"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
