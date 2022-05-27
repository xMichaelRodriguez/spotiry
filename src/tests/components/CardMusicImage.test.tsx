import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CardMusicImage } from '../../components/CardMusicImage';

describe('test on CardMusicImage', () => {
  it('Must be defined', () => {
    const options = {
      url: 'https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg',
      height: 100,
      width: 100,
    };
    const { container } = render(<CardMusicImage {...options} />);
    expect(container).toBeDefined();
  });
});
