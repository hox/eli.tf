#!/usr/bin/env -S deno run -A --watch=static/,routes/

import 'preact/debug';
import dev from '$fresh/dev.ts';

await dev(import.meta.url, './main.ts');
