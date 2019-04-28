import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const Spoils = props => (
  <li>
    <Link href={`/spoils?title=${props.title}&source=${props.source}`}>
      <button>{props.title}</button>
    </Link>
  </li>
)

const sources = `blah`;
export default function Spoilers() {
  return (
    <Layout>
      <body style={{alignSelf: "center"}}>

      <h1>Spoilers</h1>
      <ul style={{listStyleType: "none"}}>
        <Spoils title="Harry Potter" source="DUMBLEDORE, DOBBY, AND SIRIUS ALL DIE!"/>
        <Spoils title="Game of Thrones" source="EVERYONE SLEEPS WITH EVERYONE ELSE AND THEY ALL DIE!"/>
        <Spoils title="Waiting for Godot" source="Godot never comes. Only one guys dies."/>
      </ul>
      </body>
    </Layout>
  )
}

// import Layout from "../components/MyLayout";
// import Link from 'next/link';

// export default function Spoilers() {

//     const headerStyle = {
//         alignSelf: "center",
//     }
//     return (
//         <Layout>
//             <div style={headerStyle}>
//                 <h1>Spoilers</h1>
//             </div>
//             <div>
//                 <h2>Harry Potter</h2>
//                 <Link href="/">
//                     <button>Spoil It</button>
//                 </Link>
//             </div>
//             <style jsx>{`
//         a {
//             color: #0d0;
//             text-decoration: none;
//         }
//         `}</style>
//         </Layout>

//     )
// }
