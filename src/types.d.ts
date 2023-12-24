import 'express';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      AUTH_SERVER_ADDRESS: string;
    }
  }
}
