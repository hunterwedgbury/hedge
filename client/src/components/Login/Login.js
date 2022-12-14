import './Login.scss'
import linkedin from '../../assets/linkedin.png'

const LoginButton = () => {

  return (
    <div className='login'>
      <a href={'http://localhost:1000/auth/linkedin'}>
        <img className='login__logo' src={linkedin} />
      </a>
    </div>
  );
};

export default LoginButton;