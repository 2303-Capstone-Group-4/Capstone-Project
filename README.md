# Capstone-Project

# MVP

**Vision:** Learning game designed for anyone to learn about conversational language through OpenAI-provided information and quizzes in three tiers of difficulty. Game components built out in React to track progress through three tiers

  - Front-end (React):
    - [ ] Landing page with nav bar, Start button with input for language to learn, user character (Knight, Wizard, Troll). onClick => () => Game starts
    - [ ] User component with progress bar, health bar for "quiz battles", appears at all times and progress bar/health bar gets reset when new topic is selected at start of game / phase 1 begins after full health is lost
    - [ ] Map component (designed similar to a boardgame) with locations acting as information-centers and quiz-points
    -   [ ] Pop-up information-center: displays information needed to learn about tier of language and pass the next quiz (e.g. English equivalent of word being learned)
    -   [ ] Pop-up quiz-"battle": "Monster" avatar shows up to gamify quiz progress. Each time you answer a question correctly, animation plays with "attack" and monster's health bar decreases by 1/3. Once 3 questions are answered correctly, monster being defeated animation plays, next level of map component is   available for access
    
  - Back-end:
    - Game functionality
      - [ ] Database created with model for user (including health data, user image, user actions)
      - [ ] Database created with model for NPC (including health bar, image, actions)
    - OpenAI data
     - [ ] API call set up to incorporate learning topic input by user
     - [ ] API key and credentials set up to avoid individual user log-in, api call limit issues
     - [ ] Multiple api calls set up for data in different phases of game with standardized set of prompts (e.g. quiz prompt for end of map, general information prompt for milestones/learning points in map)

  
    
- **Bonus Features**
  - Topics
    - [ ] Can use OpenAI to explore any topic
      
  - Front-end:
    - [ ] Gaming framework incorporated with scrolling map (Game designed to simulate Pokemon-style gameplay, where user travels through map to gain knowledge and battles monster at end of map which involves quiz with all prior information involved.)
    - [ ] Unreal engine integration
    - [ ] Release game on Steam and the iOS app store (and make $$$), get bought out by Duolingo
          

## Views

- Landing page
- User component
- Map component
