var section = document.querySelector("section");
var employees = [
    {
        id: 1,
        name: "Andrea",
        salary: 150000,
        isConsult: true,
        contractEnd: new Date(2025, 0, 25)
    },
    {
        id: 2,
        name: "Kristoffer",
        salary: 120000,
        isConsult: false,
    },
    {
        id: 3,
        name: "Emil",
        salary: 151000,
        isConsult: true,
        contractEnd: new Date(2025, 2, 24)
    },
    {
        id: 4,
        name: "Hanna",
        salary: 130000,
        isConsult: false,
    }
];
var updateSalary = function (employee, raise) {
    employee.salary += raise;
};
var endOfContract = function (empolyees) {
    var endTime = new Date();
    date.setDate(date.getDate() + 30);
    employees
        .filter(function (employee) { return employee.isConsult; })
        .forEach(function (employee) {
        if (employee.contractEnd === endTime) {
        }
    });
};
var displayEmployees = function (employees) {
    var employeeHtml = employees.map(function (employee) { return "\n                <article>\n                <h3>Employee <span>".concat(employee.id, "</span></h3>\n                <p>Name: ").concat(employee.name, "</p>\n                <p>Salary: ").concat(employee.salary, "</p>\n                <p>Consultant: ").concat(employee.isConsult, "</p>\n                <p>Contract end date: ").concat(employee.contractEnd, "</p>\n                <button data-id=\"").concat(employee.id, "\">extend</button>\n                <button data-id=\"").concat(employee.id, "\">terminate</button>\n                </article>\n                "); })
        .join("");
    section.innerHTML = employeeHtml;
};
displayEmployees(employees);
