/** @jsx jsx */
import { Component } from 'react'
import { css, jsx } from '@emotion/core'
/////////////////////////////////////
///          CSS Styles           ///
/////////////////////////////////////
const box4 = css`
    grid-area: box4;
    padding: 20px;
`

class SearchBox extends Component {
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
                <div css={box4}>
                    {' '}
                    <input
                        type="text"
                        name="fname"
                        id="SearchTerm"
                        placeholder="Enter a film name"
                    />
                    <button onClick={this.getData}>Search</button>
                    {this.state.Response == 'True' ? (
                        <div>
                            <h1>{this.state.Title}</h1>
                            <div
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'auto',
                                    background:
                                        'url(' + this.state.Poster + ')',
                                }}
                            ></div>
                            <h2>{this.state.imdbRating}</h2>
                            <p>{this.state.Plot}</p>
                        </div>
                    ) : (
                        <div css={box4}>
                            {' '}
                            {this.state.Response == 'False' ? (
                                <div>Plese enter a correct film</div>
                            ) : (
                                <div>Please enter a show/film name</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default SearchBox
