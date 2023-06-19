import './style/cleansingProcedure.css'
import MainPhotoCleansing from './img/CleansingMainPhoto.png'
import CleansingPhoto from './img/CleansingPhoto.png'
import CleansingPhoto1 from './img/CleansingPhoto1.png'
import CleansingPhoto2 from './img/CleansingPhoto2.png'
import Buttons from './UI/Buttons'


const cleansingProcedure = () => {
    const backgroundColor = 'background_color';

    return (
        <section id = 'margin_cleansing'>
            <div className='container' >
                <div className='wrapp_cleansing'>
                    <div className='wrapp_cleansing_img'>
                        <img src = {MainPhotoCleansing} alt = "Main_Photo_Cleansing"/>
                        <div className='more_photos_cleansing'>
                            <img src = {CleansingPhoto} alt = "Main_Photo_Cleansing"/>
                            <img src = {CleansingPhoto1} alt = "Main_Photo_Cleansing"/>
                            <img src = {CleansingPhoto2} alt = "Main_Photo_Cleansing"/>
                        </div>
                    </div>
                    <div className='wrapp_cleansing_text'>
                        <h2>Purifying Skin Routine</h2>
                        <p>To suit even the most sensitive skin, these ingredients should be 100% pure and completely natural. ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur</p>
                        <p>Color additives can be combined labore et dolore magna Lorem ipsum dolor sit amet, consetetur</p>
                        <Buttons className={backgroundColor} text = "Read More"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default cleansingProcedure;
