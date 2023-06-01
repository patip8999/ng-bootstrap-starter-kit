import { EmployeeModel } from "../models/employee.model";
import { ProjectModel } from "../models/project.model";

export interface ProjectWithDataQueryModel {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly startDate: Date;
    readonly dueDate: Date;
    readonly visibility: string;
    readonly assignees: EmployeeModel[];
    readonly percentage: number;
  }

  
  
  