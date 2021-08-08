import React from 'react'
import { Row, Col } from 'react-bootstrap'

const footer = () => {
    return  <footer>
            <Row className="fixed-bottom" style={{background: 'black'}}>
                <Col className="text-center py-1 text-white">
                    Copyright &copy; Anı Kutusu
                </Col>
            </Row>
        </footer>
    
}

export default footer
