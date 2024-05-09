const FirePost = (prop)=>{
    let address = prop.address;
    let date = prop.date;
return(
    <>
   
      <div className="card" style={{backgroundColor:'#ff9a00'}}>
        <div className="cardTag"  style={{backgroundColor:'#ff5a00'}} >Fire Reported</div>
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

export default FirePost;