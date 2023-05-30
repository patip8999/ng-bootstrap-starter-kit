export interface TeamModel {
    readonly name: string;
    readonly description: string;
    projects: {
      id: number;
      name: string;
    }[];
    members: {
      id: number;
      name: string;
    }[];
  }