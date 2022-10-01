function Card(props){
    return      <div className="col-lg-4">
    <div className="card mb-5 mb-lg-0">
      <div className="card-body">
        <h5 className="card-title text-muted text-uppercase text-center">{props.item.name}</h5>
        <h6 className="card-price text-center">{props.item.price}<span className="period"></span></h6>
        <hr></hr>
        
        <ul class="fa-ul">
                           {
                props.item.feature.map((element)=>{
                    return <li>
                        <div>{element.line}</div>
                        <div class="text-muted">{element.line1}</div>
                        <div><strong>{element.line2}</strong></div>
                        <div>{element.line3}</div>
                        </li>
                })
              }
            </ul>

            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
        </div>
    </div>
    </div> 
}
export default Card;
                                                                        
                                                                                                                         
                                                            
                                                                                                                