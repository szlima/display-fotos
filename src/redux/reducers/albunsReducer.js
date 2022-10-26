import {CARREGAR_ALBUNS_INICIO, CARREGAR_ALBUNS_SUCESSO, CARREGAR_ALBUNS_ERRO} from "../actions/actionTypes";

const estadoInicial= {
    albuns: [],
    carregando: false,
    erro: ''
};

export default function albunsReducer(state= estadoInicial, action){
    
    switch(action.type){
        case CARREGAR_ALBUNS_INICIO:
            return {
                ...state,
                carregando: true
            };
        case CARREGAR_ALBUNS_SUCESSO:
            return {
                ...state,
                carregando: false,
                albuns: action.payload.albuns
            };
        case CARREGAR_ALBUNS_ERRO:
            return {
                ...state,
                carregando: false,
                erro: action.payload.erro
            }
        default:
            return state;
    }
}