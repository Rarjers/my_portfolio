import './style/header.css'
import Logo from './img/Logo.svg'
import Basket from './img/Basket.svg'
import menu from './img/menu.svg'

const Header = (props) => {

    return (
        <nav className="container navigation">
            <div className = "logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className = 'tex_nav'>
                <p>Home</p>
                <p>Products</p>
                <p>Promotions</p>
            </div>
            <div>
                <div className = "parrent_basket" >
                    <span className = "number_product">{props.productQuantity}</span>
                    <img className = "basket" src = {Basket} alt="Basket" />
                </div>
                <img className = "menu" src = {menu} alt = "Menu" />
            </div>
        </nav>
    );
}

export default Header;
