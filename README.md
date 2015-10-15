http://funktum.fi

## Editera
- För att editera välj fil och tryck edit (pennan)
- Filerna är Markdown filer, dokumentation finns här: http://daringfireball.net/projects/markdown/syntax
- Edit, Preview, Commit

## Styleguide

Alla stiler som används på sajten kan hittas i `styleguide.md` filen och på http://funktum.fi/styleguide

## Skapa ny sida

Lägg koden nedan i början av sidan, weight betyder var i navigationen sidan syns (mindre = längre till vänster).

    ---
    layout: page
    title: Example Page
    permalink: /example/
    weight: 1
    ---

## Skapa en gömd sida

Lägg koden nedan i början av sidan, sidan kommer inte att synnas i navigationen.

    ---
    layout: page
    permalink: /example/
    ---