import { newSpecPage } from '@stencil/core/testing';
import { AppReg } from '../app-reg';

describe('app-reg', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppReg],
      html: `<app-reg></app-reg>`,
    });
    expect(page.root).toEqualHtml(`
      <app-reg>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-reg>
    `);
  });
});
