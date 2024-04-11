import React, { useEffect, useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import "../../pages/concern.css";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

export default function SearchBar(props) {
  const { MapCenter, setMapCenter } = props.mapProps;
  const [searchText, setSearchText] = useState("");

  const [SearchResult, setSearchResult] = useState([]);

  const handleSearch = (value) => {
    setSearchText(value);
    const params = {
      q: value,
      format: "json",
      addressdetails: 1,
      polygon_geojson: 0,
    };
    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${NOMINATIM_BASE_URL}${queryString}&limit=3`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setSearchResult(JSON.parse(result));
      })
      .catch((err) => console.log("err: ", err));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <input
            type="text"
            class="form-control"
            style={{ width: "100%" }}
            value={searchText}
            onChange={(event) => {
              handleSearch(event.target.value);
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0px 0px 0px 10px",
          }}
        >
          <button
            style={{
              padding: "9px 18px",
              border: "none",
              outline: "none",
              borderRadius: "50px",
              fontSize: "16px",
              fontWeight: "700",
              background: "#ffc107",
              color: "black",
              cursor: "pointer",
              opacity: ".9",
              transition: "background 0.2s ease",
            }}
            onClick={() => {}}
          >
            Search
          </button>
        </div>
      </div>
      <div id="addressList">
        <List
          component="nav"
          aria-label="main mailbox folders"
          sx={{ backgroundColor: "#FFFFFF", border: "2px solid black" }}
        >
          {SearchResult.map((item) => {
            return (
              <div key={item?.place_id}>
                <ListItem
                  sx={{ backgroundColor: "#FFFFFF", border: "2px solid black" }}
                  button
                  onClick={() => {
                    setSearchText(item?.display_name);
                    console.log(item?.lat);
                    setMapCenter([item?.lat, item?.lon]);
                    setSearchResult([]); //cleaning the list
                  }}
                >
                  <ListItemIcon>
                    <img
                      src="./placeholder.png"
                      alt="Placeholder"
                      style={{ width: 38, height: 38 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item?.display_name} />
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </div>
    </div>
  );
}
