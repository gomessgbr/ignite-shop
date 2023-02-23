import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 0 ",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const HeaderCartButton = styled("button", {
  display: "flex",
  width: "3rem",
  height: "3rem",
  padding: "0.75rem",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6px",
  backgroundColor: "$gray800",
  borderStyle: "none",
  color: "#8D8D99",

  "&:hover": {
    color: "$gray300",
    transition: "all 0.5s",
  },
});
