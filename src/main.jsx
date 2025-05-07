import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import OperationSindoor from './OperationSindoor'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OperationSindoor />
  </StrictMode>,
)
