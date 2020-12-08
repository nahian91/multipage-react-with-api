import React, { Component, Fragment } from 'react'
import Header from '../components/Header'
import PageTop from '../components/PageTop';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

export default class GalleryPage extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <PageTop title="Latest Gallery" description="Lorem Ipsum Dummy Text"/>
                <Gallery/>
                <Cta/>
                <Footer/>
            </Fragment>
        )
    }
}
