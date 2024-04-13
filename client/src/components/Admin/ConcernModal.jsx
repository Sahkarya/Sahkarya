import { tags } from "../../assets/variables";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import ModalMap from "./ModalMap";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  height : 'fit-content',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};
function ImageModal(props) {
  const image = props.image;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>view Image</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 'fit-content' }}>
        <img src={image} alt="" />
        <img
                src="./crossIcon.png"
                alt=""
                className="viewMore"
                onClick={handleClose}
              />
        </Box>
      </Modal>
    </>
  );
}

export default function ConcernPost(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    handleCordSearch([markerData.lat,markerData.long])
    setOpen(true);}
  const handleClose = () => setOpen(false);
  const [address, setAddress] = useState();
  const { item } = props;
  const handleStatus = () => {
    var result = confirm('This will change the status of concern to "Solved" and send email to the Concern Raiser' )
    if (result){
      console.log(item._id)
      try {
        fetch(`http://localhost:80/api/db/status?id=${item._id}`, {
          method: "POST",
        }).then(res => {
          console.log("Request complete! response:", res.status);});
        
      } catch (error) {
        console.log("error recieving data", error);
      }
    }
    handleClose();

  };
  var markerData = {
    department: item.department,
    tag: item.tag,
    lat: item.address.split(" ")[0],
    long: item.address.split(" ")[1],
  };
  const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

  const handleCordSearch = async(coords)=>{

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let url = `${NOMINATIM_BASE_URL}q=${coords[0]}%2C${coords[1]}&format=jsonv2`
    console.log(url)
    fetch(`${NOMINATIM_BASE_URL}q=${coords[0]}%2C${coords[1]}&format=jsonv2`, requestOptions)

      .then((response) => response.text())
      .then((result) => {
        setAddress(JSON.parse(result)[0].display_name);
      })
      .catch((err) => console.log("err: ", err));

    // setSearchText(display_name);
  }
  var tag_name;
  for (var i = 0; i < tags.length; i++) {
    if (tags[i].department_id == 1 && tags[i].id == item.tag) {
      tag_name = tags[i].label;
      break;
    }
  }
  var itemDate = new Date(item.date);
  var currDate = new Date();

  var DifferenceInTime = currDate - itemDate;
  var DifferenceInDays = Math.round(DifferenceInTime / (1000 * 3600 * 24));
  return (
    <>
      <div key={item._id}>
        <div className="card">
          <div className="cardTag">{tag_name}</div>
          <img
            src="./viewMore.png"
            alt=""
            className="viewMore"
            onClick={handleOpen}
          />
          <div className="cardText">{item.message}</div>
          <div className="cardTimeline">{DifferenceInDays} Days ago</div>
          <img
            src={`./../adminIcons/icon_1_${item.tag}.png`}
            alt=""
            className="tagIcon"
          />
        </div>
      </div>
      <div>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <div className="card" style={{ margin: "0px" , border: 'none'}}></div>
            <div className="cardTag" >{tag_name}</div>
            <button className="Status" style={{position: 'absolute',
  width: 'fit-content',
  padding: '3px 5px 5px 5px',
  height: '33px',
  left: '150px',
  top: '10px',
  backgroundColor: '#ff3333',
  border: '2px solid grey',
  borderRadius: '10px',}} onClick={handleStatus} >Change Status</button>
            <img
                src="./crossIcon.png"
                alt=""
                className="viewMore"
                onClick={handleClose}
              />
            <div className="cardText" style={{width: '95%', padding : "20px"}}> <strong style={{fontSize:"25px"}}>Concern</strong>  <br /><br />{item.message} <br />
            
            </div>
            <div className="cardTag" style={{top: '230px', backgroundColor : 'rgb(244, 243, 243)',height: 'fit-content',width: '95%'}}><strong style={{fontSize:"15px",fontFamily: 'DM Sans'}}>Address :</strong>{address}</div>
            
            <ModalMap markerData = {markerData}></ModalMap> 
            
            <div className="cardTimeline">{DifferenceInDays} Days ago</div>
              <img style= {{marginTop:"10px"}}
                src={`./../adminIcons/icon_1_${item.tag}.png`}
                alt=""
                className="tagIcon"
              />
            <ImageModal image = {item.image}/>
          </Box>
        </Modal>
      </div>
    </>
  );
}
