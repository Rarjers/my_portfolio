import { useState } from 'react';
import '../style/header.css'

const useProductQuantity = () => {

    const [productQuantity, setProductQuantity] = useState(0);
    const incrementProductQuantity = () => {
        setProductQuantity(productQuantity + 1);

        const whereToEnter = document.querySelector('.number_product');
        if (productQuantity < 0) {
            whereToEnter.style.display = "none";
        } else {
            whereToEnter.style.display = "block";
        }
    }

    return (
        [productQuantity, incrementProductQuantity]
    );
}

export default useProductQuantity;
