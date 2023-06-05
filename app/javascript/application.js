import React from 'react';
import Greeting from "./components/greeting";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './components/configureStore';


function App() {
  const csrfToken = document.head.querySelector('[name=csrf-token]').content;

  let containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  }

  return (
  <div style={containerStyles}>
    <h3>Random Greeting</h3>
    <Greeting csrfToken={csrfToken} />
  </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/greeting',
    element: <Greeting />,
  },
]);
  
const root = createRoot(document.getElementById('root'));
root.render( 
<Provider store={store}>
  <RouterProvider router={router} />
</Provider>
);