import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Login'
import SignIn from './Components/SignIn'
import Profile from './Components/Profile'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  }
]);



function App() {

  return (
    <div className='flex w-full items-center bg-slate-200 justify-center h-screen'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App