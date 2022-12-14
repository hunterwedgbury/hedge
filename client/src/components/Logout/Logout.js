import './Logout.scss'

const LogoutButton = () => {

  return (
    <div className='signout'>
      <a href={'http://localhost:1000/auth/logout'}>
        <button className="signout__button">SIGN OUT</button>
      </a>
    </div>
  );
};

export default LogoutButton;