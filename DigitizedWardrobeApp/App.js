import React from 'react';
import { TabNavigator } from 'react-navigation';

import CalendarScreen from './app/screens/calendar';
import ShoppingScreen from './app/screens/shopping';
import SocialScreen from './app/screens/social';
import WardrobeScreen from './app/screens/wardrobe';

export default TabNavigator ({
  Calendar: CalendarScreen,
  Shopping: ShoppingScreen,
  Social: SocialScreen,
  Wardrobe: WardrobeScreen,
});
