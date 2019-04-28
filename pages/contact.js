import Layout from "../components/MyLayout";
import Link from "next/link";

export default function Contact() {

    const headerStyle = {
        display: "flex",
        alignSelf: "center",
        flexDirection: "column",
    }

    const linkStyle = {
        marginRight: 15,
        alignSelf: "center"

    }

    const gitHubURL = "http://github.com/jamesmeyers88"
    return (
        <Layout>
            <div style={headerStyle}>
                <h1>Feel Free to Reach Out</h1>
                {/* <p>Software Developer with a penchant for art and agriculture.</p> */}
                <div style={{ display: "flex", flexDirection: "column", alignSelf: "center", justifyContent: "center" }}>
                {/* <p>{JSON.stringify(gitHubURL)}</p> */}
                    <div>
                        <Link href={gitHubURL}>
                            <div style={{ justifyContent: "center", margin: 20 }}>
                                {/* <img src="/static/GitHub-Mark-64px.png" width={100} /> */}
                                <img src="/static/GitHub_Logo.png" width={100} />
                            </div>
                        </Link>
                    </div>
                    <div style={{ alignSelf: "center", margin: 20 }}>
                        <Link href="www.linkedin.com">
                            <img src="/static/LinkedIn-Blue-14@2x.png" />
                        </Link>
                    </div>
                    <div style={{ alignSelf: "center", margin: 20 }}>
                        <Link href="www.dribble.com">
                            <img src="/static/Twitter_Logo_Blue.png" width={100}/>
                        </Link>
                    </div>
                </div>

            </div>
            <style jsx>{`
        a {
            color: #222
        }
        `}</style>
        </Layout >

    )
}
