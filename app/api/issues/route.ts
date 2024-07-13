import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import z from 'zod'

import { schema } from "@/app/ValidationSchema";



export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.format(), { status: 404 })
    }

    const newIssues = await prisma.issue.create({
        data: { title: body.title, description: body.description }
    })
    return NextResponse.json(newIssues, { status: 201 })
}