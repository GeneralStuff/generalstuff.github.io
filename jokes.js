const jokes = [
    {
        "question": "What did one ocean say to the other ocean?",
        "answer": "Nothing, they just waved."
    },
    {
        "question": "Why don't skeletons fight each other?",
        "answer": "They don't have the guts."
    },
    {
        "question": "What do you get when you cross a snowman and a vampire?",
        "answer": "Frostbite."
    },
    {
        "question": "Why couldn't the bicycle stand up by itself?",
        "answer": "It was two-tired."
    },
    {
        "question": "What do you call fake spaghetti?",
        "answer": "An impasta."
    },
    {
        "question": "Why did the scarecrow win an award?",
        "answer": "Because he was outstanding in his field."
    },
    {
        "question": "How do you organize a space party?",
        "answer": "You planet."
    },
    {
        "question": "What do you call a factory that makes okay products?",
        "answer": "A satisfactory."
    },
    {
        "question": "Why don't scientists trust atoms?",
        "answer": "Because they make up everything."
    },
    {
        "question": "What did the janitor say when he jumped out of the closet?",
        "answer": "Supplies!"
    },
    {
        "question": "What do you call an alligator in a vest?",
        "answer": "An investigator."
    },
    {
        "question": "Why did the golfer bring two pairs of pants?",
        "answer": "In case he got a hole in one."
    },
    {
        "question": "What do you call a can opener that doesn't work?",
        "answer": "A can't opener."
    },
    {
        "question": "How do you catch a squirrel?",
        "answer": "Climb a tree and act like a nut."
    },
    {
        "question": "What do you call a fish wearing a crown?",
        "answer": "A kingfish."
    },
    {
        "question": "What did one hat say to the other?",
        "answer": "Stay here, I'm going on ahead."
    },
    {
        "question": "Why did the tomato turn red?",
        "answer": "Because it saw the salad dressing."
    },
    {
        "question": "What did one plate say to the other plate?",
        "answer": "Lunch is on me."
    },
    {
        "question": "What did one wall say to the other wall?",
        "answer": "I’ll meet you at the corner."
    },
    {
        "question": "Why did the math book look sad?",
        "answer": "Because it had too many problems."
    },
    {
        "question": "What do you call a belt made out of watches?",
        "answer": "A waist of time."
    },
    {
        "question": "Why don't eggs tell jokes?",
        "answer": "Because they might crack up."
    },
    {
        "question": "What did one toilet say to the other toilet?",
        "answer": "You look flushed."
    },
    {
        "question": "Why did the tomato turn red?",
        "answer": "Because it saw the salad dressing."
    },
    {
        "question": "What do you call a bear with no teeth?",
        "answer": "A gummy bear."
    },
    {
        "question": "Why don't skeletons fight each other?",
        "answer": "They don't have the guts."
    },
    {
        "question": "Why was the math book sad?",
        "answer": "Because it had too many problems."
    },
    {
        "question": "What do you call a can opener that doesn't work?",
        "answer": "A can't opener."
    },
    {
        "question": "What did one wall say to the other wall?",
        "answer": "I'll meet you at the corner."
    },
    {
        "question": "What did one hat say to the other hat?",
        "answer": "You stay here, I'll go on ahead."
    },
    {
        "question": "Why don't scientists trust atoms?",
        "answer": "Because they make up everything."
    },
    {
        "question": "Why did the golfer bring two pairs of pants?",
        "answer": "In case he got a hole in one."
    },
    {
        "question": "What did the left eye say to the right eye?",
        "answer": "Between you and me, something smells."
    },
    {
        "question": "What do you call a fish wearing a crown?",
        "answer": "A kingfish."
    },
    {
        "question": "What's brown and sticky?",
        "answer": "A stick."
    },
    {
        "question": "Why couldn't the bicycle stand up by itself?",
        "answer": "It was two-tired."
    },
    {
        "question": "What do you get when you cross a snowman and a vampire?",
        "answer": "Frostbite."
    },
    {
        "question": "What do you call fake spaghetti?",
        "answer": "An impasta."
    },
    {
        "question": "What's orange and sounds like a parrot?",
        "answer": "A carrot."
    },
    {
        "question": "What did one plate say to the other plate?",
        "answer": "Dinner's on me."
    },
    {
        "question": "What do you get when you cross a snowman and a dog?",
        "answer": "Frostbite."
    },
    {
        "question": "What's the best thing about Switzerland?",
        "answer": "I don't know, but their flag is a big plus."
    },
    {
        "question": "What did one hat say to the other?",
        "answer": "You stay here, I'll go on ahead."
    },
    {
        "question": "What do you call a factory that makes okay products?",
        "answer": "A satisfactory."
    },
    {
        "question": "What's the difference between a poorly dressed man on a tricycle and a well-dressed man on a bicycle?",
        "answer": "Attire."
    },
    {
        "question": "What do you call a man with a rubber toe?",
        "answer": "Roberto."
    },
    {
        "question": "How does a penguin build its house?",
        "answer": "Igloos it together."
    },
    {
        "question": "Why did the coffee file a police report?",
        "answer": "It got mugged."
    },
    {
        "question": "Why was the belt arrested?",
        "answer": "For holding up a pair of pants."
    },
    {
        "question": "Why don't skeletons fight each other?",
        "answer": "They don't have the guts."
    },
    {
        "question": "How do you organize a space party?",
        "answer": "You planet."
    },
    {
        "question": "What do you call a factory that makes okay products?",
        "answer": "A satisfactory."
    },
    {
        "question": "What do you call a fake noodle?",
        "answer": "An impasta."
    },
    {
        "question": "Why did the tomato turn red?",
        "answer": "Because it saw the salad dressing."
    },
    {
        "question": "What did one hat say to the other hat?",
        "answer": "You stay here, I'll go on ahead."
    },
    {
        "question": "Why did the math book look sad?",
        "answer": "Because it had too many problems."
    },
    {
        "question": "What do you get when you cross a snowman and a dog?",
        "answer": "Frostbite."
    },
    {
        "question": "Why did the scarecrow win an award?",
        "answer": "Because he was outstanding in his field."
    },
    {
        "question": "How do you organize a space party?",
        "answer": "You planet."
    },
    {
        "question": "What do you call a factory that makes okay products?",
        "answer": "A satisfactory."
    },
    {
        "question": "Why don't scientists trust atoms?",
        "answer": "Because they make up everything."
    },
    {
        "question": "What did the janitor say when he jumped out of the closet?",
        "answer": "Supplies!"
    }
];