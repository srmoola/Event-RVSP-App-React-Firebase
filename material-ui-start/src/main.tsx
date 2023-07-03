import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from 'react-redux'
import imageurlreducer from "./features/image.ts"

const store = configureStore({
  reducer: {
    imageurl: imageurlreducer,
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
