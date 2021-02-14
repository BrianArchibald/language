import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Teacher from '../components/Teacher '

import teachers from '../teachers'

const HomeScreen = props => {
  return(
    <div>
      <h1>Recent Teachers</h1>
      <Row>
        {teachers.map(teacher => (
          <Col key={teacher._id} sm={12} md={6} lg={4} xl={3}>
            <Teacher teacher={teacher} />
            <h3>{teacher.name}</h3>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
