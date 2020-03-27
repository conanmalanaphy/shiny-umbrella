/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import SearchBox from './SearchBox'
// fun
/// https://codepen.io/yoannhel/pen/sJpDj

// https://codepen.io/juanbrujo/pen/yGpAK
const elegantshadow = css`
    font-family: 'Avant Garde', Avantgarde, 'Century Gothic', CenturyGothic,
        'AppleGothic', sans-serif;
    font-size: 92px;
    padding: 80px 50px;
    text-align: center;
    text-transform: uppercase;
    text-rendering: optimizeLegibility;
    color: #131313;
    background-color: #e7e5e4;
    letter-spacing: 0.15em;
    text-shadow: 1px -1px 0 #767676, -1px 2px 1px #737272, -2px 4px 1px #767474,
        -3px 6px 1px #787777, -4px 8px 1px #7b7a7a, -5px 10px 1px #7f7d7d,
        -6px 12px 1px #828181, -7px 14px 1px #868585, -8px 16px 1px #8b8a89,
        -9px 18px 1px #8f8e8d, -10px 20px 1px #949392, -11px 22px 1px #999897,
        -12px 24px 1px #9e9c9c, -13px 26px 1px #a3a1a1, -14px 28px 1px #a8a6a6,
        -15px 30px 1px #adabab, -16px 32px 1px #b2b1b0, -17px 34px 1px #b7b6b5,
        -18px 36px 1px #bcbbba, -19px 38px 1px #c1bfbf, -20px 40px 1px #c6c4c4,
        -21px 42px 1px #cbc9c8, -22px 44px 1px #cfcdcd, -23px 46px 1px #d4d2d1,
        -24px 48px 1px #d8d6d5, -25px 50px 1px #dbdad9, -26px 52px 1px #dfdddc,
        -27px 54px 1px #e2e0df, -28px 56px 1px #e4e3e2;
`
const ComboBox: React.FunctionComponent = () => {
    return (
        <div>
            <div css={elegantshadow}>Whats the ratings</div>
        </div>
    )
}

const WhatsTheRating: React.FunctionComponent = () => (
    <div>
        <ComboBox />
        <SearchBox />
    </div>
)

export default WhatsTheRating
