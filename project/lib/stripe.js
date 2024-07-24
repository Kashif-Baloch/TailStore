import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";

let stripePromise = Promise.Stripe | null;

const getStripePromise = () => {
    let key = process.env.NEXT_PUBLIC_PUBLISH_KEY || ""
    if (!stripePromise && !!key) {
        stripePromise = loadStripe(key)
    }
    return stripePromise
}

export default getStripePromise