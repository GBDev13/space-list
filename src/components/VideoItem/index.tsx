import { Button, Container, Details, Thumb } from "./styles";
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import { RiAddCircleLine } from 'react-icons/ri';

interface VideoProps {
  addMode?: boolean;
}

export function VideoItem({ addMode = false }: VideoProps) {
  return (
    <Container>
      <Thumb imgUrl="https://veja.abril.com.br/wp-content/uploads/2019/12/amazonia-floresta-coraccca7ao.jpg.jpg"/>
      <Details>
        <strong title="Meu titulo Meu titulo Meu titulo Meu titulo">Meu titulo Meu titulo Meu titulo Meu titulo</strong>
        <div>
          <div>
            {addMode ? (
              <Button>
                <RiAddCircleLine />
                Add to list
              </Button>
            ) : (
              <>
                <Button>
                  <BsFillPlayFill />
                  Play now
                </Button>
                <FaTrashAlt size={12} />
              </>
            )}
            
          </div>
          <span>
            <AiOutlineClockCircle />
            15:35
          </span>
        </div>
      </Details>
    </Container>
  )
}