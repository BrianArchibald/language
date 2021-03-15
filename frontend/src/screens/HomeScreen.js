import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Teacher from '../components/Teacher'
import axios from 'axios'


const HomeScreen = props => {

  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    async function fetchTeachers() {
      const { data } =  await axios.get('/api/teachers/')
      setTeachers(data)
    }
    fetchTeachers()
  },[])

  return(
    <div>
      <h1>Recent Teachers</h1>
      <Row>
        {teachers.map(teacher => (
          <Col key={teacher._id} sm={12} md={6} lg={4} xl={3}>
            <Teacher teacher={teacher} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
