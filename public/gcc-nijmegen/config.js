/**
 * Global Central City Arrivals - Configuration
 * Auto-detects backend URL based on environment
 */

// Auto-detect backend URL
const getBackendUrl = () => {
  // In production (Cloudflare Workers)
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    // Use relative path for same-origin requests
    return '/api/gcc';
  }
  
  // Development mode - can use local server or Cloudflare Workers dev
  // Option 1: Local Express.js server (legacy)
  // return 'http://localhost:3000/api';
  
  // Option 2: Cloudflare Workers dev (recommended)
  // Set this to your local wrangler dev URL, e.g.:
  return 'http://localhost:8787/api/gcc';
};

export const BACKEND_URL = getBackendUrl();
export const API_VERSION = 'v1';
export const APP_VERSION = '1.0.0';

// Make available globally
if (typeof window !== 'undefined') {
  window.GCC_CONFIG = {
    BACKEND_URL,
    API_VERSION,
    APP_VERSION
  };
}

