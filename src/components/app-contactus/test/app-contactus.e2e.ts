import { newE2EPage } from '@stencil/core/testing';

describe('app-contactus', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-contactus></app-contactus>');

    const element = await page.find('app-contactus');
    expect(element).toHaveClass('hydrated');
  });
});
