import RegisterPage from './page/Register-Signin-Page/RegisterPage';
import SigninPage from './page/Register-Signin-Page/SigninPage';
import User from './page/User';
import Admin from './page/Admin';
import appStyles from './app.module.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className={appStyles.contents}>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<SigninPage/>}></Route>
        <Route exact path='/register' element={<RegisterPage/>}></Route>
        <Route exact path='/user' element={<User/>}></Route>
        <Route exact path='/admin' element={<Admin/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
