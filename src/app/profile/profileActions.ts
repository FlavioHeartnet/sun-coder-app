'use server';

import { SessionValidation } from "../../../utils/sessionValidation";

export async function getProfileInfo(){
    return await SessionValidation(true);
}