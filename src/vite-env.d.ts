/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RAG_PROFILE_DESCRIPTION_URL: string;
  // Agrega más variables de entorno aquí según sea necesario
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
