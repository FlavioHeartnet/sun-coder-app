import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../../utils/supabaseServer";

export async function POST(request: Request) {
    try{
        const token = request.headers.get('Authorization')?.split('Bearer ')[1];
        if (!token) {
            throw 'missing auth token';
        }
        const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser(token);
        if (!user || userError) {
            throw 'supabase auth error';
        }

        return NextResponse.json({ message: 'User token validated' }, { status: 200 });
    }catch(error){
        console.error(error);
        return NextResponse.json({ message: error }, { status: 500 });
    }
}