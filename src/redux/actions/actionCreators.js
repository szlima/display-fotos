import {SELECIONAR_FOTO, CARREGAR_ALBUNS_INICIO,
    CARREGAR_ALBUNS_SUCESSO, CARREGAR_ALBUNS_ERRO
} from "./actionTypes";

import {ERRO_CARREGAMENTO_ALBUNS} from './errosTypes';

import {carregarAlbuns} from '../../dados';

const carregarAlbunsInicio= () => ({
    type: CARREGAR_ALBUNS_INICIO
});

const carregarAlbunsSucesso= albuns => ({
    type: CARREGAR_ALBUNS_SUCESSO,
    payload: {
        albuns
    }    
});

const carregarAlbunsErro= () => ({
    type: CARREGAR_ALBUNS_ERRO,
    payload: {
        erro: ERRO_CARREGAMENTO_ALBUNS
    }    
});

export const selecionarFotoAction= foto => ({
    type: SELECIONAR_FOTO,
    payload: {
        foto
    }
});

export const carregarAlbunsAction= () => {
    return dispatch => {
        dispatch(carregarAlbunsInicio());
        
        carregarAlbuns()
        .then(albuns => dispatch(carregarAlbunsSucesso(albuns)))
        .catch(() => dispatch(carregarAlbunsErro()));        
    };
};