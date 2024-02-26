import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);


const customViewports = {
  large: {
     name: "L Screen",
     styles: {
        width: "1920px",
        height: "1080px"
     }
  },
  medium: {
    name: "M Screen",
    styles: {
       width: "800px",
       height: "963px"
    }
 },
  small: {
     name: "S Screen",
     styles: {
        width: "420px",
        height: "500px"
     }
  }
};

const preview: Preview = {
  parameters: {
    viewport: { viewports: customViewports },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered"
  },
};

export default preview;
