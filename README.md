# Generic livestream platform chat bot

## What

A platform agnostic interactive chatbot written for the deno javascript run time in typescript.

## Why

I created this prototype as a proof of concept for one of my last university courses and also as an excuse to try [deno](https://deno.land/). The project focused on investigating the space between live streamed musical performances and potential chat interaction. As such there is a `DAW` component which at the moment just allows the playing of music files from a target directory.

## How

Commands are defined in `src/commands` and must implement `Command` and extend `AbstractCommand`.

To start the bot you must supply the environment variables specified in `.env.example`, this also involves generating any required authorization tokens e.g. an oauth token for the twitch integration.

When you have the environment variables set up you can run `deno run --allow-read --allow-net --allow-run Index.ts`.

Current commands can be listed with `(prefix)help` in the chat or you can check which ones have been registered in `Index.ts`. There is still work to be done when implementing useful usage responses to invalid commands.

## Support

At the moment only twitch.tv is supported although I am confident it would be trivial to support other live streaming platforms as long as they provide a comparable api.
