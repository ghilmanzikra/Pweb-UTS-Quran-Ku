import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner, Card } from 'react-bootstrap';
import axios from 'axios';

function AsmaulHusna() {
    const [names, setNames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.aladhan.com/v1/asmaAlHusna')
            .then(res => {
                setNames(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <Container className='asmaulhusna mt-5' fluid>
            <Row className="mb-4">
                <Col className='mt-4'>
                    <h2 className="text-center fw-bold text-success">Asmaul Husna</h2>
                    <h5 className='text-center fs-6 fw-normal border border-white rounded mx-5'>Nama-Nama Baik Allah </h5>
                </Col>
            </Row>
            {loading ? (
                <div className="text-center">
                    <Spinner animation="border" variant="success" />
                </div>
            ) : (
                <Row xs={1} md={2} lg={3}>
                    {names.map((name) => (
                        <Col key={name.number} className="mb-3">
                            <Card className="h-100 shadow-sm border-success rounded-3">
                                <Card.Body>
                                    <Card.Title className="text-center fw-bold text-success">
                                        {name.number}. {name.name}
                                    </Card.Title>
                                    <Card.Subtitle className="text-center mb-2 fw-bold text-success">
                                        {name.transliteration}
                                    </Card.Subtitle>
                                    <Card.Text className="text-center">
                                        {name.en.meaning}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default AsmaulHusna;
