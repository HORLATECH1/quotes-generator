var quotes = [
    'Tough times don’t last. Tough people do.',

'Pain is temporary. Quitting lasts forever. – Lance Armstrong',

'A problem is a chance for you to do your best. – Duke Ellington',

'Motivation is what gets you started. Habit is what keeps you going. – Jim Rohn',

'A little progress each day adds up to big results. – Satya Nani',

'If you get tired, learn to rest, not quit. – Unknown',

'Success consists of getting up just one more time than you fall. – Oliver Goldsmith',

'Don\’t stop until you’re proud. – Unknown',

'Focus on your goal. Don’t look in any direction but ahead. – Unknown',

'Courage is one step ahead of fear. – Coleman Young',


'Don’t wish it were easier. Wish you were better. ― Jim Rohn',


'I find that the harder I work, the more luck I seem to have. – Thomas Jefferson',
]
    function newQuote(){
        var randomNumber = Math.floor(Math.random() * (quotes.length));
        document.getElementById('getQuote').innerHTML = quotes[randomNumber];
    }
    

