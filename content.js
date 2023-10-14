getContent = function () {
  // TODO add a list of dates to each entry...
  return [
    {
      title: "Freeblade Lance",
      type: "navigate",
      summary: "A website I made in Svelte for referencing the rules of one of my wargaming armies. The idea was I could just give my the opponent the URL so there would be no surprises. The site also features a lot of photography of my Freeblade Lance; A caste of Nobleman warriors who pilot giant Medieval robots with chainsaws and naval guns for arms. ",
      tags: ["wargaming", "miniatures", "svelte"],
      img: "",
      link: "https://caseyshields.gitlab.io/knights/bondsmen"
    }, {
      title: "Flight Instructor",
      type: "navigate",
      summary: "An example website for a flight instructor. Surprisingly only uses CSS and SVG. The color scheme is based on rayleigh scattering in the atmosphere.",
      tags: ["webdesign", "css", "svg"],
      img: "",
      link: "https://caseyshields.gitlab.io/clouds"
    }, {
      title:"Western Dragon",
      type: "preview",
      summary:"One of my earliest origami designs. All fold angles are multiples of 22.5 degrees and relatively few folds are more than 2-ply. This makes it easier to retain accuracy and fold from a small square. The long limbs also make a variety of poses possible.",
      tags: ['origami', 'instructions', 'svg'],
      img:"",
      link:"https://caseyshields.github.io/dragon/"
    }, {
      title: "Trie Example",
      type: "preview",
      summary: "Demonstrates the construction of a trie data structure as you type. The neat thing about tries is you can put millions of words in them and the retrieval time is only proportional to the length of the word you're looking for. The leaves are marked with red- that's where you would link the data associated with the key.",
      tags: ['D3', 'trie', 'algorithms'],
      img: "",
      link: "https://caseyshields.github.io/trie/"
    },{
    //   title: "Henderson Gallery",
    //   type: "preview",
    //   summary: "Part of the submission process for the gallery in Henderson's city hall is an artist statement. I've been thinking about some of this stuff for awhile and I think I summed up my thoughts okay. But is it pretentious enough? I really need to distract from my terrible photography.",
    //   tags: ['origami', 'essay', 'art'],
    //   img: "cityhall/hallDualFrames.JPG",
    //   link: "cityhall/index.html"
    // },{
      title: "Ladder Diagrams",
      type: "preview",
      summary: "Ladder diagrams are used to show messaging between actors over time, usually in protocols or software architectures. This example shows a streaming dataset and mouse interactivity.",
      tags: ['D3', 'networking', 'component'],
      img: "",
      link: "https://caseyshields.github.io/ladder/"
    },{
      title: "Star Catalog",
      type: "preview",
      summary: "Made a starchart component in D3 to display some of the star catalogs used in sensor calibration. This example shows the first part of FK6. You can alter the projection by dragging and zooming. Click stars to display their catalog entries.",
      tags: ['D3', 'astronomy', 'component'],
      img: "",
      link: "https://caseyshields.github.io/starmap/"
    },{
      title: "Nevada",
      type: "preview",
      summary: "Made a layered vector map component with D3. Recently I refactored it to work as a composite of simpler components to help with extensibility and maintainability. I was heavily influenced by Mike Bostock's article 'On D3 Components' and tried to apply the methodology to a composition of visual components.",
      tags: ['D3', 'cartography', 'component'],
      img: "",
      link: "https://caseyshields.github.io/nevada/"
    }, {
      title: "Lego Railguns",
      type: "navigate",
      summary: "My brothers and I once made up a tactics game where we built Lego mecha and fired these little rubber band guns instead of rolling dice. I updated one of the designs and made instructions.",
      tags: ['lego', 'instructions', 'wargaming'],
      img: "",
      link: "https://rebrickable.com/mocs/MOC-34985/deceptibot/railguns/"
    }, {
      title: "Suffix Trie",
      type: "preview",
      summary: "Implemented the quadratic time suffix tree construction in Ukkonen's lectures on his algorithm.Some day I'll animate it and add more. Always been fascinated with this data structure since implementing Aho Corasick for a problem at work.",
      tags: ['algorithms', 'trie', 'D3'],
      link: "https://caseyshields.github.io/suffix"
    }, {
      title: "Transforming A-10",
      type: "navigate", // TODO figure out how to embed youtube
      summary: "A Lego robot that transforms into an A10. Deceptively simple. Carefully designed to avoid 'shells' or 'backpack' mechanisms, minimised part number and cost, maximized the number of affordable color schemes, compromised between robot and vehicle proportions, while making it reasonably durable enough to actually play with!",
      tags: ['lego', 'instructions', 'transformer'],
      img: "",
      link: "https://rebrickable.com/mocs/MOC-25799/deceptibot/transforming-a10-thunderbolt/"
    }, {
      title: "Origami Shadow Boxes",
      type: "navigate",
      summary: "Etsy store for my origami discoveries. Way too much work, and it's not worth any money, sadly. But still, I think these boxes really capture something; If a model is done 'right', you can't change the shape of an ear without changing every other bodily proportion. The whole geometry has a necessary balance. putting the final model against the crease pattern really gets this across I think.",
      tags: ["origami", "art", "etsy"],
      img: "",
      link: "https://www.etsy.com/shop/CaseyOrigami"
    }, {
      title: "Henderson Origami Club",
      type: "navigate",
      summary: "Tina Stergios and I met at the Pacific Coast Origami convention and we both lamented the lack of Origami clubs in Vegas. So we started one! Over time other enthusiasts like Katherine Mullay have joined in to help teach. It's been a lot of fun to share one of my favorite hobbies at the local library.",
      tags: ["origami", "teaching", "meetup"],
      img: "",
      link: "https://www.meetup.com/Origami-Meetup-Henderson/"
    }, {
      title: "Orion Star Hunter",
      type: "navigate",
      summary: "A command line program that lets you search star catalogs, extrapolate thier position using Novas, then asynchronously direct sensors on a network at them. Thank goodness for the USNO. I still don't understand half the things they're calculating.",
      tags: ["astronomy", "C", "Novas"],
      img: "",
      link: "https://github.com/caseyshields/Orion"
    }, {
      title: "Auspex",
      type: "navigate",
      summary: "WIP. A rangefinder for table top games. All the documentation is written in the argot of the Martian Machine Cult. It's feels oddly appropriate since I am profoundly ignorant of hardware. I merely upload the blessed procedural litanies via binaric canting.",
      tags: ["wargaming", "C", "embedded"],
      img: "",
      link: "https://github.com/caseyshields/auspex"
    }, {
      title: "Knight Errant",
      type: "navigate",
      summary: "A Questoris class Imperial Knight Errant of House Cadmus made in Lego. The chainsword has a wind up motor and all the guns use Lego shooters to fire projectile. I made the instructions and renders Stud.io and put them on Rebrickable for free.",
      tags: ["lego", "wargaming", "instructions"],
      img: "",
      link: "https://rebrickable.com/mocs/MOC-38571/deceptibot/knight-errant/"
    }, {
      title: "Knight Paladin",
      type: "navigate",
      summary: "A Questoris class Imperial Knight Paladin of House Taranis made in Lego. This one has a Battle Cannon that fire two, 6 stud-long axles in succession. I made the instructions and renders Stud.io and put them on Rebrickable for free.",
      tags: ["lego", "wargaming", "instructions"],
      img: "",
      link: "https://rebrickable.com/mocs/MOC-38895/deceptibot/knight-paladin/"
    }, {
      title: "Knight Gallant",
      type: "navigate",
      summary: "Yet another variation of my Imperial Knight Lego model. This one is a Questoris Gallant of House Griffith, equipped with a Stormspear Rocket pod and a light-up Paragon Gauntlet.",
      tags: ["lego", "wargaming", "instructions"],
      img: "",
      link: "https://rebrickable.com/mocs/MOC-40607/deceptibot/knight-gallant/"
    // },{
    //   title: "Carousel Component",
    //   type: "carousel",
    //   summary: "Testing out a carousel component and an image hosting service. Now I can can start adding images besides SVGs. Now I got to figure out lazy loading and throttling image quality through the host's API. Oh yeah, this example is a Lego mecha transforming into a light tank which I built in Stud.io.",
    //   tags:["lego", "transformer", "component"],
    //   img: "",
    //   slides: [{
    //           id: 'mcv16_1',
    //           img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1589420301/mcv16/MCV16_1_r8gj7q.png',
    //           notes: 'This mecha transforms into a scout tank based of the Japanese MCV Type 16.',
    //       },{
    //           id: 'mcv16_2',
    //           img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1589420304/mcv16/MCV16_2_kgrl8r.png',
    //           notes: 'Straighten the left gun arm',
    //       },{
    //           id: 'mcv16_3',
    //           img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1589420300/mcv16/MCV16_3_tljbjs.png',
    //           notes: 'Rotate the arm backwards. Notice the stud atop the shoulder.',
    //       },{
    //           id: 'mcv16_4',
    //           img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1589420293/mcv16/MCV16_4_rwyykd.png',
    //           notes: 'It will socket into the pin-hole in the torso when you rotate the shoulder forward.',
    //       },{
    //           id: 'mcv16_5',
    //           img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1589420303/mcv16/MCV16_5_vamppp.png',
    //           notes: 'Flatten the shoulder gaurd against the shoulder joint. Then swivel the gun arm around the axis so the trigger points up.',
    //       },{
    //           id: 'mcv16_6',
    //           img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1589420299/mcv16/MCV16_6_k6b5kh.png',
    //           notes: 'Flatten the vertebrae and slot the head into the torso.',
    //       },{
    //           id: 'mcv16_7',
    //           img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1589420304/mcv16/MCV16_7_yut6xe.png',
    //           notes: 'Rotate the right turret arm so that it points forward.',
    //       },{
    //           id: 'mcv16_8',
    //           img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1589420307/mcv16/MCV16_8_x8yz1h.png',
    //           notes: 'Tuck in the thumb and square the forearm. Rotate the mortar turret forward.',
    //       },{
    //           id: 'mcv16_9',
    //           img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1589420308/mcv16/MCV16_9_o7kxeq.png',
    //           notes: 'Fold the forearm around the chest and flatten the fingers.',
    //       },{
    //           id: 'mcv16_10',
    //           img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1589420313/mcv16/MCV16_10_qezxpg.png',
    //           notes: 'Straighten the legs at the knees',
    //       },{
    //           id: 'mcv16_11',
    //           img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1589420315/mcv16/MCV16_11_jewhsy.png',
    //           notes: 'Rotate the lower legs so that the shins face inward. Take care not to break the thigh armor on this step...',
    //       },{
    //           id: 'mcv16_12',
    //           img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1589420318/mcv16/MCV16_12_vn9ro3.png',
    //           notes: 'The shin greaves rotate away from the lower leg to form a deck.',
    //       },{
    //           id: 'mcv16_13',
    //           img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1589420318/mcv16/MCV16_13_adwmg7.png',
    //           notes: 'Rotate the boots to form the front of the vehicle. Notice how they have opposite stud orientations...',
    //       },{
    //           id: 'mcv16_14',
    //           img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1589420319/mcv16/MCV16_14_ykkuej.png',
    //           notes: 'Rotate the legs at the hip so the tires sit on the ground.',
    //       },{
    //           id: 'mcv16_15',
    //           img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1589420323/mcv16/MCV16_15_yab7bu.png',
    //           notes: 'Rotate the chest to the back of the abdomen.',
    //       },{
    //           id: 'mcv16_16',
    //           img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1589420326/mcv16/MCV16_16_aekftk.png',
    //           notes: 'Rotate the abdomen parallel to the ground.',
    //       },{
    //           id: 'mcv16_17',
    //           img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1589420324/mcv16/MCV16_17_w5vw7l.png',
    //           notes: 'The legs can be connected using the opposing studs on the boots at the front of the vehicle.',
    //       },{
    //           id: 'mcv16_18',
    //           img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1589420325/mcv16/MCV16_18_ozcwci.png',
    //           notes: 'The main turret can be rotated to any orientation.',
    //       }
    //   ]
    }, {
      title: "Transforming MCV-16",
      type: "navigate", // TODO figure out how to embed youtube
      summary: "A Lego mecha that transforms into an MCV type 16 scout tank. Another one that's gone through a lot of revisions to optimize proportions, durability, color scheme and part cost. Plans can be purchased on my Rebrickable page.",
      tags: ['lego', 'instructions', 'transformer'],
      img: "",
      link: "https://rebrickable.com/mocs/MOC-41371/deceptibot/transforming-tank-mecha"
    }, {
      title: "Lotus Diagrams",
      type: "carousel",
      summary: "A lotus with 28 petals which was the first origami model I attempted to diagram. It was derived from a 8 sided vase by reducing the size of the vase, and using the remainder to fold petals.",
      tags:['origami', 'illustration', 'instructions'],
      img: "",
      slides: [{
          id: 'lotus0',
          img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1592015122/lotus/lotus0_keybet.jpg',
          notes: "This model can either form a lotus on a pad, or be inflated into a flower vase.",
        },{
          id: 'lotus1',
          img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1592015130/lotus/lotus1_kqalne.jpg',
          notes: 'Unfortunately this is the first model I ever diagrammed, so I apologize if it is not clear...',
        },{
          id: 'lotus2',
          img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1592015133/lotus/lotus2_udjgvz.jpg',
          notes: 'This first sequence forms the octagon around which the model is folded, and half of the top of the pad.',
        },{
          id: 'lotus3',
          img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1592015122/lotus/lotus3_qwfbml.jpg',
          notes: 'Here we form the remainder of the pad and the largest petals',
        },{
          id: 'lotus4',
          img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1592015122/lotus/lotus4_lkxc7u.jpg',
          notes: "Here we begin a complex collapse sequence. Remember to use symmetry, since the same pie slice of the CP will be repeated 8 times.",
        },{
          id: 'lotus5',
          img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1592015125/lotus/lotus5_tlwl6u.jpg',
          notes: 'After this part is finished, the vase/lilly pad will be complete.',
        },{
          id: 'lotus6',
          img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1592015137/lotus/lotus6_kl5zgy.jpg',
          notes: 'Here we begin folding the 16 little petals of the lotus. Very tedious but the final effect is rewarding!',
        },{
          id: 'lotus7',
          img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1592015136/lotus/lotus7_co2ywt.jpg',
          notes: 'After the petals the end is in sight; Take your time if your decide to inflate the vase, smoothing the octagon of creases(10.1) and pinching radials(10.2).',
        },{
          id: 'lotus8',
          img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1592015133/lotus/lotus8_un50ta.jpg',
          notes: 'I used small 3 inch paper so these look a little ragged unfortunately.',
        },{
          id: 'lotus9',
          img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1592015137/lotus/lotus9_przcsu.jpg',
          notes: 'Here is the lotus unfolded, after all that!',
        },{
          id: 'lotus10',
          img: 'https://res.cloudinary.com/dgedlitah/image/upload/v1592015144/lotus/lotus10_akkbu8.jpg',
          notes: "Here's a close up of the creases in those tricky petals",
        }
      ]
    }
  ]
};