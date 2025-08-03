import 'i18next';
import type { CommonNamespace } from './locales/common';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: CommonNamespace;
    };
  }
}