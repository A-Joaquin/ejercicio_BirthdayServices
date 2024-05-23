import { EmployeesRepository } from "./employeesRepository";
export class BirthdayService {
  constructor() {}



  sendGreetings(ourDate, fileName,smtpUrl, smtpPort, transport) {
    let employeesRepository=new EmployeesRepository();
    const employees= employeesRepository.getEmployeesByBirthday(ourDate,fileName);
    this.sendMessage(employees,smtpUrl, smtpPort, transport);
  }
  sendMessage(employees,smtpUrl, smtpPort, transport)
  {
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
