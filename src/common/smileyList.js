const smileyList = [
  {smiley: "😀", description: "Grinning Face"},
  {smiley: "😃", description: "Grinning Face with Big Eyes"},
  {smiley: "😄", description: "Grinning Face with Smiling Eyes"},
  {smiley: "😁", description: "Beaming Face with Smiling Eyes"},
  {smiley: "😆", description: "Grinning Squinting Face"},
  {smiley: "😅", description: "Grinning Face with Sweat"},
  {smiley: "🤣", description: "Rolling on the Floor Laughing"},
  {smiley: "😂", description: "Face with Tears of Joy"},
  {smiley: "🙂", description: "Slightly Smiling Face"},
  {smiley: "🙃", description: "Upside-Down Face"},
  {smiley: "😉", description: "Winking Face"},
  {smiley: "😊", description: "Smiling Face with Smiling Eyes"},
  {smiley: "😇", description: "Smiling Face with Halo"},
  {smiley: "🥰", description: "Smiling Face with Hearts"},
  {smiley: "😍", description: "Smiling Face with Heart-Eyes"},
  {smiley: "🤩", description: "Star-Struck"},
  {smiley: "😘", description: "Face Blowing a Kiss"},
  {smiley: "😗", description: "Kissing Face"},
  {smiley: "😚", description: "Kissing Face with Closed Eyes"},
  {smiley: "😙", description: "Kissing Face with Smiling Eyes"},
  {smiley: "😋", description: "Face Savoring Food"},
  {smiley: "😛", description: "Face with Tongue"},
  {smiley: "😜", description: "Winking Face with Tongue"},
  {smiley: "🤪", description: "Zany Face"},
  {smiley: "😝", description: "Squinting Face with Tongue"},
  {smiley: "🤑", description: "Money-Mouth Face"},
  {smiley: "🤗", description: "Hugging Face"},
  {smiley: "🤭", description: "Face with Hand Over Mouth"},
  {smiley: "🤫", description: "Shushing Face"},
  {smiley: "🤔", description: "Thinking Face"},
  {smiley: "🤐", description: "Zipper-Mouth Face"},
  {smiley: "🤨", description: "Face with Raised Eyebrow"},
  {smiley: "😐", description: "Neutral Face"},
  {smiley: "😑", description: "Expressionless Face"},
  {smiley: "😶", description: "Face Without Mouth"},
  {smiley: "😏", description: "Smirking Face"},
  {smiley: "😒", description: "Unamused Face"},
  {smiley: "🙄", description: "Face with Rolling Eyes"},
  {smiley: "😬", description: "Grimacing Face"},
  {smiley: "🤥", description: "Lying Face"},
  {smiley: "😌", description: "Relieved Face"},
  {smiley: "😔", description: "Pensive Face"},
  {smiley: "😪", description: "Sleepy Face"},
  {smiley: "🤤", description: "Drooling Face"},
  {smiley: "😴", description: "Sleeping Face"},
  {smiley: "😷", description: "Face with Medical Mask"},
  {smiley: "🤒", description: "Face with Thermometer"},
  {smiley: "🤕", description: "Face with Head-Bandage"},
  {smiley: "🤢", description: "Nauseated Face"},
  {smiley: "🤮", description: "Face Vomiting"},
  {smiley: "🤧", description: "Sneezing Face"},
  {smiley: "🥵", description: "Hot Face"},
  {smiley: "🥶", description: "Cold Face"},
  {smiley: "🥴", description: "Woozy Face"},
  {smiley: "😵", description: "Dizzy Face"},
  {smiley: "🤯", description: "Exploding Head"},
  {smiley: "🤠", description: "Cowboy Hat Face"},
  {smiley: "🥳", description: "Partying Face"},
  {smiley: "😎", description: "Smiling Face with Sunglasses"},
  {smiley: "🤓", description: "Nerd Face"},
  {smiley: "🧐", description: "Face with Monocle"},
  {smiley: "😕", description: "Confused Face"},
  {smiley: "😟", description: "Worried Face"},
  {smiley: "🙁", description: "Slightly Frowning Face"},
  {smiley: "☹️", description: "Frowning Face"},
  {smiley: "😮", description: "Face with Open Mouth"},
  {smiley: "😯", description: "Hushed Face"},
  {smiley: "😲", description: "Astonished Face"},
  {smiley: "😳", description: "Flushed Face"},
  {smiley: "🥺", description: "Pleading Face"},
  {smiley: "😦", description: "Frowning Face with Open Mouth"},
  {smiley: "😧", description: "Anguished Face"},
  {smiley: "😨", description: "Fearful Face"},
  {smiley: "😰", description: "Anxious Face with Sweat"},
  {smiley: "😥", description: "Sad but Relieved Face"},
  {smiley: "😢", description: "Crying Face"},
  {smiley: "😭", description: "Loudly Crying Face"},
  {smiley: "😱", description: "Face Screaming in Fear"},
  {smiley: "😖", description: "Confounded Face"},
  {smiley: "😣", description: "Persevering Face"},
  {smiley: "😞", description: "Disappointed Face"},
  {smiley: "😓", description: "Downcast Face with Sweat"},
  {smiley: "😩", description: "Weary Face"},
  {smiley: "😫", description: "Tired Face"},
  {smiley: "🥱", description: "Yawning Face"},
  {smiley: "😤", description: "Face with Steam From Nose"},
  {smiley: "😡", description: "Pouting Face"},
  {smiley: "😠", description: "Angry Face"},
  {smiley: "🤬", description: "Face with Symbols on Mouth"},
  {smiley: "😈", description: "Smiling Face with Horns"},
  {smiley: "👿", description: "Angry Face with Horns"},
  {smiley: "💀", description: "Skull"},
  {smiley: "☠️", description: "Skull and Crossbones"},
  {smiley: "💩", description: "Pile of Poo"},
  {smiley: "🤡", description: "Clown Face"},
  {smiley: "👹", description: "Ogre"},
  {smiley: "👺", description: "Goblin"},
  {smiley: "👻", description: "Ghost"},
  {smiley: "👽", description: "Alien"},
  {smiley: "👾", description: "Alien Monster"},
  {smiley: "🤖", description: "Robot"},
  {smiley: "😺", description: "Grinning Cat"},
  {smiley: "😸", description: "Grinning Cat with Smiling Eyes"},
  {smiley: "😹", description: "Cat with Tears of Joy"},
  {smiley: "😻", description: "Smiling Cat with Heart-Eyes"},
  {smiley: "😼", description: "Cat with Wry Smile"},
  {smiley: "😽", description: "Kissing Cat"},
  {smiley: "🙀", description: "Weary Cat"},
  {smiley: "😿", description: "Crying Cat"},
  {smiley: "😾", description: "Pouting Cat"},
  {smiley: "💋", description: "Kiss Mark"},
  {smiley: "👋", description: "Waving Hand"},
  {smiley: "🤚", description: "Raised Back of Hand"},
  {smiley: "🖐️", description: "Hand with Fingers Splayed"},
  {smiley: "✋", description: "Raised Hand"},
  {smiley: "🖖", description: "Vulcan Salute"},
  {smiley: "👌", description: "OK Hand"},
  {smiley: "🤏", description: "Pinching Hand"},
  {smiley: "✌️", description: "Victory Hand"},
  {smiley: "🤞", description: "Crossed Fingers"},
  {smiley: "🤟", description: "Love-You Gesture"},
  {smiley: "🤘", description: "Sign of the Horns"},
  {smiley: "🤙", description: "Call Me Hand"},
  {smiley: "👈", description: "Backhand Index Pointing Left"},
  {smiley: "👉", description: "Backhand Index Pointing Right"},
  {smiley: "👆", description: "Backhand Index Pointing Up"},
  {smiley: "🖕", description: "Middle Finger"},
  {smiley: "👇", description: "Backhand Index Pointing Down"},
  {smiley: "☝️", description: "Index Pointing Up"},
  {smiley: "👍", description: "Thumbs Up"},
  {smiley: "👎", description: "Thumbs Down"},
  {smiley: "✊", description: "Raised Fist"},
  {smiley: "👊", description: "Oncoming Fist"},
  {smiley: "🤛", description: "Left-Facing Fist"},
  {smiley: "🤜", description: "Right-Facing Fist"},
  {smiley: "👏", description: "Clapping Hands"},
  {smiley: "🙌", description: "Raising Hands"},
  {smiley: "👐", description: "Open Hands"},
  {smiley: "🤲", description: "Palms Up Together"},
  {smiley: "🤝", description: "Handshake"},
  {smiley: "🙏", description: "Folded Hands"},
  {smiley: "✍️", description: "Writing Hand"},
  {smiley: "💅", description: "Nail Polish"},
  {smiley: "🤳", description: "Selfie"},
  {smiley: "💪", description: "Flexed Biceps"},
  {smiley: "🦾", description: "Mechanical Arm"},
  {smiley: "🦿", description: "Mechanical Leg"},
  {smiley: "🦵", description: "Leg"},
  {smiley: "🦶", description: "Foot"},
  {smiley: "👂", description: "Ear"},
  {smiley: "🦻", description: "Ear with Hearing Aid"},
  {smiley: "👃", description: "Nose"},
  {smiley: "🧠", description: "Brain"},
  {smiley: "🦷", description: "Tooth"},
  {smiley: "🦴", description: "Bone"},
  {smiley: "👀", description: "Eyes"},
  {smiley: "👁️", description: "Eye"},
  {smiley: "👅", description: "Tongue"},
  {smiley: "👄", description: "Mouth"},
  {smiley: "👶", description: "Baby"},
  {smiley: "🧒", description: "Child"},
  {smiley: "👦", description: "Boy"},
  {smiley: "👧", description: "Girl"},
  {smiley: "🧑", description: "Person"},
  {smiley: "👱", description: "Person: Blond Hair"},
  {smiley: "👨", description: "Man"},
  {smiley: "🧔", description: "Person: Beard"},
  {smiley: "👨‍🦰", description: "Man: Red Hair"},
  {smiley: "👨‍🦱", description: "Man: Curly Hair"},
  {smiley: "👨‍🦳", description: "Man: White Hair"},
  {smiley: "👨‍🦲", description: "Man: Bald"},
  {smiley: "👩", description: "Woman"},
  {smiley: "👩‍🦰", description: "Woman: Red Hair"},
  {smiley: "🧑‍🦰", description: "Person: Red Hair"},
  {smiley: "👩‍🦱", description: "Woman: Curly Hair"},
  {smiley: "🧑‍🦱", description: "Person: Curly Hair"},
  {smiley: "👩‍🦳", description: "Woman: White Hair"},
  {smiley: "🧑‍🦳", description: "Person: White Hair"},
  {smiley: "👩‍🦲", description: "Woman: Bald"},
  {smiley: "🧑‍🦲", description: "Person: Bald"},
  {smiley: "👱‍♀️", description: "Woman: Blond Hair"},
  {smiley: "👱‍♂️", description: "Man: Blond Hair"},
  {smiley: "🧓", description: "Older Person"},
  {smiley: "👴", description: "Old Man"},
  {smiley: "👵", description: "Old Woman"},
  {smiley: "🙍", description: "Person Frowning"},
  {smiley: "🙍‍♂️", description: "Man Frowning"},
  {smiley: "🙍‍♀️", description: "Woman Frowning"},
  {smiley: "🙎", description: "Person Pouting"},
  {smiley: "🙎‍♂️", description: "Man Pouting"},
  {smiley: "🙎‍♀️", description: "Woman Pouting"},
  {smiley: "🙅", description: "Person Gesturing No"},
  {smiley: "🙅‍♂️", description: "Man Gesturing No"},
  {smiley: "🙅‍♀️", description: "Woman Gesturing No"},
  {smiley: "🙆", description: "Person Gesturing OK"},
  {smiley: "🙆‍♂️", description: "Man Gesturing OK"},
  {smiley: "🙆‍♀️", description: "Woman Gesturing OK"},
  {smiley: "💁", description: "Person Tipping Hand"},
  {smiley: "💁‍♂️", description: "Man Tipping Hand"},
  {smiley: "💁‍♀️", description: "Woman Tipping Hand"},
  {smiley: "🙋", description: "Person Raising Hand"},
  {smiley: "🙋‍♂️", description: "Man Raising Hand"},
  {smiley: "🙋‍♀️", description: "Woman Raising Hand"},
  {smiley: "🧏", description: "Deaf Person"},
  {smiley: "🧏‍♂️", description: "Deaf Man"},
  {smiley: "🧏‍♀️", description: "Deaf Woman"},
  {smiley: "🙇", description: "Person Bowing"},
  {smiley: "🙇‍♂️", description: "Man Bowing"},
  {smiley: "🙇‍♀️", description: "Woman Bowing"},
  {smiley: "🤦", description: "Person Facepalming"},
  {smiley: "🤦‍♂️", description: "Man Facepalming"},
  {smiley: "🤦‍♀️", description: "Woman Facepalming"},
  {smiley: "🤷", description: "Person Shrugging"},
  {smiley: "🤷‍♂️", description: "Man Shrugging"},
  {smiley: "🤷‍♀️", description: "Woman Shrugging"},
  {smiley: "🧑‍⚕️", description: "Health Worker"},
  {smiley: "👨‍⚕️", description: "Man Health Worker"},
  {smiley: "👩‍⚕️", description: "Woman Health Worker"},
  {smiley: "🧑‍🎓", description: "Student"},
  {smiley: "👨‍🎓", description: "Man Student"},
  {smiley: "👩‍🎓", description: "Woman Student"},
  {smiley: "🧑‍🏫", description: "Teacher"},
  {smiley: "👨‍🏫", description: "Man Teacher"},
  {smiley: "👩‍🏫", description: "Woman Teacher"},
  {smiley: "🧑‍⚖️", description: "Judge"},
  {smiley: "👨‍⚖️", description: "Man Judge"},
  {smiley: "👩‍⚖️", description: "Woman Judge"},
  {smiley: "🧑‍🌾", description: "Farmer"},
  {smiley: "👨‍🌾", description: "Man Farmer"},
  {smiley: "👩‍🌾", description: "Woman Farmer"},
  {smiley: "🧑‍🍳", description: "Cook"},
  {smiley: "👨‍🍳", description: "Man Cook"},
  {smiley: "👩‍🍳", description: "Woman Cook"},
  {smiley: "🧑‍🔧", description: "Mechanic"},
  {smiley: "👨‍🔧", description: "Man Mechanic"},
  {smiley: "👩‍🔧", description: "Woman Mechanic"},
  {smiley: "🧑‍🏭", description: "Factory Worker"},
  {smiley: "👨‍🏭", description: "Man Factory Worker"},
  {smiley: "👩‍🏭", description: "Woman Factory Worker"},
  {smiley: "🧑‍💼", description: "Office Worker"},
  {smiley: "👨‍💼", description: "Man Office Worker"},
  {smiley: "👩‍💼", description: "Woman Office Worker"},
  {smiley: "🧑‍🔬", description: "Scientist"},
  {smiley: "👨‍🔬", description: "Man Scientist"},
  {smiley: "👩‍🔬", description: "Woman Scientist"},
  {smiley: "🧑‍💻", description: "Technologist"},
  {smiley: "👨‍💻", description: "Man Technologist"},
  {smiley: "👩‍💻", description: "Woman Technologist"},
  {smiley: "🧑‍🎤", description: "Singer"},
  {smiley: "👨‍🎤", description: "Man Singer"},
  {smiley: "👩‍🎤", description: "Woman Singer"},
  {smiley: "🧑‍🎨", description: "Artist"},
  {smiley: "👨‍🎨", description: "Man Artist"},
  {smiley: "👩‍🎨", description: "Woman Artist"},
  {smiley: "🧑‍✈️", description: "Pilot"},
  {smiley: "👨‍✈️", description: "Man Pilot"},
  {smiley: "👩‍✈️", description: "Woman Pilot"},
  {smiley: "🧑‍🚀", description: "Astronaut"},
  {smiley: "👨‍🚀", description: "Man Astronaut"},
  {smiley: "👩‍🚀", description: "Woman Astronaut"},
  {smiley: "🧑‍🚒", description: "Firefighter"},
  {smiley: "👨‍🚒", description: "Man Firefighter"},
  {smiley: "👩‍🚒", description: "Woman Firefighter"},
  {smiley: "👮", description: "Police Officer"},
  {smiley: "👮‍♂️", description: "Man Police Officer"},
  {smiley: "👮‍♀️", description: "Woman Police Officer"},
  {smiley: "🕵️", description: "Detective"},
  {smiley: "🕵️‍♂️", description: "Man Detective"},
  {smiley: "🕵️‍♀️", description: "Woman Detective"},
  {smiley: "💂", description: "Guard"},
  {smiley: "💂‍♂️", description: "Man Guard"},
  {smiley: "💂‍♀️", description: "Woman Guard"},
  {smiley: "👷", description: "Construction Worker"},
  {smiley: "👷‍♂️", description: "Man Construction Worker"},
  {smiley: "👷‍♀️", description: "Woman Construction Worker"},
  {smiley: "🤴", description: "Prince"},
  {smiley: "👸", description: "Princess"},
  {smiley: "👳", description: "Person Wearing Turban"},
  {smiley: "👳‍♂️", description: "Man Wearing Turban"},
  {smiley: "👳‍♀️", description: "Woman Wearing Turban"},
  {smiley: "👲", description: "Person With Skullcap"},
  {smiley: "🧕", description: "Woman with Headscarf"},
  {smiley: "🤵", description: "Person in Tuxedo"},
  {smiley: "🤵‍♂️", description: "Man in Tuxedo"},
  {smiley: "🤵‍♀️", description: "Woman in Tuxedo"},
  {smiley: "👰", description: "Person With Veil"},
  {smiley: "👰‍♂️", description: "Man with Veil"},
  {smiley: "👰‍♀️", description: "Woman with Veil"},
  {smiley: "🤰", description: "Pregnant Woman"},
  {smiley: "🤱", description: "Breast-Feeding"},
  {smiley: "👩‍🍼", description: "Woman Feeding Baby"},
  {smiley: "👨‍🍼", description: "Man Feeding Baby"},
  {smiley: "🧑‍🍼", description: "Person Feeding Baby"},
  {smiley: "👼", description: "Baby Angel"},
  {smiley: "🎅", description: "Santa Claus"},
  {smiley: "🤶", description: "Mrs. Claus"},
  {smiley: "🧑‍🎄", description: "Mx Claus"},
  {smiley: "🦸", description: "Superhero"},
  {smiley: "🦸‍♂️", description: "Man Superhero"},
  {smiley: "🦸‍♀️", description: "Woman Superhero"},
  {smiley: "🦹", description: "Supervillain"},
  {smiley: "🦹‍♂️", description: "Man Supervillain"},
  {smiley: "🦹‍♀️", description: "Woman Supervillain"},
  {smiley: "🧙", description: "Mage"},
  {smiley: "🧙‍♂️", description: "Man Mage"},
  {smiley: "🧙‍♀️", description: "Woman Mage"},
  {smiley: "🧚", description: "Fairy"},
  {smiley: "🧚‍♂️", description: "Man Fairy"},
  {smiley: "🧚‍♀️", description: "Woman Fairy"},
  {smiley: "🧛", description: "Vampire"},
  {smiley: "🧛‍♂️", description: "Man Vampire"},
  {smiley: "🧛‍♀️", description: "Woman Vampire"},
  {smiley: "🧜", description: "Merperson"},
  {smiley: "🧜‍♂️", description: "Merman"},
  {smiley: "🧜‍♀️", description: "Mermaid"},
  {smiley: "🧝", description: "Elf"},
  {smiley: "🧝‍♂️", description: "Man Elf"},
  {smiley: "🧝‍♀️", description: "Woman Elf"},
  {smiley: "🧞", description: "Genie"},
  {smiley: "🧞‍♂️", description: "Man Genie"},
  {smiley: "🧞‍♀️", description: "Woman Genie"},
  {smiley: "🧟", description: "Zombie"},
  {smiley: "🧟‍♂️", description: "Man Zombie"},
  {smiley: "🧟‍♀️", description: "Woman Zombie"},
  {smiley: "💆", description: "Person Getting Massage"},
  {smiley: "💆‍♂️", description: "Man Getting Massage"},
  {smiley: "💆‍♀️", description: "Woman Getting Massage"},
  {smiley: "💇", description: "Person Getting Haircut"},
  {smiley: "💇‍♂️", description: "Man Getting Haircut"},
  {smiley: "💇‍♀️", description: "Woman Getting Haircut"},
  {smiley: "🚶", description: "Person Walking"},
  {smiley: "🚶‍♂️", description: "Man Walking"},
  {smiley: "🚶‍♀️", description: "Woman Walking"},
  {smiley: "🧍", description: "Person Standing"},
  {smiley: "🧍‍♂️", description: "Man Standing"},
  {smiley: "🧍‍♀️", description: "Woman Standing"},
  {smiley: "🧎", description: "Person Kneeling"},
  {smiley: "🧎‍♂️", description: "Man Kneeling"},
  {smiley: "🧎‍♀️", description: "Woman Kneeling"},
  {smiley: "🧑‍🦯", description: "Person with White Cane"},
  {smiley: "👨‍🦯", description: "Man with White Cane"},
  {smiley: "👩‍🦯", description: "Woman with White Cane"},
  {smiley: "🧑‍🦼", description: "Person in Motorized Wheelchair"},
  {smiley: "👨‍🦼", description: "Man in Motorized Wheelchair"},
  {smiley: "👩‍🦼", description: "Woman in Motorized Wheelchair"},
  {smiley: "🧑‍🦽", description: "Person in Manual Wheelchair"},
  {smiley: "👨‍🦽", description: "Man in Manual Wheelchair"},
  {smiley: "👩‍🦽", description: "Woman in Manual Wheelchair"},
  {smiley: "🏃", description: "Person Running"},
  {smiley: "🏃‍♂️", description: "Man Running"},
  {smiley: "🏃‍♀️", description: "Woman Running"},
  {smiley: "💃", description: "Woman Dancing"},
  {smiley: "🕺", description: "Man Dancing"},
  {smiley: "🕴️", description: "Person in Suit Levitating"},
  {smiley: "👯", description: "People with Bunny Ears"},
  {smiley: "👯‍♂️", description: "Men with Bunny Ears"},
  {smiley: "👯‍♀️", description: "Women with Bunny Ears"},
  {smiley: "🧖", description: "Person in Steamy Room"},
  {smiley: "🧖‍♂️", description: "Man in Steamy Room"},
  {smiley: "🧖‍♀️", description: "Woman in Steamy Room"},
  {smiley: "🧘", description: "Person in Lotus Position"},
  {smiley: "🧑‍🤝‍🧑", description: "People Holding Hands"},
  {smiley: "👭", description: "Women Holding Hands"},
  {smiley: "👫", description: "Woman and Man Holding Hands"},
  {smiley: "👬", description: "Men Holding Hands"},
  {smiley: "💏", description: "Kiss"},
  {smiley: "👩‍❤️‍💋‍👨", description: "Kiss: Woman, Man"},
  {smiley: "👨‍❤️‍💋‍👨", description: "Kiss: Man, Man"},
  {smiley: "👩‍❤️‍💋‍👩", description: "Kiss: Woman, Woman"},
  {smiley: "💑", description: "Couple with Heart"},
  {smiley: "👩‍❤️‍👨", description: "Couple with Heart: Woman, Man"},
  {smiley: "👨‍❤️‍👨", description: "Couple with Heart: Man, Man"},
  {smiley: "👩‍❤️‍👩", description: "Couple with Heart: Woman, Woman"},
  {smiley: "👪", description: "Family"},
  {smiley: "👨‍👩‍👦", description: "Family: Man, Woman, Boy"},
  {smiley: "👨‍👩‍👧", description: "Family: Man, Woman, Girl"},
  {smiley: "👨‍👩‍👧‍👦", description: "Family: Man, Woman, Girl, Boy"},
  {smiley: "👨‍👩‍👦‍👦", description: "Family: Man, Woman, Boy, Boy"},
  {smiley: "👨‍👩‍👧‍👧", description: "Family: Man, Woman, Girl, Girl"},
  {smiley: "👨‍👨‍👦", description: "Family: Man, Man, Boy"},
  {smiley: "👨‍👨‍👧", description: "Family: Man, Man, Girl"},
  {smiley: "👨‍👨‍👧‍👦", description: "Family: Man, Man, Girl, Boy"},
  {smiley: "👨‍👨‍👦‍👦", description: "Family: Man, Man, Boy, Boy"},
  {smiley: "👨‍👨‍👧‍👧", description: "Family: Man, Man, Girl, Girl"},
  {smiley: "👩‍👩‍👦", description: "Family: Woman, Woman, Boy"},
  {smiley: "👩‍👩‍👧", description: "Family: Woman, Woman, Girl"},
  {smiley: "👩‍👩‍👧‍👦", description: "Family: Woman, Woman, Girl, Boy"},
  {smiley: "👩‍👩‍👦‍👦", description: "Family: Woman, Woman, Boy, Boy"},
  {smiley: "👩‍👩‍👧‍👧", description: "Family: Woman, Woman, Girl, Girl"},
  {smiley: "👨‍👦", description: "Family: Man, Boy"},
  {smiley: "👨‍👦‍👦", description: "Family: Man, Boy, Boy"},
  {smiley: "👨‍👧", description: "Family: Man, Girl"},
  {smiley: "👨‍👧‍👦", description: "Family: Man, Girl, Boy"},
  {smiley: "👨‍👧‍👧", description: "Family: Man, Girl, Girl"},
  {smiley: "👩‍👦", description: "Family: Woman, Boy"},
  {smiley: "👩‍👦‍👦", description: "Family: Woman, Boy, Boy"},
  {smiley: "👩‍👧", description: "Family: Woman, Girl"},
  {smiley: "👩‍👧‍👦", description: "Family: Woman, Girl, Boy"},
  {smiley: "👩‍👧‍👧", description: "Family: Woman, Girl, Girl"},
  {smiley: "🗣️", description: "Speaking Head"},
  {smiley: "👤", description: "Bust in Silhouette"},
  {smiley: "👥", description: "Busts in Silhouette"},
  {smiley: "👣", description: "Footprints"},
  {smiley: "🧳", description: "Luggage"},
  {smiley: "🌂", description: "Closed Umbrella"},
  {smiley: "☂️", description: "Umbrella"},
  {smiley: "🎃", description: "Jack-O-Lantern"},
  {smiley: "🧵", description: "Thread"},
  {smiley: "🧶", description: "Yarn"},
  {smiley: "👓", description: "Glasses"},
  {smiley: "🕶️", description: "Sunglasses"},
  {smiley: "🥽", description: "Goggles"},
  {smiley: "🥼", description: "Lab Coat"},
  {smiley: "🦺", description: "Safety Vest"},
  {smiley: "👔", description: "Necktie"},
  {smiley: "👕", description: "T-Shirt"},
  {smiley: "👖", description: "Jeans"},
  {smiley: "🧣", description: "Scarf"},
  {smiley: "🧤", description: "Gloves"},
  {smiley: "🧥", description: "Coat"},
  {smiley: "🧦", description: "Socks"},
  {smiley: "👗", description: "Dress"},
  {smiley: "👘", description: "Kimono"},
  {smiley: "🥻", description: "Sari"},
  {smiley: "🩱", description: "One-Piece Swimsuit"},
  {smiley: "🩲", description: "Briefs"},
  {smiley: "🩳", description: "Shorts"},
  {smiley: "👙", description: "Bikini"},
  {smiley: "👚", description: "Woman’s Clothes"},
  {smiley: "👛", description: "Purse"},
  {smiley: "👜", description: "Handbag"},
  {smiley: "👝", description: "Clutch Bag"},
  {smiley: "🎒", description: "Backpack"},
  {smiley: "👞", description: "Man’s Shoe"},
  {smiley: "👟", description: "Running Shoe"},
  {smiley: "🥾", description: "Hiking Boot"},
  {smiley: "🥿", description: "Flat Shoe"},
  {smiley: "👠", description: "High-Heeled Shoe"},
  {smiley: "👡", description: "Woman’s Sandal"},
  {smiley: "🩰", description: "Ballet Shoes"},
  {smiley: "👢", description: "Woman’s Boot"},
  {smiley: "👑", description: "Crown"},
  {smiley: "👒", description: "Woman’s Hat"},
  {smiley: "🎩", description: "Top Hat"},
  {smiley: "🎓", description: "Graduation Cap"},
  {smiley: "🧢", description: "Billed Cap"},
  {smiley: "⛑️", description: "Rescue Worker’s Helmet"},
  {smiley: "💄", description: "Lipstick"},
  {smiley: "💍", description: "Ring"},
  {smiley: "💼", description: "Briefcase"},
  {smiley: "🩸", description: "Drop of Blood"},
  {smiley: "😮‍💨", description: "Face Exhaling"},
  {smiley: "😵‍💫", description: "Face with Spiral Eyes"},
  {smiley: "😶‍🌫️", description: "Face in Clouds"},
]

export default smileyList
