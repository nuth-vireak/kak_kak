import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import {loginService, registerService} from "@/services/auth.service";

export const authOption = {
    providers: [
        CredentialsProvider({
            async authorize(newUserInfo) {
                const userData = {
                    email: newUserInfo?.email,
                    password: newUserInfo?.password,
                }
                await loginService(userData);
            },
        }),
    ],
};

const handler = NextAuth(authOption);
export {handler as GET, handler as POST};