import React from 'react';
import { View } from 'react-native';

const Bird = ({birdBottom, birdLeft}) => {
    const birdWidth = 80
    const birdHeight = 60

    return (
      <View 
          style={{
            position: "absolute",
            backgroundImage: "url(https://png.pngitem.com/pimgs/s/184-1842460_flappy-bird-bird-png-transparent-png.png)",
            backgroundSize: "cover",
            width: birdWidth,
            height: birdHeight,
            left: birdLeft - birdWidth / 2,
            bottom: birdBottom - birdHeight / 2,
          }}>
      </View>
    );
}

export default Bird

