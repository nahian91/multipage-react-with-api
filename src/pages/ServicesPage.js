import React, { Component, Fragment } from 'react'
import Header from '../components/Header'
import Bannar from '../components/Bannar'
import Services from '../components/Services';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import PageTop from '../components/PageTop';

export default class ServicesPage extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <PageTop title="Our Services" description="Lorem Ipsum Dummy Text"/>
                <Services/>
                <Cta/>
                <Footer/>
            </Fragment>
        )
    }
}
