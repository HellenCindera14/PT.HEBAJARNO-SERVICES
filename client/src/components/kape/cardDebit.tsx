import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

export default function CardDebit() {
  return (
    <>
      <Box w={"40%"}>
        <Card bgColor={"teal.400"} color={"white"}>
          <CardBody ps={6} padding={"20px"}>
            <Heading size="sm" textAlign={"center"}>Top Up</Heading>
            <Box pb={3}>
              <FormLabel>Nama</FormLabel>
            </Box>
            <FormControl isRequired>
              <Input name="topup" type="number" placeholder="Jumlah Top Up" />
            </FormControl>
            <FormControl id="upload-proof" isRequired mb={5}>
              <FormLabel>Bukti Transfer</FormLabel>
              <Box position={"relative"} mb={5} alignItems={"center"}>
                <Input
                  id="file-input"
                  name="attachment"
                  position={"absolute"}
                  p={1}
                  placeholder="small size"
                  size="md"
                  type="file"
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </Box>
            </FormControl>
            <Button mt={"40px"} type="submit" colorScheme="blue" width={"100%"}>
              Kirim
            </Button>
          </CardBody>
        </Card>
      </Box>
    </>
  );
}
