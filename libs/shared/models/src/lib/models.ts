
export interface User {
  id: number;
  email: string;
  name: string;
}

export interface Timesheet {
  weekId: number;
  startDate: string;
  endDate: string;
  status: string;
}

export interface Entry {
  id: number;
  weekId: number;
  day: string;
  hours: number;
  task: string;
}
