import Alert from './alert.js';

export default class AddToDo {
   constructor(){
    this.alert = new Alert('alert');

    this.btn = document.getElementById('add');
    this.title = document.getElementById('title');
    this.description = document.getElementById('description');
   }

   onClick(callback) {
       this.btn.onclick = () => {
        if (title.value === '' || description.value === ''){
           this.alert.show('El título y la descripción no pueden estar vacios');
        } else {
            this.alert.hide();
            callback(this.title.value, this.description.value);
            title.value = '';
            description.value = '';
        }
       }
   } 
    
}