
import { useEffect, useState } from 'react';
import Feed from '../components/Feed';
import feedsApi from '../services/FeedsAPI';
import { MainContainer, TitleContainer, MainTitle, Subtitle } from './FeedsStyles';

import image from '../assets/link.png';

interface Feed {
  title: string,
  article: string,
  linkVideo: string,
  priority: number
}

const Feeds = () => {
  const [feeds, setFeeds] = useState<Feed[]>([]);

  useEffect(() => {
    feedsApi.get('/')
      .then(response => setFeeds(response.data));
  }, []);

  return (
    <MainContainer>
      <TitleContainer>
        <MainTitle>Sugestões de artigos</MainTitle>
        <Subtitle>Visite nossa base de conhecimento &nbsp;<img src={image} alt="" /></Subtitle>
      </TitleContainer>


      {feeds.map(feed => (
        <Feed title={feed.title} article={feed.article} linkVideo={feed.linkVideo} priority={feed.priority} />
      ))}

    </MainContainer>
  );
};

export default Feeds;