import { writable } from 'svelte/store';


export const sidemenu = writable(false);
export const transparent = writable(false);
export const yscroll = writable(0);
export const searchTerm = writable('');
export const searchResult = writable([]);
export const siteData = writable({
    name: 'Vitaliy Landing'
});