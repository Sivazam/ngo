import { newE2EPage } from '@stencil/core/testing';

describe('app-reg', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-reg></app-reg>');

    const element = await page.find('app-reg');
    expect(element).toHaveClass('hydrated');
  });
});
