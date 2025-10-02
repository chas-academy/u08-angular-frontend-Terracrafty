# Frontend for [MHAPI](https://github.com/Terracrafty/u05-RESTful-API-Terra).

this is a monster hunter wilds build planner which is also the frontend for mhapi

## Usage

wait a minute for the render instance that hosts the backend to spin up so it can serve you the content, then plan your build
there really ought to be a loading bar for that actually

## Local run instructions

1. Download and run the MHAPI locally.
2. Install [Angular CLI](https://angular.dev/installation).
3. Clone the repository to your local device.
4. Run `cp .env.example .env` in the u08 directory.
4. Run `npm install && ng serve` in the u08 directory.
5. App will be available at http://localhost:4200.

## How to contribute

fuckin look at the code with your eyes and then write your own??? or listen to it with your ears if you're using a screen reader i guess i dont know who the fuck you are

i genuinely don't know what else to say about this sorry. my autistic ass mirror neurons are not powerful enough for this kind of interpersonal 4d chess

you can read the angular docs too? not sure if that would be a given or not. although i suppose it would be reasonable to assume someone who wants to contribute to this angular project is already familiar with angular or looking to become familiar with angular so i guess that is a given?

i would think the only unintuitive thing in this codebase is the fuckin theyDidSurgeryOnAnArray() in the api service but that wretched thing is private for a reason and also not that hard to figure out what it does from looking at the code i hope

idk add the loading bar i was talking about earlier
or you can make the layout not suck ass and look terrible and maybe figure out a way to squeeze a display for the totals in there
also add support for decorations (which the api does support) or talismans (which the api does not support because i completely forgot they existed)

## Deploy

the project is deployed using netlify at https://u08terraj.netlify.app/

## Testing

Tests are run using `ng test`. test files are the .spec.ts files that live next to the files that they're testing