import { NextResponse } from "next/server";
import Stripe from "stripe";

let key = process.env.STRIPE_SECRET_KEY

let stripe = new Stripe(key, {
    apiVersion: '2023-10-16'
})

export async function POST(request) {
    const payload = await request.json();
    const { cartDetails } = payload;
    // console.log(cartDetails);
    try {

        const session = await stripe.checkout.sessions.create({
            submit_type: 'pay',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [{ shipping_rate: "your shipping rate key" }, { shipping_rate: "your shipping rate key" }],
            line_items: Object.keys(cartDetails).map((item) => {
                return {
                    price_data: {
                        currency: "pkr",
                        product_data: {
                            name: cartDetails[item].slug,
                        },
                        unit_amount: cartDetails[item].price * 100
                    },
                    quantity: cartDetails[item].quantity,
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                        maximum: 10
                    }
                };
            }),
            phone_number_collection: {
                enabled: true
            },
            mode: 'payment',
            success_url: `${request.headers.get("origin")
                }/checkout?success=true`,
            cancel_url: `${request.headers.get("origin")}/checkout?success=false`,
        });
        return NextResponse.json({ session })

    } catch (error) {
        console.log(error.message);
        return NextResponse.json({ m: "session" })
    }
}
