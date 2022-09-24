
import { useTodos } from '../contexts/Todos';
import classes from '../todoListStyles.module.css';
const TodosFooter = () => {
    const { todos } = useTodos();
    return ( 
        <div className={classes.todos_footer}>
           
            <div>{todos.length} Tasks</div>
            <div>{todos.filter(todo=>todo.status).length} Complete</div>
            <div>{todos.filter(todo=>!todo.status).length} Open</div>
            
        </div>
     );
}
 
export default TodosFooter;