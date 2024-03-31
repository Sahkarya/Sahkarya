import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ListItem, ListItemIcon } from "@material-ui/core";
import icons from "../../assets/MapIcons";
export default function ConcernPost(props) {
  const { item } = props;

  return (
    <div key={item._id}>
      {/* {console.log(item)} */}
      <ListItem sx={{ width: "100%", overflow: "auto" }}>
        <Box
          display="flex"
          sx={{
            border: "2px solid grey",
            padding: "0px 5px 5px 0px",
            width: "100%",
            margin: "10px",
            fontSize: "28px",
            borderRadius: "15px",
            boxShadow: "3px 3px 3px grey ",
          }}
          alignItems="center"
          justifyContent="center"
          minHeight={400}
          maxHeight={200}
        >
          <img
            src={`./adminIcons/icon_${item.department}_${item.tag}.png`}
            alt="Placeholder"
            style={{ width: "38px", height: "38px", marginTop: "-330px" }}
          />

          <TextField
            id="outlined-multiline-flexible"
            multiline
            sx={{ width: "90%" }}
            label="Concern"
            value={item.message}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </Box>
      </ListItem>
    </div>
  );
}
