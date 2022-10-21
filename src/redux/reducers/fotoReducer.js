import {SELECIONAR_FOTO} from "../actions/actionTypes";

const estadoInicial= {
    foto: undefined
};

export default function fotoReducer(state=estadoInicial, action){
    
    switch(action.type){
        case SELECIONAR_FOTO:
            return {
                ...state,
                foto: action.payload.foto
            };
        default:
            return state;
    }
}
