import type { Preview } from "@storybook/react";
import '@/styles/index.scss';
import "@fontsource/cinzel-decorative/400.css";
import "@fontsource/cinzel-decorative/700.css";
import "@fontsource/cinzel-decorative/900.css";
import "@fontsource/tangerine/400.css";
import "@fontsource/tangerine/700.css";
import "@fontsource-variable/cormorant";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
