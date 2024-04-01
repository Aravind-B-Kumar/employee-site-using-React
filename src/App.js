import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employee from './components/Employee';
import RegisterEmployee from './components/RegisterEmployee';
import SearchEmployee from './components/SearchEmployee';
import Jobs from './components/Jobs';

function App() {
  return (

    <BrowserRouter>
      <Routes>


        <Route path='/' element={<Employee/>}/>
        <Route path='/register' element={<RegisterEmployee/>}/>
        <Route path='/search' element={<SearchEmployee/>}/>
        <Route path='/jobs' element={<Jobs/>}/>


      </Routes>
    </BrowserRouter>


  );
}

export default App;
