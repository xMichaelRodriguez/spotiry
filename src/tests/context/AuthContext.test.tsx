import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AuthProvider } from '../../context/AuthProvider';

describe('test on AuthContext', () => {
  it('Must be defined', () => {
    const component = render(<AuthProvider>{}</AuthProvider>);
    expect(component.container).toBeDefined();
  });
});
