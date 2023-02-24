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

export const HeaderCartWrapper = styled("div", {
  display: "flex",
  backgroundColor: "$gray800",
  width: "3rem",
  height: "3rem",
  padding: "0.75rem",
  borderRadius: "6px",
});

export const HeaderCartButton = styled("button", {
  display: "flex",

  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  color: "#8D8D99",
  cursor: "pointer",
  borderStyle: "none",
  "&:hover": {
    color: "$gray300",
    transition: "all 0.5s",
  },
});

export const RoudedCartCount = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  position: "relative",
  borderRadius: "1000px",
  backgroundColor: "$green500",
  padding: "0.5rem",
  bottom: "20px",
  right: "7px",

  fontWeight: 700,
  fontSize: "0.875rem",
  lineHeight: "160%",
});
