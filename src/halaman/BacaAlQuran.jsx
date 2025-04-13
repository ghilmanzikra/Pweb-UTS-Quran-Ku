import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function BacaAlQuran() {
    const [surahList, setSurahList] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const juzMap = {
        1: [1, 2],
        2: [2],
        3: [2, 3],
        4: [3, 4],
        5: [4, 5],
        6: [5, 6],
        7: [6, 7],
        8: [7, 8],
        9: [8, 9],
        10: [9, 10],
        11: [10, 11],
        12: [11, 12],
        13: [12, 13],
        14: [13, 14],
        15: [15, 16],
        16: [16, 17],
        17: [17, 18],
        18: [18, 19],
        19: [19, 20],
        20: [20, 21],
        21: [21, 22],
        22: [22, 23],
        23: [23, 24],
        24: [24, 25],
        25: [25, 26],
        26: [26, 27],
        27: [27, 28],
        28: [28, 29],
        29: [29, 30],
        30: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
             51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 
             72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 
             93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 
             111, 112, 113, 114],
      };

      const [selectedJuz, setSelectedJuz] = useState('');

      

    useEffect(() => {
        axios.get('https://api.alquran.cloud/v1/surah')
            .then(res => {
                setSurahList(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const filteredSurah = surahList.filter((surah) => {
        const matchName = surah.englishName.toLowerCase().includes(search.toLowerCase());
        const matchJuz = selectedJuz === '' || (juzMap[selectedJuz] && juzMap[selectedJuz].includes(surah.number));
        return matchName && matchJuz;
      });
      

    return (
        <Container fluid className=" bacaalquran mt-4 ">
            <h3 className="text-center mt-4 mb-4 fw-bold text-success">Daftar Surah</h3>

            <Row>
                <Col>
                    <Form.Select
                        className="mb-3"
                        value={selectedJuz}
                        onChange={(e) => setSelectedJuz(e.target.value)}
                        >

                        <option value="">Semua Surah</option>
                            {[...Array(30)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>
                                    Juz {i + 1}
                        </option>

                        ))}
                    </Form.Select>
                </Col>
                <Col>
                    <Form className="mb-4">
                        <Form.Control
                            type="text"
                            placeholder="Cari surah berdasarkan nama (misal: Yusuf, Maryam...)"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            />
                        </Form> 
                </Col>
            </Row>
            
            {loading ? (
                <div className="text-center">
                    <Spinner animation="border" variant="success" />
                </div>
            ) : (
                <Row xs={1} md={2} lg={3}>
                    {filteredSurah.map((surah) => (
                        <Col key={surah.number} className="mb-3">
                            <Link to={`/surah/${surah.number}`} className="text-decoration-none">
                                <Card className="h-100 shadow-sm border-success">
                                    <Card.Body>
                                        <Card.Title className="fw-bold text-success">
                                            {surah.number}. {surah.englishName}
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 fw-bold">
                                            {surah.name}
                                        </Card.Subtitle>
                                        <Card.Text className='text-muted'>
                                            Jumlah Ayat: {surah.numberOfAyahs}
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

export default BacaAlQuran;
