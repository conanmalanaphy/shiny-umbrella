/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import './App.css'
import BasicMenu from './Core/Menu'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import ComboBox from './Core/ComboBox'
import InitialPage from './Core/InitialPage'
import SecondPage from './Core/SecondPage'
import ThirdPage from './Core/ThirdPage'

/////////////////////////////////////
///          CSS Styles           ///
/////////////////////////////////////
const wrapper = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 64px 700px 100px;
    grid-template-areas:
        'basicMenu   basicMenu   basicMenu'
        'dashboard     dashboard     dashboard'
        'footer   footer   footer';
    background-color: #fff;
    color: #444;
`
const basicMenu = css`
    grid-area: basicMenu;
`
const dashboard = css`
    grid-area: dashboard;
    display: inline-block;
`
const comboBox2 = css`
    grid-area: comboBox2;
`

function App() {
    const count = 5

    return (
        <Router>
            <div>
                <div css={wrapper}>
                    <div css={basicMenu}>
                        <BasicMenu />
                    </div>
                    <div css={dashboard}>
                        <Route exact path="/" render={() => <InitialPage />} />
                        <Route
                            path="/my-things"
                            render={() => <SecondPage />}
                        />
                        <Route path="/learnt" render={() => <ThirdPage />} />
                    </div>
                    {count.length > 2 && (
                        <div css={comboBox2}>
                            <ComboBox multiple="default" value={count} />
                        </div>
                    )}
                </div>
            </div>
        </Router>
    )
}
export default App
