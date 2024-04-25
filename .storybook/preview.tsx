import type { Preview } from "@storybook/react";
import "../src/globals.css";

import React from "react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { DocsContainer, DocsContainerProps } from "@storybook/blocks";
import { themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: (props: DocsContainerProps) => {
        const { globals } = (props.context as any).store.globals;
        return (
          <DocsContainer
            {...props}
            context={props.context}
            theme={
              // Complains about missing properties, but it works
              (globals.theme === "dark" ? themes.dark : themes.light) as any
            }
          />
        );
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'light',
    })
  ],
};

export default preview;
