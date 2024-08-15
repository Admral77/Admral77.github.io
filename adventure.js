// adventure.js
const adventure = (() => {
    let state = {
        currentRoom: 'start',
        inventory: [],
    };

    const rooms = {
        'start': {
            description: "You are in a dark forest. There are paths leading north and east.",
            options: [
                { command: 'go north', nextRoom: 'cabin', description: "You see a small cabin in the distance." },
                { command: 'go east', nextRoom: 'river', description: "You arrive at a calm river." }
            ]
        },
        'cabin': {
            description: "You are in front of a wooden cabin. It looks old and abandoned.",
            options: [
                { command: 'enter cabin', nextRoom: 'insideCabin', description: "Inside the cabin, you find a dusty old book." },
                { command: 'go back', nextRoom: 'start', description: "You are back in the dark forest." }
            ]
        },
        'insideCabin': {
            description: "You are inside the cabin. There is a book on the table.",
            options: [
                { command: 'take book', nextRoom: 'insideCabin', description: "You take the book. It might be useful later." },
                { command: 'go back', nextRoom: 'cabin', description: "You are back outside the cabin." }
            ]
        },
        'river': {
            description: "You are at the river. The water is clear and you see fish swimming.",
            options: [
                { command: 'go back', nextRoom: 'start', description: "You return to the dark forest." }
            ]
        }
    };

    const displayRoom = (room) => {
        const roomData = rooms[room];
        let response = `<div>${roomData.description}</div>`;
        roomData.options.forEach(option => {
            response += `<div> - ${option.command}</div>`;
        });
        return response;
    };

    const handleCommand = (command) => {
        const currentRoom = state.currentRoom;
        const roomData = rooms[currentRoom];
        const option = roomData.options.find(opt => opt.command === command);

        if (option) {
            state.currentRoom = option.nextRoom;
            return displayRoom(state.currentRoom);
        } else {
            return `<div>Unknown command: ${command}</div>`;
        }
    };

    return {
        start: () => {
            return displayRoom(state.currentRoom);
        },
        handleCommand: (command) => {
            return handleCommand(command);
        }
    };
})();
