import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    "name": "kairos-landing",
    "compatibilityDate": "2026-09-21",
    "observability": {
      "enabled": true
    },
    "assets": {
      "notFoundHandling": "single-page-application"
    }
  }
});
