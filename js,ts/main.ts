
const section = document.querySelector("section")!; 

type Employee = {
    id: number,
    name: string,
    salary: number,
    isConsult: boolean,
    contractEnd?: Date  
}
const employees: Employee[] = [
    {
        id: 1,
        name: "Andrea",
        salary: 150_000,
        isConsult: true,
        contractEnd: new Date(2025, 0, 25) 
    },
    {
        id: 2,
        name: "Kristoffer",
        salary: 120_000,
        isConsult: false,  
    }, 
    {
        id: 3,
        name: "Emil",
        salary: 151_000,
        isConsult: true,
        contractEnd: new Date(2025, 2, 24)
    },
    {
        id: 4,
        name: "Hanna",
        salary: 130_000,
        isConsult: false,
    }
];

const updateSalary = (employee: Employee, raise: number) => {
    employee.salary += raise;
}

const endOfContract = (empolyees: Employee[]) => {
    const endTime = new Date()
    endTime.setDate(endTime.getDate() + 30)

    employees
    .filter(employee => employee.isConsult)
    .forEach(employee => {
        if(employee.contractEnd === endTime) {
            
        }
    })
}

const displayEmployees = (employees: Employee[]) => {

    const employeeHtml = employees.map(employee => `
                <article>
                <h3>Employee <span>${employee.id}</span></h3>
                <p>Name: ${employee.name}</p>
                <p>Salary: ${employee.salary}</p>
                <p>Consultant: ${employee.isConsult}</p>
                <p>Contract end date: ${employee.contractEnd}</p>
                <button data-id="${employee.id}">extend</button>
                <button data-id="${employee.id}">terminate</button>
                </article>
                `)
                .join("");
    section.innerHTML = employeeHtml;
    

}
displayEmployees(employees);

export {}