export const config = {
    nextAuthUrl: process.env.NEXTAUTH_URL || "http://localhost:3000",
    nextAuthSecret: process.env.NEXTAUTH_SECRET || "secret",
    API_URL: process.env.API_URL || "http://localhost:8000/api/v1/",
    //API_URL: "http://18.216.107.32/api/v1/",
    API_URL_STORE: "https://fakestoreapi.com/products",
    ENVIROMENT: process.env.NODE_ENV || "development",
};