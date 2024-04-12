'use server'

import { SessionValidation } from "../../../utils/sessionValidation"

export async function getUserInfoAction(isProduct:boolean = true){
    return await SessionValidation(isProduct);
}