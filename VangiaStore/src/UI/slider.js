import '../style/slider.css'
import SliderFace from '../img/sliderPhoto.png';
import SliderFace1 from '../img/sliderPhoto1.png';

const slider = () => {
    return (
        <section className='container' id = 'margin_reviews'>
            <div className='wrapp_slider'>
                <span className='arrow_preview'></span>
                <div className='slider_item'>
                    <img src = {SliderFace} alt = "feedback_photo"/>
                    <p>Grace Chavez</p>
                    <i>“ I found Vangia just by chance and it has been the best thing to happen to me in a long time. I'm finally able to get the products I need, “</i>
                </div>
                <div className='slider_item'>
                    <img src = {SliderFace1} alt = "feedback_photo"/>
                    <p>Grace Chavez</p>
                    <i>“ I found Vangia just by chance and it has been the best thing to happen to me in a long time. I'm finally able to get the products I need, “</i>
                </div>
                <span className='arrow_next'></span>
            </div>
            <div className='wrapp_radio_buttons'>
                <label>
                    <input type="radio" name="option" value="option1"/>
                    <span className="custom-radio"></span>
                </label>
                <label>
                    <input type="radio" name="option" value="option2"/>
                    <span className="custom-radio"></span>
                </label>
                <label>
                    <input type="radio" name="option" value="option3"/>
                    <span className="custom-radio custom-radio-active"></span>
                </label>
                <label>
                    <input type="radio" name="option" value="option4"/>
                    <span className="custom-radio"></span>
                </label>
            </div>
        </section>
    );
}

export default slider;
