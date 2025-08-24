import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import '../index.css'

// Pages
import Layout from './Layout.jsx'
import App from './pages/App.jsx'
import Feed from './pages/Feed.jsx'
import AddBuy from './pages/AddBuy.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
      <Routes>

        {/* Layout é o elemento principal, com os seus filhos sendo definidos */}
        {/* Pelo que está dentro do path */}
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/cadastrar-gasto" element={<AddBuy />} />
        </Route>

      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
 