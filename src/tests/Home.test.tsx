import { render } from '@testing-library/react';
import { test } from 'vitest';

import Home from '@/app/page';

test('Pages Router', () => {
  render(<Home />);
});
