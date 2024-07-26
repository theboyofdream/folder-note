import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Screen } from '@/components/layout/Screen';
import { ArrowLeft, ChevronDown, ChevronLeft, File, FileCheck, FilePlus, FileText, Filter, Folder, FolderCheck, FolderPlus, FolderUp, ListFilter, Minus, Pen, PenLine, Plus, QrCode, Save, Search, Settings, Settings2, SwatchBook, Trash, Trash2 } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@/components/ui/Icon';

const iconsize = 24


export const HomeScreen: React.FC = function () {
  return (
    <>
      <TopToolBar />
      <Screen style={{ backgroundColor: '#fff', padding: 15 }}>
        {/* <Text style={{
          fontSize: 30,
          opacity: 0.3,
          // fontWeight: 'bold',
          // padding: 15,
          // paddingVertical: 15
        }}>Folder name</Text> */}
        <View style={{
          flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center'
        }}>
          <View style={{ flexDirection: 'row', padding: 6, paddingVertical: 12, gap: 12, alignItems: 'center' }}>
            {/* <FolderUp size={24} strokeWidth={1.5} color={'black'} /> */}
            <SwatchBook size={24} strokeWidth={1.5} color={'black'} />
            <Folder size={24} strokeWidth={1.5} color={'black'} />
            <Text>...</Text>
            <Folder size={24} strokeWidth={1.5} color={'black'} />
            <FolderCheck size={24} strokeWidth={1.5} color={'black'} />
            <FileText size={24} strokeWidth={1.5} color={'black'} />
            <FileCheck size={24} strokeWidth={1.5} color={'black'} />
            <Text style={{ fontSize: 17 }}>ONE one</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Folder size={24} color={'black'} />
          </View>
          <Text>Home screen</Text>
          <Icon name='Search'/>
          <View>
            <Plus size={24} strokeWidth={1.5} color={'black'}/>
            <Minus size={24} strokeWidth={1.5} color={'black'}/>
            <ChevronDown size={24} strokeWidth={1.5} color={'black'}/>
          </View>
          <Text>Home screen</Text>
          <TextInput
            placeholder='Title'
            style={{
              padding: 12,
              fontSize: 24,
            }}
            cursorColor={'black'}
          />
          <TextInput
            placeholder='Type your notes here...'
            value='Type your notes here...'
            multiline
            editable={false}
            style={{
              flex: 1,
              // borderWidth: 1,
              textAlignVertical: 'top',
              padding: 12,
              paddingTop: 0,
              fontSize: 17,
              color:'black'
            }}
            cursorColor={'black'}
          />
        </View>
        <Fab />
      </Screen>
      <BottomTabs />
    </>
  );
}

function Fab() {
  const [edit, setEdit] = useState(false)
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        backgroundColor: '#121212',
        padding: 12,
        margin: 18,
        borderRadius: 12,
        position: 'absolute',
        right: 0,
        bottom: 0
      }}
      onPress={() => setEdit(!edit)}
    >
      {
        edit ?
          <Save size={iconsize - 5} color={'#F4F4F5'} />
          :
          <Pen size={iconsize - 5} color={'#F4F4F5'} />
      }
    </TouchableOpacity>
  )
}

function TopToolBar() {
  return (
    <View style={{
      backgroundColor: '#fff',
      flexDirection: 'row',
      padding: 12,
      gap: 12,
    }}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          // backgroundColor: 'transpa',
          padding: 8,
          borderRadius: 12
        }}
      >
        <ArrowLeft size={iconsize} color={'#000'} />
        {/* <ChevronLeft size={iconsize} color={'#000'} /> */}
      </TouchableOpacity>
      <View style={{ flex: 1 }}></View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          backgroundColor: '#00000000',
          padding: 8,
          borderRadius: 12
        }}
      >
        <Trash2 size={iconsize} color={'#000'} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          backgroundColor: '#00000000',
          padding: 8,
          borderRadius: 12
        }}
      >
        <Settings size={iconsize} color={'#000'} />
      </TouchableOpacity>
    </View>
  )
}

function BottomTabs() {
  const { navigate } = useNavigation()
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 12,
      paddingHorizontal: 30,
      // backgroundColor: '#fff',
      backgroundColor: '#fff',
      elevation: 24
    }}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          backgroundColor: '#00000000',
          padding: 8,
          borderRadius: 12,
          // opacity: 0.3
        }}
      >
        <QrCode size={iconsize} strokeWidth={1.5} color={'#121212'} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          // backgroundColor: '#F4F4F5',
          padding: 8,
          borderRadius: 9
        }}
        onPress={() => navigate('add-folder')}
      >
        <FolderPlus size={iconsize} color={'#18181b'} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          backgroundColor: '#00000000',
          padding: 8,
          borderRadius: 12
        }}
      // onPress={()=>navigate('add-folder')}
      >
        <FilePlus size={iconsize} color={'#000'} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          backgroundColor: '#00000000',
          padding: 8,
          borderRadius: 12
        }}
        onPress={() => navigate('search')}
      >
        <Search size={iconsize} color={'#000'} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          backgroundColor: '#00000000',
          padding: 8,
          borderRadius: 12
        }}
        onPress={() => navigate('filter')}
      >
        <ListFilter size={iconsize} color={'#000'} />
      </TouchableOpacity>
    </View>
  )
}

function Button() {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        backgroundColor: '#00000000',
        padding: 8,
        borderRadius: 12
      }}
    >
      <FolderPlus size={iconsize} color={'#000'} />
    </TouchableOpacity>
  )
}
