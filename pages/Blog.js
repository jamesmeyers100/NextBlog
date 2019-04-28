import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Blog = (props) => (
  <Layout>
    <h1>Links to Blog Posts</h1>
    <p>Eventually: Links will route to page with post and NOT to Blogger site</p>
    <ul>
      {props.data.items.map(item => (
        <li key={item.id}>
          <Link href={item.url}>
            <a>{item.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Blog.getInitialProps = async function () {
  const res = await fetch('https://www.googleapis.com/blogger/v3/blogs/5247624635318920606/posts?key=AIzaSyAednmRa-8f4Cl2qCFaOvpTGqauGyOoKCw');
  const data = await res.json()
  console.log("this is getInitialProps to Blogger", data)

  return {
    data
  }
}

export default Blog