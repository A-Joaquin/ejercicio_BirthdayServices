import { EmployeesRepository } from "./employeesRepository";
import { GreetingDelivery } from "./GreetingDelivery";
export class BirthdayService {
  constructor() {}



  sendGreetings(ourDate, fileName,smtpUrl, smtpPort, transport) {
    let employeesRepository=new EmployeesRepository();
    const employees= employeesRepository.getEmployeesByBirthday(ourDate,fileName);
    let greetingDelivery=new GreetingDelivery();
    employees.forEach(employee => {
      greetingDelivery.sendMessage(employee,smtpUrl, smtpPort, transport);
    });

  }
}
