import { Redis } from 'https://deno.land/x/upstash_redis@v1.13.1/mod.ts';

export default async (_req, ctx) => {
  const redis = Redis.fromEnv();
  const links = await redis.hgetall('links');
  return ctx.json(links, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
};
