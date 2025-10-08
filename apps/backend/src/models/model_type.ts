 export interface User {
  id: number;
  email: string;
  name: string;
  password: string;
}

export interface Timesheet {
  weekId: number;
  startDate: string;
  endDate: string;
  status: "submitted" | "draft" | "approved" | "rejected"; // can restrict status values
}

 export interface Entry {
  id: number;
  weekId: number;
  day: string;
  hours: number;
  task: string;
}