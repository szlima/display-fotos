import {SELECIONAR_FOTO} from "./actionTypes";

export const selecionarFotoAction= foto => ({
    type: SELECIONAR_FOTO,
    payload: {
        foto
    }
});