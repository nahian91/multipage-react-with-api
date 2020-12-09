import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faCog, faMobileAlt, faMagic, faPencilAlt, faLightbulb} from '@fortawesome/free-solid-svg-icons'
import VisibilitySensor from 'react-visibility-sensor'
import AppURL from '../RestAPI/AppURL'
import RestClient from '../RestAPI/RestClient'

export default class Counter extends Component {

    constructor(){
        super();

        this.state={
            myData:[]
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppURL.Counters).then(result=>{
            this.setState({myData:result})
        });
    }


    render() {

        const counterssList = this.state.myData;
        const counters = counterssList.map(counterssList => {
            return <Col lg={3}>
            <div className="singleCounter">
                <FontAwesomeIcon icon={faLaptop} /> 
                <div className="counterContent">
                    <CountUp start={0} end={counterssList.number} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                            <span ref={countUpRef} />
                            <h4>{counterssList.title}</h4>
                            </div>
                        )}
                    </CountUp>
                </div>
            </div>
        </Col>
        });
        
        return (
            <Fragment>
                <Container fluid className="counterArea">
                    <Row>
                        {counters}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
