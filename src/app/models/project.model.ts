import { EmployeeModel } from './employee.model';

export interface ProjectModel {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly startDate: Date;
  readonly dueDate: Date
  readonly visibility: string;
  readonly teamId: string;
  readonly assigneeIds: string[];
  readonly percentage: number;
}
export interface ProjectWithData {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly startDate: Date
  readonly dueDate: Date; 
  readonly visibility: string;
  readonly assignees: EmployeeModel[];
  readonly percentage: number;
}
export const mapProjectWithData = (project: ProjectModel, employees: EmployeeModel[]): ProjectWithData => {
  const startDate = project.startDate instanceof Date ? project.startDate : new Date();
  const dueDate = project.dueDate instanceof Date ? project.dueDate : new Date();
  
 
  return {
    id: project.id,
    name: project.name,
    description: project.description,
    startDate: startDate ? startDate : new Date(),
    dueDate: dueDate ? dueDate : new Date(),
    visibility: project.visibility,
    assignees: project.assigneeIds && project.assigneeIds.length > 0
    ? project.assigneeIds.map(aId => employees.find(e => e.id === aId) as EmployeeModel)
    : [],
    percentage: project.percentage
  };
};
