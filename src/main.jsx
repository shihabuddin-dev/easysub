import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import router from './routes/router'
import ContextProvider from './provider/ContextProvider';
import { Flip, ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
    <ToastContainer
      theme='colored'
      position="top-center"
      transition={Flip}
      autoClose={1800} />
  </StrictMode>,
)
