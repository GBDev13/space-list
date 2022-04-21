import { Title } from "../Title";
import { VideoItem } from "../VideoItem";
import { Container, ListContainer } from "./styles";

export function VideosList() {
  return (
    <Container>
      <header>
        <Title>Videos in list</Title>
      </header>
      <ListContainer>
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
      </ListContainer>
    </Container>
  )
}