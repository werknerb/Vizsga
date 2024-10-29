import { Details } from "../moduls/details";
import { Users } from "../moduls/users";

export class Event{
    private users: Map<number, Users> = new Map();
    private events: Map<number, Details> = new Map();
    
    
    addUsers(user: Users, ): void{
        this.users.set(user.id, user);
        
    }
    addEvent( event: Details): void{
        this.events.set(event.id, event)
    }

    removeEvent(eventId: number): void{
        this.events.delete(eventId);
    }

    eventList(): Details[] {
        return Array.from(this.events.values())
    }


   




    
}
