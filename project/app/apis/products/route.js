import mongoose, { mongo } from "mongoose";
import { NextResponse } from "next/server";
import Product from "@/models/Product";
import fs from "fs";

export async function POST(request) {
  const payload = await request.json();
  const { slug, desc, price, size, varient, image, category, type, uslug } =
    payload;
  try {
    if (mongoose.connection.readyState) {
      console.log("Already Connected");
    } else {
      await mongoose.connect(process.env.DB_STRING);
      console.log("Connected Successfully");
    }

    let dataBase = [];
    if (image === "" || image === undefined) {
      dataBase = "http://localhost:3000/banner.jpg";
    } else {
      for (let i = 0; i < image.length; i++) {
        const buffer = await Buffer.from(
          image[i].replace(/^data:image\/(png|jpg|jpeg);base64,/, ""),
          "base64"
        );
        try {
          fs.writeFileSync(`public/productsimages/${uslug} ${i}.png`, buffer);
        } catch (error) {
          NextResponse.json({ Error: error });
        }

        dataBase.push(`http://localhost:3000/productsimages/${uslug} ${i}.png`);
      }
    }

    const productFounded = await Product.findOne({ uslug });

    if (productFounded) {
      return NextResponse.json({ Error: "Already Exists the Object", success: false });
    }

    const data = await Product.create({
      slug: slug,
      desc: desc,
      price: price,
      category: category,
      size: size,
      varient: varient,
      img: dataBase,
      uslug: uslug,
      type: type,
    });

    return NextResponse.json({ Data: data, success: true });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ Error: error });
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

    const category = searchParams.get("category") || "tshirt";
    const mode = searchParams.get("mode") || "all";
    const type = searchParams.get("type") || "main";
    const uslug = searchParams.get("uslug");
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 2;
    const skip = (page - 1) * limit;

    if (mode == "one") {
      const productFounded = await Product.findOne({ uslug: uslug });
      return NextResponse.json({ Data: productFounded });
    } else if (mode == "cwise") {
      const verProductC = await Product.find({ category });
      const productFounded = await Product.find({ category })
        .skip(skip)
        .limit(limit);
      return NextResponse.json({
        Data: productFounded,
        TotalItem: verProductC.length,
      });
    } else if (mode == "allin") {
      const verProductC = await Product.find();
      const productFounded = await Product.find().skip(skip).limit(limit);
      return NextResponse.json({
        Data: productFounded,
        TotalItem: verProductC.length,
      });
    } else {
      const verProduct = await Product.find({ type });
      const productFounded = await Product.find({ type })
        .skip(skip)
        .limit(limit);
      return NextResponse.json({
        Data: productFounded,
        TotalItem: verProduct.length,
      });
      //const response = NextResponse.json(data);

      // response.headers.set('Cache-Control', 'no-store');
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ Data: error });
  }
}

export async function DELETE(request) {
  try {
    const payload = await request.json();
    const { idText } = payload;

    if (mongoose.connection.readyState) {
      console.log("Already Connected");
    } else {
      await mongoose.connect(process.env.DB_STRING);
      console.log("Connected Successfully");
    }

    if (idText) {
      const deletedProduct = await Product.findByIdAndDelete({ _id: idText });
      return NextResponse.json({ Success: true, Pro: deletedProduct });
    } else {
      return NextResponse.json({ MSG: `Id is ${idText}` });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ Data: error });
  }
}

export async function PUT(request) {
  try {
    const payload = await request.json();
    const { id, uslug, type, slug, desc, price, size, varient } = payload;

    if (mongoose.connection.readyState) {
      console.log("Already Connected");
    } else {
      await mongoose.connect(process.env.DB_STRING);
      console.log("Connected Successfully");
    }

    let productF = await Product.findById(id);
    if (!productF) {
      return NextResponse.json({ Msg: "Not Found",success:false });
    }

    const upDate = {
      uslug,
      type,
      slug,
      desc,
      price,
      size,
      varient,
      img: productF.image,
    };

    const product = await Product.findByIdAndUpdate(
      id,
      { $set: upDate },
      { new: true }
    );
    return NextResponse.json({ product,success:true });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({ Error: "Internal Server Error",success:false });
  }
}

// const rawParams = request.url.split('?')[1];
// const params = qs.parse(rawParams);
// const yourParamName = request.nextUrl.searchParams.get('paramName');
// console.log(yourParamName);

// export async function POST(request) {
//     const payload = await request.json();
//     const { slug, desc, price, size, varient, video, category } = payload;
//     try {
//         if (mongoose.connection.readyState) {
//             console.log("Already Connected");
//         } else {
//             await mongoose.connect(process.env.DB_STRING);
//             console.log("Connected Successfully");
//         }

//         let dataBase = [];
//         if (video === '' || video === undefined) {
//             dataBase = "http://localhost:3000/deafult-video.mp4";
//         }
//         else {
//             for (let i = 0; i < video.length; i++) {
//                 const buffer = await Buffer.from(video[i].replace(/^data:video\/(mp4|mkv|ts|);base64,/, ''), 'base64');
//                 try {
//                     fs.writeFileSync(`public/productsimages/${slug} ${i}.mp4`, buffer);
//                 } catch (error) {
//                     NextResponse.json({ "Error": error });
//                 }

//                 dataBase.push(`http://localhost:3000/productsimages/${slug} ${i}.mp4`);
//             }
//         }

//         const productFounded = await Product.findOne({ slug });

//         if (productFounded) {
//             return NextResponse.json({ Error: "Already Exists the Object" });
//         }

//         const data = await Product.create({
//             slug: slug,
//             desc: desc,
//             price: price,
//             category: category,
//             size: size,
//             varient: varient,
//             video: dataBase
//         });

//         return NextResponse.json({ Data: "Success Video Sent" });
//     } catch (error) {
//         console.log(error);
//         return NextResponse.json({ Error: error });
//     }
// }
