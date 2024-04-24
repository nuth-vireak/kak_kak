"use server";

import {registerService} from "@/services/auth.service";

export default async function signupAction(currentState) {
    const newUser = {
        firstName: currentState.first_name,
        lastName: currentState.last_name,
        gender: currentState.gender,
        email: currentState.email,
        password: currentState.password
    };
    await registerService(newUser);
}
