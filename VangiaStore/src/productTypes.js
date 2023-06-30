import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style/productTypes.css'
import ProductCard from './UI/productCard'
import BodyCare from './UI/bodyCare.js'
import HairCare from './UI/hairCare.js'
import Perfumes from './UI/perfumes'

const ProductTypes = ({ incrementProductQuantity }) => {
    const [showProductCard1, setShowProductCard1] = useState(1);

    const handleButtonClick = (number) => {
        setShowProductCard1(number);
    };

    return (
        <section className='container' id = 'margin_product_types'>
            <div className='wrapp_product_types'>
                <h2>Few Types of Recipes</h2>
            </div>
            <nav className='parrent_block_nav_product'>
                <ul className='care_options'>
                    <li onClick={() => handleButtonClick(2)}>Body Care</li>
                    <li onClick={() => handleButtonClick(1)}>Skin care</li>
                    <li onClick={() => handleButtonClick(3)}>Hair care</li>
                    <li onClick={() => handleButtonClick(4)}>Perfumes</li>
                </ul>
            </nav>
            <CSSTransition
                in={showProductCard1 === 1}
                classNames="fade"
                timeout={400}
                unmountOnExit
                >
                <ProductCard incrementProductQuantity={incrementProductQuantity} />
                </CSSTransition>

                <CSSTransition
                in={showProductCard1 === 2}
                classNames="fade"
                timeout={400}
                unmountOnExit
                >
                <BodyCare incrementProductQuantity={incrementProductQuantity} />
                </CSSTransition>

                <CSSTransition
                in={showProductCard1 === 3}
                classNames="fade"
                timeout={400}
                unmountOnExit
                >
                <HairCare incrementProductQuantity={incrementProductQuantity} />
                </CSSTransition>

                <CSSTransition
                in={showProductCard1 === 4}
                classNames="fade"
                timeout={400}
                unmountOnExit
                >
                <Perfumes incrementProductQuantity={incrementProductQuantity} />
                </CSSTransition>

        </section>
    );
}

export default ProductTypes;
