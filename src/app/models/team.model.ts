export interface TeamModel {
    readonly name: string;
    readonly id: string;
    readonly description: string;
    readonly memberIds: string[]
    projects: {
      id: number;
      name: string;
    }[];
    members: {
      id: number;
      name: string;
      avatarUrl:string
    }[];
  }