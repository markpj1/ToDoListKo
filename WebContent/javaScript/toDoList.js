var ToDoList = (function() {

  // the task
  var task = {
    name: ko.observable(),
    description: ko.observable(),
    priority: ko.observable()
  };

  //array of tasks
  var tasks = ko.observableArray();

  var addTask = function() {
    tasks.push({
      name: task.name(),
      description: task.description(),
      priority: task.priority(),
      status: ko.observable('new')
    });
    console.log(tasks());
    clearTask();
  };

  var clearTask = function() {
    task.name(null);
    task.description(null);
    task.priority('1');
  };

  //method to remove tasks array
  var deleteTask = function(task) {
    console.log('deleting tasks with name: ' + task.name);
    tasks.remove(task);
  };

  var completeTask = function(task) {
    console.log('completing class with name: ' + task.name);
    task.status('complete');
  };

  //Method to sort the tasks by priority
  var sortByPriority = function() {
    tasks.sort(
      function(left, right) {
        return left.priority == right.priority ?
          0 : (left.priority < right.priority ? -1 : 1);
      });
  };

  //Method to sort the tasks by name.
  var sortByName = function() {
    tasks.sort(function(left, right) {
      return left.name == right.name ? 0 : (left.name < right.name ? -1 : 1);
    });
  };

  //observable to compute number of completed task
  var numOfCompletedTasks = ko.computed(function() {
    var completedTasks = ko.utils.arrayFilter(tasks(), function(task) {
      return task.status() === 'complete';
    });
    return completedTasks.length;
  });




  var init = function() {
    //code to initialize here
    ko.applyBindings(ToDoList);
  };

  //execute init function 
  $(init);

  return {
    //members that will be exposed publicly.
    tasks: tasks,
    task: task,
    addTask: addTask,
    deleteTask: deleteTask,
    completeTask: completeTask,
    sortByPriority: sortByPriority,
    sortByName: sortByName,
    numOfCompletedTasks: numOfCompletedTasks

  };




}());