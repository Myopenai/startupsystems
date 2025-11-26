/**
 * Cryptographic Handlers
 * Password hashing and comparison using Web Crypto API
 */

// Simple password hashing using Web Crypto API
// Note: In production, consider using a dedicated library or Cloudflare Workers compatible bcrypt
export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  // Add salt (in production, use proper salt)
  const salt = 'gcc-salt-2025';
  const saltedHash = await crypto.subtle.digest('SHA-256', encoder.encode(hashHex + salt));
  const saltedArray = Array.from(new Uint8Array(saltedHash));
  return saltedArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  const hashedPassword = await hashPassword(password);
  return hashedPassword === hash;
}

