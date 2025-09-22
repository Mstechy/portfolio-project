import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, course } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    const { data, error } = await supabase
      .from("queries")
      .insert([{ name, email, message, course }]);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}