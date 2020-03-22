/** @jsx jsx */
import { Component } from 'React'
import { css, jsx } from '@Emotion/core'
import '../App.css'

/////////////////////////////////////
///          CSS Styles           ///
/////////////////////////////////////
const wrapper = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'box1  box1  box1';
    background-color: #fff;
    color: #444;
    width: 100%;
`
const box1 = css`
    padding: 20px;
    grid-area: box1;
`

class ThirdPage extends Component {
    public state: any = []
    constructor(props: any) {
        super(props)
        this.state = {
            data: null,
        }
    }
    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
    }

    onGridReady(params: any) {
        console.log(params)
        //params.api.resizeColumnsToFit();
        // TODO window.agGrid = params

        // resizes the columns so they fit
        params.api.sizeColumnsToFit()
        // TODO window.agGrid = params.api
    }

    render() {
        const hits = this.state.data
        if (hits) {
            return (
                <div className="bob" css={wrapper}>
                    <div css={box1}>
                        <div style={{ height: '600px', width: '600px' }}>
                            <div className="ag-theme-fresh"></div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="bob" css={wrapper}>
                        <div css={box1} style={{ paddingRight: '400px' }}>
                            <div className="lds-css ng-scope">
                                <div className="hundred lds-double-ring">
                                    <div></div>
                                    <div></div>
                                    <div>
                                        <div></div>
                                    </div>
                                    <div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default ThirdPage
