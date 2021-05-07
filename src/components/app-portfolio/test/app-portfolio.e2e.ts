import { newE2EPage } from '@stencil/core/testing';

describe('app-portfolio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-portfolio></app-portfolio>');

    const element = await page.find('app-portfolio');
    expect(element).toHaveClass('hydrated');
  });
});
