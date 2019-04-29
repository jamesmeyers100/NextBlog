import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Blog = (props) => (
  <Layout>
    <div style={{alignSelf: "center", flex: 1}}>

      <div>
        <h1>Check Out My [OLD] Blog</h1>
        <p>Eventually: Links will route to page with post and NOT to Blogger site</p>
      </div>
      {/* <div dangerouslySetInnerHTML={getMarkup()}></div> */}
      {/* <p>{JSON.stringify(props.data.items[0].url)}</p> */}
      <div>
        <ul>
          {props.data.items.map(item => (
            <li key={item.id}>
              <Link href={item.url}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <style jsx>{`
        a {
            color: purple;
            text-decoration: none;
        }
        a:hover {
          color: purple;
          opacity: 0.5; 
        }
        `}</style>
  </Layout>
)

Blog.getInitialProps = async function () {
  const res = await fetch('https://www.googleapis.com/blogger/v3/blogs/5247624635318920606/posts?key=AIzaSyAednmRa-8f4Cl2qCFaOvpTGqauGyOoKCw');
  const data = await res.json()
  console.log("this is getInitialProps to Blogger", data)

  return {
    data,
  }
}

export default Blog