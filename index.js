
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    markCompleted: function() {
    this.complete = true;
    },

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Room", "Sweep the floor and put clothes away");
const task2 = newTask("Code", "Finish todays activities");
const tasks = [task1, task2];


task1.logState(); // Code has not been completed
task1.markCompleted();
task1.logState(); // Code has been completed
