import Header from "./Header";

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  background: "lightgrey"
}

const innerPageStyle = {
  display: "flex",
  flexDirection: "column",
  background: "white"
}

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    <div style={innerPageStyle}>
      {props.children}
    </div>
  </div>
)

export default Layout
