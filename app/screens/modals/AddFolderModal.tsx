import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Screen } from '@/components/layout/Screen';
import { Modal } from '@/components/layout/Modal';

export const AddFolderModal: React.FC = function () {
  return (
    <Modal style={{ gap: 12 }}>
      {/* <Text style={{ fontSize: 18,textAlign:'center',textTransform:'uppercase' }}>Add folder</Text> */}
      <TextInput
        placeholder='Folder name?'
        style={{
          padding: 8,
          paddingHorizontal: 12,
          borderWidth: 1,
          borderColor: 'silver',
          borderRadius: 9,
          fontSize: 15
        }}
      />
      <View style={{
        flexDirection: 'row',
        gap: 12,
      }}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            // backgroundColor: '#121212',
            backgroundColor: '#00000010',
            padding: 12,
            borderRadius: 12,
            flex:1,
            justifyContent:'center',
            alignItems:'center'
          }}
        >
         <Text style={{color:'#000'}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            // backgroundColor: '#121212',
            backgroundColor: '#000',
            padding: 12,
            borderRadius: 12,
            flex:1,
            justifyContent:'center',
            alignItems:'center'
          }}
        >
         <Text style={{color:'#fff'}}>Add</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
