import random

# Initial game state
ship_position = 3  # Player's ship starts in the middle position (1 to 5)
enemy_position = random.randint(1, 5)  # Enemy starts at a random position (1 to 5)
game_active = True

def display_game_state():
    # Display the positions of the ship and enemy
    print("\nGame State:")
    print("Ship Position: ", "⬤" * ship_position)
    print("Enemy Position: ", "⬤" * enemy_position)
    print()

while game_active:
    display_game_state()
    
    # Get user input
    action = input("Enter a command (left, right, shoot): ").strip().lower()
    
    # Process the action
    if action == "left":
        if ship_position > 1:
            ship_position -= 1
        else:
            print("You can't move left anymore!")
    elif action == "right":
        if ship_position < 5:
            ship_position += 1
        else:
            print("You can't move right anymore!")
    elif action == "shoot":
        if ship_position == enemy_position:
            print("You hit the enemy! You win!")
            game_active = False
        else:
            print("You missed! The enemy is still there.")
            # Optionally, the enemy can move after each missed shot
            enemy_position = random.randint(1, 5)
    else:
        print("Invalid command. Please enter 'left', 'right', or 'shoot'.")
    
    # Game over condition can be added (e.g., after a certain number of turns)

print("Game over!")
