/**
 * JWT Token Handlers
 * Token generation and verification
 */

interface TokenPayload {
  id: number;
  email: string;
  name: string;
  role: string;
}

export function generateToken(env: any, payload: TokenPayload): string {
  const secret = env.JWT_SECRET || 'gcc-secret-key-change-in-production-2025';
  
  // Simple token encoding (in production, use proper JWT library)
  const header = { alg: 'HS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const tokenPayload = {
    ...payload,
    iat: now,
    exp: now + (7 * 24 * 60 * 60) // 7 days
  };

  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(tokenPayload));
  
  // In production, use proper HMAC signing
  const signature = btoa(secret + encodedHeader + encodedPayload);
  
  return `${encodedHeader}.${encodedPayload}.${signature}`;
}

export function verifyToken(env: any, token: string): TokenPayload {
  const secret = env.JWT_SECRET || 'gcc-secret-key-change-in-production-2025';
  
  const parts = token.split('.');
  if (parts.length !== 3) {
    throw new Error('Invalid token format');
  }

  const [encodedHeader, encodedPayload, signature] = parts;
  
  // Verify signature (simplified - use proper HMAC in production)
  const expectedSignature = btoa(secret + encodedHeader + encodedPayload);
  if (signature !== expectedSignature) {
    throw new Error('Invalid token signature');
  }

  // Decode payload
  const payload = JSON.parse(atob(encodedPayload));
  
  // Check expiration
  if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
    throw new Error('Token expired');
  }

  return payload;
}

