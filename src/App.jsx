import './App.css'
import Contact from './section/Contact/Contact';
import Footer from './section/Footer/Footer';
import Hero from './section/Hero/Hero';
import Projects from './section/Projects/Projects';
import Skills from './section/Skills/Skills';
import Error1 from './section/Error/Error.jsx';
import AppLayout from './common/AppLayout.jsx';
import {createBrowserRouter, RouterProvider} from react-router-dom;

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      errorElement:<Error1/>,
      children:[
        {
          path:"/",
          element:<Hero />
        },
        {
          path:"/projects",
          element:<Projects />
        },
        {
          path:"/skills",
          element:<Skills />
        },
        {
          path:"/contact",
          element:<Contact />
        },
        {
          path:"/skills",
          element:<Skills />
        },
      ]
    }
  ])

  return <RouterProvider router= {router} />
}

export default App;

// import './App.css'
// import Contact from './section/Contact/Contact';
// import Footer from './section/Footer/Footer';
// import Hero from './section/Hero/Hero';
// import Projects from './section/Projects/Projects';
// import Skills from './section/Skills/Skills';
// function App() {

//   return (
//     <>
//     <Hero />
//     <Projects />
//     <Skills />
//     <Contact />
//     <Footer/>
//     </>
//   )
// }

// export default App;
