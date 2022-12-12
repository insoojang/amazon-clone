import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'

const Subtotal = () => {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={() => (
                    <>
                        <p>
                            총액 (0 items) : <strong> 0원 </strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> 체크박스입니다.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>결제하기</button>
        </div>
    )
}

export default Subtotal
