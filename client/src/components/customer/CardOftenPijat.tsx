import { Box, Card, CardBody, Heading } from "@chakra-ui/react";

export default function CardOftenPijat() {
  return (
    <>
      <Box>
        <Box w={"275px"}>
          <Card>
            <CardBody gap={2} display={"flex"} justifyContent={"space-between"}>
              <Heading size="sm">Pijat dan Urut</Heading>
              <Heading size="sm">3X</Heading>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </>
  );
}