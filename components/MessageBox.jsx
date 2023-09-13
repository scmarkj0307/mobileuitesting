import React from "react";
import { View, Image, Text } from "react-native";
import moment from 'moment/moment';

export const MessageBox = React.memo(({item})=>{
    return (
        <View
          style={{
            width: '100%',
            padding: 5,
            flexDirection: 'row',
            alignItems: 'flex-end',
            gap: 5,
            justifyContent: item.type === 'ADMIN' ? 'flex-end' : 'flex-start',
          }}
        >
          {item.type === 'CLIENT' && (
            <Image
              source={{ uri: item.receiverId.profile }}
              alt='Sender Profile'
              style={{ width: 30, height: 30, borderRadius: 100 }}
            />
          )}
          <View
            style={{
              minWidth: 150,
              maxWidth: 250,
              paddingHorizontal: 20,
              paddingVertical: 15,
              borderRadius: 15,
              backgroundColor: item.type === 'ADMIN' ? '#06b6d4' : '#fff',
              borderBottomLeftRadius: item.type !== 'ADMIN' ? 0 : 15,
              borderBottomRightRadius: item.type === 'ADMIN' ? 0 : 15,
              color: item.type === 'ADMIN' ? '#fff' : '',
            }}
          >
            <Text
              style={{
                fontSize: 8,
                width: '100%',
                marginBottom: 5,
                color: item.type === 'ADMIN' ? '#fff' : '#27272a',
                textAlign: item.type === 'ADMIN' ? 'right' : 'left',
              }}
            >
              {moment(item.date).format('LLL')}
            </Text>
            <Text style={{ color: item.type === 'ADMIN' ? '#fff' : '#27272a' }}>
              {item.messageContent}
            </Text>
          </View>
        </View>
      );
});
