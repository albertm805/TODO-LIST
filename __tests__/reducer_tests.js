import reducer from '../src/reducers/todo'

describe('todos reducer', () => {
  const todo_task_test = [
    {
      text: 'To do task test',
      completed: false,
      id: 1
    }
  ]

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      todo_task_test
    )
  })

  it('should create a new todo', () => {

    expect(
      reducer([], {type: 'ADD_TODO', id: 1, completed: true, text: 'foo'})
    ).toEqual(
      [
        {
          id: 1,
          completed: true,
          text: 'foo'
        }
      ]
    )
  })

  it('should create a new todo', () => {
    expect (
      reducer(todo_task_test, { type: 'TOGGLE_TODO' })
    ).toEqual(todo_task_test)
  })
})
