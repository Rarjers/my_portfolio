import './style/aboutProduct.css'
import FlowersOne from './img/flovers1.png'
import FlowersTwo from './img/flovers2.png'
import FlowersThree from './img/flovers3.png'



const aboutProduct = () => {
    return (
        <section className='container' id = 'wrapp_about_product'>
            <div className='header_text_product'>
                <p>all NATURAL PRODUCTS</p>
                <h2>Formulated with the finest ingredients</h2>
            </div>
            <div className='wrapp_flowers'>
                <div className='item_flowers'>
                    <img src={FlowersOne} alt = "flowers"/>
                    <p>120</p>
                    <p>Flavonoids</p>
                    <p>Skin care without all the fuss. The smallest bottle is perfect for traveling or to keep at work</p>
                </div>
                <div className='item_flowers'>
                    <img src={FlowersTwo} alt = "flowers"/>
                    <p>80</p>
                    <p>Stilbenes</p>
                    <p>We use only the purest ingredients that are sourced locally and organic where possible.</p>
                </div>
                <div className='item_flowers'>
                    <img src={FlowersThree} alt = "flowers"/>
                    <p>112</p>
                    <p>Phelonic acid</p>
                    <p>Natural, plant-based ingredients that, whole food goodness, with no harmful chemicals.</p>
                </div>
            </div>
        </section>
    );
}

export default aboutProduct;
