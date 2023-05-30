export interface ProjectModel {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly startDate: number;
    readonly dueDate: Date;
    readonly visibility: string;
    readonly teamId: string;
    readonly assigneeIds: string[];
    readonly percentage: number
  }