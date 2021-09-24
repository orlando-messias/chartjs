import { MainContainer, VideoContainer, Title, Content, Link, P, IFrame } from "./FeedStyles";

type FeedProps = {
  title: string,
  article: string,
  linkVideo: string,
  priority: number
}

const Feed = (feed: FeedProps) => {

  return (
    <MainContainer>
      <VideoContainer>
        <IFrame allow="fullscreen" src={feed.linkVideo} />
      </VideoContainer>
      <Content>
        <Title>{feed.title}</Title>
        <P>{feed.article.substr(0, 147)}...</P>
        <Link>
          Ler artigo {` >`}
        </Link>
      </Content>

    </MainContainer>
  );
};

export default Feed;