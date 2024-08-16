import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import  img from "../assets/img.jpg"
import { motion } from "framer-motion";


const Home = () => {
  return (
    <Box bgColor={"whiteAlpha.900"} w={"full"} h={"85vh"}>

      <motion.div style={{
        height:"85vh"
      }}
      animate={{
        translateY:"20px"
      }}
      transition={{
        duration:2,
        repeat:Infinity,
        repeatType:"reverse"
      }}
      >
    <Image
        w={"full"}
        h={"full"}
        // objectFit={"contain"}
        src={img}
        filter={"grayscale(1)"}
        />
        </motion.div>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"bold"}
        color={"whiteAlpha.800"}
        // mt={"-20"}
      >
        CryptInfo
      </Text>
    </Box>
  );
};

export default Home;
