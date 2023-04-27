import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function AddUser() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [post, setPost] = useState("");

  const generateUsername = (name, surname) => {
    const username = `${name.toLowerCase()}${surname.toLowerCase()}`.replace(
      /\s/g,
      ""
    );
    return username;
  };
  const addUser = () => {
    const username = generateUsername(name, surname);
    const newUser = {
      name: name,
      surname: surname,
      username: username,
      post: post,
    };
    if (newUser.name.trim() && newUser.surname.trim() !== "") {
      setUsers([...users, newUser]);
      setName("");
      setSurname("");
    }
  };

  const postAnything = () => {
    let user = users.map((item) => {
      if (item.username === userName) {
        item.post = post;
        setPost(post);
        return item;
      }
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Surname"
        value={surname}
        onChangeText={setSurname}
      />
      <Button title="Create User" onPress={addUser} />
      <Text style={{ fontSize: 20 }} />
      {users.map((user, index) => (
        <View key={index} style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 18 }}>
            {user.name} {user.surname}
          </Text>
          <Text style={{ fontSize: 16, color: "gray" }}>{user.username}</Text>
        </View>
      ))}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Content"
        value={post}
        onChangeText={setPost}
      />
      <Button title="Post anyting" onPress={postAnything} />
      {users.map((user, index) =>
      //   user.post !== "" ? (
          <View key={index} style={{ marginVertical: 5 }}>
            <Text style={{ fontSize: 18 }}>{`Username: ${user.username}`}</Text>
            <Text
              style={{ fontSize: 16, color: "gray" }}
            >{`Post: ${user.post}`}</Text>
          </View>
      //   ) : (
      //     ""
      //   )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    borderColor: "lightgrey",
    borderRadius: 3,
    padding: 6,
    width: "100%",
    marginBottom: 10,
  },
});
