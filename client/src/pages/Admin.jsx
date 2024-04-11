import React, { useEffect, useState } from "react";
import "./admin.css";
import AdminMap from "../components/Admin/AdminMap";
import SearchBar from "../components/Admin/SearchBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
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
  //I assume i get the data;
  const markerData = {
    department_id: null,
    tags: [],
    tags_coord: [],
    tags_label: [],
  };

  const MapProps = { MapCenter, setMapCenter };
  var concernList = [];
  markerData.department_id = department_id;
  data.msg.forEach((item) => {
    if (item.department == 1) {
      markerData.tags.push(item.tag);
      markerData.tags_coord.push([
        parseFloat(item.address.split(" ")[0]),
        parseFloat(item.address.split(" ")[1]),
      ]);
      concernList.push(<ConcernPost item={item}></ConcernPost>);
    }
  });
  for (var j = 0; j < markerData.tags.length; j++) {
    for (var i = 0; i < tags.length; i++) {
      if (
        tags[i].id == markerData.tags[j] &&
        tags[i].department_id == markerData.department_id
      ) {
        markerData.tags_label.push(tags[i].label);
        break;
      }
    }
  }
  return (
    <>
      <div className="gridContainer">
        <div className="leftPanel">
          <div className="leftPanel-bg">
            <div className="panelTop">
              <img src="./adminIcons/icon_1_2.png" alt="" className="logo" />
              <hr className="panelLine" />
            </div>
            <div className="panelMid">
              <button className="panelButton">
                <img
                  className="iconTagList"
                  src="./adminIcons/icon_1_2.png"
                ></img>
              </button>
              <button className="panelButton">
                <img
                  className="iconTagList"
                  src="./adminIcons/icon_1_2.png"
                ></img>
              </button>
            </div>
          </div>
        </div>
        <div className="rightContainer">
          <div className="upperPanel">
            <div className="searchBar">
              <SearchBar mapProps={MapProps}></SearchBar>
            </div>
            <div className="userIcon"></div>
          </div>

          <div className="card-map">
            <div className="cardList">{concernList}</div>
            <div className="mapContainer">
              <div style={{ width: "100%", height: "100%" }}>
                <AdminMap markerData={markerData} mapProps={MapProps} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const adminLoader = async (e) => {
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
};
export { Admin };
