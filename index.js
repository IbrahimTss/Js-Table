let btnget = document.querySelector('button');
let myTable = document.querySelector('#table');

let students=[
    {name:'Ibrahim',
     email:'kmi@gmail.com',
     pswd:'ibb123'},
    
     {name:'Mufeez',
     email:'mufi@gmail.com',
     pswd:'mufi1123'},
    
     {name:'Aasim',
     email:'aas@gmail.com',
     pswd:'ass2123'}
     
]; 

students.pop()



let headers =['Name','Email','Pswd'];

btnget.addEventListener('click', () =>{
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header=document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
       
    });
    
    table.appendChild(headerRow);

    students.forEach(stu => {
        let row =document.createElement('tr');

        Object.values(stu).forEach(text =>  {
        let cell = document.createElement('td');
        let textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        row.appendChild(cell);
        
    })
    table.appendChild(row);

});
   myTable.appendChild(table) ;
   
   
});