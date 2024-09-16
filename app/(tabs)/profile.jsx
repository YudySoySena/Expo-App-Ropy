import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Retrieve user data from local storage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Image 
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Profile</Text>

          <View className="mt-7">
            <Text className="text-lg text-gray-100 font-pregular">Username: {user.username}</Text>
            <Text className="text-lg text-gray-100 font-pregular">Email: {user.email}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;