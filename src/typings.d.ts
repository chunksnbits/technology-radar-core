
declare interface TechnologyRadarSettings {
  innerRadiusPercent: number;
  outerRadiusPercent: number;
}

declare interface Technology {
  id?: string;
  name: string;
  description?: string;
  logo?: string;
  groupId: string;
  level: number;
}

declare interface Group {
  id?: string;
  group?: number;
  name: string;
  description?: string;
  color?: string;
}

declare interface Data {
  technologies: Technology[];
  groups: Group[];
  settings: TechnologyRadarSettings;
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "*.scss" {
  const value: any;
  export default value;
}

declare module "public/data.json" {
  const value: Data;
  export default value;
}