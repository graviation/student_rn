/**
 * ChatRoom聊天室
 */

import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {GiftedChat, Send} from 'react-native-gifted-chat';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import FeatherIcon from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get('window');
const ChatRoomScreen: () => React = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
        createdAt: new Date(),
        quickReplies: {
          type: 'radio', // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: '😋 Yes',
              value: 'yes',
            },
            {
              title: '📷 Yes, let me show you with a picture!',
              value: 'yes_picture',
            },
            {
              title: '😞 Nope. What?',
              value: 'no',
            },
          ],
        },
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
      {
        _id: 2,
        text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
        createdAt: new Date(),
        quickReplies: {
          type: 'checkbox', // or 'radio',
          values: [
            {
              title: 'Yes',
              value: 'yes',
            },
            {
              title: 'Yes, let me show you with a picture!',
              value: 'yes_picture',
            },
            {
              title: 'Nope. What?',
              value: 'no',
            },
          ],
        },
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          width: width,
          height: verticalScale(40),
          alignItems: 'center',
          backgroundColor: 'gray',
        }}>
        <FeatherIcon
          name={'chevron-left'}
          size={moderateScale(22)}
          color={'#fff'}
        />
        <Text
          numberOfLines={1}
          ellipsizeMode={'tail'}
          style={{color: '#fff', marginLeft: scale(10), width: scale(270)}}>
          北航航空爱国演讲(106)
        </Text>
      </View>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        dateFormat={'YYYY-MM-DD'}
        timeFormat={'HH:mm'}
        placeholder={'输入信息...'}
        renderUsernameOnMessage={true}
        scrollToBottom={false}
        alignTop={true}
        renderSend={(props) => {
          return (
            <Send {...props}>
              <View style={{marginRight: 10, marginBottom: 15}}>
                <Text>发送</Text>
              </View>
            </Send>
          );
        }}
      />
    </View>
  );
};

export default ChatRoomScreen;
