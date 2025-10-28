import { writable } from "svelte/store";

export const PopUp = writable({
    showChe:false,
    show: false,
    saveData: false,
    data:"", 
    entrata:0, 
    uscita:0, 
    titolo:"", 
    textAreaContent:"",
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


export function saveData(upData?:string,upTitolo?:string ,upEntrata?:number, upUscita?:number, upTextAreaContent?:string) {
    PopUp.update((obj:any) => {
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
        showChe:false,
        show: false,
        saveData: false,
        data:"", 
        entrata:0, 
        uscita:0, 
        titolo:"", 
        textAreaContent:"",
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

export function showCheck() {
    PopUp.update((obj)=>{
        return{
            ...obj,
            showChe: true
        }
    })
}

export function hiddenCheck() {
    PopUp.update((obj)=>{
        return{
            ...obj,
            showChe: false
        }
    })
}

