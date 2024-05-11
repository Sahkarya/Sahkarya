const BinPost = (prop)=>{
    let address = prop.address;
    let date = prop.date;
    let status = prop.status
    console.log("status "+ status);
return(
    <>
   
      <div className={status?"card bg-danger":"card bg-warning"} style={{backgroundColor:'#8DECB4'}}>
        <div className="cardTag"  >{status?"Garbage Overflow Detected":"Garbage Empty"}</div>
        <div className="cardText" style={{padding: '10px',height: 'fit-content',margin: 'auto' }}>Address : {address}</div>
        <div className="cardTimeline">{date}</div>
        <img
          src={`./garbageOverflow.png`}
          alt=""
          className="tagIcon"
        />
      </div>
    
   
  </>
)
}

export default BinPost;