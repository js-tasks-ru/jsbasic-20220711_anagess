/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
   let result = "";
    for (let object of rows){
 result +=
        `<tr>
            <td>${object.name}</td>
            <td>${object.age}</td>
            <td>${object.salary}</td>
            <td>${object.city}</td>
            <td><button>X</button></td>
          </tr>`
      }
      let table = document.createElement("table");
      let tbody = document.createElement("tbody");
      let thead = document.createElement("thead");
      thead.innerHTML =  `
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>`
      table.append(thead);
      
      tbody.innerHTML = result;
      table.append(tbody);
      this.elem = table;
      let buttons = table.querySelectorAll("button");
      
      for (let button of buttons){
        button.addEventListener('click', function (){button.closest("tr").remove();})
      }
    }
    }
    
    


  
  

