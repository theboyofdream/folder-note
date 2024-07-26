import { Modal } from '@/components/layout/Modal';
import { Icon } from '@/components/ui/Icon';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const sort = [
  'oldest',
  'newest'
]
const filters = [
  'name',
  'date'
]


export const FilterModal: React.FC = function () {
  const [] = useState()
  return (
    <Modal>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        alignSelf: 'center',
        gap: 6,
        padding: 6,
        backgroundColor: '#f2f2f2',
        borderRadius: 12
      }}>
        {
          sort.map((v, i) => (
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                // backgroundColor: '#121212',
                // backgroundColor: '#cccccc',
                backgroundColor: i == 0 ? '#fff' : 'transparent',
                padding: 6,
                borderRadius: 9,
                // borderTopLeftRadius:i==0?12:0,
                // borderTopRightRadius:0,
                // borderBottomRightRadius:0,
                // borderBottomLeftRadius:i==0?12:0,
                // borderRadius: 12,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: '#000' }}>{v}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <View style={{
        padding: 18
      }}>
        {
          filters.map((v) => (
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                // backgroundColor: '#121212',
                // backgroundColor: '#cccccc',
                // backgroundColor: i==0?'#fff':'#cccccc',
                padding: 6,
                margin:3,
                borderRadius: 9,
                // borderTopLeftRadius:i==0?12:0,
                // borderTopRightRadius:0,
                // borderBottomRightRadius:0,
                // borderBottomLeftRadius:i==0?12:0,
                // borderRadius: 12,
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'space-between',
                // alignItems: 'center'
              }}
            >
              <Icon name="Check" />
              <Text style={{ color: '#000' }}>{v}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    </Modal>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#00000010',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
