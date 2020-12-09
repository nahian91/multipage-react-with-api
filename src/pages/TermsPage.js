import React, { Component, Fragment } from 'react'
import Header from '../components/Header'
import PageTop from '../components/PageTop'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import Terms from '../components/Terms'

export default class TermsPage extends Component {
    render() {
        return (
            <Fragment>
                <Header title="Terms & Conditions Page"/>
                <PageTop title="Terms & Conditions" description="Lorem Ipsum Dummy Text" />
                <Terms/>
                <Cta/>
                <Footer/>
            </Fragment>
        )
    }
}
