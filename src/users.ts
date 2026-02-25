import { it } from "node:test";
import type { User } from "./types";

export const apiResponse: unknown = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: "24" }, // invalid
  { name: "Jim", age: 25 },
];

export function getUsersData(): User[] {
  for (const item of apiResponse as User[]) {
    if (typeof item.age == "string") {
      item.age = Number(item.age); // attempt to fix invalid age
    }
  }
  return apiResponse as User[]; // intentionally unsafe
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => u.age.toFixed(0));
}