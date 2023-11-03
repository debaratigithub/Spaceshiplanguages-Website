"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  Theme,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExploreIcon from "@mui/icons-material/Explore";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import DoneIcon from "@mui/icons-material/Done";
import { styles } from "@/app/styles";

interface Language {
  name: string;
  selected: boolean;
  abbr: string;
}
interface Category {
  category_name: string;
  category: { name: string; picked: boolean }[];
}

const FilterBox = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [langarray, setLangarray] = useState<Language[]>([
    { name: "English", selected: false, abbr: "EN" },
    { name: "Chinese (Mandarin)", selected: false, abbr: "CN" },
    { name: "French", selected: false, abbr: "FN" },
    { name: "Spanish", selected: false, abbr: "SPN" },
    { name: "Portuguese", selected: false, abbr: "PO" },
    { name: "German", selected: false, abbr: "GN" },
    { name: "Japanese", selected: false, abbr: "JN" },
    { name: "Korean", selected: false, abbr: "KR" },
  ]);

  const [categoryArray, setCategoryArray] = useState<Category[]>([
    {
      category_name: "general",
      category: [
        { name: "Conversation Practice", picked: true },
        { name: "Pronunciation", picked: false },
        { name: "Grammar", picked: false },
        { name: "Spelling", picked: false },
        { name: "Reading", picked: false },
        { name: "Listening", picked: false },
        { name: "Writing", picked: false },
      ],
    },
    {
      category_name: "Business",
      category: [
        { name: "Meeting", picked: true },
        { name: "Presentation", picked: false },
        { name: "Job Interview", picked: false },
        { name: "Negotiation", picked: false },
        { name: "Business", picked: false },
        { name: "Listening", picked: false },
        { name: "Etiquette", picked: false },
      ],
    },
  ]);
  const open = Boolean(anchorEl);
  const [search, setSearch] = useState<string>("");
  const [lessoncategory, setLessoncategory] = useState<null | HTMLElement>(
    null
  );
  const lessoncategoryopen = Boolean(lessoncategory);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openLessonCat = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLessoncategory(event.currentTarget);
  };
  const closeLessonCat = () => {
    setLessoncategory(null);
  };
  const selectFunc = (abbr: string) => {
    const seletedLang = langarray.map((langItem) =>
      langItem.abbr === abbr
        ? { ...langItem, selected: !langItem.selected }
        : langItem
    );
    console.log(seletedLang, "do did done");
    setLangarray(seletedLang);
  };

  const catSelect = (name: string) => {
    const newData = categoryArray.filter((categoryItems) =>
      categoryItems.category.map((singlecat) =>
        singlecat.name === name
          ? { ...singlecat, picked: !singlecat.picked }
          : singlecat
      )
    );
    // console.log(singlecat, "do did done")
    setCategoryArray(newData);
  };

  return (
    <Box sx={filterBoxWrap}>
      <Grid container sx={styles.container}>
        <Stack direction="row" sx={filterbar}>
          <Button
            sx={filterBtn}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <LanguageIcon sx={iconSpace} /> Language <ExpandMoreIcon />
          </Button>
          <Button
            sx={filterBtn}
            aria-controls={lessoncategoryopen ? "category-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={lessoncategoryopen ? "true" : undefined}
            onClick={openLessonCat}
          >
            <ExploreIcon sx={iconSpace} /> Lesson Category <ExpandMoreIcon />
          </Button>
          <Button
            sx={filterBtn}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <AccessTimeIcon sx={iconSpace} /> Lesson Time <ExpandMoreIcon />
          </Button>
          <Button
            sx={filterBtn}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <ChildFriendlyIcon sx={iconSpace} /> Native Speaker{" "}
            <ExpandMoreIcon />
          </Button>
          <Button
            sx={filterBtn}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <EuroSymbolIcon sx={iconSpace} />
            Price
            <ExpandMoreIcon />
          </Button>
          <Button
            sx={[filterBtn, more]}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <FilterAltIcon sx={iconSpace} />
            More
            <ExpandMoreIcon />
          </Button>
          {/* menu language filter */}
          <Menu
            sx={menuList}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
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
                inputRef={(input) => {
                  if (input != null) {
                    input.focus();
                  }
                }}
              />
              <Typography sx={langTxt}>Popular Languages</Typography>
            </Box>
            {langarray
              .filter((langfilter) =>
                langfilter.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((lang, index) => (
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
          {/* menu lesson category */}

          <Menu
            id="lesson category"
            open={lessoncategoryopen}
            anchorEl={lessoncategory}
            onClose={closeLessonCat}
            sx={filterBylesson}
            MenuListProps={{
              "aria-labelledby": "category-button",
            }}
          >
            {categoryArray.map((item, index) => (
              <Box key={index}>
                <Stack
                  sx={langTxt}
                  style={{
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    fontWeight: 600,
                    textTransform: "capitalize",
                  }}
                >
                  {item.category_name}
                </Stack>

                {item.category.map((cat, index) => (
                  // console.log(cat.picked, "picked value"),
                  <MenuItem
                    sx={menuTxt}
                    key={index}
                    style={{
                      display: "inline-block",
                      margin: 8,
                      borderRadius: 8,
                      background: cat.picked === false ? "#ECECEC" : "#fad137",
                    }}
                    onClick={() => catSelect(cat.name)}
                  >
                    {cat.name}
                  </MenuItem>
                ))}
              </Box>
            ))}
          </Menu>
        </Stack>
      </Grid>
    </Box>
  );
};

const filterBoxWrap = () => ({
  paddingTop: "1.875rem",
  paddingBottom: "1.875rem",
  background: "#fff",
  position: "relative",
});

const filterBtn = (theme: Theme) => ({
  color: "#8E8E8D",
  border: "1px solid #8E8E8D",
  height: "3.5rem",
  marginRight: "1rem",
  borderRadius: "0.625rem",
  textTransform: "capitalize",
  fontFamily: "'Karla', sans-serif",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "150%",
  [theme.breakpoints.down("xl")]: {
    fontSize: "1.125rem",
    height: "3rem",
  },
});
const filterbar = () => ({
  width: "100%",
});
const iconSpace = () => ({
  marginRight: "0.375rem",
});
const more = () => ({
  marginRight: "0rem",
  marginLeft: "auto",
});
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

const filterBylesson = () => ({
  "& .MuiPopover-paper": {
    maxWidth: "34rem",
    borderRadius: "1.875rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
});
export default FilterBox;
