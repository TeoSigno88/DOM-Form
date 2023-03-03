function CostructorPerson(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city || "";
}

const persons = [];

export function printPerson(argument){
    if(argument instanceof Array){
        const ulParent = document.getElementById("persons-list");
        
        function newLine({name, age, city}) {
            //city.length > 0 può essere sostituito da city perché se truthy allora === 1 
            return `<li class="list-group-item d-flex">
                    <div> ${name} ${(city) ? `(${city})` : ""} </div>
                    <div class="ms-auto"> ${age} anni </div>
                    </li>`;
        }
        const newElement = argument
                                .sort((a, b) => a.age - b.age)
                                .map(newLine)
                                .join("");
        ulParent.innerHTML = newElement;
    }
}

export const form1 = document.forms.item(1);
export function birthDatePersons(argument){
    if(argument instanceof Array){
        const selectElement = form1.elements[0];    //Node

        const firstOption = [selectElement[0]]; //Array
        const newOptionElement = argument.map((argument) => new Option(argument.name + " " + argument.age)) //Array
        const newContent = firstOption.concat(newOptionElement) //Array

        selectElement.innerHTML = "";
        
        newContent.forEach((item) => {
            selectElement.appendChild(item);
        })
    }
}

const form0 = document.forms.item(0);
form0.addEventListener("submit", (event) =>{
    event.preventDefault();
    event.stopPropagation();

    let name = form0.elements[0].value;
    let age = form0.elements[1].value;
    let city = form0.elements[2].value;
    
    persons.push(new CostructorPerson(name, age, city));
    printPerson(persons);
    birthDatePersons(persons)
    form0.reset();
});
