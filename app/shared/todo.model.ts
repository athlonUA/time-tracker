export class Todo {
    public id: number;
    public title: string;
    public projectId: number;
    public done: boolean = false;
    public startTime: number;
    public duration: number = 0;

    constructor(title: string, projectId: number, startTime: number) {
        this.title = title;
        this.projectId = projectId;
        this.startTime = startTime;
    }
}
