import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.800"}
      minH={"48"}
      px={"16"}
      py={["16","8"]}
    >

        <Stack direction={["column","row"]} h={"full"} alignItems={"center"}>

            <VStack w={"full"} alignItems={["center","flex-start"]} >
                <Text fontWeight={"bold"}>About US</Text>
                <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>Get info about coins and the exchange  platforms</Text>
            </VStack>
            <VStack>
                <Avatar boxSize={"20"} mt={["4","0"]}/>
                <Text>Our Founder</Text>
            </VStack>


        </Stack>
    </Box>
  );
};

export default Footer;
