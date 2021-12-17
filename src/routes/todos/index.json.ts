import type { RequestHandler } from "@sveltejs/kit";
import { api } from './_api';

export const get: RequestHandler = (request) => {
    return api(request);
}

export const post: RequestHandler<{}, FormData> = (request) => {
    return api(request, {
        uid: `${Date.now()}`, //TODO: replace uid from db
        created_at: new Date(),
        text: request.body.get("text"),
        done: false
    })
}
