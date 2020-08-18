const quotes = [
    {quote: `The way to get started is to quit talking and begin doing. - Walt Disney`},
    {quote: `Tell me and I forget. Teach me and I remember. Involve me and I learn. - Benjamin Franklin`},
    {quote: `Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson`},
    {quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein`},
    {quote: `You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss`},
    {quote: `Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen`},
    {quote: `I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together. - Marilyn Monroe`},
    {quote: `Anyway, like I was sayin’, shrimp is the fruit of the sea. You can barbecue it, boil it, broil it, bake it, saute it. There’s shrimp-kabobs, shrimp creole, shrimp gumbo. Pan fried, deep fried, stir-fried. There’s pineapple shrimp, lemon shrimp, coconut shrimp, pepper shrimp, shrimp soup, shrimp stew, shrimp salad, shrimp and potatoes, shrimp burger, shrimp sandwich. That, that’s about it. - Bubba`},
    {quote: `I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. – Michael Jordan`},
    {quote: `When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life. – John Lennon`},
    {quote: `If you’re not stubborn, you’ll give up on experiments too soon. And if you’re not flexible, you’ll pound your head against the wall and you won’t see a different solution to a problem you’re trying to solve. —Jeff Bezos`},
    {quote: `But the fact that some geniuses were laughed at does not imply that all who are laughed at are geniuses. They laughed at Columbus, they laughed at Fulton, they laughed at the Wright Brothers. But they also laughed at Bozo the Clown. – Carl Sagan`},
    {quote: `Come with me and you'll be
In a world of pure imagination
Take a look and you'll see
Into your imagination
We'll begin with a spin
Travelling in the world of my creation
What we'll see will defy explanation 
                        - Willy Wonka`}
  ]

  const quoteGenerator = () => {
    return quotes[Math.floor(Math.random() * quotes.length)].quote
  }

  export default quoteGenerator;