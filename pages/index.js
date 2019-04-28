import Layout from '../components/MyLayout.js';
import MyFace from "../components/Face";
// import "../style.css"

export default function Index() {
  return (
    <Layout>
      <div style={{
        display: "flex",
        flexDirection: "row",
      }}>

          <div style={{
            marginTop: 20,
            marginRight: 50
          }}>
            <MyFace />
          </div>
          <div>
            <p className="warning">WARNING: This website may contain spoilers and </p>
            <p>other such tidbits that will just generally ruin everything for you.</p>
            <p>You're welcome!</p>
          </div>
        </div>
      <ul>
        <h3>Things I want to do here still</h3>
        <li>Enhance blog page with better use of Blogger API</li>
        <li>Design Overhaul, cuz yikes!</li>
        <li>Write new blog posts </li>
        <li>link to side projects</li>
      </ul>
    </Layout>
  )
}

// import Link from 'next/link'

// import Layout from '../components/MyLayout.js'
// import Header from "../components/Header"

// const Index = () => (
//     <div>
//         <Layout>

//         <p>Hello Next.js</p>
//         </Layout>
//     </div>
// )

// export default Index


// import Layout from '../components/MyLayout.js'
// import Link from 'next/link'

// const PostLink = props => (
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )
// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink title="Hello Next.js" />
//         <PostLink title="Learn Next.js is awesome" />
//         <PostLink title="Deploy apps with Zeit" />
//       </ul>
//     </Layout>
//   )
// }

// import Layout from '../components/MyLayout.js'
// import Link from 'next/link'

// const PostLink = props => (
//   <li>
//     <Link as={`/posts/${props.id}`} href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )

// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink id="hello-nextjs" title="Hello Next.js" />
//         <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
//         <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
//       </ul>
//     </Layout>
//   )
// }


// import Layout from '../components/MyLayout.js'
// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'

// const Index = (props) => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(show => (
//         <li key={show.id}>
//           <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()

//   console.log(`Show data fetched. Count: ${data.length}`)

//   return {
//     shows: data.map(entry => entry.show)
//   }
// }

// export default Index