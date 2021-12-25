import {atom} from "recoil";

export const HabitAtom = atom({
    key:"habit-atom",
    default:[{title:"sport",count:0},{title:"reading",count:0}]
})