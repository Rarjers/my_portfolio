import './style/header.css'
import Logo from './img/Logo.svg'
import Basket from './img/Basket.svg'
import menu from './img/menu.svg'
import ButtonClose from './img/button close.svg'
import ImgProduct from './img/Hair care.png'

const Header = (props) => {
    const openBusket = () => {
        let productUnit = document.querySelector('.product_in_cart');
        productUnit.classList.toggle("product_unit_visible");
    }
    const dellProductInBusket = (e) => {
        let productItem = e.target;
        let parent = productItem.parentNode;
        parent.remove();
    }

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
                    <div className='wrapp_basket'>
                        <span className = "number_product">{props.productQuantity}</span>
                        <img onClick={openBusket} className = "basket" src = {Basket} alt="Basket" />
                    </div>
                    <img className = "menu" src = {menu} alt = "Menu" />
                    <div className='product_in_cart product_unit_visible'>
                        <div className='item_product'>
                            <img className='width_product_in_busket' src={ImgProduct} alt='your product'/>
                            <p>Your product1</p>
                            <img onClick={dellProductInBusket} className='button_dell_product' src = {ButtonClose} alt='button close'/>
                        </div>
                        <div className='item_product'>
                            <img className='width_product_in_busket' src={ImgProduct} alt='your product'/>
                            <p>Your product2</p>
                            <img onClick={dellProductInBusket} className='button_dell_product' src = {ButtonClose} alt='button close'/>
                        </div>
                        <div className='item_product'>
                            <img className='width_product_in_busket' src={ImgProduct} alt='your product'/>
                            <p>Your product3</p>
                            <img onClick={dellProductInBusket} className='button_dell_product' src = {ButtonClose} alt='button close'/>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
