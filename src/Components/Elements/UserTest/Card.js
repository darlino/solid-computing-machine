import React from "react";
import styled from "styled-components";
import { Avatar, AvatarBadge, AvatarGroup, Box, Center, Heading, Badge, Text ,Flex, HStack, VStack, Button} from "@chakra-ui/react"

function Index(props) {
  return (
    <Box w="240px" h="auto" p="30px" boxShadow="md">
      <Center>
        <Avatar src={props.img} size="2xl"/>
      </Center>
        <Center pt={2} mt={3}>
          <VStack>
            <HStack>
              <Text> {props.username}</Text><Badge colorScheme="purple"> NEW</Badge>
            </HStack>
            <Badge colorScheme="red"> 4M subscribers</Badge>
            
          </VStack>
        </Center>
      

    </Box>
  );
}

export default Index;
