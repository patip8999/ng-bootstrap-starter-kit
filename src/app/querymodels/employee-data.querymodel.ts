import { EmployeeModel } from "../models/employee.model";
import { ProjectWithDataQueryModel } from "./project-data.querymodel";
import { TaskDataQuerymodel } from "./task-data.querymodel";
import { TeamWithDataQueryModel } from "./team-data.querymodel";

export interface EmployeeDataQuerymodel extends EmployeeModel {
    projects: ProjectWithDataQueryModel[];
    teams: TeamWithDataQueryModel[];
    tasks: TaskDataQuerymodel[]
  }

