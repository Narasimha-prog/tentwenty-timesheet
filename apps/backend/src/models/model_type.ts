 export interface User {
  id: number;
  email: string;
  name: string;
  password: string;
}
export enum TimesheetStatus {
  Completed = "completed",
  Incomplete = "incomplete",
  Missing = "missing",
}
export interface Timesheet {
  weekId: number;
  startDate: string;
  endDate: string;
  status: TimesheetStatus; // can restrict status values
}

 export interface Entry {
  id: number;
  weekId: number;
  day: string;
  hours: number;
  task: string;
}