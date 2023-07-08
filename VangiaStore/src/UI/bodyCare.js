import '../style/productCard.css'
import PhotoProduct1 from '../img/bodyCare.png'
import PhotoProduct2 from '../img/bodyCare1.jpeg'
import PhotoProduct3 from '../img/bodyCare2.jpeg'
import PhotoProduct4 from '../img/bodyCare3.png'
import Buttons from './Buttons'

const bodyCare = ({incrementProductQuantity, onSelectProduct}) => {

    const clickButton = (e) => {
        incrementProductQuantity();

        const productItem = e.target.closest('.product_items');
        const image = productItem.querySelector("img").src;
        const name = productItem.querySelector("h5").textContent;
        
        const product = {
            image: image,
            name: name
        };
        
        onSelectProduct(product);
    };

    const addCard = "add_product_in_basket"
    const seeMore = "see_more_button"

    return (
        <section className='container' id = 'margin_product_card'>
            <div className='wrapp_product_card'>
                <div className='product_items'>
                    <img src = {PhotoProduct1} alt='product'/>
                    <h5>Body Care</h5>
                    <p>Product applied to the body and various body parts to make</p>
                    <p>$32.50</p>
                    <Buttons click={clickButton} className={addCard} text="Add to Cart"/>
                </div>
                <div className='product_items'>
                    <img src = {PhotoProduct2} alt='product'/>
                    <h5>Body Care</h5>
                    <p>Product applied to the body and various body parts to make</p>
                    <p>$32.50</p>
                    <Buttons click={clickButton} className={addCard} text="Add to Cart"/>
                </div>
                <div className='product_items'>
                    <img src = {PhotoProduct3} alt='product'/>
                    <h5>Body Care</h5>
                    <p>Product applied to the body and various body parts to make</p>
                    <p>$32.50</p>
                    <Buttons click={clickButton} className={addCard} text="Add to Cart"/>
                </div>
                <div className='product_items'>
                    <img src = {PhotoProduct4} alt='product'/>
                    <h5>Body Care</h5>
                    <p>Product applied to the body and various body parts to make</p>
                    <p>$32.50</p>
                    <Buttons click={clickButton} className={addCard} text="Add to Cart"/>
                </div>
            </div>
            <Buttons className={seeMore} text="See More"/>
        </section>
    );
}

export default bodyCare;
