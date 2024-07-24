import { NextResponse } from "next/server";
import { mongoose } from "mongoose";
import Users from "@/models/Users";

export async function POST(request) {
    const payload = await request.json();
    const { name, email, nickname, pic } = payload;
    try {
        if (mongoose.connection.readyState) {
            console.log("Already Connected");
        } else {
            await mongoose.connect(process.env.DB_STRING);
            console.log("Connected Successfully");
        }

        const usersFounded = await Users.findOne({ email });

        if (usersFounded) {
            return NextResponse.json({ Error: "Already Exists the User" });
        }

        const data = await Users.create({
            name,
            email,
            nickname,
            pic
        });

        return NextResponse.json({ Data: data });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ Error: error.message });
    }
}