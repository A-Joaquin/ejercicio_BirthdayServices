import { EmployeesRepository } from "./employeesRepository";
import { GreetingDelivery } from "./GreetingDelivery";
export class BirthdayService {
  constructor(greetingDelivery,employeesRepository) {
    this.greetingDelivery=greetingDelivery;
    this.employeesRepository=employeesRepository;
  }



  sendGreetings(ourDate) {
    const employees= this.employeesRepository.getEmployeesByBirthday(ourDate);
    employees.forEach(employee => {
      this.greetingDelivery.sendGreetingToEmployee(employee);
    });

  }
}
