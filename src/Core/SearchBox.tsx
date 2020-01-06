/** @jsx jsx */
import { Component } from 'React'
import { css, jsx } from '@Emotion/core'
import Carousel from 'antd/lib/carousel'
import 'antd/lib/carousel/style/index.css'

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
        this._handleKeyDown = this._handleKeyDown.bind(this)
    }

    _handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            this.getData()
        }
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
                        onKeyDown={this._handleKeyDown}
                    />
                    <button onClick={this.getData}>Search</button>
                    {this.state.Response == 'True' ? (
                        <div>
                            <h1>{this.state.Title}</h1>
                            <div
                                style={{
                                    height: '400px',
                                    width: '300px',
                                    objectFit: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    background:
                                        'url(' + this.state.Poster + ')',
                                    textAlign: 'center',
                                }}
                            ></div>
                            <div
                                style={{
                                    height: '400px',
                                    width: '300px',
                                }}
                            >
                                <Carousel>
                                    <div>
                                        <h3>{this.state.Ratings[0].Source}</h3>
                                    </div>
                                    <div>
                                        <h3>{this.state.Ratings[1].Source}</h3>
                                    </div>
                                    <div>
                                        <h3>{this.state.Ratings[2].Source}</h3>
                                    </div>
                                </Carousel>
                            </div>
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
