import { css } from "@emotion/css";
import styled from "@emotion/styled";

const onAttention = "&:hover, &:focus";

export const customStyles = (...args) => ({ className: css(...args) });

export const StyledInput = styled("input")(
  {
    width: "100%", // full width - icon width/2 - border
    fontSize: 14,
    wordWrap: "break-word",
    lineHeight: "1em",
    outline: 0,
    whiteSpace: "normal",
    minHeight: "2em",
    background: "#fff",
    display: "inline-block",
    padding: "1em 2em 1em 1em",
    color: "rgba(0,0,0,.87)",
    boxShadow: "none",
    border: "1px solid rgba(34,36,38,.15)",
    borderRadius: ".30rem",
    transition: "box-shadow .1s ease,width .1s ease",
    [onAttention]: {
      borderColor: "#96c8da",
      boxShadow: "0 2px 3px 0 rgba(34,36,38,.15)"
    }
  },
  ({ isOpen }) =>
    isOpen
      ? {
          borderBottomLeftRadius: "0",
          borderBottomRightRadius: "0",
          [onAttention]: {
            boxShadow: "none"
          }
        }
      : null
);

export const StyledMenu = styled("ul")(
  {
    padding: 0,
    marginTop: 0,
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    maxHeight: "20rem",
    overflowY: "auto",
    overflowX: "hidden",
    outline: "0",
    transition: "opacity .1s ease",
    borderRadius: "0 0 .28571429rem .28571429rem",
    boxShadow: "0 2px 3px 0 rgba(34,36,38,.15)",
    borderColor: "#96c8da",
    borderTopWidth: "0",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: "solid"
  },
  ({ isOpen }) => ({
    border: isOpen ? null : "none"
  })
);

export const StyledItem = styled("li")({
  position: "relative",
  cursor: "pointer",
  display: "block",
  border: "none",
  height: "auto",
  textAlign: "left",
  borderTop: "none",
  lineHeight: "1em",
  color: "rgba(0,0,0,.87)",
  fontSize: "1rem",
  textTransform: "none",
  fontWeight: "400",
  boxShadow: "none",
  padding: ".8rem 1.1rem",
  whiteSpace: "normal",
  wordWrap: "normal",
  [onAttention]: {
    borderColor: "#96c8da",
    boxShadow: "0 2px 3px 0 rgba(34,36,38,.15)",
    color: "rgba(0,0,0,.95)",
    background: "rgba(0,0,0,.03)"
  }
});

export const StyledButton = styled("button")({
  backgroundColor: "transparent",
  border: "none",
  position: "absolute",
  right: 0,
  top: 0,
  cursor: "pointer",
  width: 47,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
  alignItems: "center"
});
