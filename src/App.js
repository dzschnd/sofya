import React from "react";
import './App.scss'
import {Welcome, Info, Portfolio, Services, Prices, Quote, QnA, Contacts} from './container'
import './assets/fonts/RozoviiChulok.ttf'

const App = () => {
    return (
        <div className='app'>
            <Welcome/>
            <Info/>
            <Portfolio/>
            <Services/>
            <Prices/>
            <Quote/>
            <QnA/>
            <Contacts/>
        </div>
    )
}

export default App