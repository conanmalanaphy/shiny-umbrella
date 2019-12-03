/** @jsx jsx */
import { Component } from 'react'
import { css, jsx } from '@emotion/core'
import SearchBox from './SearchBox'
/////////////////////////////////////
///          CSS Styles           ///
/////////////////////////////////////
const wrapper = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 300px 300px 300px;
    grid-template-areas:
        'box1   box2   box3'
        'box4 box4 box4';
    background-color: #fff;
    color: #444;
    width: 100%;
`

const box1 = css`
    padding: 20px;
    grid-area: box1;
`

const box2 = css`
    grid-area: box2;
    display: inline-block;
    padding: 20px;
`
const box3 = css`
    grid-area: box3;
    padding: 20px;
`

const pStyle = {
    width: '90%',
    color: 'black',
    backgroundColor: '#001628',
    border: '2px solid black',
    borderRadius: '5px',
    padding: '10px',
    MozBoxShadow: '10px 10px 5px #888',
    WebkitBoxShadow: '10px 10px 5px #888',
    boxShadow: '10px 10px 5px #888',
}

const dStyle = {
    width: '100%',
    color: 'black',
    backgroundColor: '#C4C4C4',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '5px',
}

class InitialPage extends Component {
    public state: any = []
    constructor(props: any) {
        super(props)
        this.state = {
            data: null,
        }
        this.getData = this.getData.bind(this)
    }

    getData() {
        var name = (document.getElementById('SearchTerm') as HTMLInputElement)
            .value
        fetch('http://www.omdbapi.com/?t=' + name + '&apikey=c18b03c2')
            .then(
                response => response.json()
                //ttioo
            )
            .then(
                data => this.setState(data)
                // test
            )
    }

    render() {
        return (
            <div>
                <div className="parallax"></div>

                <div className="bob" css={wrapper}>
                    <div css={box1}>
                        {' '}
                        <div style={pStyle}>
                            {' '}
                            <div style={dStyle}>Conan</div>
                        </div>
                    </div>
                    <div css={box2}>
                        {' '}
                        <div style={pStyle}>
                            {' '}
                            <div style={dStyle}>Malanaphy</div>
                        </div>
                    </div>
                    <div css={box3}>
                        <div style={pStyle}>
                            {' '}
                            <div style={dStyle}>2019</div>
                        </div>
                    </div>
                    <SearchBox />
                </div>
            </div>
        )
    }
}

export default InitialPage
