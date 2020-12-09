import React, { Component, Fragment } from 'react'
import Header from '../components/Header'
import PageTop from '../components/PageTop'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import Privacy from '../components/Privacy'

export default class PrivacyPage extends Component {
    render() {
        return (
            <Fragment>
                <Header title="Privacy Policy"/>
                <PageTop title="Privacy Policy" description="Lorem Ipsum Dummy Text" />
                <Privacy/>
                <Cta/>
                <Footer/>
            </Fragment>
        )
    }
}
