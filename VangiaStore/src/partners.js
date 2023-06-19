import './style/partners.css'
import BossLogo from './img/Hugo-Boss-Logo.svg'
import Vogue from './img/VOGUE_LOGO.svg'
import Amazon from './img/Amazon_logo 1.svg'
import Google from './img/Google_2015_logo.svg'
import PayPal from './img/PayPal.svg'

const ourPartners = () => {
    return (
        <section id="margin_section_two">
            <h2 className = "style_partners_text">Our Partners</h2>
            <div className='wrapp_icon_partners'>
                <img src={BossLogo} alt="Hugo Boss Logo"/>
                <img src={Vogue} alt="Vogue Logo"/>
                <img src={Amazon} alt="Amazon Logo"/>
                <img src={Google} alt="Google Logo"/>
                <img src={PayPal} alt="PayPal Logo"/>
            </div>
        </section>
    );
}

export default ourPartners;
