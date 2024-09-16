import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

const singIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState (false)

  const submit = async () => {
    try {
      // Store user data in AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(form));
      // Navigate to profile page
      // ...
    } catch (e) {
      // Handle error
      console.error(e);
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Image 
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[80px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Iniciar Sesión</Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({...form,email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Contraseña"
            value={form.password}
            handleChangeText={(e) => setForm({...form,password: e})}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Iniciar sesión"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              ¿No tienes una cuenta?
            </Text>
            <Link href="/sing-up" className='text-lg font-psemibold text-secondary'>Registrate</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default singIn