import { newSpecPage } from '@stencil/core/testing';
import { AppContactus } from '../app-contactus';

describe('app-contactus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppContactus],
      html: `<app-contactus></app-contactus>`,
    });
    expect(page.root).toEqualHtml(`
      <app-contactus>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-contactus>
    `);
  });
});
