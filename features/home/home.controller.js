export default class HomeController {
  constructor($scope, $firebaseArray) {
    let ref = new Firebase("https://blinding-fire-6626.firebaseio.com/");
    this.tasks = $firebaseArray(ref);
    
    this.email = "";
    this.filter = "";
  }
  
  filterTasks(type) {
    if(type == 'all') {
      this.filter = "";
      console.log("All");
    } 
    else if(type == 'mine' && this.email != "") {
      this.filter = this.email;
      console.log("Mine   " + this.filter);
    }
    else {
      console.log(this.email + " " + this.filter + "   Else");
      alert("Aby zobaczyć swoje zadania musisz się zalogować!")
    }
  }
  
  setStatus(task, status) {
    if(status == 'done') {
      task.done = true;
    }
    else if(status == 'todo') {
      task.done = false;
    }
  }

  addTask(task) {
    this.tasks.$add({
      name: task,
      done: false,
      mail: this.email
    })
  }

  setEmail(email) {
    this.email = email;
  }

  removeTask(task) {
    this.tasks.$remove(task)
  }
}