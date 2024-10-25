import './App.css';
import ThisSeason from './pages/ThisSeason';
import LastSeason from './pages/LastSeason';
import Navbar from './components/Navbar';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
	<BrowserRouter>
		<Navbar />	
		<Routes>
			<Route path='/' element={ <ThisSeason />} />
			<Route path='/historical' element={<LastSeason />} />
		</Routes>
	</BrowserRouter>
  )
}

export default App
