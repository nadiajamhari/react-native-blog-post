import React from 'react';
import {NativeBaseProvider, ScrollView} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

import BlogList from './src/components/post/postList';
import TopHeader from './src/components/common/topHeader';
import Routes from './routes';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Routes />
        <TopHeader />
        <ScrollView>
          <BlogList />
        </ScrollView>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
