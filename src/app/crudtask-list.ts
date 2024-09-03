import { Observable } from "rxjs";
import { TaskList } from "./task-list";

export interface CRUDTaskList {
    getAllTasks():Observable<TaskList>;
}
