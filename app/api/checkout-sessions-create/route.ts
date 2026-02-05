
import { headers } from 'next/headers';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '');

export const POST = async (req: Request) => {
    try {

        const headersList = await headers();
        const host = headersList.get('host');
        const env = process.env.NODE_ENV;
        const protocol = env === 'development' ? 'http' : 'https';

        const body = await req.json();
        const session = await stripe.checkout.sessions.create({
            success_url: `${protocol}://${host}/complete`,
            cancel_url: `${protocol}://${host}`,
            line_items: body,
            mode: 'payment',
        });
    
        return new Response(JSON.stringify({
            url: session?.url,
        }));
    } catch (error) {
        return new Response(JSON.stringify({
            error: true,
            message: 'ERROR_CHECKOUT_SESSIONS_CREATE_POST'
        }));
    }
};