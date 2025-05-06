import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router";
import router from './routes/router';
import { Flip, ToastContainer } from 'react-toastify';
import ContextProvider from './provider/ContextProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
      <ToastContainer
        theme='colored'
        position="top-center"
        transition={Flip}
        autoClose={1800} />
    </ContextProvider>
  </StrictMode>,
)
