import './style/header.css'
import { useEffect, useState } from 'react'
import Logo from './img/Logo.svg'
import Basket from './img/Basket.svg'
import menu from './img/menu.svg'
import ButtonClose from './img/button close.svg'
import EmptyBasket from './img/empty_basket.svg'

const Header = ({productQuantity, onSelectProduct, uninstallProduct}) => {
    const [productsInCart, setProductsInCart] = useState([]);

    let number = productQuantity;
    const visibleBakset = () => {
        if (number >= 1) {
            let productUnit = document.querySelector('.product_in_cart');
            productUnit.classList.toggle("product_unit_visible");
        } else {
            let emptyBasketVisib = document.querySelector('.basket_plug');
            emptyBasketVisib.classList.toggle("toogle_visib_empty_basket");
        }
    }

    const removeProductFromCart = (index) => {
        setProductsInCart((prevProducts) => prevProducts.filter((_, i) => i !== index));

        if (number <= 1) {
            let remove = document.querySelector(".number_product");
            remove.style.display = "none";
        }
    };
    
    useEffect(() => {
        if (onSelectProduct) {
        setProductsInCart((prevProducts) => [...prevProducts, onSelectProduct]);
        }
    }, [onSelectProduct]);

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
                        <span className = "number_product">{number}</span>
                        <img onClick={visibleBakset} className = "basket" src = {Basket} alt="Basket" />
                    </div>
                    <img className = "menu" src = {menu} alt = "Menu" />
                    <div className='basket_plug toogle_visib_empty_basket'>
                        <img src={EmptyBasket} alt='empty basket'/>
                        <p>Sorry, your shopping cart is empty. Please choose a product.</p>
                    </div>
                    <div className='product_in_cart product_unit_visible'>
                    {productsInCart.map((product, index) => (
                        <div className="item_product" key={index}>
                            <img className="width_product_in_busket" src={product.image} alt="your product" />
                            <p>{product.name}</p>
                            <img
                            onClick={() => {
                                removeProductFromCart(index);
                                uninstallProduct();
                            }}
                            className="button_dell_product"
                            src={ButtonClose}
                            alt="button close"
                            />
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
