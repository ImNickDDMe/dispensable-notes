// @ts-nocheck

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ request }) {
    return {
        status: 200,
        body: {
            message: 'Hello World'
        }
    }
}