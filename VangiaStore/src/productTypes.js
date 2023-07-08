import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style/productTypes.css'
import ProductCard from './UI/productCard'
import BodyCare from './UI/bodyCare.js'
import HairCare from './UI/hairCare.js'
import Perfumes from './UI/perfumes'

const ProductTypes = ({ incrementProductQuantity, onSelectProduct, blockRef }) => {
    const [showProductCard1, setShowProductCard1] = useState(1);
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (number, index) => {
        setShowProductCard1(number);
        setActiveButton(index);
    };

    return (
        <section ref={blockRef} className='container' id = 'margin_product_types'>
            <div className='wrapp_product_types'>
                <h2>Few Types of Recipes</h2>
            </div>
            <nav className='parrent_block_nav_product'>
                <ul className='care_options'>
                    <li onClick={() => handleButtonClick(2, 2)} className={activeButton === 2 ? 'active' : ''}>Body Care</li>
                    <li onClick={() => handleButtonClick(1, 1)} className={activeButton === 1 ? 'active' : ''}>Skin care</li>
                    <li onClick={() => handleButtonClick(3, 3)} className={activeButton === 3 ? 'active' : ''}>Hair care</li>
                    <li onClick={() => handleButtonClick(4, 4)} className={activeButton === 4 ? 'active' : ''}>Perfumes</li>
                </ul>
            </nav>
            <CSSTransition
                in={showProductCard1 === 1}
                classNames="fade"
                timeout={400}
                unmountOnExit={true}
                >
                <ProductCard onSelectProduct={onSelectProduct} incrementProductQuantity={incrementProductQuantity} />
                </CSSTransition>

                <CSSTransition
                in={showProductCard1 === 2}
                classNames="fade"
                timeout={400}
                unmountOnExit={true}
                >
                <BodyCare onSelectProduct={onSelectProduct} incrementProductQuantity={incrementProductQuantity} />
                </CSSTransition>

                <CSSTransition
                in={showProductCard1 === 3}
                classNames="fade"
                timeout={400}
                unmountOnExit={true}
                >
                <HairCare onSelectProduct={onSelectProduct} incrementProductQuantity={incrementProductQuantity} />
                </CSSTransition>

                <CSSTransition
                in={showProductCard1 === 4}
                classNames="fade"
                timeout={400}
                unmountOnExit={true}
                >
                <Perfumes onSelectProduct={onSelectProduct} incrementProductQuantity={incrementProductQuantity} />
                </CSSTransition>

        </section>
    );
}

export default ProductTypes;
