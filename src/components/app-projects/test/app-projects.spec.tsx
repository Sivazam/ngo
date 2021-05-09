import { newSpecPage } from '@stencil/core/testing';
import { AppProjects } from '../app-projects';

describe('app-projects', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppProjects],
      html: `<app-projects></app-projects>`,
    });
    expect(page.root).toEqualHtml(`
      <app-projects>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-projects>
    `);
  });
});
