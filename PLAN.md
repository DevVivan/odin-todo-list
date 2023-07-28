# Plan

This a markdown file that contains all my planning before approaching this project.

## The project structure

I will be using classes within arrays within classes for the projects & todo-items that are contained within those respective projects. A basic project structure is as follows:

```js
projects [ // An array to store all the projects
    Project { // Project objects created by the Project constructor from the Project class
        todos [ // An array to store all the respective todos in the project
            Todo { // Todo objects created by the Todo constructor from the Todo class
                // todo properties
            }
        ]
    }
]
```

### Projects 

Users will be able to enter a name for the project. There will also be a default, `inbox`, project which will contain all the todos across the whole application.

### Properties the todos will have

- `title`: A property to allow users to enter a title for the todo.
- `description`: A property to allow users to enter a brief description for the todo.
- `dueDate`: A property to allow users to enter a due date for the todo.
- `priority`: A property to allow users to select the priority for a todo. This will range between
- `project`: A property to allow users to select which project the todo should belong to. If left empty, it will resort to the project which is open on the user's screen.
