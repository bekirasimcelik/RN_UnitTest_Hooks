import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';

describe('HomeScreen', () => {
  it('Title and card render correctly', () => {
    const {getByText} = render(<HomeScreen />);

    // İlk state olarak title render ediliyor mu? (Beklenti kişi listesi olarak render edilmesi)
    const titleElement = getByText('Kişi Listesi');
    expect(titleElement).toBeTruthy();
  });
});
