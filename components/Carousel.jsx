// import React, { useRef, useEffect } from 'react';
// import { View, Image } from 'react-native';
// import { Box, Center, FlatList,useTheme } from 'native-base';

// const Carousel = ({ data }) => {
//     const flatListRef = useRef(null);
//     const theme = useTheme();
  
//     useEffect(() => {
//       const interval = setInterval(() => {
//         if (data.length > 0) {
//           const currentIndex = flatListRef.current.getCurrentIndex();
//           const nextIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
//           flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
//         }
//       }, 3000);
  
//       return () => clearInterval(interval);
//     }, [data]);
  
//     const renderItem = ({ item }) => {
//       return (
//         <Center flex={1}>
//           <Image source={{ uri: item }} style={{ width: '100%', height: 200, resizeMode: 'cover' }} />
//         </Center>
//       );
//     };
  
//     return (
//       <Box height={200} bg={theme.colors.white}> {/* Set the background color using the theme */}
//         <FlatList
//           ref={flatListRef}
//           data={data}
//           renderItem={renderItem}
//           horizontal
//           pagingEnabled
//           showsHorizontalScrollIndicator={false}
//           keyExtractor={(item, index) => index.toString()}
//           snapToInterval={300}
//         />
//       </Box>
//     );
//   };
  

// export default Carousel;
