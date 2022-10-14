import Employee from "./classes/Employee";
import Subject from "./classes/Subject";
import Teacher from "./classes/Teacher";

const s1 = new Teacher(
  "Aline",
  new Date("2004-16-01"),
  2918,
  new Subject("Ed. Física")
);

s1.admissionDate = new Date(Date.now() + 1000);

setInterval(() => {}, 1000);

console.log(s1);
