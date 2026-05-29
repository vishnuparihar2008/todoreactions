import ToDoElements from "./ToDoElements";
import "./compStyles/ToDo.css";

function ToDo() {
    return (
        <div className="todo">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Task</th>
                        <th scope="col">Description</th>
                        <th scope="col">Assigned</th>
                        <th scope="col">Complete by</th>
                    </tr>
                </thead>
                <ToDoElements />
            </table>
        </div>
    );
}

export default ToDo;
