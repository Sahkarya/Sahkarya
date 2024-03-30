import L from "leaflet";

const icon_1_1 = L.icon({
    iconUrl: "./adminIcons/toll-tax.png",
    iconSize: [38, 38],
  });
const icon_1_2 = L.icon({
    iconUrl: "./adminIcons/land-estate.png",
    iconSize: [38, 38],
  });


const icons = [
    [icon_1_1, icon_1_2]
]
export default icons;