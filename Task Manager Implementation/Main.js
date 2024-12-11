class TaskManager {
  constructor() {
    this.tasks = [];
  }

  // Add a new task
  addTask(task) {
    if (task.trim()) {
      this.tasks.push({
        id: this.tasks.length + 1,
        name: task,
        completed: false,
      });
      console.log(`Task "${task}" added successfully!`);
    } else {
      console.log("Task cannot be empty.");
    }
  }

  // Mark a task as completed

  completeTask(taskId) {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = true;
      console.log(`Task "${task.name}" marked as completed!`);
    } else {
      console.log(`Task with ID ${taskId} not found.`);
    }
  }

  // Display all tasks
  displayTasks() {
    console.log("Tasks:");
    this.tasks.forEach((task) => {
      console.log(`${task.id}. ${task.name} - ${task.completed ? "✅" : "❌"}`);
    });
  }

  // Save tasks to a mock server
  async saveTasks() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.tasks),
        }
      );
      if (response.ok) {
        console.log("Tasks saved successfully!");
      } else {
        console.log("Failed to save tasks.");
      }
    } catch (error) {
      console.error("Error saving tasks:", error);
    }
  }
}

// Usage

const taskManager = new TaskManager();
taskManager.addTask("Learn JavaScript");
taskManager.addTask("Build a project");

taskManager.completeTask(1);
taskManager.displayTasks();

// Save tasks to mock server
taskManager.saveTasks();
