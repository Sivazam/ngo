import { newSpecPage } from '@stencil/core/testing';
import { AppIndex } from '../app-index';

describe('app-index', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppIndex],
      html: `<app-index></app-index>`,
    });
    expect(page.root).toEqualHtml(`
      <app-index>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-index>
    `);
  });
});
