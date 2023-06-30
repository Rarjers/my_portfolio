import '../style/productCard.css'
import PhotoProduct1 from '../img/Hair care.png'
import PhotoProduct2 from '../img/Hair care1.png'
import PhotoProduct3 from '../img/Hair care2.png'
import PhotoProduct4 from '../img/Hair care3.png'
import Buttons from './Buttons'

const hairCare = ({incrementProductQuantity}) => {
    const clickButton = () => {
        incrementProductQuantity();
    };

    const addCard = "add_product_in_basket"
    const seeMore = "see_more_button"

    return (
        <section className='container' id = 'margin_product_card'>
            <div className='wrapp_product_card'>
                <div className='product_items'>
                    <img src = {PhotoProduct1} alt='product'/>
                    <h5>Hair Care1</h5>
                    <p>Product applied to the Hair and various body parts to make</p>
                    <p>$40</p>
                    <Buttons click={clickButton} className={addCard} text="Add to Cart"/>
                </div>
                <div className='product_items'>
                    <img src = {PhotoProduct2} alt='product'/>
                    <h5>Hair Care</h5>
                    <p>Product applied to the Hair and various body parts to make</p>
                    <p>$40</p>
                    <Buttons click={clickButton} className={addCard} text="Add to Cart"/>
                </div>
                <div className='product_items'>
                    <img src = {PhotoProduct3} alt='product'/>
                    <h5>Hair Care</h5>
                    <p>Product applied to the Hair and various body parts to make</p>
                    <p>$40</p>
                    <Buttons click={clickButton} className={addCard} text="Add to Cart"/>
                </div>
                <div className='product_items'>
                    <img src = {PhotoProduct4} alt='product'/>
                    <h5>Hair Care</h5>
                    <p>Product applied to the Hair and various body parts to make</p>
                    <p>$40</p>
                    <Buttons click={clickButton} className={addCard} text="Add to Cart"/>
                </div>
            </div>
            <Buttons className={seeMore} text="See More"/>
        </section>
    );
}

export default hairCare;
