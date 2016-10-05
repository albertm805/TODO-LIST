import * as actions from '../src/actions'

describe('actions', () => {
  it('should create a new action to add a todo', () => {
    const text = 'My new todo'
    const newAction = {
      type: 'ADD_TODO',
      text
    }
    expect(actions.addTodo(text)).toEqual(
      {
        type: 'ADD_TODO',
        id: 0,
        text
      }
    )
  })

  it('should create a new action set visibility filter', () => {
    const filter = 'SHOW_ALL'
    expect(actions.setVisibilityFilter(filter)).toEqual(
      {
        type: 'SET_VISIBILITY_FILTER',
        filter
      }
    )
  })

  it('should create a new action to add a todo', () => {
    let newTodo = actions.addTodo('Hello')
    expect(actions.toggleTodo(0)).toEqual(
      {
        type: 'TOGGLE_TODO',
        id: 0
      }
    )
  })
})
