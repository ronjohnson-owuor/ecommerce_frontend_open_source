import React from 'react';
import { Routes, Route, BrowserRouter, json } from 'react-router-dom';
import routing from './modules/routing';
function App() {
  return (
	<BrowserRouter>
		<Routes>
		{
			routing.map((directories)=>(
				<Route key={directories.path} path={directories.path} element={directories.element} />
			))
		}
		</Routes>
	</BrowserRouter>
  );
}

export default App;
