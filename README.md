### Editera
- För att editera välj fil och tryck edit (pennan)
- Filerna är Markdown filer, dokumentation finns här: http://daringfireball.net/projects/markdown/syntax
- Edit, Preview, Commit

### Nytt bloginlägg

Skapa en ny fil i `_posts` mappen enligt formatet `YYYY-MM-DD-post-title.md` och lägg koden nedan i början av filen. Om du inte vill publicera inlägget sätt `published` till `false`, när du vill publicera ändra den till `true`.

    ---
    layout: post
    published: true | false
    title: Welcome to Jekyll!
    ---

### Ny sida

Lägg koden nedan i början av filen, `weight` betyder var i navigationen sidan syns, mindre = längre till vänster.

    ---
    layout: page
    title: Example Page
    permalink: /example/
    weight: 1
    ---

### Gömd sida

Skapa en sida utan `weight` så synns sidan inte i navigationen.

    ---
    layout: page
    permalink: /example/
    title: Example Page
    ---

### Hero

Lägg till `hero_image` i början av filen, resten av `hero_` är valfria.

    ---
    layout: page
    title: Example Page
    permalink: /example/
    weight: 1
    hero_image: forelasning-1.jpg
    hero_title: Heading
    hero_text: Description
    hero_buttons: true | false
    ---

### Knappar

    {% include button.html email=site.email style="outline" %}
    {% include button.html email=site.email %}
    {% include button.html url="http//example.com" style="outline" %}
    {% include button.html url="http//example.com" %}

Två knappar brevid varan

    <div>
    {% include button.html url="http//example.com" %}
    {% include button.html url="http//example.com" %}
    </div>

### Holvi

    ---
    holvi:
     - http://example.com
     - http://example.com
    ---

    {% include holvi_iframe.html list=page.holvi %}

### Kontakt info

{% include contact_details.html button="true" %}

Med gömd knapp

{% include contact_details.html %}