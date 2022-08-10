const Quotes = () => {
  const mathQuotes = [
    {
      id: 1,
      quote: 'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers. – ',
      author: 'Shakuntala Devi',
    },
    {
      id: 2,
      quote: 'Mathematics is the only science that is sure to make you smarter. – ',
      author: 'Albert Einstein',
    },
    {
      id: 3,
      quote: 'Life is like a mathematical equation. You can’t change its outcome, but you can change its variables. – ',
      author: 'John von Neumann',
    },
    {
      id: 4,
      quote: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. – ',
      author: 'William Paul Thurston',
    },
    {
      id: 5,
      quote: "It's fine to work on any problem, so long as it generates interesting mathematics along the way - even if you don't solve it at the end of the day. -",
      author: 'Andrew Wiles',
    },
    {
      id: 6,
      quote: 'If you stop at general math, then you will only make general money. – ',
      author: 'Snoop Dogg',
    },
    {
      id: 7,
      quote: 'Mathematics may not teach us to add love or subtract hate, but it gives us hope that every problem has a solution. – ',
      author: 'Anonymous',
    },
    {
      id: 8,
      quote: "It's fine to work on any problem, so long as it generates interesting mathematics along the way - even if you don't solve it at the end of the day. -",
      author: 'Andrew Wiles',
    },
    {
      id: 9,
      quote: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. – ',
      author: 'William Paul Thurston',
    },
    {
      id: 10,
      quote: 'Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country. -',
      author: 'David Hilbert',
    },
  ];
  return (
    <ul className="quotes-container">
      {
                mathQuotes.map((quote) => (
                  <li key={quote.id}>
                    {quote.quote}
                    {' '}
                    <span>{quote.author}</span>
                  </li>
                ))
            }
    </ul>

  );
};

export default Quotes;
