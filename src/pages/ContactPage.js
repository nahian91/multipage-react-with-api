import React, { Component, Fragment } from 'react'
import Header from '../components/Header'
import PageTop from '../components/PageTop';
import Contact from '../components/Contact'
import Cta from '../components/Cta';
import Footer from '../components/Footer';

export default class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <PageTop title="Contact Us" description="Lorem Ipsum Dummy Text"/>
                <Contact/>
                <Cta/>
                <Footer/>
            </Fragment>
        )
    }
}
