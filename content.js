getContent = function () {
  // TODO add a list of dates to each entry...
  return [
    {
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
      tags: ['lego', 'instructions', 'wargamming'],
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
      tags: ["wargamming", "C", "embedded"],
      img: "",
      link: "https://github.com/caseyshields/auspex"
    }, {
      title: "Knight Errant",
      type: "navigate",
      summary: "A Questoris class Imperial Knight Errant of House Cadmus made in Lego. The chainsword has a wind up motor and all the guns use Lego shooters to fire projectile. I made the instructions and renders Stud.io and put them on Rebrickable for free.",
      tags: ["lego", "wargamming", "instructions"],
      img: "",
      link: "https://rebrickable.com/mocs/MOC-38571/deceptibot/knight-errant/"
    }, {
      title: "Knight Paladin",
      type: "navigate",
      summary: "A Questoris class Imperial Knight Paladin of House Taranis made in Lego. This one has a Battle Cannon that fire two, 6 stud-long axles in succession. I made the instructions and renders Stud.io and put them on Rebrickable for free.",
      tags: ["lego", "wargamming", "instructions"],
      img: "",
      link: "https://rebrickable.com/mocs/MOC-38895/deceptibot/knight-paladin/"
    }, {
      title: "Knight Gallant",
      type: "external_link",
      summary: "Yet another variation of my Imperial Knight Lego model. This one is a Questoris Gallant of House Griffith, equipped with a Stormspear Rocket pod and a light-up Paragon Gauntlet.",
      tags: ["lego", "wargamming", "instructions"],
      img: "",
      link: "https://rebrickable.com/mocs/MOC-40607/deceptibot/knight-gallant/"
    }, {
      title: "Carousel Component",
      type: "carousel",
      summary: "This is just a placeholder entry, I'm working out the kinks in a carousal component. To really get it working I need to figure out how I'm going to host images. For now I'm just linking to step crease patterns on my dragon website. I'm sure I'll have somestyling issues to fix as well.",
      tags:["origami", "carousel", "component"],
      img: "",
      slides: [{
          id: "cp1",
          img: "https://caseyshields.github.io/dragon/img/dragon_1.svg",
          notes: "Construct the landmarks"
        },{
          id: "cp2",
          img: "https://caseyshields.github.io/dragon/img/dragon_2.svg",
          notes: "Fold a bird base with a large diagonal graft"
        },{
          id: "cp3",
          img: "https://caseyshields.github.io/dragon/img/dragon_3.svg",
          notes: "Precrease 4 Y bases in graft"
        },{
          id: "cp4",
          img: "https://caseyshields.github.io/dragon/img/dragon_4.svg",
          notes: "Fold the bases in the graft"
        },{
          id: "cp5",
          img: "https://caseyshields.github.io/dragon/img/dragon_5.svg",
          notes: "Stretch the center of the base to form the body"
        },{
          id: "cp6",
          img: "https://caseyshields.github.io/dragon/img/dragon_6.svg",
          notes: "Form the rear legs and the tail"
        },{
          id: "cp7",
          img: "https://caseyshields.github.io/dragon/img/dragon_7.svg",
          notes: "Form the forelegs and the neck"
        },{
          id: "cp8",
          img: "https://caseyshields.github.io/dragon/img/dragon_8.svg",
          notes: "Fold the wing's arms and crimp the shoulders"
        },{
          id: "cp9",
          img: "https://caseyshields.github.io/dragon/img/dragon_9.svg",
          notes: "Shape tail"
        },{
          id: "cp10",
          img: "https://caseyshields.github.io/dragon/img/dragon_10.svg",
          notes: "Fold the head and horns"
      } ]
    }
    // ,{
    //   title: "Carousel Component",
    //   type: "carousel",
    //   summary: "I rendered the transformation sequence of a tank transformer to test out a carousel component.",
    //   tags:["lego", "transformer", "component"],
    //   img: "",
    //   slides: [{
    //           id: 'mcv16_1',
    //           img: '/test/MCV16_transformation_1.png',
    //           notes: 'This mecha transforms into a scout tank based of the Japanese MCV Type 16.',
    //       },{
    //           id: 'mcv16_0',
    //           img: '/test/MCV16_transformation_0.png',
    //           notes: 'test broken link...',
    //       },{
    //           id: 'mcv16_2',
    //           img: '/test/MCV16_transformation_2.png',
    //           notes: 'Straighten the left gun arm',
    //       },{
    //           id: 'mcv16_3',
    //           img: '/test/MCV16_transformation_3.png',
    //           notes: 'Rotate the arm backwards. Notice the stud atop the shoulder.',
    //       },{
    //           id: 'mcv16_4',
    //           img: '/test/MCV16_transformation_4.png',
    //           notes: 'It will socket into the pin-hole in the torso when you rotate the shoulder forward.',
    //       },{
    //           id: 'mcv16_5',
    //           img: '/test/MCV16_transformation_5.png',
    //           notes: 'Flatten the shoulder gaurd against the shoulder joint. Then swivel the gun arm around the axis so the trigger points up.',
    //       },{
    //           id: 'mcv16_6',
    //           img: '/test/MCV16_transformation_6.png',
    //           notes: 'Flatten the vertebrae and slot the head into the torso.',
    //       },{
    //           id: 'mcv16_7',
    //           img: '/test/MCV16_transformation_7.png',
    //           notes: 'Rotate the right turret arm so that it points forward.',
    //       },{
    //           id: 'mcv16_8',
    //           img: '/test/MCV16_transformation_8.png',
    //           notes: 'Tuck in the thumb and square the forearm. Rotate the mortar turret forward.',
    //       },{
    //           id: 'mcv16_9',
    //           img: '/test/MCV16_transformation_9.png',
    //           notes: 'Fold the forearm around the chest and flatten the fingers.',
    //       },{
    //           id: 'mcv16_10',
    //           img: '/test/MCV16_transformation_10.png',
    //           notes: 'Straighten the legs at the knees',
    //       },{
    //           id: 'mcv16_11',
    //           img: '/test/MCV16_transformation_11.png',
    //           notes: 'Rotate the lower legs so that the shins face inward. Take care not to break the thigh armor on this step...',
    //       },{
    //           id: 'mcv16_13',
    //           img: '/test/MCV16_transformation_13.png',
    //           notes: 'The shin greaves rotate away from the lower leg to form a deck.',
    //       },{
    //           id: 'mcv16_14',
    //           img: '/test/MCV16_transformation_14.png',
    //           notes: 'Rotate the boots to form the front of the vehicle. Notice how they have opposite stud orientations...',
    //       },{
    //           id: 'mcv16_15',
    //           img: '/test/MCV16_transformation_15.png',
    //           notes: 'Rotate the legs at the hip so the tires sit on the ground.',
    //       },{
    //           id: 'mcv16_16',
    //           img: '/test/MCV16_transformation_16.png',
    //           notes: 'Rotate the chest to the back of the abdomen.',
    //       },{
    //           id: 'mcv16_17',
    //           img: '/test/MCV16_transformation_17.png',
    //           notes: 'Rotate the abdomen parallel to the ground.',
    //       },{
    //           id: 'mcv16_18',
    //           img: '/test/MCV16_transformation_18.png',
    //           notes: 'The legs can be connected using the opposing studs on the boots at the front of the vehicle.',
    //       },{
    //           id: 'mcv16_19',
    //           img: '/test/MCV16_transformation_19.png',
    //           notes: 'The main turret can be rotated to any orientation.',
    //       }
    //   ]
    // }
  ]
};