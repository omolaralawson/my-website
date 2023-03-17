// @ts-check
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import * as React from "react";
import { SSRProvider } from "@react-aria/ssr";

import Seo from "./src/components/Seo";


/**
 *
 * @param {import('gatsby').WrapRootElementNodeArgs} param0
 * @returns {import('react').ReactNode}
 */
export const wrapRootElement = ({ element }) => {
  return (
    <SSRProvider>
      <Seo />
      {element}
    </SSRProvider>
  );
};
