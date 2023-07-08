import React from 'react'
import './style/section_one.css'
import Button from './UI/Buttons.js'
import MainPhoto from "./img/mainPhoto.png"
import newProductOne from "./img/newProduckOne.png"
import newProductTwo from './img/newProductTwo.png'


const SectionOne = ({scrollToBlock}) => {

    const backgroundColor = 'background_color';
    const seeNewProduct = 'see_new_product';

    return (
        <section id='background_color'>
            <div className = 'container wrapp_main_layer'>
                <div className = 'wrapp_text'>
                    <p>ALL NATURAL</p>
                    <h1>Select <span>beauty</span> for your skin</h1>
                    <p className='description'>Vangia offers high quality, effective products at unbeatable prices. Our team of experts have formulated a range of products with the finest ingredients to satisfy your needs.</p>
                    <Button click={scrollToBlock} link="#home" className={backgroundColor} text="View Products"/>
                </div>
                <div>
                    <img className='main_photo' src={MainPhoto} alt="main_photo" />
                    <div className = 'new_product'>
                        <img className='img_new_product_one' src={newProductOne} alt="photo_new_product" />
                        <img className='img_new_product_two' src={newProductTwo} alt="photo_new_product" />
                        <Button link="#home" className={seeNewProduct} text="New in"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionOne;
