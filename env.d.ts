/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PREFIX: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }