import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
  const req = await request.formData();
  console.log(request.headers.get("referrer"));
  console.log(req);
  //   return NextResponse.redirect("http://localhost:3000");
}
