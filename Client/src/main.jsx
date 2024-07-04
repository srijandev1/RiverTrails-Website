import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Packages from './Pages/Packages/Packages';
import FAQs from './Pages/FAQs/FAQs';
import Itinerary from './Pages/Itinerary/Itinerary';





const router = createBrowserRouter(
  createRoutesFromElements(

        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home/>} />
          <Route path='/aboutus' element={<About/>} />
          <Route path='/packages' element={<Packages/>} />
          <Route path='package'>
            <Route path=':id' element={<Itinerary/>} />
          </Route>
          <Route path='/faq' element={<FAQs/>} />
        </Route>

  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)