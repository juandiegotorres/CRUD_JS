export default class Model {
    constructor() {
        this.view = null;
        this.toDos =  JSON.parse(localStorage.getItem('toDos'));
        if (!this.toDos || this.toDos.length < 1) { 
            this.toDos = [
                {
                    id: 0,
                    title: 'Aprendiendo', 
                    description: 'JS Abril',
                    completed: false,
                }
            ];
            this.currentId = 1;
        } else {
            this.currentId = this.toDos[this.toDos.length - 1].id + 1
        }
    }
    
   
    setView(view) {
        this.view = view;
    }
     
    save() {
        localStorage.setItem('toDos', JSON.stringify(this.toDos));
    }

    gettoDos() {
        return this.toDos.map((toDo) => ({...toDo}));
    }

    addToDo(title, description) {
        const toDo = {
            id: this.currentId++,
            title: title,
            description: description,
            completed: false,
        }

        this.toDos.push(toDo);
        console.log(this.toDos);
        this.save();
        return {...toDo};
    }

    findToDo(id) {
       return this.toDos.findIndex((toDo) => toDo.id === id);
    }

    editToDo(id, values) {
        const index = this.findToDo(id);
        Object.assign(this.toDos[index], values);
        this.save();
    }

    toggleCompleted(id) {
        const index = this.findToDo(id);
        const toDo = this.toDos[index];
        toDo.completed = !toDo.completed;
        this.save();
    }

    removeToDo(id) {
        const index = this.findToDo(id);
        this.toDos.splice(index, 1);
        this.save();
    }
}