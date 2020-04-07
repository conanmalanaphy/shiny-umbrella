/** @jsx jsx */
import { Component } from 'react'
import { css, jsx } from '@emotion/core'
import Carousel from 'antd/lib/carousel'

import 'antd/lib/carousel/style/index.css'
/////////////////////////////////////
///          CSS Styles           ///
/////////////////////////////////////
const mainwrapper = css`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 700px 700px 700px;
    grid-template-areas:
        'space'
        'about'
        'projects';
    font-family: 'Baloo Thambi 2', cursive;
`
const space = css`
    grid-area: space;
`
const wrapper = css`
    grid-area: about;
    display: grid;
    grid-template-columns: 20% 60% 20%;
    grid-template-rows: 600px;
    grid-template-areas: '... aboutMyself ...';
    background-color: #fff;
    color: #444;
    width: 100%;
    font-family: 'Baloo Thambi 2', cursive;
`

const aboutMyself = css`
    grid-area: aboutMyself;
    padding: 20px;
    font-size: 29px;
    font-family: 'Baloo Thambi 2', cursive;
`

const projectsWrapper = css`
    grid-area: projects;
    display: grid;
    grid-template-columns: 20% 60% 20%;
    grid-template-rows: 600px;
    grid-template-areas: '... project ...';
    background-color: #fff;
    color: #444;
    width: 100%;
    background-color: #2f325c47;
    textalign: 'center';
`
const project = css`
    grid-area: project;
    width: 100%;
    height: 90%;
    padding: 34px;
`
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
            <div css={mainwrapper}>
                <div className="fre" css={space}>
                    <div
                        style={{
                            position: 'absolute',
                            color: 'white',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <p style={{ fontSize: '30px' }}>
                            Hi, I'm <b>Conan Malanaphy.</b>
                        </p>
                        <p style={{ fontSize: '30px' }}>
                            I'm a Front End developer.
                        </p>
                        <div className="lookbelow">View my work</div>
                    </div>
                    <div id="stars"></div> <div id="stars2"></div>
                    <div id="stars3"></div>
                </div>
                <div css={wrapper}>
                    <div css={aboutMyself}>
                        <div style={{ textAlign: 'center' }}>
                            <h3
                                style={{
                                    textAlign: 'center',
                                    textDecoration: 'underline',
                                }}
                            >
                                About
                            </h3>
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
                                asd
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
                </div>
                <div css={projectsWrapper}>
                    <div css={project}>
                        <h2
                            style={{
                                textAlign: 'center',
                                textDecoration: 'underline',
                            }}
                        >
                            Projects
                        </h2>
                        <div style={{ height: '100%' }}>
                            <Carousel dotPosition={'top'} autoplay>
                                <div>
                                    <div className="whatsTheScore"></div>
                                </div>
                                <div>
                                    <div className="whatstheplan"></div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InitialPage
