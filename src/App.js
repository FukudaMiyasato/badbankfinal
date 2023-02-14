import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Deposit from './pages/Deposit';
import Withdrawal from './pages/Withdrawal';
import Database from './pages/Database';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path='createaccount' element={<CreateAccount/>}/>
            <Route path='deposit' element={<Deposit/>}/>
            <Route path='withdrawal' element ={<Withdrawal/>}/>
            <Route path='database' element ={<Database/>}/>
          </Routes>
        </DataProvider>
    </BrowserRouter>

  );
}

export default App;
