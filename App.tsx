import React from 'react';
import {NativeBaseProvider, ScrollView} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

import BlogList from './src/components/blog/blogList';
import TopHeader from './src/components/common/topHeader';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <TopHeader />
        <ScrollView>
          <BlogList />
        </ScrollView>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
