import Link from "next/link";

const headerStyle = {
    display: "flex",
    // backgroundColor: "rebeccapurple",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center"
}

const linkStyle = {
    marginRight: 15

}


const Header = () => (
    <div style={headerStyle}>
        <h1 style={{ alignSelf: "center" }}>James Spoils Everything</h1>
        <div style={{ alignSelf: "center" }}>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>

            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>

            <Link href="/projects">
                <a style={linkStyle}>Projects</a>
            </Link>

            <Link href="/blog">
                <a style={linkStyle}>Blog</a>
            </Link>
        </div>
        <style jsx>{`
        a {
            color: #FFF
        }
        `}</style>
    </div>
)

export default Header
