import React, { Component, Fragment } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import AppURL from '../RestAPI/AppURL'
import RestClient from '../RestAPI/RestClient'

export default class Team extends Component {

    constructor(){
        super();

        this.state={
            myData:[]
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppURL.Teams).then(result=>{
            this.setState({myData:result})
        });
    }

    render() {

        const teamsList = this.state.myData;
        const teams = teamsList.map(teamsList => {
            return <Col lg={4}>
                <div className="singleTeam">
                    <img src={teamsList.image}/>
                    <div className="teamOverlay">
                        <div className="teamContent">
                            <h4>{teamsList.name} <span>{teamsList.designation}</span></h4>
                            <a href={teamsList.fb_link}><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href={teamsList.tw_link}><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href={teamsList.insta_link}><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href={teamsList.youtube_link}><FontAwesomeIcon icon={faYoutube} /></a>
                        </div>
                    </div>
                </div>
            </Col>
        });

        return (
            <Fragment>
                <Container className="pt-100 pb-100">
                    <Row className="sectionTitle">
                        <Col lg={6}>
                            <h3><span>who we are?</span> skilled team</h3>
                        </Col>
                        <Col lg={6}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry.d </p>
                        </Col>
                    </Row>
                    <Row>
                        {teams}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
