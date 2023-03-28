// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>hello</h1>
//     </div>
//   );
// }

// export default App;

import React, { Component, Fragment } from 'react'

import Home from './components/Home/Home';
import About from './components/About/About';
import Parent from './components/Parent/Parent.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Web from './components/Web/Web';
import Mobile from './components/Mobile/Mobile';
import Desktop from './components/Desktop/Desktop';
import Layout from './components/main layout/Layout';



const routes = createBrowserRouter([

  { path: '', element: <Layout /> , children : [

    { path: '', element: <Home /> },

    { path: 'home', element: <Home /> },

    { path: 'about', element: <About /> },

    { path: 'products', element: <Parent /> },

    { path: '*', element: <div className='vh-100 d-flex bg-info justify-content-center align-items-center'><h1>Not Found 404</h1></div> },


    {path: 'projects', element: <Projects />, children: [
        { path: 'web', element: <Web /> },
        { path: 'mobile', element: <Mobile /> },
        { path: 'desktop', element: <Desktop /> },
      ]
    }

  ]
} 

])


export default class App extends Component {
  render() {
    return (
      <>
       
        <RouterProvider router={routes}  />

      </>


    )
  }
}
