import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Reproductor } from '../../components/Reproductor';

describe('test on Reproductor', () => {
  it('Must be defined', () => {
    const { container } = render(<Reproductor />);
    expect(container).toBeDefined();
  });
});
