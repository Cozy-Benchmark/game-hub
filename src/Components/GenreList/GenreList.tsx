import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { GenreProp } from "../../hooks/useGenre";
import getCroppedImageUrl from "../../services/image-url";

interface GenreListProp {
  onSelectedGenre: (genre: GenreProp) => void;
}
const GenreList = ({ onSelectedGenre }: GenreListProp) => {
  const { data, isLoading, error } = useGenre();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem paddingY={"5px"} key={genre.id}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                onClick={() => {
                  onSelectedGenre(genre);
                }}
                variant={"link"}
                fontSize={"lg"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
