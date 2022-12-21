import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import IPost from './src/model/post.model';
import BlogList from './src/components/post/postList';
import PostDetails from './src/components/post/postDetails';

export type RootBlogPostParams = {
  PostList: undefined;
  PostDetails: {
    data: IPost;
  };
};

const RootStack = createDrawerNavigator<RootBlogPostParams>();

const Routes = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="PostList" component={BlogList} />
      <RootStack.Screen name="PostDetails" component={PostDetails} />
    </RootStack.Navigator>
  );
};

export default Routes;
