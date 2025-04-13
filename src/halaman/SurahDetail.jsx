import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';

function DetailSurah() {
    const { nomor } = useParams();
    const [arabSurah, setArabSurah] = useState(null);
    const [indoSurah, setIndoSurah] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            try {
                const [resArab, resIndo] = await Promise.all([
                    axios.get(`https://api.alquran.cloud/v1/surah/${nomor}`),
                    axios.get(`https://api.alquran.cloud/v1/surah/${nomor}/id.indonesian`)
                ]);

                setArabSurah(resArab.data.data);
                setIndoSurah(resIndo.data.data);
                setLoading(false);
                
            } catch (err) {
                console.error('Gagal mengambil data:', err);
                setLoading(false);
            }
        };

        fetchData();
    }, [nomor]);

    if (loading || !arabSurah || !indoSurah) {
        return (
            <Container className="text-center mt-5">
                <Spinner animation="border" variant="success" />
                <p>Loading surah...</p>
            </Container>
        );
    }

    return (
        <Container className='surahdetail mt-4' fluid>
            <Row className="mb-4">
                <Col>
                    <h3 className="fw-bold">
                        {arabSurah.englishName} ({arabSurah.name})
                    </h3>
                    <p className="text-muted mx-5">
                        Diturunkan di: {arabSurah.revelationType} | Jumlah Ayat: {arabSurah.numberOfAyahs}
                    </p>
                    <Button as={Link} to="/quran" variant="outline-success" className="mb-3 mx-5 shadow-sm">
                        ← Kembali ke daftar surah
                    </Button>
                </Col>
            </Row>

            {arabSurah.ayahs.map((ayat, index) => (
                <Card key={ayat.number} className="mb-3 mx-5 shadow-sm border-success rounded-3">
                    <Card.Body>
                        <Card.Text className="text-end fs-4" dir="rtl">
                            {ayat.text}
                        </Card.Text>
                        <Card.Text className="text-start text-muted">
                            {ayat.numberInSurah}. {indoSurah.ayahs[index]?.text || '(Terjemahan tidak tersedia)'}
                        </Card.Text>
                        <Card.Footer className="text-end text-secondary">Ayat {ayat.numberInSurah}</Card.Footer>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
}

export default DetailSurah;
