const output = document.getElementById('output');
const commandInput = document.getElementById('command-input');

let commandHistory = [];
let historyIndex = -1;

// Welcome message with a guide
const welcomeMessage = `
    <div class="welcome">
        <h1>Welcome to Admral77's Terminal</h1>
        <p>Type <strong>help</strong> to see a list of available commands.</p>
        <p>Use the arrow keys to navigate through previous commands.</p>
    </div>
`;

output.innerHTML += welcomeMessage;

const fortunes = [
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you can dream it, you can achieve it. - Zig Ziglar",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "Don’t count the days, make the days count. - Muhammad Ali",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Everything you’ve ever wanted is on the other side of fear. - George Addair",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "Your limitation—it's only your imagination. - Unknown",
    "Push yourself, because no one else is going to do it for you. - Unknown",
    "Great things never come from comfort zones. - Unknown",
    "Dream it. Wish it. Do it. - Unknown",
    "Success doesn’t just find you. You have to go out and get it. - Unknown",
    "The harder you work, the luckier you get. - Gary Player",
    "Dream bigger. Do bigger. - Unknown",
    "Don't stop when you're tired. Stop when you're done. - Unknown",
    "Wake up with determination. Go to bed with satisfaction. - Unknown",
    "Do something today that your future self will thank you for. - Unknown",
    "Little things make big days. - Unknown",
    "It's going to be hard, but hard does not mean impossible. - Unknown",
    "Don't wait for opportunity. Create it. - Unknown",
    "Sometimes we're tested not to show our weaknesses, but to discover our strengths. - Unknown",
    "The key to success is to focus on goals, not obstacles. - Unknown",
    "Dream it. Believe it. Build it. - Unknown",
    "Your only limit is you. - Unknown",
    "A year from now, you may wish you had started today. - Karen Lamb",
    "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Some people want it to happen, some wish it would happen, others make it happen. - Michael Jordan",
    "Don't count the days, make the days count. - Muhammad Ali",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Whether you think you can or you think you can't, you're right. - Henry Ford",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "You learn more from failure than from success. Don’t let it stop you. Failure builds character. - Unknown",
    "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
    "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you. - Steve Jobs",
    "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
    "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
    "We may encounter many defeats but we must not be defeated. - Maya Angelou",
    "Knowing is not enough; we must apply. Wishing is not enough; we must do. - Johann Wolfgang Von Goethe",
    "Imagine your life is perfect in every respect; what would it look like? - Brian Tracy",
    "Security is mostly a superstition. Life is either a daring adventure or nothing. - Helen Keller",
    "The man who has confidence in himself gains the confidence of others. - Hasidic Proverb",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Creativity is intelligence having fun. - Albert Einstein",
    "What you lack in talent can be made up with desire, hustle, and giving 110% all the time. - Don Zimmer",
    "Do what you can with all you have, wherever you are. - Theodore Roosevelt",
    "Develop an ‘Attitude of Gratitude’. Say thank you to everyone you meet for everything they do for you. - Brian Tracy",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "To see what is right and not do it is a lack of courage. - Confucius",
    "Reading is to the mind, as exercise is to the body. - Brian Tracy",
    "Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality. - Brian Tracy",
    "The future belongs to the competent. Get good, get better, be the best! - Brian Tracy",
    "For every reason it’s not possible, there are hundreds of people who have faced the same circumstances and succeeded. - Jack Canfield",
    "Things work out best for those who make the best of how things work out. - John Wooden",
    "A room without books is like a body without a soul. - Marcus Tullius Cicero",
    "I think, therefore I am. - René Descartes",
    "It’s the possibility of having a dream come true that makes life interesting. - Paulo Coelho",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "If you really look closely, most overnight successes took a long time. - Steve Jobs",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "We generate fears while we sit. We overcome them by action. - Dr. Henry Link",
    "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don’t quit. - Conrad Hilton",
    "Don't let the fear of losing be greater than the excitement of winning. - Robert Kiyosaki",
    "In order to succeed, we must first believe that we can. - Nikos Kazantzakis",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon"
];

