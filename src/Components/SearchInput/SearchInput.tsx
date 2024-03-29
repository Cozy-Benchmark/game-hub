import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProp {
  onSearch: (searchString: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProp) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        style={{ width: "100%" }}
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            borderRadius={20}
            placeholder="Search Games..."
            variant={"filled"}
            ref={ref}
          ></Input>
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
