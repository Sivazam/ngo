import { newSpecPage } from '@stencil/core/testing';
import { AppServices } from '../app-services';

describe('app-services', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppServices],
      html: `<app-services></app-services>`,
    });
    expect(page.root).toEqualHtml(`
      <app-services>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-services>
    `);
  });
});
