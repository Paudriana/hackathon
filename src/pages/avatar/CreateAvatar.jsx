import { useReducer } from "react";
import AvatarCard from "./AvatarCard";
import styles from "./Avatar.module.scss";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";


const ACTIONS = {
  SET_AVATAR: "SET_AVATAR",
};

const avatarReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_AVATAR:
      return { ...state, ...action.payload };
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
};

function CreateAvatar() {
  const navigate = useNavigate();
  const [avatarState, dispatch] = useReducer(avatarReducer, initialAvatarState);

  const avatars = [
    { topType: "LongHairCurly", accessoriesType: "Prescription02", hairColor: "Auburn", clotheType: "ShirtCrewNeck", clotheColor: "PastelBlue", skinColor: "Light" },
    { topType: "LongHairBob", accessoriesType: "Blank", hairColor: "Red", clotheType: "ShirtCrewNeck", clotheColor: "PastelGreen", skinColor: "Light" },
    { topType: "LongHairStraightStrand", accessoriesType: "Blank", hairColor: "Black", clotheType: "ShirtCrewNeck", clotheColor: "Pink", skinColor: "Light" },
    { topType: "LongHairNotTooLong", accessoriesType: "Prescription02", hairColor: "BrownDark", clotheType: "ShirtCrewNeck", clotheColor: "Heather", skinColor: "Light" },
    { topType: "LongHairBun", accessoriesType: "Blank", hairColor: "BrownDark", clotheType: "ShirtCrewNeck", clotheColor: "PastelOrange", skinColor: "Light" },
    { topType: "LongHairBigHair", accessoriesType: "Blank", hairColor: "Blonde", clotheType: "ShirtCrewNeck", clotheColor: "Red", skinColor: "Light" },
    { topType: "LongHairCurvy", accessoriesType: "Round", hairColor: "Black", clotheType: "ShirtCrewNeck", clotheColor: "White", skinColor: "Light" },
    { topType: "LongHairFroBand", accessoriesType: "Blank", hairColor: "BrownDark", clotheType: "ShirtCrewNeck", clotheColor: "PastelRed", skinColor: "Light" },
  ];

  const handleSelectAvatar = (avatar) => {
    dispatch({ type: ACTIONS.SET_AVATAR, payload: avatar });
  };

  const handleContinue = () => {
    navigate("/learn");
  };

  return (
    <div>
      <h2>Selecciona tu avatar</h2>

      <div className={styles.selectedAvatar}>
        <AvatarCard cardStyles={{ width: "200px", height: "200px" }} {...avatarState} />
      </div>

      <div className={styles.avatarsContainer}>
        {avatars.map((avatar, index) => (
          <div key={index} onClick={() => handleSelectAvatar(avatar)}>
            <AvatarCard {...avatar} />
          </div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <button type="button" className={styles.continueButton} onClick={handleContinue}>
          Continuar
        </button>
      </div>
    </div>
  );
}

export default CreateAvatar;
