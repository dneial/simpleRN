import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import Publication from './Publication';



interface Post {
  text: string;
  imageURL: string;
}

export default function App() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([] as Post[]);

  const publier = () => {
    // fetch("https://api.github.com/users/defunkt")
    // .then(data=>data.json())
    // .then(data=>setImageURL(JSON.stringify(data)))
    setPosts([{
      text,
      imageURL: "https://coffee.alexflipnote.dev/JhqaHeCqL_c_coffee.png"
    }, ...posts]);

    setText("");

  }

  return (
    <ScrollView style={styles.container}>
      <View>
      <TextInput 
        style={{
          color: 'gray'
        }}
        placeholder="Quoi de neuf ?"
        //@ts-ignore remove this before submitting
        onChangeText={text => setText(text)}
        value={text}
        />
        <Button
          onPress={publier}
          title="Publier"
          color="gold"
        />
      </View>
      {
        posts.map((post,index) => <Publication text={post.text} imageURL={post.imageURL} key={index}/>)
      }
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    flex: 1,
    backgroundColor: '#fff',
  },
});
