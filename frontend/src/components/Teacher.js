import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Teacher = ({ teacher }) => {

  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/teacher/${teacher._id}`}>
        <Card.Img src={teacher.image}/>
      </a>
      <Card.Body>
        <a href={`/teacher/${teacher._id}`}>
          <Card.Title as="div">
            <strong>{teacher.name}</strong>
          </Card.Title>
        </a>

          <Card.Text as="div">
            <div className="my-3">
              {/* {teacher.rating} from {teacher.numLessons} lessons */}
              <Rating value={teacher.rating} text={`${teacher.numLessons} lessons`} color={'#f8e825'}/>
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
