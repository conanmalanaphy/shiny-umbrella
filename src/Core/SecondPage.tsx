/** @jsx jsx */
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'

import 'antd/lib/input/style/index.css'
import 'antd/lib/button/style/index.css'

import { css, jsx } from '@Emotion/core'
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
            <div css={elegantshadow}>sdsds</div>
            eee
        </div>
    )
}

const InitialPage: React.FunctionComponent = () => (
    <div>
        <ComboBox />
        Conans Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        sed dictum lacus. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. In accumsan tellus purus, id
        sodales ex consectetur et. Nulla congue laoreet ligula vitae lacinia.
        Integer iaculis sem ut est sagittis, eu vulputate mi venenatis. Morbi
        mauris magna, scelerisque et vehicula sit amet, scelerisque et neque. Ut
        gravida ac massa at fringilla. Aenean maximus ultrices lectus ac
        sollicitudin. Nullam nisi tortor, hendrerit vitae sagittis eu, gravida
        eu est. Cras ullamcorper augue sed malesuada vestibulum. In fringilla
        faucibus sapien, ut aliquam tellus ultricies a. Aenean accumsan nisi
        quis leo dapibus rutrum. Mauris euismod nulla nulla, id mattis libero
        tincidunt eu. Vivamus sit amet dolor purus. Mauris a egestas dolor. Ut
        molestie sagittis tincidunt. Ut sit amet maximus nisl. Suspendisse
        feugiat, sapien ac vehicula vestibulum, sem orci cursus dolor, eu
        ullamcorper quam purus et elit. Nullam lectus risus, euismod at ipsum a,
        molestie egestas erat. Quisque ultrices ligula a ligula sagittis, vitae
        vestibulum nisi molestie. Vestibulum sit amet justo vel mi consectetur
        tempus. Fusce non est pretium, euismod sapien vestibulum, posuere est.
        Aenean augue lorem, ultrices quis urna non, blandit dictum elit. Cras
        commodo ac libero id porttitor. Sed luctus consectetur massa vitae
        fermentum. Vestibulum congue quis nunc in sodales. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Phasellus lobortis sagittis risus, id tempor diam finibus et. Proin a
        nisi varius, vestibulum dui in, hendrerit erat. In pretium sagittis
        magna in consequat. Mauris id odio ligula. Pellentesque egestas porta
        quam, vitae sollicitudin justo pellentesque nec. Integer tellus justo,
        ullamcorper in aliquam et, bibendum ac urna. Etiam justo nisl, imperdiet
        a rutrum rhoncus, rutrum vitae erat. Nullam sit amet felis mollis,
        euismod urna et, dictum elit. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Nullam et porta
        neque. Duis non ligula tempor, finibus erat nec, finibus mauris. Nulla
        interdum felis nec urna tincidunt porta. Morbi diam orci, lacinia eget
        lacinia id, venenatis vel odio. Vestibulum ullamcorper est leo, ut
        convallis ante sagittis ut. Vivamus id magna elit.
        <Input placeholder="Basic usage" />
        <Button type="primary">Primary</Button>
        <SearchBox />
    </div>
)

export default InitialPage
