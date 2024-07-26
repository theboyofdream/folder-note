import { HomeScreen } from "@/screens/HomeScreen"
import { AddFolderModal } from "@/screens/modals/AddFolderModal"
import { DeleteModal } from "@/screens/modals/DeleteModal"
import { FilterModal } from "@/screens/modals/FilterModal"
import { SearchModal } from "@/screens/modals/SearchModal"
import { SettingScreen } from "@/screens/SettingScreen"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from "react"

type Routes = {
  home: {
    _id?: string
  }
  setting: undefined
  filter: undefined
  'add-file': undefined
  'add-folder': undefined
  search: undefined
  delete: undefined
}

const Stack = createNativeStackNavigator<Routes>()
export const StackNavigation: React.FC = function () {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='setting' component={SettingScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{
        presentation: 'transparentModal',
        animation: 'fade_from_bottom',
        animationDuration: 600,
        headerShown: false
      }}>
        <Stack.Screen name='filter' component={FilterModal} />
        <Stack.Screen name='add-folder' component={AddFolderModal} />
        <Stack.Screen name='search' component={SearchModal} />
        <Stack.Screen name='delete' component={DeleteModal} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends Routes { }
  }
}