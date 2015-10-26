## Editera
- För att editera välj fil och tryck edit (pennan)
- Filerna är Markdown filer, dokumentation finns här: http://daringfireball.net/projects/markdown/syntax
- Edit, Preview, Commit

## Styleguide

Alla stiler som används på sajten kan hittas i `styleguide.md` filen och på http://funktum.fi/styleguide

## Nytt bloginlägg

Skapa en ny fil i `_posts` mappen enligt formatet `YYYY-MM-DD-post-title.md` och lägg koden nedan i början av filen.

    ---
    layout: post
    title: Welcome to Jekyll!
    ---

## Ny sida

Lägg koden nedan i början av filen, `weight` betyder var i navigationen sidan syns, mindre = längre till vänster.

    ---
    layout: page
    title: Example Page
    permalink: /example/
    weight: 1
    ---

## Gömd sida

Skapa en sida utan `title` så synns sidan inte i navigationen.

    ---
    layout: page
    permalink: /example/
    ---

## Bild i början av sidan

Lägg till `hero_image` i början av filen.

    ---
    layout: page
    title: Example Page
    permalink: /example/
    weight: 1
    hero_image: /meida/forelasning-1.jpg
    ---