import fs from "fs";
import path from "path";
import { Employee } from "./Employee";
import { EmployeesRepository } from "./employeesRepository";
export class BirthdayService {
  constructor() {}



  sendGreetings(ourDate, fileName, smtpUrl, smtpPort, transport) {
    let employeesRepository=new EmployeesRepository();
    const employees= employeesRepository.getEmployeesByBirthday(ourDate,fileName);
    employees.forEach((employee) => {
      const message = {
        host: smtpUrl,
        port: smtpPort,
        from: "sender@here.com",
        to: [employee.getEmail()],
        subject: "Happy Birthday!",
        text: `Happy Birthday, dear ${employee.getFirstName()}!`,
      };
      transport.sendMail(message);
    });
  }

}
