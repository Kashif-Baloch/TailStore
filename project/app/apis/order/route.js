import { NextResponse } from "next/server";
import mongoose, { mongo } from "mongoose";
import Orders from "@/models/Orders";

export async function POST(request) {
  const payload = await request.json();
  const { name, email, phone, address, city, zip, items, status } = payload;
  try {
    if (mongoose.connection.readyState) {
      console.log("Already Connected");
    } else {
      await mongoose.connect(process.env.DB_STRING);
      console.log("Connected Successfully");
    }

    const data = await Orders.create({
      name,
      email,
      phone,
      address,
      city,
      zip,
      items,
      status,
    });

    return NextResponse.json({ Data: data, success: true })
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ Error: error.message });
  }
}

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);

    if (mongoose.connection.readyState) {
      console.log("Already Connected");
    } else {
      await mongoose.connect(process.env.DB_STRING);
      console.log("Connected Successfully");
    }

    const orderFounded = await Orders.find().sort({ date: -1 });
    return orderFounded
      ? NextResponse.json({
        Data: orderFounded,
        success: true,
      })
      : NextResponse.json({ success: false });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ Data: error.message });
  }
}

export async function DELETE(request) {
  const payload = await request.json();
  const { id, delt } = payload;
  console.log(id, delt);
  try {
    if (mongoose.connection.readyState) {
      console.log("Already Connected");
    } else {
      await mongoose.connect(process.env.DB_STRING);
      console.log("Connected Successfully");
    }
    if (delt == "one" && id) {
      const dataOne = await Orders.findByIdAndDelete({ _id:id });
      return NextResponse.json({ Data: dataOne, success: true })
    } else {
      const dataAll = await Orders.deleteMany();
      return NextResponse.json({ Data: dataAll, success: true })
    }
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ Error: error.message });
  }
}
