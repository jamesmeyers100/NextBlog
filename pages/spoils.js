import Layout from '../components/MyLayout.js';
import { withRouter } from 'next/router';
import Markdown from 'react-markdown';
import Link from "next/link";

const markdownStyles = {
    alignSelf: "center",
}

const pageStyles = {
    alignSelf: "center",
    marginTop: 30
}
export default withRouter(props => (
  <Layout>
    <h1 style={pageStyles}>{props.router.query.title}</h1>
    <div className="markdown" style={markdownStyles} >
      <Markdown
        source={props.router.query.source}
      />
      <Link href="/spoilers">
      <button><text>Back to Spoilers</text></button>
      </Link>
    </div>
    <style jsx global>{`
      .markdown {
        font-family: 'Arial';

      }
      .markdown a {
        text-decoration: none;
        color: blue;
      }
      .markdown a:hover {
        opacity: 0.6;
      }
      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
)) 