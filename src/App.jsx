import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Home from './pages/home/home';

import './App.css';
import Signup from './pages/signup/signup';
import Videos from './pages/videos/videos';
import SingleVideo from './pages/single-video/single-video';

function App() {

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/video" element={<SingleVideo />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
