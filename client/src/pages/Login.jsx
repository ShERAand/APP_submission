import  '../styles/Login.css' 
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="container">
    <div className='auth'>
      <h1>Авторизация</h1>
      <form>
        <input type="text" required placeholder='Username'/>
        <input type="password" required placeholder='Password'/>
        <p>Ошибка</p>
        <button className='btn'>Войти</button>
        <span>Нет аккаунта? <Link to="/register">Заригестрируйтесь</Link></span>
      </form>
    </div>
    </div>

  )
}

export default Login