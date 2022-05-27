import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginPage from '../../../features/auth/pages/LoginPage';

describe('test on LoginPage', () => {
  it('Must be defined', () => {
    const component = render(<LoginPage />);
    expect(component.container).toBeDefined();
  });
});
