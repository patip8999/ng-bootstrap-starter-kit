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
  export const mapProjectWithData = (project: ProjectModel, employees: EmployeeModel[]): ProjectWithDataQueryModel => ({
    id: project.id,
    name: project.name,
    description: project.description,
    startDate: new Date(project.startDate * 1000),
    dueDate: project.dueDate,
    visibility: project.visibility,
    assignees: project.assigneeIds.map(aId => employees.find(e => e.id === aId) as EmployeeModel),
    percentage: getProjectPercentage(project)
  })

  const getProjectPercentage = (project: ProjectModel): number => {
    const end = new Date(project.dueDate).getTime() - new Date(project.startDate).getTime()
    const now = new Date().getTime() - new Date(project.startDate).getTime();
    return Math.ceil(now / end * 100)
  }
  