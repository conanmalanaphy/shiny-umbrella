/** @jsx jsx */
import { Component } from 'react'
import { css, jsx } from '@emotion/core'
import '../App.css'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid/dist/styles/ag-grid.css'
import 'ag-grid/dist/styles/ag-theme-fresh.css'

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
/*
const box2 = css`
    grid-area: box2;
    display: inline-block;
    padding: 20px;
`
const box3 = css`
    grid-area: box3;
    padding: 20px;
`

const box4 = css`
    grid-area: box4;
    text-align: center;
    padding: 20px;
`
const sayHello = function() {}
const pStyle = {
    width: '90%',
    color: 'black',
    backgroundColor: '#001628',
    border: '2px solid black',
    borderRadius: '5px',
    padding: '10px',
    MozBoxShadow: '3px 3px 5px 6px #ccc',
    WebkitBoxShadow: '3px 3px 5px 6px #ccc',
    boxShadow: '3px 3px 5px 6px #ccc',
}

const dStyle = {
    width: '100%',
    color: 'black',
    backgroundColor: '#C4C4C4',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '5px',
}
*/
const columnDefs = [
    { headerName: 'Setup', field: 'name' },
    { headerName: 'PunchLine', field: 'role' },
]

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
            const dat = hits.map((hit: any) => {
                return { name: hit.setup, role: hit.punchline }
            })
            return (
                <div className="bob" css={wrapper}>
                    <div css={box1}>
                        <div style={{ height: '600px', width: '600px' }}>
                            <div className="ag-theme-fresh">
                                <AgGridReact
                                    onGridReady={this.onGridReady}
                                    domLayout="autoHeight"
                                    columnDefs={columnDefs}
                                    rowData={dat}
                                ></AgGridReact>
                            </div>
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
