import { Title, Content, Image, Button, WiderButton, Link, AnimeDivFade, AbsoluteLink } from './Style';

type Data = {
  title: string,
  content: string,
  image1: string,
  image2: string,
  button: string,
  link: string,
  contentWhenCompleted: string,
  completed: boolean
}

const BaseComponent = (data: Data) => {
  const { title, content, image1, image2, button, link, contentWhenCompleted, completed } = data;

  return(
    <AnimeDivFade>

      <div style={{display: 'flex'}}>
        {!completed ? 
          <div>
            <Title>{title}</Title>
            <Content>
              {content}
            </Content>
          </div>
          :
          <div>
            <Title>Você já completou esse passo!</Title>
            <Content>
              {contentWhenCompleted}
            </Content>
          </div>
        }

        {!completed ?
          <Image src={image1} />
          :
          <Image src={image2} />
        }

      </div>

      {!completed && (
        <div>
          {title === "Experimente a Plataforma" ? <Button>{button}</Button> : <WiderButton>{button}</WiderButton>}
          {title === "Experimente a Plataforma" ? link && <Link>{link}</Link> : link && <AbsoluteLink>{link}</AbsoluteLink>}
        </div>
      )}

    </AnimeDivFade>
  )
};

export default BaseComponent;