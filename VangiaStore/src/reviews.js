import './style/reviews.css'
import Slider from './UI/slider'

const reviews = () => {
    return (
        <section className='container' id = 'margin_reviews'>
            <div className='wrapp_reviews'>
                <h2>Testimonials</h2>
                <p>What our loved customers say about our amazing products.</p>
            </div>
            <Slider />
        </section>
    );
}

export default reviews;
