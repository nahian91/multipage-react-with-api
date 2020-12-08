import React, { Component, Fragment } from 'react'
import Header from '../components/Header'
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import PageTop from '../components/PageTop';
import Portfolio from '../components/Portfolio';

export default class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <PageTop title="Gorgeous Work" description="Lorem Ipsum Dummy Text"/>
                <Portfolio/>
                <Cta/>
                <Footer/>
            </Fragment>
        )
    }
}
