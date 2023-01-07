'use strict';
const btnMotivate = document.querySelector('.btn-word-motivate');
const btnLaugh = document.querySelector('.btn-word-laugh');
const btnTeach = document.querySelector('.btn-word-laugh');
const dreamBegin = document.querySelector('.generated-sentence');

const educationalQuotes = [
  'Education is the vaccine of violence.',
  'The more that you read, the more things you will know, the more that you learn, the more places you’ll go.',
  'Education is one thing no one can take away from you.',
  'Education is the key that unlocks the golden door to freedom.',
  'Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.',
  'Education’s purpose is to replace an empty mind with an open one.',
  'Education is what remains after one has forgotten what one has learned in school.',
  'Education is not preparation for life; education is life itself.',
  'The aim of education is the knowledge, not of facts, but of values.',
  'What makes a child gifted and talented may not always be good grades in school, but a different way of looking at the world and learning.',
  'Learning is not compulsory… Neither is survival.',
  'The purpose of education is to turn mirrors into windows.',
  'Intelligence plus character — that is the goal of true education.',
  'Education is the most powerful weapon which you can use to change the world.',
  'The ability to read, write, and analyze; the confidence to stand up and demand justice and equality; the qualifications and connections to get your foot in the door and take your seat at the table — all of that starts with education.',
  'A child without education is like a bird without wings.',
  'The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.',
  'The principal goal of education in the schools should be creating men and women who are capable of doing new things, not simply repeating what other generations have done.',
  'The content of a book holds the power of education and it is with this power that we can shape our future and change lives.',
  'Education makes a people easy to lead but difficult to drive; easy to govern, but impossible to enslave.',
  'The goal of education is the advancement of knowledge and the dissemination of truth.',
  'Knowledge is power. Information is liberating. Education is the premise of progress in every society, in every family.',
  'Education is the passport to the future, for tomorrow belongs to those who prepare for it today.',
  'Whatever the cost of our libraries, the price is cheap compared to that of an ignorant nation.',
];

const funnyJokes = [
  'My IQ test results came back. They were negative.',
  'Our child has a great deal of willpower—and even more won’t power.',
  `Why can’t you trust an atom? Because they make up literally everything.`,
  `Advice to husbands: Try praising your wife now and then, even if it does startle her at first.`,
  `What’s the difference between an outlaw and an in-law? Outlaws are wanted.`,
  `Scientists have recently discovered a food that greatly reduces sex drive. It’s called wedding cake.`,
  `Before you marry a person, you should first make them use a computer with a slow Internet connection to see who they really are.`,
  ` I never knew what happiness was until I got married—and then it was too late.`,
  `Some men say they don’t wear their wedding band because it cuts off circulation. Well, that’s the point, isn’t it?`,
  `Among the things that are so simple even a child can operate them are parents.`,
  `She leaves me with the feeling that when we bury the hatchet she’ll mark the exact spot.`,
  `You can’t believe everything you hear—but you can repeat it.`,
  `There’s a lot to be said in his favor, but it’s not nearly as interesting.`,
  `They’ve been treating me like one of the family, and I’ve put up with it for as long as I can.`,
  `Their first daughter was born with a silver spoon in her mouth. Now they’re hoping for triplets so they can have a whole set.`,
  `I spent a lot of time, money, and effort childproofing my house … but the kids still get in.`,
  `Small son sitting on Daddy’s lap: “I’m still confused. Was I born in a nest or a hive?”`,
  `A Freudian slip is when you say one thing but mean your mother.`,
  `My mother was so surprised when I told her I was born again. She said she didn’t feel a thing!`,
  `What do you call a bear with no teeth? A gummy bear.`,
  `What do you call a mobster who’s buried in cement? A hardened criminal.`,
];

const countdownTimer = () => {
  dreamBegin.style.opacity = 0.0;
  dreamBegin.textContent = '3';
  dreamBegin.style.opacity = 0.9;

  setTimeout(function () {
    dreamBegin.style.opacity = 0.0;
    dreamBegin.textContent = '2';
    dreamBegin.style.opacity = 0.9;
  }, 1000);

  setTimeout(function () {
    dreamBegin.style.opacity = 0.0;
    dreamBegin.textContent = '1';
    dreamBegin.style.opacity = 0.9;
  }, 2000);
};

btnMotivate.addEventListener('click', function () {
  //   dreamBegin.style.opacity = 0;
  //   setTimeout(function () {
  //     dreamBegin.style.opacity = 0;
  //   }, 2000);

  countdownTimer();
  setTimeout(function () {
    dreamBegin.style.opacity = 0.0;
  }, 3000);

  setTimeout(function () {
    dreamBegin.textContent = `'${
      educationalQuotes[
        Math.trunc(Math.random() * educationalQuotes.length - 1)
      ]
    }'`;
    dreamBegin.style.opacity = 0.9;
  }, 5000);
});

btnLaugh.addEventListener('click', function () {
  countdownTimer();
  setTimeout(function () {
    dreamBegin.style.opacity = 0.0;
  }, 3000);

  setTimeout(function () {
    dreamBegin.textContent = `'${
      funnyJokes[Math.trunc(Math.random() * funnyJokes.length - 1)]
    }'`;
    dreamBegin.style.opacity = 0.9;
  }, 5000);
});
