# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Player ELO calculation explanation:

The function takes three arguments:

current_elo: the player's current ELO rating.
position: the player's position in the race (1 for first place, 2 for second place, and so on).

*num_players*: the total number of players in the race.
The function calculates the expected score based on the player's position using the formula 1.0 / (1.0 + 10.0**((num_players - position) / 400.0)), which is the probability of winning the race based on the player's position. It then calculates the new ELO rating using the formula current_elo + k * (position - expected_score), where k is the K-factor (which determines the impact of each game on the player's ELO rating), position is the player's position in the race, and expected_score is the probability of winning the race based on the player's position.