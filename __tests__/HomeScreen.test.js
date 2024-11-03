import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';

describe('HomeScreen', () => {
  it('Title and card render correctly', () => {
    const {getByText, getByTestId} = render(<HomeScreen />);

    // İlk state olarak title render ediliyor mu? (Beklenti kişi listesi olarak render edilmesi)
    const titleElement = getByTestId('appTitle');

    const appTitle = getByText('Kişi Listesi');
    expect(titleElement).toBeTruthy();

    // expect(titleElement).toBe('Kişi Listesi')
    const initialColor = titleElement.props.style[0].color;
    console.log(initialColor);
    expect(initialColor).toBe('white');

    fireEvent.press(titleElement);

    const updatedColor = titleElement.props.style[1].color;
    expect(updatedColor).toBe('#16c784');
  });
});
