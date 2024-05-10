const WaterPost = (prop)=>{
    let address = prop.address;
    let date = prop.date;
    let quantity = prop.quantity;
    let flow = prop.flow;
    console.log(flow);
return(
    <>
   
      <div className="card" style={{backgroundColor:'#74ccf4'}}>
        <div className="cardTag"  style={{backgroundColor:'#ff5a00'}} >Water Clog Detected {flow}L/min {quantity}ml</div>
        <div className="cardText" style={{padding: '10px',height: 'fit-content',margin: 'auto' }}>Address : {address}</div>
        <div className="cardTimeline">{date}</div>
        <img
          src={`./fireIcon.png`}
          alt=""
          className="tagIcon"
        />
      </div>
    
   
  </>
)
}

export default WaterPost;