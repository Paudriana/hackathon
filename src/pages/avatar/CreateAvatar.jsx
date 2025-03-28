import { useReducer } from "react";
import AvatarCard from "./AvatarCard";
import styles from "./Avatar.module.scss";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const ACTIONS = {
  SET_AVATAR: "SET_AVATAR",
  SET_NAME: "SET_NAME",
};

const avatarReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_AVATAR:
      return { ...state, ...action.payload };
    case ACTIONS.SET_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const initialAvatarState = {
  topType: "LongHairCurly",
  accessoriesType: "Prescription02",
  hairColor: "Auburn",
  clotheType: "ShirtCrewNeck",
  clotheColor: "PastelBlue",
  skinColor: "Light",
  name: "",
};

function CreateAvatar() {
  const navigate = useNavigate();
  const [avatarState, dispatch] = useReducer(avatarReducer, initialAvatarState);

  const avatars = [
    { topType: "LongHairCurly", accessoriesType: "Prescription02", hairColor: "Auburn", clotheType: "ShirtCrewNeck", clotheColor: "PastelBlue", skinColor: "Light" },
    { topType: "LongHairBob", accessoriesType: "Blank", hairColor: "Red", clotheType: "ShirtCrewNeck", clotheColor: "PastelGreen", skinColor: "Light" },
    { topType: "LongHairStraightStrand", accessoriesType: "Blank", hairColor: "Black", clotheType: "ShirtCrewNeck", clotheColor: "Pink", skinColor: "Pale" },
    { topType: "LongHairNotTooLong", accessoriesType: "Prescription02", hairColor: "BrownDark", clotheType: "ShirtCrewNeck", clotheColor: "Heather", skinColor: "Light" },
    { topType: "LongHairBun", accessoriesType: "Blank", hairColor: "BrownDark", clotheType: "ShirtCrewNeck", clotheColor: "PastelOrange", skinColor: "Brown" },
    { topType: "LongHairBigHair", accessoriesType: "Blank", hairColor: "Blonde", clotheType: "ShirtCrewNeck", clotheColor: "Red", skinColor: "Light" },
    { topType: "LongHairCurvy", accessoriesType: "Round", hairColor: "Black", clotheType: "ShirtCrewNeck", clotheColor: "Black", skinColor: "Light" },
    { topType: "LongHairFroBand", accessoriesType: "Blank", hairColor: "BrownDark", clotheType: "ShirtCrewNeck", clotheColor: "PastelRed", skinColor: "DarkBrown" },
  ];

  const handleSelectAvatar = (avatar) => {
    dispatch({ type: ACTIONS.SET_AVATAR, payload: avatar });
  };

  const handleNameChange = (event) => {
    dispatch({ type: ACTIONS.SET_NAME, payload: event.target.value });
  };

  const handleContinue = () => {
    navigate("/learn");
  };

  return (
    <>
      <i className="bi bi-arrow-left" style={{ fontSize: "2rem" }}></i>
      <div>
        <h2 className={styles.avatarTitle}>Selecciona tu avatar</h2>

        <div className={styles.selectedAvatar}>
          <AvatarCard cardStyles={{ width: "150px", height: "150px" }} {...avatarState} />
        </div>

        <div className={styles.avatarsContainer}>
          {avatars.map((avatar, index) => (
            <div key={index} onClick={() => handleSelectAvatar(avatar)}>
              <AvatarCard {...avatar} />
            </div>
          ))}
          <div className={styles.randomAvatar} onClick={() => handleSelectAvatar({
            topType: avatars[Math.floor(Math.random() * avatars.length)].topType,
            accessoriesType: avatars[Math.floor(Math.random() * avatars.length)].accessoriesType,
            hairColor: avatars[Math.floor(Math.random() * avatars.length)].hairColor,
            clotheType: avatars[Math.floor(Math.random() * avatars.length)].clotheType,
            clotheColor: avatars[Math.floor(Math.random() * avatars.length)].clotheColor,
            skinColor: avatars[Math.floor(Math.random() * avatars.length)].skinColor,
          })}>
            <i className="bi bi-shuffle" style={{ fontSize: "2.5rem" }}></i>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <h2 className={styles.avatarTitle}>Ingresa tu nombre:</h2>
          <input 
            type="text" 
            className={styles.nameInput} 
            value={avatarState.name} 
            onChange={handleNameChange}
          />
        </div>

        <div className={styles.buttonContainer}>
          <button type="button" className={styles.continueButton} onClick={handleContinue}>
            Continuar
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateAvatar;
