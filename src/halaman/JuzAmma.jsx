import React, { useState, useEffect, use } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function JuzAmma() {
    const [surahList, setSurahList] = useState([]);
    const [loading, setLoading] = useState(true);

    const juz30SurahNumbers = [
        78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
        91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101,
        102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114
    ];

    useEffect(() => {
        axios.get('https://api.alquran.cloud/v1/surah')
            .then(res => {
                const juzAmmaSurahs = res.data.data.filter(surah => 
                    juz30SurahNumbers.includes(surah.number)
                );
                setSurahList(juzAmmaSurahs);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <Container className='juzamma mt-4' fluid>
            <h3 className="text-center mb-4 fw-bold text-success">Surah </h3>
            <Row>
                <Col>
                    <h2 className='justify-content-center text-center text-success fw-bold py-2'>Juz Amma</h2>
                </Col>
            </Row>
            {loading ? (
                <div className="text-center">
                    <Spinner animation="border" variant="success" />
                </div>
            ) : (
                <Row xs={1} md={2} lg={3}>
                    {surahList.map((surah) => (
                        <Col key={surah.number} className="mb-3">
                            <Link to ={`/surah/${surah.number}`} className="text-decoration-none">
                            <Card className="h-100 shadow-sm border-success card-hover rounded-3">
                                <Card.Body>
                                    <Card.Title className="text-start fw-bold text-success">
                                        {surah.number}.{surah.englishName}
                                    </Card.Title>
                                    <Card.Subtitle className="text-start fw-bold ">
                                        {surah.name}
                                    </Card.Subtitle>
                                    <Card.Text className="text-start text-muted">
                                        {surah.revelationType} | Jumlah ayat : {surah.numberOfAyahs}
                                    </Card.Text>
                                    <Link to={`/surah/${surah.number}`} className="btn btn-success w-10">Baca Surah</Link>
                                </Card.Body>
                            </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            )}
            
        </Container>
    );
}

export default JuzAmma;
