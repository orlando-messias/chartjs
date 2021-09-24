import { MainContainer, Image, Title } from "../components/TipTagStyles";
import { Label } from "../pages/QuickTipsStyles";

type TipTagProps = {
  image: string,
  title: string
}

const TipTag = (obj: TipTagProps) => {
  const { image, title } = obj

  return (
    <MainContainer>
      <Label />
      <Image src={image} alt="" />
      <Title>{title}</Title>
    </MainContainer>
  );
};

export default TipTag;