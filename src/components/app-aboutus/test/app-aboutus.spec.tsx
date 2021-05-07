import { newSpecPage } from '@stencil/core/testing';
import { AppAboutus } from '../app-aboutus';

describe('app-aboutus', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppAboutus],
      html: `<app-aboutus></app-aboutus>`,
    });
    expect(page.root).toEqualHtml(`
      <app-aboutus>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-aboutus>
    `);
  });
});
