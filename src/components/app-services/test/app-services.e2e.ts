import { newE2EPage } from '@stencil/core/testing';

describe('app-services', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-services></app-services>');

    const element = await page.find('app-services');
    expect(element).toHaveClass('hydrated');
  });
});
