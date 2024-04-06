import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../../utils/supabaseServer";

export async function POST() {
    try{
        const { error: userError } = await supabaseAdmin().auth.signOut();
        if (userError) {
            throw 'supabase auth error';
        }

        return NextResponse.json({ message: 'signOut'}, { status: 200 });
    }catch(error){
        return NextResponse.json({ message: error }, { status: 500 });
    }
}