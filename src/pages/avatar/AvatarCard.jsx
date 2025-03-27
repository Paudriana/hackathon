import Avatar from "avataaars";

function AvatarCard({ cardStyles={ width: "100px", height: "100px" }, accessoriesType, hairColor, clotheType, clotheColor, skinColor, topType }) {
  return (
    <Avatar
      style={cardStyles}
      avatarStyle="Circle"
      topType={topType}
      accessoriesType={accessoriesType}
      hairColor={hairColor}
      facialHairType="Blank"
      clotheType={clotheType}
      clotheColor={clotheColor}
      eyeType="Default"
      eyebrowType="Default"
      mouthType="Smile"
      skinColor={skinColor}
    />
  );
}

export default AvatarCard;
