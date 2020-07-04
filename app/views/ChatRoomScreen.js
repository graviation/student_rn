/**
 * ChatRoom聊天室
 */

import React, {useState, useCallback, useEffect} from 'react';
import {View, Text} from 'react-native';
import {GiftedChat, Send} from 'react-native-gifted-chat';

const ChatRoomScreen: () => React = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: '我发送的消息 17311111111 123@qq.com',
        createdAt: new Date(),
        local: 'zh-ch',
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
        // image: 'http://h1.ioliu.cn/bing/FreshSalt_ZH-CN12818759319_640x480.jpg',
        sent: true,
        // Mark the message as received, using two tick
        received: true,
        // Mark the message as pending with a clock loader
        pending: true,
        // Any additional custom parameters are passed through
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
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
  );
};

export default ChatRoomScreen;
