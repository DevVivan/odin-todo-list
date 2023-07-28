# Plan

This a markdown file that contains all my planning before approaching this project.

## Project structure

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