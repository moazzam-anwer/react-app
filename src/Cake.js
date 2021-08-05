




export function Cake(props) {
  let cardstyle = {width: 350+ 'px' , height:  350+ 'px'}
  // console.log("props>>>>>",props.data)
  return (
    <div className="container">
      {/* <div className="row">
        {props.data.length == 0 &&
            <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
            </div>
        }
        {props.data.length >0 && props.data.map((res)=>{
          return <div style={{ marginTop: 20+'px', marginBottom: 20+'px'}} className="col-12 col-md-4 col-lg-4">
            <div className="card">
                <img className="card-img-top" style={cardstyle} src={res.image} alt="Card image cap"/>
                <div className="card-body">
                    <h4 className="card-title">
                      <a href="#" title="View Product">{res.name}</a>
                    </h4>
                    <p className="card-text">{res.description}</p>
                    <div className="row">
                        <div className="col">
                            <p className="btn btn-danger btn-block">{res.price} ₹</p>
                        </div>
                        <div className="col">
                            <a href="#" className="btn btn-success btn-block">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        })}
      </div> 
     */}
    </div>
  );
}

export default Cake;
