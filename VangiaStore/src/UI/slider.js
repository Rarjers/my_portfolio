import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../style/slider.css'
import SliderFace from '../img/sliderPhoto.png';
import SliderFace1 from '../img/sliderPhoto1.png';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            image: SliderFace,
            name: 'Grace Chavez',
            text: 'I found Vangia just by chance and it has been the best thing to happen to me in a long time. I\'m finally able to get the products I need.',
        },
        {
            image: SliderFace1,
            name: 'John Doe',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend eu lorem in blandit.',
        },
        {
            image: SliderFace,
            name: 'Tes1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend eu lorem in blandit.',
        },
        {
            image: SliderFace1,
            name: 'Tes2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend eu lorem in blandit.',
        },
      // Добавьте остальные слайды сюда
    ];

    // let animationSlide = document.querySelector('.wrapp_items_slide');
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 2 ? 0 : prevSlide + 2));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 2 : prevSlide - 2));
    };

    const handleRadioChange = (index) => {
        setCurrentSlide(index * 2);
      };

    return (
        <section className='container' id = 'margin_reviews'>
            <div className='wrapp_slider'>
                <span className='arrow_preview' onClick={prevSlide}></span>
                <TransitionGroup className='wrapp_items_slide'>
                    <CSSTransition
                        key={currentSlide}
                        timeout={500}
                        classNames='slide'
                    >
                        <div className='slider_item'>
                        <img src={slides[currentSlide].image} alt='feedback_photo' />
                        <p>{slides[currentSlide].name}</p>
                        <i>{slides[currentSlide].text}</i>
                        </div>
                    </CSSTransition>
                    <CSSTransition
                        key={currentSlide + 1}
                        timeout={500}
                        classNames='slide'
                    >
                        <div className='slider_item'>
                        <img src={slides[currentSlide + 1].image} alt='feedback_photo' />
                        <p>{slides[currentSlide + 1].name}</p>
                        <i>{slides[currentSlide + 1].text}</i>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
                <span className='arrow_next' onClick={nextSlide}></span>
            </div>
            <div className='wrapp_radio_buttons'>
                {slides.map((slide, index) => (
                    index <= Math.floor((slides.length - 1) / 2) && (
                        <label key={index}>
                        <input
                            type='radio'
                            name='option'
                            value={`option${index + 1}`}
                            checked={currentSlide >= index * 2 && currentSlide <= index * 2 + 1}
                            onChange={() => handleRadioChange(index)}
                        />
                        <span
                            className={`custom-radio ${
                            currentSlide >= index * 2 && currentSlide <= index * 2 + 1 ? 'custom-radio-active' : ''
                            }`}
                        ></span>
                        </label>
                    )
                ))}
            </div>
        </section>
    );
}

export default Slider;
