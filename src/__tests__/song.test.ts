import { Animal, getAllVerses, getSong, getVerse } from '../song'
import { originalSong } from './constants'

const animals: Animal[] = [
	{name: "fly", lineWhenSwallowed: ""},
	{name: "spider", lineWhenSwallowed: "That wriggled and wiggled and tickled inside her."},
	{name: "bird", lineWhenSwallowed: "How absurd to swallow a bird."},
	{name: "cat", lineWhenSwallowed: "Fancy that to swallow a cat!" },
	{name: "dog", lineWhenSwallowed: "What a hog, to swallow a dog!" },
	{name: "cow", lineWhenSwallowed: "I don't know how she swallowed a cow!" },
]

const trailingVerseSentence = "I don't know why she swallowed a fly - perhaps she'll die!"

describe("song", () => {
	describe("getVerse", () => {
		it("just works", () => {
			const sampleVerse = `There was an old lady who swallowed a cow;
I don't know how she swallowed a cow!
She swallowed the cow to catch the dog,
She swallowed the dog to catch the cat,
She swallowed the cat to catch the bird,
She swallowed the bird to catch the spider,
She swallowed the spider to catch the fly;
I don't know why she swallowed a fly - perhaps she'll die!`
			
			expect(getVerse(animals, trailingVerseSentence)).toBe(sampleVerse)
		})
	})
	
	describe("getAllVerses", () => {
		it("just works", () => {
			
			const sampleVerses = `There was an old lady who swallowed a fly.
I don't know why she swallowed a fly - perhaps she'll die!

There was an old lady who swallowed a spider;
That wriggled and wiggled and tickled inside her.
She swallowed the spider to catch the fly;
I don't know why she swallowed a fly - perhaps she'll die!

There was an old lady who swallowed a bird;
How absurd to swallow a bird.
She swallowed the bird to catch the spider,
She swallowed the spider to catch the fly;
I don't know why she swallowed a fly - perhaps she'll die!

There was an old lady who swallowed a cat;
Fancy that to swallow a cat!
She swallowed the cat to catch the bird,
She swallowed the bird to catch the spider,
She swallowed the spider to catch the fly;
I don't know why she swallowed a fly - perhaps she'll die!

There was an old lady who swallowed a dog;
What a hog, to swallow a dog!
She swallowed the dog to catch the cat,
She swallowed the cat to catch the bird,
She swallowed the bird to catch the spider,
She swallowed the spider to catch the fly;
I don't know why she swallowed a fly - perhaps she'll die!

There was an old lady who swallowed a cow;
I don't know how she swallowed a cow!
She swallowed the cow to catch the dog,
She swallowed the dog to catch the cat,
She swallowed the cat to catch the bird,
She swallowed the bird to catch the spider,
She swallowed the spider to catch the fly;
I don't know why she swallowed a fly - perhaps she'll die!`
			
			const actual = getAllVerses(animals, trailingVerseSentence);
			
			expect(actual).toBe(sampleVerses);
		});
	});
	
  describe("getSong", () => {
    it("just works", () => {
		const lastVerse = `There was an old lady who swallowed a horse...
...She's dead, of course!`
		
		const actual = getSong(animals,trailingVerseSentence, lastVerse );
		
		expect(actual).toBe(originalSong);
    });
  });
});
