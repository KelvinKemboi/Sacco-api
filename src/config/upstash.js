// where we put in/ configure the rate limits

import { Redis } from '@upstash/redis';
import {Ratelimit} from '@upstash/ratelimit';
import "dotenv/config";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "30 s")
});


export default ratelimit