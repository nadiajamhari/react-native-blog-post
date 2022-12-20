import React from 'react';
import {View} from 'native-base';
import BlogCard from './blogCard';

const BlogList: React.FC = () => {
  return (
    <View m="5">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </View>
  );
};

export default BlogList;
