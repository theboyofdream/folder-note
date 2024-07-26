import React, { useEffect, useRef, useState } from "react";
import { BackHandler, Pressable, StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import Animated, { runOnJS, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { Column } from "./Column";
import { useFocusEffect, useIsFocused, useNavigation } from "@react-navigation/native";
import BottomSheet, { BottomSheetBackdrop, BottomSheetProps, BottomSheetTextInput, BottomSheetView } from "@gorhom/bottom-sheet";

type ModalProps = {
  style?: ViewStyle
  children: React.ReactNode
  sheetProps?: Omit<BottomSheetProps, 'children'>
}

export const Modal: React.FC<ModalProps> = function ({ style, sheetProps, children }) {
  const { canGoBack, goBack } = useNavigation()
  const back = () => canGoBack() && goBack()

  return (
    <Pressable
      style={{
        flex: 1,
        backgroundColor: '#00000010'
      }}
      onPress={back}
    >
      <BottomSheet
        {...sheetProps}
        enableDynamicSizing={sheetProps?.enableDynamicSizing ?? true}
      // snapPoints={snapPoints?? undefined}
      >
        <BottomSheetView style={[{
          minHeight: 100,
          padding: 12,
          paddingBottom: 18
        }, style]}>
          {children}
        </BottomSheetView>
      </BottomSheet>
    </Pressable>
  )
}
