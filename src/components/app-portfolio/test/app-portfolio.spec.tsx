import { newSpecPage } from '@stencil/core/testing';
import { AppPortfolio } from '../app-portfolio';

describe('app-portfolio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppPortfolio],
      html: `<app-portfolio></app-portfolio>`,
    });
    expect(page.root).toEqualHtml(`
      <app-portfolio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-portfolio>
    `);
  });
});
