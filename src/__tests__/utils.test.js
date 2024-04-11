import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });
});

// Import the function to test
import { isPalindrome } from "../utils";

// Test cases
describe("isPalindrome", () => {
  it("should return true for a palindrome word", () => {
    expect(isPalindrome("level")).toBe(true);
  });

  it("should return false for a non-palindrome word", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("should be case insensitive", () => {
    expect(isPalindrome("Racecar")).toBe(true);
  });

  it("should ignore special characters", () => {
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
  });
});
