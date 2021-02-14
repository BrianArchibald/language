import React from 'react'
import { Card } from 'react-bootstrap'

const Teacher = teacher => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${teacher._id}`}>
        <Card.Img src={teacher.image}/>
      </a>
      <Card.Body>
        <a href={`/product/${teacher._id}`}>
          <Card.Title as="div">
            <strong>{teacher.name}</strong>
          </Card.Title>
        </a>

          <Card.Text as="div">
            <div className="my-3">
              {teacher.rating} from {teacher.numLessons} lessons
            </div>
          </Card.Text>

          <Card.Text as="h3">
            ${teacher.rate}
          </Card.Text>


      </Card.Body>
    </Card>
  )
}

export default Teacher
