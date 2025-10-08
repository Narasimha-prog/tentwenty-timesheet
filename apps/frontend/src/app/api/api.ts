import axios from "axios";

export interface User {
  id: number;
  email: string;
  name: string;
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


const API = axios.create({ baseURL: "http://localhost:3000/api" });

export const login = (data: { email: string; password: string }) =>
  API.post<{ success: boolean; token: string; user: User }>("/login", data);

export const fetchTimesheets = () =>
  API.get<Timesheet[]>("/timesheets");

export const fetchEntries = (weekId: string | number) =>
  API.get<Entry[]>(`/timesheets/${weekId}/entries`);
