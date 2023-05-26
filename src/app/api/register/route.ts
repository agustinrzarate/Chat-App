import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "../../libs/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    const alreadyExist = await prisma.user.findMany({
        where: {
         OR: [
           {email}
         ]
       }
   });

    if(alreadyExist.length > 0){
        return new NextResponse("Email already exists", {status: 409})
    }
    
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
