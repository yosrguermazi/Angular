export class Personne {
    public id: number;
    public name: string;
    public firstname: string;
    public age: number;
    public path: string;
    public cin: number;
    public job:String;

constructor(id = 0, name = '', firstname = '', age = 0, path = '', cin = 1, job = ''){
    this.id=id;
    this.name= name;
    this.firstname= firstname;
    this.age= age;
    this.path= path;
    this.cin= cin;
    this.job= job;


}
}