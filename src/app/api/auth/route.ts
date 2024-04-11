import { NextResponse } from "next/server";
import { SessionValidation } from "../../../../utils/sessionValidation";

export async function POST() {
    try{
        const [user_id, email, isAuth, planActive, subscriptionId, activePriceId ] = await SessionValidation();

        return NextResponse.json({ message: 'User token validated', user_id, email, isAuth,planActive, subscriptionId, activePriceId  }, { status: 200 });
    }catch(error){
        return NextResponse.json({ message: error }, { status: 500 });
    }
}