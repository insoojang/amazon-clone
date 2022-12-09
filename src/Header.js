import React from 'react'
// import '.Header.css'

const Header = (props) => {
    return (
        <div className="header">
            <img
                className="header_logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            <div className="header_search" type="text/">
                <input />
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_option">
                        <div className="header_optionLineOne">안녕하세요!</div>
                        <div className="header_optionLineTwo">로그인하기</div>
                    </span>
                    <span className="header_option">
                        <div className="header_optionLineOne">돌아가기</div>
                        <div className="header_optionLineTwo">주문내역</div>
                    </span>
                    <span className="header_option">
                        <div className="header_optionLineOne">반가워요</div>
                        <div className="header_optionLineTwo">구독과좋아요</div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
