
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '');

export const POST = async (req: Request) => {
    const body = await req.json();
    const session = await stripe.checkout.sessions.create({
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
        line_items: body,
        mode: 'payment',
    });
    
    return new Response(JSON.stringify({
        success: true,
        url: session?.url,
    }));
};