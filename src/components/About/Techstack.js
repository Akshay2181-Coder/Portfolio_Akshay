import React from "react";
import {Col, Row} from "react-bootstrap";
import {CgCPlusPlus} from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiJava, DiFirebase, DiSqllite, DiJavascript,
} from "react-icons/di";
import {SiDart, SiFlutter, SiApple, SiAndroid} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons"><CgCPlusPlus/></Col>
            <Col xs={4} md={2} className="tech-icons"><SiApple/></Col>
            <Col xs={4} md={2} className="tech-icons"><SiAndroid/></Col>
            <Col xs={4} md={2} className="tech-icons"><SiDart/></Col>
            <Col xs={4} md={2} className="tech-icons"><SiFlutter/></Col>
            <Col xs={4} md={2} className="tech-icons"><DiFirebase/></Col>
            <Col xs={4} md={2} className="tech-icons"><DiSqllite/></Col>
            <Col xs={4} md={2} className="tech-icons"><DiJava/></Col>
            <Col xs={4} md={2} className="tech-icons"><DiJavascript/></Col>
            <Col xs={4} md={2} className="tech-icons"><DiJavascript1/></Col>
            <Col xs={4} md={2} className="tech-icons"><DiReact/></Col>
        </Row>
    );
}

export default Techstack;
