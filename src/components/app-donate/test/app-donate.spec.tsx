import { newSpecPage } from '@stencil/core/testing';
import { AppDonate } from '../app-donate';

describe('app-donate', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppDonate],
      html: `<app-donate></app-donate>`,
    });
    expect(page.root).toEqualHtml(`
      <app-donate>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-donate>
    `);
  });
});
