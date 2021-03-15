import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'

const TeacherScreen = ({ match }) => {

  const [teacher, setTeacher] = useState([])

  useEffect(() => {
    async function fetchTeacher() {
      const { data } =  await axios.get(`/api/teachers/${match.params.id}`)
      setTeacher(data)
    }
    fetchTeacher()
  },[])

  return(
    <div>
      <Link to='/' className='btn btn-light my-3'>Home</Link>
      <Row>
        <Col md={6}>
          <Image src={teacher.image} alt={teacher.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{teacher.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              Languages: {teacher.speakingLanguage}
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={teacher.rating} text={`${teacher.numLessons} lessons`} color={'#f8e825'}/>
            </ListGroup.Item>
            <ListGroup.Item>
              $ {teacher.rate}
            </ListGroup.Item>
            <ListGroup.Item>
              {teacher.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>

              <ListGroup.Item>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    <strong>Total Cost</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>
                    Availability:
                  </Col>
                  <Col>
                    <strong>{teacher.online ? 'Online' : 'Not Online'}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button className='btn btn-block' disabled={teacher.online === false} type='button'>
                  Add to Cart
                </Button>
              </ListGroup.Item>

            </ListGroup>
          </Card>

        </Col>
      </Row>
    </div>

  )
}

export default TeacherScreen
