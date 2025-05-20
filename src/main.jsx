import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.jsx'
import AuthProviders from './providers/AuthProviders.jsx'
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <div className='max-w-screen- mx-auto'>
          <RouterProvider router={Router} />
        </div>
      </AuthProviders>
    </HelmetProvider>
  </StrictMode>,
)
