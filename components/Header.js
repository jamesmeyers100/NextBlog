import Link from "next/link";

const headerStyle = {
    backgroundColor: "rebeccapurple",
    flexDirection: "row",
    width: "100%"
}

const linkStyle = {
    marginRight: 15
    
}


const Header = () => (
    <div style={headerStyle}>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>

        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <style jsx>{`
        a {
            color: #FFF
        }
        `}</style>
    </div>
)

export default Header
