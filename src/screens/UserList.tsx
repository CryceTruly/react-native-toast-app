import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import faker from 'faker';
import {useNavigation} from '@react-navigation/core';

function UserList() {
  const {navigate} = useNavigation();
  const users = Array(100)
    .fill('')
    .map(() => ({
      image: faker.image.avatar(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      contactCard: faker.helpers.createCard(),
    }));

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View style={{minHeight: Dimensions.get('screen').height - 75}}>
          {users.map(item => (
            <View key={item.contactCard.username}>
              <TouchableOpacity
                onPress={() => {
                  navigate('User detail', {image: item.image, name: item.name});
                }}
                style={{
                  flexDirection: 'row',
                  padding: 14,
                }}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={{width: 70, borderRadius: 100, height: 70}}
                  height={70}
                  width={70}
                />
                <View style={{paddingLeft: 20}}>
                  <Text style={{fontSize: 21}}>{item.name}</Text>
                  <Text style={{fontSize: 17}}>{item.email}</Text>
                  <Text style={{fontSize: 14}}>{item.contactCard.phone}</Text>
                </View>
              </TouchableOpacity>
              <View style={{height: 0.3, backgroundColor: 'grey'}} />
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

export default UserList;
