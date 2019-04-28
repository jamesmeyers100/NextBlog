import Layout from "../components/MyLayout";

export default function About() {

    const headerStyle = {
        alignSelf: "center",
    }
    return (
        <Layout>
            <div style={headerStyle}>
                <h1>James Meyers</h1>
                <p>Software Developer with a penchant for art and agriculture.</p>
            </div>
        </Layout>

    )
}
