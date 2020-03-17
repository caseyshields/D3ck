getContent = function () {
  // TODO add a list of dates to each entry...
  return [
    {
      title:"Western Dragon",
      type: "internal_link",
      summary:"One of my earliest origami designs. All fold angles are multiples of 22.5 degrees and relatively few folds are more than 2-ply. This makes it easier to retain accuracy and fold from a small square. The long limbs also make a variety of poses possible.",
      tags: ['origami', 'instructions', 'svg'],
      img:"img/dragon_CP.svg",
      link:"https://caseyshields.github.io/dragon/"
    }, {
      title: "Trie Example",
      type: "internal_link",
      summary: "Demonstrates the construction of a trie data structure as you type. The neat thing about tries is you can put millions of words in them and the retrieval time is only proportional to the length of the word you're looking for. The leaves are marked with red- that's where you would link the data associated with the key.",
      tags: ['D3', 'trie', 'algorithms'],
      img: "img/trie.svg",
      link: "https://caseyshields.github.io/trie/"
    },{
    //   title: "Henderson Gallery",
    //   type: "internal_link",
    //   summary: "Part of the submission process for the gallery in Henderson's city hall is an artist statement. I've been thinking about some of this stuff for awhile and I think I summed up my thoughts okay. But is it pretentious enough? I really need to distract from my terrible photography.",
    //   tags: ['origami', 'essay', 'art'],
    //   img: "cityhall/hallDualFrames.JPG",
    //   link: "cityhall/index.html"
    // },{
      title: "Ladder Diagrams",
      type: "internal_link",
      summary: "Ladder diagrams are used to show messaging between actors over time, usually in protocols or software architectures. This example shows a streaming dataset and mouse interactivity.",
      tags: ['D3', 'networking', 'component'],
      img: "img/ladder.svg",
      link: "https://caseyshields.github.io/ladder/"
    },{
      title: "Star Catalog",
      type: "internal_link",
      summary: "Made a starchart component in D3 to display some of the star catalogs used in sensor calibration. This example shows the first part of FK6. You can alter the projection by dragging and zooming. Click stars to display their catalog entries.",
      tags: ['D3', 'astronomy', 'component'],
      img: "img/stars.png",
      link: "https://caseyshields.github.io/starmap/"
    },{
      title: "Nevada",
      type: "internal_link",
      summary: "Made a layered vector map component with D3. Recently I refactored it to work as a composite of simpler components to help with extensibility and maintainability. I was heavily influenced by Mike Bostock's article 'On D3 Components' and tried to apply the methodology to a composition of visual components.",
      tags: ['D3', 'cartography', 'component'],
      img: 'img/nevada.svg',
      link: "https://caseyshields.github.io/nevada/"
    }, {
      title: "Lego Railguns",
      type: "external_link",
      summary: "My brothers and I once made up a tactics game where we built Lego mecha and fired these little rubber band guns instead of rolling dice. I updated one of the designs and made instructions.",
      tags: ['lego', 'instructions', 'video'],
      img: "img/sniperscout.png",
      link: "https://rebrickable.com/mocs/MOC-34985/deceptibot/railguns/"
    }, {
      title: "Suffix Trie",
      type: "internal_link",
      summary: "Implemented the quadratic time suffix tree construction in Ukkonen's lectures on his algorithm.Some day I'll animate it and add more. Always been fascinated with this data structure since implementing Aho Corasick for a problem at work.",
      tags: ['algorithms', 'trie', 'D3'],
      link: "https://caseyshields.github.io/suffix"
    }, {
      title: "Transforming A-10",
      type: "external_link", // TODO figure out how to embed youtube
      summary: "A Lego robot that transforms into an A10. Deceptively simple. Carefully designed to avoid 'shells' or 'backpack' mechanisms, minimised part number and cost, maximized the number of affordable color schemes, compromised between robot and vehicle proportions, while making it reasonably durable enough to actually play with!",
      tags: ['lego', 'instructions', 'video'],
      img: "img/thunderbolt.png",
      link: "https://rebrickable.com/mocs/MOC-25799/deceptibot/transforming-a10-thunderbolt/"
    }, {
      title: "Origami Shadow Boxes",
      type: "external_link",
      summary: "Etsy store for my origami discoveries. Way too much work, and it's not worth any money, sadly. But still, I think these boxes really capture something; If a model is done 'right', you can't change the shape of an ear without changing every other bodily proportion. The whole geometry has a necessary balance. putting the final model against the crease pattern really gets this across I think.",
      tags: ["origami", "art", "etsy"],
      img: "",
      link: "https://www.etsy.com/shop/CaseyOrigami"
    }, {
      title: "Henderson Origami Club",
      type: "external_link",
      summary: "Tina Stergios and I met at the Pacific Coast Origami convention and we both lamented the lack of Origami clubs in Vegas. So we started one! Over time other enthusiasts like Katherine Mullay have joined in to help teach. It's been a lot of fun to share one of my favorite hobbies in a way that's free and open to all. ",
      tags: ["origami", "teaching", "meetup"],
      img: "",
      link: "https://www.meetup.com/Origami-Meetup-Henderson/"
    }, {
      title: "Orion Star Hunter",
      type: "external_link",
      summary: "A command line program that lets you search star catalogs, extrapolate thier position using Novas, then asynchronously direct sensors on a network at them. Thank goodness for the USNO. I still don't understand half the things they're calculating.",
      tags: ["astronomy", "C", "Novas"],
      img: "",
      link: "https://github.com/caseyshields/Orion"
    }
  ]
};