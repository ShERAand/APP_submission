import { Link } from 'react-router-dom';
import '../styles/Login.css';


const Register = () => {
  return (
    <div className="container">
    <div className='auth'>
      <h1>Авторизация</h1>
      <form>
        <input type="text" required placeholder='Username'/>
        <input type="email" required placeholder='Email'/>
        <input type="password" required placeholder='Password'/>
        <input type="password" required placeholder='Confirm Password'/>
        <button className='btn'>Зарегистрироваться</button>
        <p>Ошибка</p>
        <span>Есть аккаунт?<Link to="/login">Авторизируйтесь</Link></span>
      </form>
    </div>
    </div>
  )
}

export default Register