import '../style/productCard.css'
import PhotoProduct1 from '../img/photoProduct1.png'
import PhotoProduct2 from '../img/photoProduct2.png'
import PhotoProduct3 from '../img/photoProduct3.png'
import PhotoProduct4 from '../img/photoProduct4.png'
import Buttons from './Buttons'

const productCard = () => {
    const addCard = "add_product_in_basket"
    const seeMore = "see_more_button"

    return (
        <section className='container' id = 'margin_product_card'>
            <div className='wrapp_product_card'>
                <div className='product_items'>
                    <img src = {PhotoProduct1} alt='product'/>
                    <h5>GARNIER</h5>
                    <p>Product applied to the skin and various body parts to make</p>
                    <p>$52.99</p>
                    <Buttons className={addCard} text="Add to Cart"/>
                </div>
                <div className='product_items'>
                    <img src = {PhotoProduct2} alt='product'/>
                    <h5>PANTENE</h5>
                    <p>Product applied to the skin and various body parts to make</p>
                    <p>$52.99</p>
                    <Buttons className={addCard} text="Add to Cart"/>
                </div>
                <div className='product_items'>
                    <img src = {PhotoProduct3} alt='product'/>
                    <h5>DOVE</h5>
                    <p>Product applied to the skin and various body parts to make</p>
                    <p>$52.99</p>
                    <Buttons className={addCard} text="Add to Cart"/>
                </div>
                <div className='product_items'>
                    <img src = {PhotoProduct4} alt='product'/>
                    <h5>CLINIQUE</h5>
                    <p>Product applied to the skin and various body parts to make</p>
                    <p>$52.99</p>
                    <Buttons className={addCard} text="Add to Cart"/>
                </div>
            </div>
            <Buttons className={seeMore} text="See More"/>
        </section>
    );
}

export default productCard;
