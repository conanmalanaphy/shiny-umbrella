/** @jsx jsx */
import { Component } from 'React'
import { css, jsx } from '@Emotion/core'
/////////////////////////////////////
///          CSS Styles           ///
/////////////////////////////////////
const wrapper = css`
    display: grid;
    grid-template-columns: 20% 60% 20%;
    grid-template-rows: 600px 200px 200px 200px;
    grid-template-areas:
        '... aboutMyself ...'
        '... whatsTheRating ...'
        '... whatsTheScore ...'
        '... whatsThePlan ...';
    background-color: #fff;
    color: #444;
    width: 100%;
`

const whatsTheRating = css`
    padding: 20px;
    grid-area: whatsTheRating;
`

const whatsThePlan = css`
    grid-area: whatsThePlan;
    display: inline-block;
    padding: 20px;
`
const whatsTheScore = css`
    grid-area: whatsTheScore;
    padding: 20px;
`
const aboutMyself = css`
    grid-area: aboutMyself;
    padding: 20px;
    font-size: 29px;
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
    width: 'auto',
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
    }
    render() {
        return (
            <div>
                <div className="parallax"></div>

                <div css={wrapper}>
                    <div css={aboutMyself}>
                        <div style={{ textAlign: 'center' }}>
                            <h3> About</h3>
                            <p>
                                I am Conan Malanaphy, a Front-End Developer
                                based in London. I am primarily focused on
                                website and interface development for web
                                applications but I love taking on any good front
                                end dev challenge. Currently working on a react
                                website for asset management. I have projects
                                below that show the different areas I know.
                            </p>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="/conan_malanaphy_cv.pdf"
                            >
                                My CV
                            </a>
                        </div>
                        <p style={{ textAlign: 'center' }}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/conan-malanaphy-946260a7/"
                            >
                                Linked in
                            </a>
                        </p>
                        <p style={{ textAlign: 'center' }}>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/conanmalanaphy"
                            >
                                GitHub
                            </a>
                        </p>
                    </div>
                    <div css={whatsTheRating}>
                        <div style={pStyle}>
                            {' '}
                            <div style={dStyle}>
                                Whats the ratings - Restful Api Project Image +
                                what its about React image
                            </div>
                        </div>
                    </div>
                    <div css={whatsTheScore}>
                        {' '}
                        <div style={pStyle}>
                            {' '}
                            <div style={dStyle}>
                                Whats the Score - Python project Image + what
                                its about
                            </div>
                        </div>
                    </div>
                    <div css={whatsThePlan}>
                        <div style={pStyle}>
                            {' '}
                            <div style={dStyle}>
                                Whats the plan - React Project Image + what its
                                about
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InitialPage
