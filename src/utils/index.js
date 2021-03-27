import {
    Platform,
    UIManager,
    LayoutAnimation,
    PixelRatio,
    Dimensions,
  } from 'react-native';
  
  const scaleValue = PixelRatio.get() / 2;
  
  export const enableExperimental = () => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };
  
  export const scaleWithPixel = (size, limitScale = 1.2) => {
    /* setting default upto 20% when resolution device upto 20% with defalt iPhone 7 */
    const value = scaleValue > limitScale ? limitScale : scaleValue;
    return size * value;
  };
  
  export const heightHeader = () => {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const landscape = width > height;
  
    if (Platform.OS === 'android') return 45;
    if (Platform.isPad) return 65;
    switch (height) {
      case 375:
      case 414:
      case 812:
      case 896:
        return landscape ? 45 : 88;
      default:
        return landscape ? 45 : 65;
    }
  };
  
  export const heightTabView = () => {
    const height = Dimensions.get('window').height;
    let size = height - heightHeader();
    switch (height) {
      case 375:
      case 414:
      case 812:
      case 896:
        size -= 30;
        break;
      default:
        break;
    }
  
    return size;
  };
  
  export const getWidthDevice = () => {
    return Dimensions.get('window').width;
  };
  
  export const getHeightDevice = () => {
    return Dimensions.get('window').height;
  };
  
  export const scrollEnabled = (contentWidth, contentHeight) => {
    return contentHeight > Dimensions.get('window').height - heightHeader();
  };
  

  