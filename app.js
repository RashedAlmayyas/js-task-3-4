
const MYFORM = document.getElementById('form');
MYFORM.addEventListener('submit', test);

class employee {
    constructor (formData) {
    this.id = formData.id;
    this.name = formData.name;
    this.Department = formData.Department;
    this.Level = formData.Level;
    this.url = formData.url;


    }
}




const employees = [];
function test (event) {
    event.preventDefault();

    const FORMLABELS = ["id", "name", "Department", "Level", "url"];
    const FORMDATA = {};
    const FORMELEMENTS = event.target.elements; for(let i = 0; i < FORMELEMENTS.length - 1; i++) {
        FORMDATA[FORMLABELS[i]] = FORMELEMENTS[i].value;
    }


    
        employees.push(new employee(FORMDATA));      
    
        const TR = document.createElement('tr');
        for (let key in FORMDATA) {
            const TD = document.createElement('td');
            TD.textContent = FORMDATA[key];
            TR.appendChild(TD);
        }
        
        const ELT = document.querySelector('tbody');
        ELT.appendChild(TR);
    
 }

/*


class employee {id ,name,Department,Level,url,salary{
    this.id = "";
    this.name = "";
    this.Department ="";
    this.Level = "";
    this.url = "";
    this.salary = "";
   }
}

let employes = [
    new Employee(1000, "Ghazi Samer", "Administration", "Senior"),
    new Employee(1001, "Lana Ali", "Finance", "Senior"),
    new Employee(1002, "Tamara Ayoub ", "Marketing", "Senior"),
    new Employee(1003, "Safi Walid", "Administration", "Mid-Senior"),
    new Employee(1004, "Omar Zaid", "Development", "Senior"),
    new Employee(1005, "Rana Saleh", "Development", "Junior"),
    new Employee(1006, "Ghazi Samer", "Finance", "Mid-Senior"),
]
    
function salaryCounting(Level){

if(s-Senior){
minSal=1500;
maxSal=2000;
     salary =Math.floor(Math.random() * (maxSal - minSal) + minSal);
}

else  if(s-Mid-Senior){
    minSal=1000;
    maxSal=1500;
             salary = Math.floor(Math.random() * (maxSal - minSal) + minSal);
        }
else if(s-Junior){
    minSal=500;
    maxSal=1000;
             salary = Math.floor(Math.random() * (maxSal - minSal) + minSal);
        }
return salary;
}
render();

var tbody = document.getElementById('tbody');

for (var i = 0; i < obj.length; i++) {
    var tr = "<tr>";

    if (obj[i].value.toString().substring(obj[i].value.toString().indexOf('.'), obj[i].value.toString().length) < 2) 
        obj[i].value += "0";

    tr += "<td>" + obj[i].key + "</td>" + "<td>$" + obj[i].value.toString() + "</td></tr>";

    tbody.innerHTML += tr;
}*/