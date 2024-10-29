import { Details } from "./moduls/details";
import { Birthday, Wedding } from "./moduls/tematic";
import { Users } from "./moduls/users";
import { Event } from "./service/event";


const event = new Event();

const weddingEvent = new Wedding("Űrhajós","Nagy rendezvényt szeretnénk marslakókkal");
const birthdayEvent = new Birthday("Mexikói","Szeretnénk pinyátát");


const event1: Details ={
    id:1,
    peoples: ["Pista", "Géza"],
    place: "Kiskunfélegyháza",
    date: "2087.10.21",
    tematic: weddingEvent
}
const event2: Details ={
    id:1,
    peoples: ["Jóska", "Lajos"],
    place: "Félegyháza",
    date: "2027.02.21",
    tematic: weddingEvent
}

const user1: Users = {
    id:1,
    name: "Kis Pista",
}

event.addUsers(user1);

event.addEvent(event1);

event.removeEvent(1);

event.eventList();


