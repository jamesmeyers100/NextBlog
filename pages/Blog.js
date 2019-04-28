import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <p>This will eventually attach to the Blogger Blog</p>
    <p>This is just an example of initialprops and grabbing from an API</p>

    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map(entry => entry.show)
  }
}

export default Index


// import Layout from '../components/MyLayout.js'
// import Link from 'next/link'

// function getPosts() {
//     return [
//         { id: 'hello-nextjs', title: 'Hello Next.js' },
//         { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
//         { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
//     ]
// }

// export default function Blog() {
//     return (
//         <Layout>
//             <h1>James Meyers' Musings</h1>
//             <ul>
//                 {getPosts().map(post => (
//                     <li key={post.id}>
//                         <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
//                             <a>{post.title}</a>
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//             <style jsx>{`
//         h1,
//         a {
//           font-family: 'Garamond';
//         }

//         ul {
//           padding: 0;
//         }

//         li {
//           list-style: none;
//           margin: 5px 0;
//         }

//         a {
//           text-decoration: none;
//           color: blue;
//         }

//         a:hover {
//           opacity: 0.6;

//         }

//         h1 {

//         }
//       `}</style>
//         </Layout>
//     )
// }