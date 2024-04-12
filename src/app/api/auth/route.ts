import { NextResponse } from "next/server";
import { SessionValidation } from "../../../../utils/sessionValidation";

export async function POST(request: Request) {
   try{
        const { isProduct } = await request.json();
        const resp = await SessionValidation(isProduct);
        console.log(resp);
        const {user_id, email, isAuth, planActive, subscriptionId, activePriceId, firstname, lastname} = resp;
        //if(!isAuth) return NextResponse.json({ message: 'User not authenticated' }, { status: 401 });

        return NextResponse.json({ message: 'User token validated', user_id, email, isAuth,planActive, subscriptionId, activePriceId ,firstname, lastname  }, { status: 200 });
    }catch(error){
        return NextResponse.json({ message: error }, { status: 500 });
    }
}