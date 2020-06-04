import "https://deno.land/x/denv/mod.ts";

export const DB_URI =  Deno.env.get('DB_URI') || 'mongodb://localhost:27017';

export const DB = Deno.env.get('DB') || 'doh2020';

export const PORT = 3000;
