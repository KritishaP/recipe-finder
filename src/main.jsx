import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Routing from './Router/Router.config'

import { SidebarProvider } from './context/sidebarContext'
import { MealProvider } from './context/mealContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <MealProvider>
      <React.StrictMode>
        <Routing />
      </React.StrictMode>
    </MealProvider>

  </SidebarProvider>
  ,
)
