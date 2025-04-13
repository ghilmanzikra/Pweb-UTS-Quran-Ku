import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Gambar1 from '../assets/gambar1.jpg';
import Gambar2 from '../assets/gambar2.jpg';
import Gambar5 from '../assets/gambar5.jpg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home min-vh-100 width-100'>
            <Container className='mb-4' style={{marginTop: 50}} fluid='md'>

                <Row>
                    <Col>
                    <Carousel className='carousel-custom'fade>
                        <Carousel.Item>
                        <img className="d-block w-100" src={Gambar1} alt="assets"/>
                                <Carousel.Caption className='pt-5'>
                                    <h4 className='pt-5'>"Bacalah Al-Qur'an, karena sesungguhnya ia akan menjadi syafaat bagi para pembacanya di hari kiamat."</h4>
                                    <p>(HR. Muslim)</p>
                                </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                        <img className="d-block w-100" src={Gambar2} alt="assets"/>
                        <Carousel.Caption className='pt-5 '>
                                    <h4 className='pt-5'>"Orang yang membaca Al-Qur'an dan ia mahir membacanya, maka kelak ia akan bersama para malaikat yang mulia lagi taat kepada Allah."</h4>
                                    <p>(HR. Bukhari dan Muslim)</p>
                        </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                        <img className="d-block w-100" src={Gambar5} alt="assets"/>
                        <Carousel.Caption className='pt-5 '>
                                    <h4 className='pt-5'>"Orang yang membaca Al-Qur'an dan ia mahir membacanya, maka kelak ia akan bersama para malaikat yang mulia lagi taat kepada Allah."</h4>
                                    <p>(HR. Bukhari dan Muslim)</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </Col>
                </Row>

                <Row className='mx-2'>
                    <Col className='bg-light justify-content-center text-center border border-success rounded-4 mt-3 mb-1 mx-1'>
                        <h5 className='fw-bold  pt-3 text-success'> Assalamu'alaikum</h5>
                        <p className='text-success'>Selamat Datang Di Quran-Ku. Ayo Jelajahi Fitur Yang Kami Sediakan</p>
                       
                    </Col>
                </Row>

                <Row className="mx-2">
                    <Col as={Link} to="/quran" className='bg-success justify-content-center text-center border rounded-4 mt-3 mb-1 mx-1 py-3 shadow-sm hover-scale'
                        style={{ textDecoration: 'none', transition: 'transform 0.3s' }}>
                        <h5 className='fw-bold p-2 pt-3 text-white'>Baca Al-Qur'an</h5>
                    </Col>
                    <Col as={Link} to="/juzamma" className='bg-success justify-content-center text-center border rounded-4 mt-3 mb-1 mx-1 py-3 shadow-sm hover-scale'
                        style={{ textDecoration: 'none', transition: 'transform 0.3s' }}>
                        <h5 className='fw-bold p-2 pt-3 text-white'>Juz Amma</h5>
                    </Col>
                    <Col as={Link} to="/asmaulhusna" className='bg-success justify-content-center text-center border rounded-4 mt-3 mb-1 mx-1 py-3 shadow-sm hover-scale'
                        style={{ textDecoration: 'none', transition: 'transform 0.3s' }}>
                        <h5 className='fw-bold p-2 pt-3 text-white'>Asmaul Husna</h5>
                    </Col>
                </Row>

                <Row className='mx-2 mt-3'>
                    <Col className='bg-light text-center border border-success rounded-4 p-4 shadow-md mx-1'>
                        <h5 className='fw-bold text-success mb-3'>✨ Doa Hari Ini</h5>
                        <p className='fst-italic'>"رَّبِّ زِدْنِي عِلْمًا"</p>
                        <p className='text-muted mb-2'>“Ya Tuhanku, tambahkanlah kepadaku ilmu.”</p>
                        <small className='text-secondary'>(QS. Taha: 114)</small>
                    </Col>
                    <Col className='bg-light text-success text-center border border-success rounded-4 p-3 shadow-md mx-1'>
                        <h5 className='fw-bold'>📖 Ayo Luangkan Waktu 10 Menit Hari Ini untuk Membaca Al-Qur'an</h5>
                        <p className='mb-0'>Sedikit demi sedikit, jadi bukit pahala 💚</p>
                    </Col>
                </Row>

                <Row className='mx-2 mt-4'>
                    <Col className='bg-white text-success border-success border rounded-4 p-4 shadow-sm'>
                        <h6 className='fw-bold'>Tahukah kamu?</h6>
                        <p className='mb-0'>Al-Qur'an terdiri dari 114 surah dan 6.236 ayat. Surah terpanjang adalah Al-Baqarah, dan yang terpendek adalah Al-Kawthar.</p>
                    </Col>
                </Row>


            </Container>
        </div>
    );
}

export default Home;
