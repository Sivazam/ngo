import { newE2EPage } from '@stencil/core/testing';

describe('app-donate', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-donate></app-donate>');

    const element = await page.find('app-donate');
    expect(element).toHaveClass('hydrated');
  });
});
