import React from 'react';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text } from 'react-native';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const BlankScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <Text
        accessible={true}
        selectable={false}
        style={StyleSheet.applyWidth(
          { color: palettes.App.Ocean_Blue, fontSize: 70 },
          dimensions.width
        )}
      >
        {'Ocean Blue'}
      </Text>
      <Image
        resizeMode={'cover'}
        source={imageSource(Images['SwanBaby'])}
        style={StyleSheet.applyWidth(
          { height: 250, width: 250 },
          dimensions.width
        )}
      />
      <Text
        accessible={true}
        selectable={false}
        style={StyleSheet.applyWidth(
          { color: palettes.App.Lime_Green, fontSize: 70 },
          dimensions.width
        )}
      >
        {'Lime Green'}
      </Text>
    </ScreenContainer>
  );
};

export default withTheme(BlankScreen);
