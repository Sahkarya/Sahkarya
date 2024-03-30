import React, { useEffect, useState } from "react";
import AdminMap from "../components/Admin/AdminMap";
import SearchBar from "../components/Admin/SearchBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import List from  "@mui/material/List";
import { Paper } from "@material-ui/core";
import { useLoaderData } from "react-router-dom";
import ConcernPost from "../components/Admin/ConcernPost";
import { Autocomplete } from "@mui/material";
import { marker } from "leaflet";
import { tags } from "../assets/variables";
const Admin = () => {
  const [MapCenter, setMapCenter] = useState([28.7041, 77.1025]);
  const department_id = 1;
  const data = useLoaderData();
  console.log(data)
  //I assume i get the data;
const markerData = {
  department_id : null,
  tags : [],
  tags_coord : [],
  tags_label : []
}

const MapProps = { MapCenter, setMapCenter };
var concernList = [];
markerData.department_id = department_id;
data.msg.forEach((item) => {
  if(item.department == 1){
    markerData.tags.push(item.tag)
    markerData.tags_coord.push([parseFloat(item.address.split(" ")[0]),parseFloat(item.address.split(" ")[1])])
    concernList.push(<ConcernPost item = {item}></ConcernPost>)
  }
  
})
for (var j = 0; j < markerData.tags.length; j++){
  for (var i = 0; i < tags.length; i++){

    
    if (tags[i].id == markerData.tags[j] && tags[i].department_id == markerData.department_id){
      
      markerData.tags_label.push(tags[i].label);
      break;
  }
  }
  
  }
  return (
    <>
    <Grid container spacing={0} padding={2} maxHeight={750}>
          <Grid
            item
            xs={8}
            padding={0}
            sx={{
              padding: "25px 25px 0px 25px", maxWidth: "1000px" 
              
            }}
          >
            
        <SearchBar mapProps={MapProps}></SearchBar>
            </Grid>
            <Grid
            item
            xs={4}
            sx={{
            }}
          >
            
      <Autocomplete
              disablePortal
              limitTags={1}
              id="tag"
              
              options={markerData.tags_label}
              sx={{width: "300px",padding: "25px 25px 0px 25px" }}
              // onChange={(e, value) => setFormData({ ...formData, tag: value.id })}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Filter Tag" size="small" />
              )}
            />
            </Grid>
            </Grid>
      
      
        
      <div>
        <Grid container spacing={0} padding={2} maxHeight={750}>
          <Grid
            item
            xs={8}
            padding={0}
            maxHeight={750}
            sx={{
              border: "2px solid grey",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
              
            }}
          >
            <div style={{ width: "100%", height: "100%" }}>
              <AdminMap markerData={markerData} mapProps={MapProps} />
            </div>
          </Grid>
          <Grid
            item
            xs={4}
            maxHeight={750}
            sx={{
              border: "2px solid grey",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          >
            <div style={{ height: "70px" }}>
              <Box
                display="flex"
                sx={{
                  border: "2px solid grey",
                  padding: "0px 5px 5px 0px",

                  margin: "10px",
                  fontSize: "28px",
                  backgroundColor: "#ffc107",
                  borderRadius: "15px",
                }}
                alignItems="center"
                justifyContent="center"
                minHeight={70}
                maxHeight={200}
              >
                Raised Concerns
              </Box>
            </div>
            <hr style={{margin : "10px 0px 0px 0px"}}/>
            <div >

            <List style={{maxHeight: '638px' ,overflow: 'auto'}}>
            {concernList}
            
          </List>

            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export const adminLoader = async(e)=>{
  var data;
  try {
    const response = await fetch("http://localhost:80/api/data/admin", {
      method: "GET",
    });
    if (response.ok) {
      data = await response.json();
    }
  } catch (error) {
    console.log("error recieving data", error);
  }
  return data;

}
export  {Admin};
