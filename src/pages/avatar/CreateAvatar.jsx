import { useUser, ACTIONS } from "../../context/UserContext";
import AvatarCard from "./AvatarCard";
import styles from "./Avatar.module.scss";
import { useNavigate } from "react-router-dom";
import { avatars } from "../../utils/utils";
import "bootstrap-icons/font/bootstrap-icons.css";


function CreateAvatar() {
  const navigate = useNavigate();
  const { userState, dispatch } = useUser();

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
      <i className="bi bi-arrow-left" style={{ fontSize: "2rem" }} onClick={() => navigate(-1)} ></i>
      <div>
        <h2 className={styles.avatarTitle}>Selecciona tu avatar</h2>

        <div className={styles.selectedAvatar}>
          <AvatarCard cardStyles={{ width: "150px", height: "150px" }} {...userState.avatar} />
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
            value={userState.name} 
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
