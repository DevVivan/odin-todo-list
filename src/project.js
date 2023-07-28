export function projects() {
    const projects = [];

    class Project{
        constructor(name) {
            this.name = name;
        }

        getName() {
            return this.name;
        }
    }
}