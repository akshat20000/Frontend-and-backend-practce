import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import AppTest from './AppTest.tsx'
import FormData from './components/FormData.tsx'
import ReactForm from './ReactForm.tsx'
import HookForm from './HookForm.tsx'
import YupHook from './YupHook.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   
    <YupHook />
   
  </StrictMode>,
)
