import {
  TEACHER_LIST_REQUEST,
  TEACHER_LIST_SUCCESS,
  TEACHER_LIST_FAIL
} from '../constants/teacherConstants'

const teacherListReducer = (state = {teachers:[]}, action) => {
  switch(action.type) {
    case TEACHER_LIST_REQUEST:
      return { loading:true, teacher:[] }

    case TEACHER_LIST_SUCCESS:
      return { loading:false, teacher: action.payload }

    case TEACHER_LIST_FAIL:
      return { loading:false, error: action.payload }

    default:
      return state
  }

}
