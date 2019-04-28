import Layout from "../components/MyLayout";

export default function Projects() {

    const headerStyle = {
        alignSelf: "center",
    }
    return (
        <Layout>
            <div style={headerStyle}>
                <h1>Community</h1>
                <a href="https://thefoodgroupmn.org/"><h2>Food Group</h2></a>
                <a></a>
            </div>
            <style jsx>{`
        a {
            color: #0d0;
            text-decoration: none;
        }
        `}</style>
        </Layout>

    )
}
