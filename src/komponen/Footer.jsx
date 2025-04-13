import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-success text-white mt- py-3">
            <Container>
                <Row className="text-center">
                    <Col md={6} className="mb-2">
                        <h5>Qur'an-Ku</h5>
                        <p className="mb-0">Menjadikan Al-Qur'an teman harianmu 🤲</p>
                    </Col>
                    <Col md={6}>
                        <p className="mb-0">
                            &copy; {new Date().getFullYear()} Qur'an-Ku. All rights reserved.
                        </p>
                        <small>By Ghilman Zikra</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
