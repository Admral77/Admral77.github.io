const output = document.getElementById('output');
const commandInput = document.getElementById('command-input');

const commands = {
    'help': `
        <div>Available commands:</div>
        <div>- ls blog</div>
        <div>- ls projects</div>
        <div>- cat skills</div>
        <div>- echo contact</div>
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
        <div>&nbsp;&nbsp;&nbsp;├── project_01/</div>
        <div>&nbsp;&nbsp;&nbsp;├── project_02/</div>
        <div>&nbsp;&nbsp;&nbsp;└── project_03/</div>
    `,
    'cat projects/project_01/info.txt': `
        <div>Project: Example Project 1</div>
        <div>Description: This is an example description of your project.</div>
        <div>Link: <a href="#">Project URL</a></div>
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
};

const invalidCommandResponse = 'command not found: ';

commandInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = commandInput.value.trim();
        const response = commands[input] || `<div>${invalidCommandResponse}${input}</div>`;
        output.innerHTML += `<div>${response}</div>`;
        commandInput.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});
