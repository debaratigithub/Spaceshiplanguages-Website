import {
  Box,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import DoneIcon from "@mui/icons-material/Done";
const FilterMenu = (props: any) => {
  var {
    open,
    anchorEl,
    handleClose,
    langarray,
    search,
    setSearch,
    selectFunc,
    searchable,
    column,
  } = props;
  //   console.log(
  //     langarray.filter((langfilter: any) =>
  //       langfilter.name.toLowerCase().includes(search.toLowerCase())
  //     ),
  //     "++++++"
  //   );
  return (
    <Menu
      sx={menuList}
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClick={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <Box sx={menuArea}>
        <TextField
          autoComplete="off"
          sx={searchInput}
          fullWidth
          placeholder="I want to learn..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setSearch(e.target.value)}
          //   inputRef={(input) => {
          //     if (input != null) {
          //       console.log(input, "input");
          //       input.focus();
          //     }
          //   }}
        />
        <Typography sx={langTxt}>Popular Languages</Typography>
      </Box>

      {langarray &&
        langarray.length > 0 &&
        langarray
          .filter((langfilter: any) =>
            langfilter.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((lang: any, index: number) => (
            <MenuItem
              sx={menuTxt}
              key={index}
              style={{
                background: lang.selected === true ? "#fad137" : "",
              }}
              onClick={() => selectFunc(lang.abbr)}
            >
              {lang.name}
              {lang.selected === true ? (
                <DoneIcon sx={{ marginLeft: "auto" }} />
              ) : (
                ""
              )}
            </MenuItem>
          ))}
    </Menu>
  );
};

const menuArea = () => ({
  paddingLeft: "1rem",
  paddingRight: "1rem",
  position: "sticky",
  top: "0",
  background: "#ffff",
  zIndex: "9",
  paddingTop: "1.25rem",
});
const menuList = () => ({
  "& .MuiMenu-paper": {
    borderRadius: "1.875rem",
    padingTop: "1.875rem",
  },
});
const searchInput = () => ({
  "& .MuiInputBase-formControl": {
    color: "#727272",
    fontFamily: "'Karla', sans-serif",
    fontSize: "1.5rem",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  },
});

const langTxt = () => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.625rem",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
  marginTop: "1.25rem",
  marginBottom: "1.25rem",
});
const menuTxt = () => ({
  color: "#1E1E1C",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "2.5rem",
});
export default FilterMenu;
