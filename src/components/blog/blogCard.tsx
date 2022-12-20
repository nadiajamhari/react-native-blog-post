import React from 'react';
import {
  AspectRatio,
  Box,
  Center,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from 'native-base';

import {StyleSheet} from 'react-native';

const BlogCard: React.FC = () => {
  return (
    <Box alignItems="center">
      <Box
        mt="3"
        borderWidth="1"
        maxW="80"
        rounded="lg"
        borderColor="coolGray.300">
        <Box overflow="hidden">
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg',
              }}
              alt="image"
              roundedTop="lg"
            />
          </AspectRatio>
          <Center
            rounded="lg"
            bg="purple.700"
            position="absolute"
            bottom="3"
            right="3"
            _text={{
              color: '#fff',
              fontWeight: '700',
              padding: 1.5,
            }}>
            News
          </Center>
        </Box>
        <Stack space={1} mt="2" ml="2" mb="2">
          <Heading size="xl">Title</Heading>
          <Text fontSize="md">Description</Text>
          <Link
            mt="3"
            mb="2"
            href="#"
            _text={{textDecoration: 'none', color: 'violet.600'}}>
            Read More
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default BlogCard;

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    elevation: 3,
  },
});
