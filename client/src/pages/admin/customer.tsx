import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import CardCustomer from "../../components/admin/CardCustomer";
import LayoutPageAd from "../../layouts/admin/LayoutPageAd";

export default function Customer() {
  return (
    <>
      <LayoutPageAd>
        <Stack mt={"7.5vh"} spacing={4}>
          <Card>
            <Box ps={6} pt={6}>
              <Heading size="sm">Customer</Heading>
            </Box>
            <CardBody display={"flex"} gap={5} ps={6}>
              <Box w={"50%"}>
                <Heading size="sm" pb={2}>
                  Laki - Laki
                </Heading>
                <CardCustomer />
              </Box>
              <Box w={"50%"}>
                <Heading size="sm" pb={2}>
                  Perempuan
                </Heading>
                <CardCustomer />
              </Box>
            </CardBody>
          </Card>
        </Stack>
      </LayoutPageAd>
    </>
  );
}
