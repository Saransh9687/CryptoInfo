import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "..";
import {
  Container,
  Heading,
  HStack,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";
import Loader from "./Loader";

const Exchange = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchange = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
        // console.log(data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchExchange();
  }, []);

  return (
    <Container maxW={"container.lg"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target="blank">
    <VStack
      w={"40"}
      shadow={"md"}
      p={8}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"2"}
      css={{
        "&:hover": {
          transform: "scale(1.3)",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectfit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {rank}
      </Heading>
      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);

export default Exchange;
