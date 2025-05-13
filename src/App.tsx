import React from 'react';
import './App.css';
import './page.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Root from './Root';
import Main from './Main';

const App = () => {
  const router = createBrowserRouter([{
		path:"/",
		element:<Root/>,
		children : [
			{path : '/', element :<Main/>},
		]
	}],
);
  return <RouterProvider router={router}/>;
  
};

export default App;
