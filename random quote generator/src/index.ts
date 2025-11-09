interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    text: "You learn more from failure than from success.",
    author: "Unknown"
  },
  {
    text: "If you are working on something exciting that you really care about, you don't have to be pushed. The vision pulls you.",
    author: "Steve Jobs"
  },
  {
    text: "People who are crazy enough to think they can change the world, are the ones who do.",
    author: "Rob Siltanen"
  },
  {
    text: "We may encounter many defeats but we must not be defeated.",
    author: "Maya Angelou"
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "Go confidently in the direction of your dreams. Live the life you have imagined.",
    author: "Henry David Thoreau"
  }
];

/**
 * Gets a random quote from the quotes array
 * @returns A random Quote object
 */
function getRandomQuote(): Quote {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

/**
 * Displays a quote in a formatted way
 * @param quote The quote to display
 */
function displayQuote(quote: Quote): void {
  console.log("\n" + "=".repeat(60));
  console.log(`"${quote.text}"`);
  console.log(`\n  - ${quote.author}`);
  console.log("=".repeat(60) + "\n");
}

/**
 * Main function to run the quote generator
 */
function main(): void {
  console.log("🌟 Random Quote Generator 🌟");
  console.log("Press Ctrl+C to exit\n");
  
  // Display initial quote
  const quote = getRandomQuote();
  displayQuote(quote);
  
  // If running in interactive mode, you can add more functionality here
  // For now, it just displays one random quote
}

// Run the application
main();

