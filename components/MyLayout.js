import Header from "./Header";

const layoutStyle = {
  // margin: 10,
  // padding: 20,
  // border: "1px solid #DDD",
  display: "flex",
  flexDirection: "column",
  background: "lightgrey"
}

const Layout = props => (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
)

export default Layout
