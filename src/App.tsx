import { Button, ButtonGroup } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Button colorScheme="blue">Button</Button>
      <br />
      <ButtonGroup variant="outline" spacing="6">
        <Button colorScheme="blue">Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>
    </>
  );
}

export default App;
