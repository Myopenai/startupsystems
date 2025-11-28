/**
 * Environment types for Startup Systems Worker
 */

interface Env {
  // D1 Database
  DB: D1Database;
  
  // Environment variables
  ENVIRONMENT: string;
  JWT_SECRET: string;
  
  // Workers Sites Assets binding
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}

