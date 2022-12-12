import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
import { v4 as uuidv4 } from 'uuid'

const Product = ({ title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: uuidv4(),
                title,
                image,
                price,
                rating,
            },
        })
    }
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
