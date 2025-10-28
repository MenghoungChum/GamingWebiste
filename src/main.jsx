import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CardProvider } from './Components/CartContext/CartContext.jsx'
import "aos/dist/aos.css";

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <CardProvider>
    <App />
    </CardProvider>
  // {/* </StrictMode>, */}
)
