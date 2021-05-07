import { newE2EPage } from '@stencil/core/testing';

describe('app-index', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-index></app-index>');

    const element = await page.find('app-index');
    expect(element).toHaveClass('hydrated');
  });
});
