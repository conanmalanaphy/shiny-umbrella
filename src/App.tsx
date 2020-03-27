/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import './App.css'
import BasicMenu from './Core/Menu'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import InitialPage from './Core/InitialPage'
import WhatsTheRating from './Core/WhatsTheRating'
import WhatsThePlan from './Core/WhatsThePlan'

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

function App() {
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
                            path="/WhatsTheRating"
                            render={() => <WhatsTheRating />}
                        />
                        <Route
                            path="/WhatsThePlan"
                            render={() => <WhatsThePlan />}
                        />
                    </div>
                </div>
            </div>
        </Router>
    )
}
export default App
