import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import axios from 'axios';

import {Text, View} from 'native-base';

import {RootBlogPostParams} from '../../../routes';
import BlogCard from './postCard';

type Props = NativeStackScreenProps<RootBlogPostParams, 'PostList'>;

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response?.data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error: Unable to fetch posts :', error);
      });
  }, []);

  return (
    <View m="5">
      {loading ? <Text>Loading....</Text> : <BlogCard data={posts} />}
    </View>
  );
};

export default BlogList;
