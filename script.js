const output = document.getElementById('output');
const commandInput = document.getElementById('command-input');

const commands = {
    'help': `
        <div>Available commands:</div>
        <div>- ls blog: View list of blog posts</div>
        <div>- cat blog/[post_name]: View specific blog post (e.g., cat blog/post_01.txt)</div>
        <div>- ls projects: View list of projects</div>
        <div>- cat projects/[project_name]/info.txt: View project details (e.g., cat projects/project_01/info.txt)</div>
        <div>- cat skills: View your skills</div>
        <div>- echo contact: View contact information</div>
        <div>- clear: Clear the terminal screen</div>
    `,
    'ls blog': `
        <div>blog/</div>
        <div>&nbsp;&nbsp;&nbsp;├── post_01.txt</div>
        <div>&nbsp;&nbsp;&nbsp;├── post_02.txt</div>
        <div>&nbsp;&nbsp;&nbsp;└── post_03.txt</div>
    `,
    'cat blog/post_01.txt': `
        <div>Title: Example Blog Post 1</div>
        <div>Date: 2024-08-14</div>
        <div>-------------------------------------</div>
        <div>This is an example of your first blog post content.</div>
    `,
    'ls projects': `
        <div>projects/</div>
        <div>&nbsp;&nbsp;&nbsp;└── project_01/</div>
    `,
    'cat projects/project_01/info.txt': `
        <div>Project: Terminal-Themed Portfolio Website</div>
        <div>Description: A personal portfolio website designed to look like a Linux terminal, where users can interact with various commands to explore different sections.</div>
        <div>Features:</div>
        <ul>
            <li>Interactive command-line interface</li>
            <li>Blog section with posts</li>
            <li>Projects section with detailed project pages</li>
            <li>Contact information display</li>
            <li>Fun Easter eggs and terminal-like responses</li>
        </ul>
        <div>To view the full project page, enter: cat projects/project_01/full_page</div>
    `,
    'cat projects/project_01/full_page': `
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
        <div>"In the middle of difficulty lies opportunity." - Albert Einstein</div>
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

        commandInput.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});
