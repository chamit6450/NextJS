import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import prismaClient from "../../../lib/db";
// const prismaClient = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse){
    const data = await req.json();

   await prismaClient.user.create({
        data:{
            username: data.username,
            password: data.password
        }
    })

    // console.log(data);

    return NextResponse.json({
        msg:"signup successful!!"
    })
}