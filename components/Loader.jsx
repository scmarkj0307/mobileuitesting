import React from 'react';
import AnimatedLoader from 'react-native-animated-loader';
import { View, Text, Dimensions} from 'react-native';

function Loader({loading}) {
  const { height } = Dimensions.get('screen');
  return (
    <View style={{with:'100%', height:height}}>
                    <AnimatedLoader
                    visible={loading}
                    overlayColor="rgba(255,255,255,0.75)"
                    animationStyle={{
                        width: 100,
                        height: 100,
                      }}
                    speed={1}>
                        <Text>Loading...</Text>
                    </AnimatedLoader>
    </View>
  )
}

export default Loader