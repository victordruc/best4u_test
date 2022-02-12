import React from 'react'
import img from '../img/upload/img.png'
import img1 from '../img/upload/img.png'
import img2 from '../img/upload/img.png'

const ProductData = React.createContext('');

const ProductContext = (Component) => {
    const data = [
        {
            id: "454",
            type: "Men",
            img: img
        },
        {
            id: "456",
            type: "Men",
            img: img1
        },
        {
            id: "444",
            type: "Men",
            img: img2
        },
    ]
    return () =>{
        return (
            <ProductData.Provider value={data}>
                <Component context= {ProductData}/>
            </ProductData.Provider>
        )
    }
}

export default ProductContext