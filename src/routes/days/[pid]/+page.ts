import days from '$lib/scripts/days';
import { error } from '@sveltejs/kit';

export const load = ({ params }: any) => {
    const day = days.find((day) => day.date === params.pid);

    // if no race is found, return a 404
    if (!day) {
        throw error(404, 'Not found');
    }
    return day

};