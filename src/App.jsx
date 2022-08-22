import RegisterPage from './page/Register/RegisterPage';
import SigninPage from './page/Signin/SigninPage';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Welcome from './page/Welcome/Welcome';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<SigninPage/>}></Route>
        <Route exact path='/register' element={<RegisterPage/>}></Route>
        <Route exact path='/welcome' element={<Welcome/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
