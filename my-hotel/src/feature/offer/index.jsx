import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import offer1 from '../../asset/offer1.jpg'
import offer2 from '../../asset/offer2.jpg'
import offer3 from '../../asset/offer3.jpg'
import offer4 from '../../asset/offer1.jpg'
import './index.css'
const Offer = () => {
  return (
    <div className="offer_section">
        <Container>
            <Row>
                <h1 className="offer_title">Offers</h1>
            </Row>
            <div className="offer_list">
                <Row sm={1} md={2} lg={3}>
                    <Col>
                        <div className="offer_item">
                            <div className="offer_item_thumb">
                                <div className="offer_item_thumb-title" style={{backgroundImage: `url(${offer1})`}}></div>
                                <span className="offer_item_thumb-book">
                                    <span className="offer_item_thumb-book1">
                                        <span className="offer_item_thumb-book2">
                                            <span className="offer_item_thumb-book3"></span>
                                            <span className="offer_item_thumb-book4">
                                                <span className="offer_item_thumb-book41">Starting from</span>
                                                <span className="offer_item_thumb-book42">1,690,909</span>
                                                <span className="offer_item_thumb-book43">VND</span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div className="offer_item_title">
                                <a href="#acc" className="offer_link">2 Nights</a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="offer_item">
                            <div className="offer_item_thumb">
                                <div className="offer_item_thumb-title" style={{backgroundImage: `url(${offer2})`}}></div>
                                <span className="offer_item_thumb-book">
                                    <span className="offer_item_thumb-book1">
                                        <span className="offer_item_thumb-book2">
                                            <span className="offer_item_thumb-book3"></span>
                                            <span className="offer_item_thumb-book4">
                                                <span className="offer_item_thumb-book41">Starting from</span>
                                                <span className="offer_item_thumb-book42">1,690,909</span>
                                                <span className="offer_item_thumb-book43">VND</span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div className="offer_item_title">
                                <a href="#acc" className="offer_link">Bussiness Deal</a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="offer_item">
                            <div className="offer_item_thumb">
                                <div className="offer_item_thumb-title" style={{backgroundImage: `url(${offer3})`}}></div>
                                <span className="offer_item_thumb-book">
                                    <span className="offer_item_thumb-book1">
                                        <span className="offer_item_thumb-book2">
                                            <span className="offer_item_thumb-book3"></span>
                                            <span className="offer_item_thumb-book4">
                                                <span className="offer_item_thumb-book41">Starting from</span>
                                                <span className="offer_item_thumb-book42">1,690,909</span>
                                                <span className="offer_item_thumb-book43">VND</span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div className="offer_item_title">
                                <a href="#acc" className="offer_link">Last-14-Day-EB</a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="offer_item">
                            <div className="offer_item_thumb">
                                <div className="offer_item_thumb-title" style={{backgroundImage: `url(${offer4})`}}></div>
                                <span className="offer_item_thumb-book">
                                    <span className="offer_item_thumb-book1">
                                        <span className="offer_item_thumb-book2">
                                            <span className="offer_item_thumb-book3"></span>
                                            <span className="offer_item_thumb-book4">
                                                <span className="offer_item_thumb-book41">Starting from</span>
                                                <span className="offer_item_thumb-book42">1,690,909</span>
                                                <span className="offer_item_thumb-book43">VND</span>
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div className="offer_item_title">
                                <a href="#acc" className="offer_link">Standard Rate</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default Offer