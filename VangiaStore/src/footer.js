import './style/footer.css'
import Button from './UI/Buttons.js'
import FaceBook from './img/Facebook icon.svg'
import Twitter from './img/twitter icon.svg'
import Linked from './img/lindedin icon.svg'
import WhiteLogo from './img/Logo_white.svg'

const footer = () => {
    return (
        <section id = 'margin_block_subscribe'>
            <div className='container position_parrent'>
                <div className='wrapp_subscribe_newsletter'>
                    <div className='text_subscribe_newsletter'>
                        <h2>Subscribe Newsletter</h2>
                        <p>Keep in touch and never miss out on our latest products</p>
                    </div>
                    <div className='input_button_subscribe_newsletter'>
                        <input placeholder='Enter your email'/>
                        <Button text = "Get Started"/>
                    </div>
                </div>
                <div className='wrapp_footer_contact'>
                    <div className='logo_social_media'>
                        <img src = {WhiteLogo} alt = "logo"/>
                        <p>Best online cosmetic shop for all your beauty products</p>
                        <div className='social_media_icon'>
                            <a href ="#hom"><img src = {FaceBook} alt = "facebook"/></a>
                            <a href ="#hom"><img src = {Twitter} alt = "twitter"/></a>
                            <a href ="#hom"><img src = {Linked} alt = "linkend"/></a>
                        </div>
                    </div>
                    <div className='wrapp_company_contact'>
                        <div className='item_company_contact'>
                            <h5>Company</h5>
                            <p>About us</p>
                            <p>Jobs</p>
                            <p>Records</p>
                            <p>Supports</p>
                        </div>
                        <div className='item_company_contact'>
                            <h5>Community</h5>
                            <p>For Artists</p>
                            <p>Updates</p>
                            <p>Advertising</p>
                            <p>Investor</p>
                        </div>
                        <div className='item_company_contact'>
                            <h5>Legal</h5>
                            <p>Privacy</p>
                            <p>Policy</p>
                            <p>Terms</p>
                            <p>Conditions</p>
                        </div>
                        <div className='item_company_contact'>
                            <h5>Social</h5>
                            <p>Instagram</p>
                            <p>Twitter</p>
                            <p>Facebook</p>
                            <p>Youtube</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default footer;
