import Alert from './alert.js';

export default class Modal {
    constructor() {
        this.title = document.getElementById('modal-title');
        this.description = document.getElementById('modal-description');
        this.btn = document.getElementById('modal-btn');
        this.completed = document.getElementById('modal-completed');
        this.alert = new Alert('modal-alert');

        this.toDo = null;
    }

    onClick(callback) {
        this.btn.onclick = () => {
            if (!this.title.value || !this.description.value){
               this.alert.show('El título y la descripción no pueden estar vacios');
               return;
            }    
            $('#modal').modal('toggle');

            callback(this.toDo.id, {
                title: this.title.value,
                description: this.description.value,
                completed: this.completed.checked,
            });
           }
    }

    setValues(toDo) {
        this.alert.hide();
        this.toDo = toDo;
        this.title.value = toDo.title;
        this.description.value = toDo.description;
        this.completed.checked = toDo.completed;
    }
}