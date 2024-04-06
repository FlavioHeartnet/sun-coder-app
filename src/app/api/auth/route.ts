import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../../utils/supabaseServer";

export async function POST() {
    try{
        const { data: { user }, error: userError } = await supabaseAdmin().auth.getUser();
        if (!user || userError) {
            throw 'supabase auth error';
        }

        return NextResponse.json({ message: 'User token validated', user_id: user.id }, { status: 200 });
    }catch(error){
        return NextResponse.json({ message: error }, { status: 500 });
    }
}