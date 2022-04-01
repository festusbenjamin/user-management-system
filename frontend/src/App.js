import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddEdit from './pages/AddEdit';
import { Home } from './pages/Home';
import View from './pages/View';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route path='/addcontact' element={ <AddEdit /> } />
        <Route path='/update/:id' element={ <AddEdit /> } />
        <Route path='/view/:id' element={ <View /> } />
      </Routes>
        <ToastContainer position='top-center' />
    </div>
    </BrowserRouter>
  );
}

export default App;
