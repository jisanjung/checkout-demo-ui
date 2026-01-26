
export const GET = async (request: Request) => {
    return new Response(JSON.stringify({
        success: true,
    }));
};