const commands = {
    'help': `
        <div>Available commands:</div>
        <div>- ls blog: View list of blog posts</div>
        <div>- view blog [post_number]: View specific blog post (e.g., view blog 1)</div>
        <div>- ls projects: View list of projects</div>
        <div>- view project [project_number]: View specific project (e.g., view project 1)</div>
        <div>- cat skills: View your skills</div>
        <div>- echo contact: View contact information</div>
        <div>- sudo make me a sandwich: Ask the terminal to make a sandwich</div>
        <div>- rm -rf /: Try to delete everything (don’t do it!)</div>
        <div>- fortune: Get a random motivational quote</div>
        <div>- clear: Clear the terminal screen</div>
    `,
    'ls blog': `
        <div>blog/</div>
        <div>&nbsp;&nbsp;&nbsp;1. Introduction to Terminal-Themed Portfolios</div>
        <div>&nbsp;&nbsp;&nbsp;2. The Magic of JavaScript in Web Development</div>
        <div>&nbsp;&nbsp;&nbsp;3. Deploying Projects on GitHub Pages</div>
    `,
    'view blog 1': `
        <div class="full-page-blog">
            <h1>Introduction to Terminal-Themed Portfolios</h1>
            <p>Date: 2024-08-14</p>
            <p>This post introduces the concept of creating a portfolio website with a terminal theme, providing users with a unique and interactive way to explore your projects and skills.</p>
            <p>We explore the reasons why this design choice stands out, how it can be implemented using HTML, CSS, and JavaScript, and some best practices for making it both functional and visually appealing.</p>
            <p>Terminal-themed portfolios are not only a great way to showcase technical skills, but they also provide an engaging experience that sets you apart from others.</p>
        </div>
    `,
    'view blog 2': `
        <div class="full-page-blog">
            <h1>The Magic of JavaScript in Web Development</h1>
            <p>Date: 2024-08-15</p>
            <p>JavaScript is the backbone of interactivity on the web. In this blog post, we dive into how JavaScript can transform a static webpage into a dynamic experience.</p>
            <p>We’ll cover some essential JavaScript concepts, including DOM manipulation, event handling, and asynchronous programming, and how they can be used to create responsive and interactive user interfaces.</p>
            <p>By the end of this post, you’ll have a better understanding of how JavaScript works and why it’s such a powerful tool in web development.</p>
        </div>
    `,
    'view blog 3': `
        <div class="full-page-blog">
            <h1>Deploying Projects on GitHub Pages</h1>
            <p>Date: 2024-08-16</p>
            <p>Deploying your web projects has never been easier, thanks to GitHub Pages. This post guides you through the steps of deploying a project on GitHub Pages.</p>
            <p>We’ll cover everything from setting up your repository, configuring your project for deployment, and going live with your site. By the end, your project will be accessible to the world at a public URL.</p>
            <p>Whether it’s a portfolio, blog, or web app, GitHub Pages provides a free and simple way to showcase your work.</p>
        </div>
    `,
    'ls projects': `
        <div>projects/</div>
        <div>&nbsp;&nbsp;&nbsp;1. Terminal-Themed Portfolio Website</div>
    `,
    'view project 1': `
        <div class="full-page-project">
            <h1>Terminal-Themed Portfolio Website</h1>
            <p><strong>Description:</strong> This project is a personal portfolio website designed to look and feel like a Linux terminal. Users can type commands to navigate through the content, view blog posts, project details, and even interact with fun Easter eggs.</p>
            <p><strong>Features:</strong></p>
            <ul>
                <li>Interactive command-line interface</li>
                <li>Blog section with posts</li>
                <li>Projects section with detailed project pages</li>
                <li>Contact information display</li>
                <li>Fun Easter eggs and terminal-like responses</li>
            </ul>
            <p><strong>Technologies Used:</strong></p>
            <ul>
                <li>HTML5, CSS3, JavaScript</li>
                <li>Responsive Web Design</li>
                <li>Vanilla JavaScript for interactivity</li>
            </ul>
            <p><strong>Demo:</strong> <a href="https://admral77.pages.dev" target="_blank">View Live Demo</a></p>
            <p><strong>GitHub Repository:</strong> <a href="https://github.com/Admral77/terminal-portfolio" target="_blank">View on GitHub</a></p>
        </div>
    `,
    'cat skills': `
        <div>Skills/</div>
        <div>&nbsp;&nbsp;&nbsp;├── Languages: JavaScript, Python, C++</div>
        <div>&nbsp;&nbsp;&nbsp;├── Tools: Git, Docker, VSCode</div>
        <div>&nbsp;&nbsp;&nbsp;└── Platforms: Linux, AWS, Heroku</div>
    `,
    'echo contact': `
        <div>Contact Information:</div>
        <div>Email: <a href="mailto:drewmyname@proton.me">drewmyname@proton.me</a></div>
        <div>GitHub: <a href="https://github.com/Admral77" target="_blank">Admral77</a></div>
    `,
    'sudo make me a sandwich': `
        <div>Absolutely not. I'm a terminal, not a chef.</div>
    `,
    'rm -rf /': `
        <div>Nice try. Not on my watch.</div>
    `,
    'fortune': `
        <div>${fortunes[Math.floor(Math.random() * fortunes.length)]}</div>
    `,
    'clear': 'clear'
};

const invalidCommandResponse = 'command not found: ';

commandInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = commandInput.value.trim();
        let response;

        if (input === 'clear') {
            output.innerHTML = '';  // Clear the terminal screen
        } else {
            response = commands[input] || `<div>${invalidCommandResponse}${input}</div>`;
            output.innerHTML += `<div><span class="prompt">admral77@terminal:~$</span> ${input}</div>`;
            output.innerHTML += `<div>${response}</div>`;
        }

        // Add the command to history and reset history index
        if (input) {
            commandHistory.push(input);
            historyIndex = -1;
        }

        commandInput.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }

    // Handle arrow keys for command history navigation
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        if (event.key === 'ArrowUp') {
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
            }
        } else if (event.key === 'ArrowDown') {
            if (historyIndex > 0) {
                historyIndex--;
            } else {
                historyIndex = -1;
            }
        }

        if (historyIndex !== -1) {
            commandInput.value = commandHistory[commandHistory.length - 1 - historyIndex];
        } else {
            commandInput.value = '';
        }
    }
});
