import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Page } from './Page.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
