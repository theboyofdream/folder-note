import React, { useEffect, useRef } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Screen } from '@/components/layout/Screen';
import { Modal } from '@/components/layout/Modal';
import { Icon } from '@/components/ui/Icon';

export const SearchModal: React.FC = function () {
  const inputRef = useRef<TextInput>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    // <Modal style={{ gap: 9 }}>
    <Modal
      style={{ justifyContent: 'center' }}
      sheetProps={{
        // enableDynamicSizing: false,
        // snapPoints: ['50%']
      }}
    >
      {/* <Text style={{ fontSize: 18, textAlign: 'center', textTransform: 'uppercase' }}>Search</Text> */}
      <View style={{
        flexDirection: 'row',
        // gap: 12,
        // borderWidth: 1,
        // borderColor: 'silver',
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#00000010'
      }}>
        <TextInput
          placeholder='Search here...'
          ref={inputRef}
          style={{
            padding: 8,
            paddingHorizontal: 12,
            // borderWidth: 1,
            // borderColor: 'silver',
            borderRadius: 9,
            fontSize: 15,
            flex: 1,
          }}
          cursorColor={'black'}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            // backgroundColor: '#121212',
            // backgroundColor: '#000',
            padding: 6,
            marginVertical: 6,
            borderRadius: 9,
            // flex:1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Icon name='CircleX' size={21} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            // backgroundColor: '#121212',
            backgroundColor: '#000',
            padding: 6,
            margin: 6,
            borderRadius: 9,
            // flex:1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Icon name='Search' color={'#fff'} />
          {/* <Text style={{color:'#fff'}}>Add</Text> */}
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
