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

export const StyledButton = styled("button")({
  backgroundColor: "transparent",
  border: "none",
  position: "absolute",
  right: "-40px",
  top: 0,
  cursor: "pointer",
  width: 47,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
  alignItems: "center"
});
