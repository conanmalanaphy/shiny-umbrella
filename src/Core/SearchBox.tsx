/** @jsx jsx */
import { Component } from 'React'
import { css, jsx } from '@Emotion/core'
import Carousel from 'antd/lib/carousel'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'

import 'antd/lib/input/style/index.css'
import 'antd/lib/button/style/index.css'
import 'antd/lib/carousel/style/index.css'

/////////////////////////////////////
///          CSS Styles           ///
/////////////////////////////////////

const box1 = css`
    grid-area: box4;
    padding: 20px;
    margin: 'auto';
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
        fetch('https://www.omdbapi.com/?t=' + name + '&apikey=c18b03c2')
            .then(response => response.json())
            .then(data => this.setState(data))
    }

    render() {
        return (
            <div>
                <div style={{ textAlign: 'center', paddingTop: 25 }}>
                    <Input
                        style={{ width: 220, marginRight: 20 }}
                        type="text"
                        name="fname"
                        id="SearchTerm"
                        placeholder="Enter a film name"
                        onKeyDown={this._handleKeyDown}
                    />
                    <Button type="primary" onClick={this.getData}>
                        Search
                    </Button>
                    {this.state.Response == 'True' ? (
                        <div style={{ width: '100%' }}>
                            <h1>{this.state.Title}</h1>
                            <div
                                style={{
                                    height: '420px',
                                    width: '300px',
                                    objectFit: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    background:
                                        'url(' + this.state.Poster + ')',
                                    textAlign: 'center',
                                    margin: 'auto',
                                }}
                            ></div>
                            <div
                                style={{
                                    height: '180px',
                                    width: '300px',
                                    margin: 'auto',
                                }}
                            >
                                <Carousel autoplay>
                                    {this.state.Ratings.map((rating: any) => {
                                        return (
                                            <div key={rating.Source}>
                                                <h3>{rating.Source}</h3>
                                                <h1>{rating.Value}</h1>
                                            </div>
                                        )
                                    })}
                                </Carousel>
                            </div>
                            <div
                                style={{
                                    height: '120px',
                                    width: '300px',
                                    margin: 'auto',
                                    paddingBottom: '20px',
                                }}
                            >
                                <p>{this.state.Plot}</p>
                            </div>
                        </div>
                    ) : (
                        <div css={box1}>
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
