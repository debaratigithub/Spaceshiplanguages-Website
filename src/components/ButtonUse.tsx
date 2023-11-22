"use client";
import * as React from "react";
import Button from "@mui/material/Button";

const btn = () => ({
  backgroundColor: "#D91962",
  fontFamily: "'Karla', sans-serif",
  color: "#fff",
  fontSize: "18px",
  fontWeight: "600",
  padding: "8px 30px",
  borderRadius: "50px",
  textTransform: "inherit",
  "&:hover": {
    backgroundColor: "#fad237",
    color: "#000",
  },
});

export default function ButtonUse(props: any) {
  return (
    <>
      <Button
        sx={btn}
        disabled={props.disabled || false}
        variant={props.variant || "contained"}
        onClick={props.onClick}
        size={props.size || "medium"}
        color="secondary"
      >
        {props.name}
        {props.icon}
      </Button>
    </>
  );
}

export type Props = {
  icon: JSX.Element;
};
