export const config = {
    nextAuthUrl: process.env.NEXTAUTH_URL || "http://localhost:3000",
    nextAuthSecret: process.env.NEXTAUTH_SECRET || "secret",
    api_url: process.env.API_URL || "http://localhost:8000/api/v1/",
};