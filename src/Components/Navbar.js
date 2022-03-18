import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Navbox = {
    textDecoration: "none",
    color: "unset",
    fontSize: 20,
    fontWeight: "bold"
};

const LogoBox = {
    textDecoration: "none",
    color: "#2A2A2A",
    fontSize: 20,
    fontWeight: "bold"
};

export default function NavbarC() {
    return (
    <div>
        <div className='p-4 bg-light'>
            <Row >
                <Col xs={4} className="px-5">
                    <a href='#' style={LogoBox}>LOGO</a>
                </Col>
                <Col xs={8} className="px-5">
                    <Row>
                        <Col>
                            <Link style={Navbox} to="/">Home</Link>
                        </Col>
                        <Col>
                            <Link style={Navbox} to="/about">About</Link>
                        </Col>
                        <Col>
                            <Link style={Navbox} to="/contact">Contact</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    </div>
  )
}
