module Root{
    export class Home{
        private entry:string;
        location:number;
        constructor(entry:string,location:number){
                this.entry = entry;
                this.location = location;
        }
        get Entry():string{
            return this.entry;
        }
        set Entry(entry:string){
            this.entry = entry;
        }
        Enter(){
            console.log("I am enter",this.entry);
        }
        Exit(){
            console.log("I am exit",this.location);
        }
    }
    export class Apartment{
        home:Home;
        constructor(home:Home){
            this.home = home;
        }
        gethome():Home{
            return this.home;
        }
    }
}