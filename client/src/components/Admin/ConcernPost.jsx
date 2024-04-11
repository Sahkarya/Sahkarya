import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ListItem, ListItemIcon } from "@material-ui/core";
import icons from "../../assets/MapIcons";
import { tags } from "../../assets/variables";
export default function ConcernPost(props) {
  const { item } = props;
  var tag_name;
  for (var i = 0; i < tags.length; i++) {
    if (tags[i].department_id == 1 && tags[i].id == item.tag) {
      tag_name = tags[i].label;
      break;
    }
  }
  return (
    <div key={item._id}>
      <div className="card">
        <div className="cardTag">{tag_name}</div>
        <img src="./viewMore.png" alt="" className="viewMore" />
        <div className="cardText">{item.message}</div>
        <div className="cardTimeline">2 weeks ago</div>
        <img
          src={`./../adminIcons/icon_1_${item.tag}.png`}
          alt=""
          className="tagIcon"
        />
      </div>
    </div>
  );
}
