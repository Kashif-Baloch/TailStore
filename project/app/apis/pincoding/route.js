import { NextResponse } from "next/server";
import mongoose, { mongo } from "mongoose";
import Pincodes from '@/models/PinCode';

export async function POST(request) {
    const payload = await request.json();
    const { name, code } = payload;
    try {
        if (mongoose.connection.readyState) {
            console.log("Already Connected");
        } else {
            await mongoose.connect(process.env.DB_STRING);
            console.log("Connected Successfully");
        }

        const alreadyCOde = await Pincodes.findOne({ Pcode: code });

        if (alreadyCOde) {
            return NextResponse.json({ Data: "Alreay Exist",success:false });
        }
        const data = await Pincodes.create({
            name,
            Pcode: code
        });

        return NextResponse.json({ Data: data,success:true });
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({ Error: error.message });
    }
}


export async function GET(request) {
    try {
        if (mongoose.connection.readyState) {
            console.log("Already Connected");
        } else {
            await mongoose.connect(process.env.DB_STRING);
            console.log("Connected Successfully");
        }

        const updated = await Pincodes.find();

        return NextResponse.json({ Data: updated });
    } catch (error) {
        console.log(error.message);
        return NextResponse.json({ Error: error.message });
    }
}