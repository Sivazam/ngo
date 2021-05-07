import { newE2EPage } from '@stencil/core/testing';

describe('app-aboutus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-aboutus></app-aboutus>');

    const element = await page.find('app-aboutus');
    expect(element).toHaveClass('hydrated');
  });
});
