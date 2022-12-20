import React from 'react';
import {View, Text, Box} from 'native-base';

const TopHeader: React.FC = () => {
  return (
    <View>
      <Box bg="darkBlue.600" py="4" px="2">
        <Text color="#fff">
          We are now hosting events with Zoom Webinars! Find out more
        </Text>
      </Box>
    </View>
  );
};

export default TopHeader;
