import './Login.scss'
import linkedin from '../../assets/linkedin.png'

// const LoginButton = () => {

//   return (
//     <div className='login'>
//       <a href={'https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=78ll3ufxcj2has&redirect_uri=http://localhost:1000/auth/linkedin/callback'}>
//         <img className='login__logo' src={linkedin} />
//       </a>
//     </div>
//   );
// };

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