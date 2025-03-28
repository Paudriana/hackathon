import { createContext, useReducer, useContext } from "react";
import ahorrosImg from "../assets/ahorros.png";
import creditosImg from "../assets/creditos.png";
import segurosImg from "../assets/seguros.png";
import inversionesImg from "../assets/inversiones.png";

const UserContext = createContext();

export const ACTIONS = {
    SET_AVATAR: "SET_AVATAR",
    SET_NAME: "SET_NAME",
    SET_COINS: "SET_COINS",
    SET_EXP: "SET_EXP",
    SET_LEVEL: "SET_LEVEL",
    SET_LESSONS: "SET_LESSONS"
};

const userReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_AVATAR:
            return { ...state, avatar: action.payload };
        case ACTIONS.SET_NAME:
            return { ...state, name: action.payload };
        case ACTIONS.SET_COINS:
            return { ...state, coins: action.payload };
        case ACTIONS.SET_EXP:
            return { ...state, exp: action.payload };
        case ACTIONS.SET_LEVEL:
            return { ...state, level: action.payload };
        case ACTIONS.SET_LESSONS:
            return { ...state, lessons: action.payload };
        default:
            return state;
    }
};

const initialUserState = {
    avatar: {
        topType: "LongHairCurly",
        accessoriesType: "Prescription02",
        hairColor: "Auburn",
        clotheType: "ShirtCrewNeck",
        clotheColor: "PastelBlue",
        skinColor: "Light",
    },
    name: "",
    coins: 0,
    exp: 0,
    level: 1,
    lessons: [
        {
            title: "Inversiones",
            description: "Es como sembrar una semilla hoy para que en el futuro crezca y te dé buenos frutos.",
            state: "locked",
            img: inversionesImg,
            id: 4,
        },
        {
            title: "Seguros",
            description: "Es como tener un paraguas listo por si llueve, te protege en momentos difíciles y te da tranquilidad.",
            state: "locked",
            img: segurosImg,
            id: 3,
        },
        {
            title: "Creditos",
            description: "Es pedir dinero prestado para algo importante, pero con el compromiso de devolverlo poco a poco.",
            state: "locked",
            img: creditosImg,
            id: 2,
        },
        {
            title: "Ahorros",
            description: "Es guardar un poquito hoy para tener tranquilidad y bienestar mañana.",
            state: "available",
            img: ahorrosImg,
            id: 1,
        }
    ],
    selectedLesson: {
        title: "Ahorros",
        description: "Es guardar un poquito hoy para tener tranquilidad y bienestar mañana.",
        state: "available",
        img: ahorrosImg,
        id: 1
    }
};

export function UserProvider({ children }) {
    const [userState, dispatch] = useReducer(userReducer, initialUserState);

    return (
        <UserContext.Provider value={{ userState, dispatch }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
