import { ChecklistItemModel } from "../models/check-list-item.model";
import { EmployeeModel } from "../models/employee.model";
import { TaskModel } from "../models/task.model";

export interface TaskDataQuerymodel {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly startDate: Date;
    readonly dueDate: Date;
    readonly checklist: ChecklistItemModel[];
    readonly doneTaskCount: number;
    readonly assignees: EmployeeModel[];
    readonly percentage: number;
    readonly progressCssClass: string;
  }
  export const mapTaskWithData = (task: TaskModel, employees: EmployeeModel[], checklistItems: ChecklistItemModel[]): TaskDataQuerymodel => {
    const taskChecklist = task.checkList.map(cId => checklistItems.find(cli => cli.id === cId) as ChecklistItemModel);
    return {
      id: task.id,
      name: task.name,
      description: task.description,
      startDate: new Date(task.startDate * 1000),
      dueDate: new Date(task.dueDate * 1000),
      doneTaskCount: taskChecklist.filter(c => c.isDone).length,
      checklist: taskChecklist,
      assignees: task.assigneeIds.map(aId => employees.find(e => e.id === aId) as EmployeeModel),
      percentage: getPercentage(taskChecklist),
      progressCssClass: getProgressCssClass(getPercentage(taskChecklist))
    }
  }
  
  const getPercentage = (taskChecklist: ChecklistItemModel[]): number => {
    return Math.ceil(taskChecklist.filter(t => t.isDone).length / taskChecklist.length * 100)
  }
  
  const getProgressCssClass = (numVal: number): string => {
    if (numVal < 50) {
      return 'bg-danger';
    }
    if (numVal < 75) {
      return 'bg-warning';
    }
    return 'bg-success';
  }
  