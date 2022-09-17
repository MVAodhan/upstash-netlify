import { Redis } from 'https://deno.land/x/upstash_redis@v1.13.1/mod.ts';

export default async () => {
  const redis = Redis.fromEnv();
  const counter = await redis.incr('edge_counter');
  return new Response(counter);
};
