import { EmployeeModel } from "../models/employee.model";
import { ProjectModel, mapProjectWithData } from "../models/project.model";
import { TeamModel } from "../models/team.model";
import { ProjectWithDataQueryModel,} from "./project-data.querymodel";

export interface TeamWithDataQueryModel {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly members: EmployeeModel[];
    readonly projects: ProjectWithDataQueryModel[];
  }

  export const mapTeamWithData = (team: TeamModel, employees: EmployeeModel[], projects: ProjectModel[]): TeamWithDataQueryModel => ({
    id: team.id,
    name: team.name,
    description: team.description,
    members: team.memberIds.map(mId => employees.find(e => e.id === mId) as EmployeeModel),
    projects: projects.filter(p => p.teamId === team.id).map(p => mapProjectWithData(p, employees))
  })
  