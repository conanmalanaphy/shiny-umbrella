/** @jsx jsx */
import { Component } from 'react'
import { css, jsx } from '@emotion/core'
import Carousel from 'antd/lib/carousel'
import React from 'react'
import 'antd/lib/carousel/style/index.css'
import '../Css/css/all.min.css'
import '../index.css'
/////////////////////////////////////
///          CSS Styles           ///
/////////////////////////////////////
const mainwrapper = css`
    display: flex;
    flex-direction: column;
`
const space = css`
    display: flex;
    flex-grow: 1;
    height: 100vh;
    scroll-snap-align: start;
`

const wrapper = css`
    display: grid;
    flex-grow: 1;
    height: 100vh;
    min-height: 440px;
    grid-template-columns: 20% 60% 20%;
    grid-template-rows: 100vh;
    grid-template-areas: '... aboutMyself ...';
    background-color: #fff;
    color: #444;
    width: 100%;
    font-family: 'Baloo Thambi 2', cursive;
    scroll-snap-align: start;
`

const aboutMyself = css`
    grid-area: aboutMyself;
    padding: 20px;
    font-size: 29px;
    font-family: 'Baloo Thambi 2', cursive;
`

const projectsWrapper = css`
    display: grid;
    flex-grow: 1;
    height: 100vh;
    grid-template-columns: 20% 60% 20%;
    grid-template-rows: 600px;
    grid-template-areas: '... project ...';
    background-color: #fff;
    color: #444;
    width: 100%;
    background-color: #2f325c47;
    textalign: 'center';
    scroll-snap-align: start;
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
        this.myRef = React.createRef()  
    }

    executeScroll = () => this.myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

    render() {
        return (
            <div css={mainwrapper}>
                <div css={space} className="fre">
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
                        <div id="rotator" className="lookbelow" onClick={this.executeScroll}> 
                            View my work
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                    <div id="stars"></div> <div id="stars2"></div>
                    <div id="stars3"></div>
                </div>
                <div css={wrapper} id="about-me">
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
                        </div>
                        <div style={{ width: '100%' }}>
                            <div
                                style={{
                                    width: '20%',
                                    color: 'black',
                                    border: '2px solid black',
                                    borderRadius: '5px',
                                    padding: '10px',
                                    boxShadow:
                                        'rgb(136, 136, 136) 10px 10px 5px',
                                }}
                                className="moveacross"
                            >
                                <span
                                    style={{
                                        display: 'inline-block',
                                        width: '35%',
                                        textAlign: 'center',
                                    }}
                                >
                                    {' '}
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="/conan_malanaphy_cv.pdf"
                                        style={{
                                            color: '#001529',
                                            fontSize: '55px',
                                        }}
                                    >
                                        <i
                                            className="fa fa-file"
                                            aria-hidden="true"
                                        ></i>
                                    </a>
                                </span>
                                <span
                                    style={{
                                        display: 'inline-block',
                                        width: '30%',
                                        textAlign: 'center',
                                    }}
                                >
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://www.linkedin.com/in/conan-malanaphy-946260a7/"
                                        style={{
                                            color: '#001529',
                                            fontSize: '55px',
                                        }}
                                    >
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </span>
                                <span
                                    style={{
                                        display: 'inline-block',
                                        width: '35%',
                                        textAlign: 'center',
                                    }}
                                >
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/conanmalanaphy"
                                        style={{
                                            color: '#001529',
                                            fontSize: '55px',
                                        }}
                                    >
                                        <i className="fab fa-github"></i>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div css={projectsWrapper} id="project"  ref={this.myRef}>
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
