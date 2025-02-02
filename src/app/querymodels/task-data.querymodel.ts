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
  export const mapTaskWithData = (task: TaskModel, employees: EmployeeModel[], checklistItems: ChecklistItemModel[], ): TaskDataQuerymodel => {
    const taskChecklist = task.checkList.map(cId => checklistItems.find(cli => cli.id === cId) as ChecklistItemModel);
    const startDate = task.startDate instanceof Date ? task.startDate : null;
  const dueDate = task.dueDate instanceof Date ? task.dueDate : null;
  const doneTaskCount = taskChecklist.filter((c) => c.isDone).length;
  const percentage = Math.ceil((doneTaskCount / taskChecklist.length) * 100);
  const progressCssClass =
    percentage < 50 ? 'bg-danger' : percentage < 75 ? 'bg-warning' : 'bg-success';
    return {
      id: task.id,
      name: task.name,
      description: task.description,
      startDate: startDate ? startDate : new Date(),
    dueDate: dueDate ? dueDate : new Date(),
      doneTaskCount: taskChecklist.filter(c => c.isDone).length,
      checklist: taskChecklist,
      assignees: task.assigneeIds.map(aId => employees.find(e => e.id === aId) as EmployeeModel),
      percentage: percentage,
    progressCssClass: progressCssClass,
  };
};