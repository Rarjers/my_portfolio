import './style/productTypes.css'
import ProductCard from './UI/productCard'

const productTypes = () => {
    return (
        <section className='container' id = 'margin_product_types'>
            <div className='wrapp_product_types'>
                <h2>Few Types of Recipes</h2>
            </div>
            <nav className='parrent_block_nav_product'>
                <ul className='care_options'>
                    <li>Body Care</li>
                    <li>Skin care</li>
                    <li>Hair care</li>
                    <li>Perfumes</li>
                </ul>
            </nav>
            <ProductCard />
        </section>
    );
}

export default productTypes;
