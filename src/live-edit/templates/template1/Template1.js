import React, { Component } from 'react'



import Header from './sections/Header'
import Offers from './sections/Offers'
import Boxies from './sections/Boxies'
import Contact from './sections/Contact'
import GetStarted from './sections/GetStarted'
import Footer from './sections/Footer'


import './Template1.scss';


export class Template1 extends Component {
    render() {
        return (
            <div className='template1'>
                <Header />
                <Offers />
                <Boxies />
                <Contact />
                <GetStarted />
                <Footer />
            </div>
        )
    }
}

export default Template1
