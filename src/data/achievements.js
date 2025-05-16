export const achievementRules = [
    // Correct Score
    { title: 'Welcome Aboard!', type: 'correct', rank: 'bronze', correctNumber: 1, description: 'Started playing C2-D2', id: crypto.randomUUID() },
    { title: 'Padawan Learner', type: 'correct',rank: 'silver', correctNumber: 10, description: 'You guessed correctly 10 times.', id: crypto.randomUUID() },
    { title: 'Jedi Knight', type: 'correct',rank: 'gold', correctNumber: 40, description: 'You guessed correctly 40 times.', id: crypto.randomUUID() },
    { title: 'Grand Jedi Master', type: 'correct',rank: 'diamond', correctNumber: 100, description: 'You guessed correctly 100 times.', id: crypto.randomUUID() },
    { title: 'Sith Lord', type: 'correct',rank: 'diamond', correctNumber: 150, description: 'You guessed correctly 150 times.', id: crypto.randomUUID() },
    { title: 'Chosen One', type: 'correct',rank: 'diamond', correctNumber: 200, description: 'You guessed correctly 200 times.', id: crypto.randomUUID() },
    
    // Wrong Score
    { title: 'Protocol Malfunction', type: 'wrong', rank: 'bronze', wrongNumber:1, description: 'You made your first wrong guess.', id: crypto.randomUUID() },
    { title: 'Stormtrooper Accuracy', type: 'wrong', rank: 'silver', wrongNumber:10, description: 'You made 10 wrong guesses.', id: crypto.randomUUID() },
    { title: 'Mind Trick Victim', type: 'wrong', rank: 'silver', wrongNumber:20, description: 'You made 20 wrong guesses.', id: crypto.randomUUID() },
    { title: 'Turned to the Dark Side', type: 'wrong', rank: 'gold', wrongNumber:50, description: 'You made 50 wrong guesses.', id: crypto.randomUUID() },
    { title: 'Sith Apprentice', type: 'wrong', rank: 'diamond', wrongNumber:70, description: 'You made 70 wrong guesses.', id: crypto.randomUUID() },
    { title: 'Emperors Mistake', type: 'wrong', rank: 'diamond', wrongNumber:150, description: 'You made 150 wrong guesses.', id: crypto.randomUUID() },
    
    // Best Score
    { title: 'Youngling Instincts', type: 'best', rank: 'bronze', bestNumber: 3, description: 'You managed a streak of 3 correct guesses.', id: crypto.randomUUID() },
    { title: 'Lightsaber Precision', type: 'best', rank: 'silver', bestNumber: 6, description: 'You managed a streak of 6 correct guesses.', id: crypto.randomUUID() },
    { title: 'Jedi Intuition', type: 'best', rank: 'gold', bestNumber: 9, description: 'You managed a streak of 9 correct guesses.' , id: crypto.randomUUID() },
    { title: 'One With the Force', type: 'best', rank: 'diamond', bestNumber: 12, description: 'You managed a streak of 12 correct guesses.', id: crypto.randomUUID() },

    // Games Played
    { title: 'Joining the Rebellion', type: 'games', rank: 'silver', gamesNumber: 10, description: 'You played 10 games', id: crypto.randomUUID() },
    { title: 'Echoes on Hoth', type: 'games', rank: 'silver', gamesNumber: 30, description: 'You played 30 games', id: crypto.randomUUID() },
    { title: 'Knight of the Republic', type: 'games', rank: 'gold', gamesNumber: 75, description: 'You played 75 games', id: crypto.randomUUID() },
    { title: 'Master of the Order', type: 'games', rank: 'diamond', gamesNumber: 150, description: 'You played 150 games', id: crypto.randomUUID() },
    { title: 'Balance Restored', type: 'games', rank: 'diamond', gamesNumber: 300, description: 'You played 300 games', id: crypto.randomUUID() }

];