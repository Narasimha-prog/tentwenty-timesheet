import { Entry, Timesheet, User } from "./model_type";

 export let users: User[] = [
  { id: 1, email: "john@example.com", name: "John Doe", password: "1234" },
];

 export let timesheets: Timesheet[] = [
  { weekId: 1, startDate: "2024-10-01", endDate: "2024-10-07", status: "submitted" },
  { weekId: 2, startDate: "2024-10-08", endDate: "2024-10-14", status: "draft" },
];

 export let entries: Entry[] = [
  { id: 1, weekId: 1, day: "Monday", hours: 8, task: "Development" },
  { id: 2, weekId: 1, day: "Tuesday", hours: 6, task: "Code Review" },
  { id: 3, weekId: 2, day: "Monday", hours: 5, task: "Testing" },
];