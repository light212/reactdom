import { addTodo } from './action'
const defaultStat = '123'
const reducer = (state = defaultStat, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state = action.text
        default:
            return state;
    }
}
export default reducer