import React, { Component, Fragment } from 'react'
import Header from '../components/Header'
import Bannar from '../components/Bannar'
import About from '../components/About'
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import PageTop from '../components/PageTop';

export default class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <PageTop title="About Us" description="Lorem Ipsum Dummy Text"/>
                <About/>
                <Cta/>
                <Footer/>
            </Fragment>
        )
    }
}
