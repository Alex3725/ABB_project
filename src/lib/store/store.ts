import { writable } from "svelte/store";

export const PopUp = writable({
    show: false,
    saveData: false,
    data:"", 
    entrata:0, 
    uscita:0, 
    titolo:"", 
    tesxAreaContent:"",
    placeHolder: true
});


export function showPopUp() {
    PopUp.update((obj) => {
        return {
            ...obj,
            show: true,
             //true mostra i placeholder deafoult false usa come placeholdere il contenuto di data
        }
    })
}   


export function saveData(upData?:string, upEntrata?:number, upUscita?:number, upTitolo?:string, upTextAreaContent?:string) {
    PopUp.update((obj) => {
        return {
            ...obj,
            saveData: true,
            data: upData ?? "", 
            entrata: upEntrata ?? 0, 
            uscita: upUscita ?? 0, 
            titolo: upTitolo ?? "", 
            textAreaContent: upTextAreaContent,
            placeHolder:true //true mostra i placeholder deafoult false usa come placeholdere il contenuto di data
        }
    })
}



export function reSetData() {
    PopUp.set({
        show: false,
        saveData: false,
        data:"", 
        entrata:0, 
        uscita:0, 
        titolo:"", 
        tesxAreaContent:"",
        placeHolder: true
    })
}

export function hiddenPopUp(){
    PopUp.update((obj)=>{
        return{
            ...obj,
            show: false
        }
    })
}