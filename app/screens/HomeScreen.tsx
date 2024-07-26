import React, { useState } from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Screen } from '@/components/layout/Screen';
import { ArrowLeft, ChevronDown, ChevronLeft, File, FileCheck, FilePlus, FileText, Filter, Folder, FolderCheck, FolderPlus, FolderUp, ListFilter, Minus, Pen, PenLine, Plus, QrCode, Save, Search, Settings, Settings2, SwatchBook, Trash, Trash2 } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@/components/ui/Icon';
import { ScrollView } from 'react-native-gesture-handler';
import { BlurView } from 'expo-blur';

const iconsize = 24
type FileSystemItem = Directory | File;

interface Directory {
  name: string;
  type: "directory";
  children: FileSystemItem[];
}

interface File {
  name: string;
  type: "file";
  size: string;
}
const data: FileSystemItem = {
  "name": "root",
  "type": "directory",
  "children": [
    {
      "name": "home",
      "type": "directory",
      "children": [
        {
          "name": "user1",
          "type": "directory",
          "children": [
            {
              "name": "documents",
              "type": "directory",
              "children": [
                {
                  "name": "resume.docx",
                  "type": "file",
                  "size": "24KB"
                },
                {
                  "name": "cover_letter.docx",
                  "type": "file",
                  "size": "15KB"
                }
              ]
            },
            {
              "name": "photos",
              "type": "directory",
              "children": [
                {
                  "name": "vacation",
                  "type": "directory",
                  "children": [
                    {
                      "name": "beach.png",
                      "type": "file",
                      "size": "2MB"
                    },
                    {
                      "name": "mountains.png",
                      "type": "file",
                      "size": "3MB"
                    }
                  ]
                },
                {
                  "name": "family.png",
                  "type": "file",
                  "size": "1.5MB"
                }
              ]
            }
          ]
        },
        {
          "name": "user2",
          "type": "directory",
          "children": [
            {
              "name": "music",
              "type": "directory",
              "children": [
                {
                  "name": "rock",
                  "type": "directory",
                  "children": [
                    {
                      "name": "song1.mp3",
                      "type": "file",
                      "size": "5MB"
                    },
                    {
                      "name": "song2.mp3",
                      "type": "file",
                      "size": "6MB"
                    }
                  ]
                },
                {
                  "name": "jazz",
                  "type": "directory",
                  "children": [
                    {
                      "name": "song1.mp3",
                      "type": "file",
                      "size": "4MB"
                    },
                    {
                      "name": "song2.mp3",
                      "type": "file",
                      "size": "4.5MB"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "etc",
      "type": "directory",
      "children": [
        {
          "name": "config.json",
          "type": "file",
          "size": "1KB"
        },
        {
          "name": "hosts",
          "type": "file",
          "size": "0.5KB"
        }
      ]
    },
    {
      "name": "var",
      "type": "directory",
      "children": [
        {
          "name": "log",
          "type": "directory",
          "children": [
            {
              "name": "syslog",
              "type": "file",
              "size": "10MB"
            },
            {
              "name": "auth.log",
              "type": "file",
              "size": "2MB"
            }
          ]
        }
      ]
    }
  ]
} as const

export const HomeScreen: React.FC = function () {
  return (
    <>
      <TopToolBar />
      <Screen style={{ padding: 15 }}>
        <Tree data={[data]} />
        <Fab />
      </Screen>
      <BottomTabs />
    </>
  );
}



function Tree({ data }: { data: FileSystemItem[] }) {
  const [open, setOpen] = useState(false)
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {
        data.map(d => (
          <View key={d.name}>
            <Pressable
              style={{
                flexDirection: 'row',
                gap: 12,
                padding: 12,
                alignItems: 'center'
              }}
              onPress={() => {
                if (d.type === 'directory') {
                  setOpen(!open)
                }
              }}
            >
              <Icon name={
                d.type === 'directory' ? 'Folder' : 'File'
              } />
              <Text>{d.name}</Text>
            </Pressable>
            {open &&
              <View style={{ paddingLeft: 24 }}>
                {
                  d.type === 'directory' && (
                    <>
                      {
                        d.children.map(a => <Tree key={a.name} data={[a]} />)
                      }
                    </>
                  )
                }
                {/* {
                d.type === 'directory' && (
                  <Tree data={d.children} />
                )} */}
              </View>
            }
          </View>
        ))
      }
    </ScrollView>
  )
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
      <View style={{ flex: 1 }}></View>
      {/* <TouchableOpacity
        activeOpacity={0.5}
        style={{
          backgroundColor: '#00000000',
          padding: 8,
          borderRadius: 12
        }}
      >
        <Icon name='Trash' />
        </TouchableOpacity> */}
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          backgroundColor: '#00000000',
          padding: 8,
          borderRadius: 12
        }}
      >
        <Icon name='Settings' />
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
