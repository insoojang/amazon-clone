import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

const Product = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating,
            },
        })
    }
    console.log('장바구니', basket)
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>가격</small>
                    <strong>{price}</strong>
                    <small>원</small>
                </p>
            </div>

            <div className="product_rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => {
                        return <p key={i}>★</p>
                    })}
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>장바구니에 담기</button>
        </div>
    )
}

export default Product
