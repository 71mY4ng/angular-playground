export interface AuthResponse {
    authToken: string;
    refreshToken: string;
    expiresAt: Date;
    username: string;
}
