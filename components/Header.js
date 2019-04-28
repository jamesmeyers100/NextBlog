import Link from "next/link";
import MyFace from "../components/Face";

const headerStyle = {
    display: "flex",
    marginTop: 10,
    flexDirection: "column",
    // width: "100%",
    justifyContent: "center",
    alignItems: "center"
}

const linkStyle = {
    marginRight: 15

}


const Header = () => (
    <div style={headerStyle}>
        <MyFace />
        <h1 style={{ alignSelf: "center", marginBottom: 0 }}>James Spoils Everything</h1>
        <p style={{ alignSelf: "center", marginTop: 0 }}>Including your browser's back button. Don't press it.</p>
        <div style={{ alignSelf: "center" }}>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>

            <Link href="/spoilers">
                <a style={linkStyle}>Spoilers</a>
            </Link>

            <Link href="/projects">
                <a style={linkStyle}>Projects</a>
            </Link>

            <Link href="/blog">
                <a style={linkStyle}>Blog</a>
            </Link>

            <Link href="/contact">
                <a style={linkStyle}>Contact</a>
            </Link>
        </div>
        <style jsx global>{`
        a {
            color: #FFF
        }
        `}</style>
    </div>
)

export default Header
