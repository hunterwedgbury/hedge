import "./AddPage.scss";
import Add from '../../components/Add/Add'
import arrowBack from '../../assets/icons/arrow1.png'

import { NavLink } from 'react-router-dom';

const AddPage = () => {

    return (

        <div className="add">

            <div className="add-container">
                <NavLink className="add-container__link" to={`/`}>
                    <img className="add-container__arrow" src={arrowBack} alt="Arrow back"></img>
                </NavLink>
                <h1 className="add-container__header">New Post</h1>
            </div>

            <Add />

        </div>

    );
};

export default AddPage;