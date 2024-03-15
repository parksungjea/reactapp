import Logo from './logo.svg'
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Board from './board/Board';
import Header from './layout/header';
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header />
       <header className="App-header">

      <Routes>
      <Route path='/notice' element={<Board/>} />
      
      </Routes>
        <img src={Logo} className='App-logo' alt='Logo'></img>
        <Link to={'/notice'}>Board</Link>
      </header> 
      </BrowserRouter>  

    </div>
  );
}

export default App;
