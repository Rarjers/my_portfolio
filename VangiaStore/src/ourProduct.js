import './style/ourProduct.css'
import ProductFace from './img/ourProductImgFace.png'
import Button from './UI/Buttons'

const ourProduct = () => {
    return (
        <section className='container'>
            <div className='wrapp_our_product'>
                <div className='item_our_product'>
                    <p>OUR PRODUCTS</p>
                    <p>Solution for every skin type and need</p>
                    <p>To suit even the most sensitive skin, these ingredients should be 100% pure and completely natural. ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur.</p>
                    <p>Color additives can be combined labore et dolore magna Lorem ipsum dolor sit amet, consetetur</p>
                    <Button text = "Read More"/>
                </div>
                <div className='item_our_product_img'>
                    <img src = {ProductFace} alt = 'product demonstration'/>
                </div>
            </div>
        </section>
    );
}

export default ourProduct;
