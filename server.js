const express = require('express')
const app = express()
const PORT = 8000

const colors = {
    'red': {
        'name': 'Red',
        'summary': 'The color of passion and energy. Red draws attention like no other color and radiates a strong and powerful energy that motivates us to take action. It is alos linked to sexuality and stimulates deep and intimate passion. Red is ubiquitously used to warn and signal caution and danger.' ,
        'symbolizes': 'Action, Strength, Energy, Passion' ,
        'effects': 'Attention, Motivates, Stimulates, Cautions',
        'positive': 'Sexuality, Courage, Desire, Confidence',
        'negative': 'Anger, Danger, Revenge, Aggression',
    },
    'orange':{
        'name': 'Orange',
        'summary': 'The color of enthusiasm and emotion. Orange exudes warthm and joy and is considered a fun color that provides emotional strength. It is optimistic and uplifting, adds spontaneity and positivity to life and it encourages social communication and creativity. It is a youthful and energetic color.' ,
        'symbolizes': 'Emotion, Youth, Optimism, Enthusiasm' ,
        'effects': 'Encourages, Uplifts, Stimulates, Communicate',
        'positive': 'Spontaneity, Creativity, Warmth, Positivity',
        'negative': 'Exhibitionism, Superficial, Impatient, Domination',
    },
    'yellow':{
        'name': 'Yellow',
        'summary': 'The color of happiness and optimism. Yellow is a cheerful and energetic color that brings fun and joy to the world. It makes learning easier as it affects the logical part of the brain, stimulating mentality and perception. It inspires thought and curiosity and boosts enthusiasm and confidence' ,
        'symbolizes': 'Happiness, Optimism, Positivity, Intellect' ,
        'effects': 'Clarifies, Inspires, Amuses, Energizes',
        'positive': 'Creativity, Perception, Mentality, Warmth',
        'negative': 'Cowardice, Deception, Egoism, Caution',

    },
    'green':{
        'name': 'Green',
        'summary': 'The color of harmony and health. Green is a generous, relaxing color that revitalizes our body and mind. It balances our emotions and leaves us feeling safe and secure. It also gives us hope, with promises of growth and prosperity, and it provides a little bit of luck to help us along the way.',
        'symbolizes': 'Harmony, Safety, Growth, Health' ,
        'effects': 'Revitalizes, Balances, Relaxes, Encourages',
        'positive': 'Generosity, Hope, Prosperity, Luck',
        'negative': 'Judgemental, Envy, Materialism, Inexperience',
    },
    'turquoise':{
        'name': 'Turquoise',
        'summary': 'The color of calmness and clarity. Turquoise stabilizes emotions and increases empathy and compassion. It emits a cool calming peace, gives us a boost of positive mental energy that improves concentration and clarifies our mind, and creates a balance that clears the path to spiritual growth.',
        'symbolizes': 'Compassion, Calmness, Clarity, Communicate' ,
        'effects': 'Balances, Clarifies,Calms, Stabilizes',
        'positive': 'Concentrate, Growth, Peace, Empathy',
        'negative': 'Narcissism, Stress, Secrecy, Boastfulness',
    },
    'blue':{
        'name': 'Blue',
        'summary': 'The color of trust and loyalty. Blue has a calming and relaxing effect on our psyche, that gives us peace and makes us feel confident and secure. It dislikes confrontation and too much attention, but it is an honest, reliable and responsible color and you can always count on its support.',
        'symbolizes': 'Security, Trust, Loyalty, Responsible' ,
        'effects': 'Protects, Calms, Relaxes, Supports',
        'positive': 'Confidence, Peace, Honesty, Reliability',
        'negative': 'JConservative, Passive, Depressed, Predictable',
    },
    'purple':{
        'name': 'Purple',
        'summary': 'The color of spirituality and imagination. Purple inspires us to divulge our innermost thought, which enlightens us with wisdom of who we are and encourages spiritual growth. It is often associated with royalty and luxury, and its mystery and magic sparks creative fantasies.',
        'symbolizes': 'Spirituality, Mystery, Royalty, Imagination' ,
        'effects': 'Enlightens, Inspires, Uplifts, Encourages',
        'positive': 'Compassion, Fantasy, Wisdom, Creativity',
        'negative': 'Sensitive, Vigilant, Immature, Emotional',
    },
    'pink':{
        'name': 'Pink',
        'summary': 'The color of love and compassion. Pink is kind and comforting, full of sympathy and compassion, and makes us feel accepted. Its friendly, playful spirit calms and nurtures us, bringing joy and warmth into our lives. Pink is also a feminine and intuitive color that is bursting with pure romance.',
        'symbolizes': 'Compassion, Love, Femininity, Playfulness' ,
        'effects': 'Sympathizes, Calms, Nurtures, Comforts',
        'positive': 'Kindness, Warmth, Romance, Intuition',
        'negative': 'Emotional, Timid, Immature, Unconfident',
    },
    'brown':{
        'name': 'Brown',
        'summary': 'The color of stability and reliability. Brown is dependable and comforting. Agreat counselor and friend full of wisdom. You can count on its help if you need an honest opinion, support and protection. It stabilizes us, helps us stay grounded and inspires us to appreciate the simple things in life.',
        'symbolizes': 'Reliability, Stability, Honesty, Comfort' ,
        'effects': 'Simplifies, Protects, Grounds, Stabilizes',
        'positive': 'Appreciation, Support, Wisdom, Dependable',
        'negative': 'Boring, Dull, Timid, Predictable',
    },
    'black':{
        'name': 'Black',
        'summary': 'The color of power and sophistication. Black is an incredibly strong and intimidating color that exudes authority and makes us fell secure and protected. Often seenat formal and prestigious events, this mysterious marvel arouses and seduces our senses with its elegance and sexiness.',
        'symbolizes': 'Protection, Power, Elegance, Sophisticated' ,
        'effects': 'Mystifies, Seduces, Secures, Intimidates',
        'positive': 'Formality, Strength, Prestige, Authority',
        'negative': 'JDepression, Sadness, Pessimism, Dominance',
    },
    'gray':{
        'name': 'Gray',
        'summary': 'The color of compromise and control. Gray is neutral, conservative and unemotional. It is practically solid as a rock, making it incredibly stable, reliable and calming. It has a peaceful, relaxing and soothing presence. Gray avoids attention but offers mature, insightful advice to anyone who asks.',
        'symbolizes': 'Compromise, Neutral, Control, Practical' ,
        'effects': 'Stabilizes, Calms, Relaxes, Soothes',
        'positive': 'Reliability, Maturity, Intellect, Conservative',
        'negative': 'Pessimistic, Sad, Indecisive, Unemotional',
    },
    'white':{
        'name': 'White',
        'summary': 'The color of purity and innocence. White is a true balance of all colors. It is associated with cleanliness, simplicity and perfection. It loves to make others feel good and provides hope and clarity by refreshing and purifying the mind. It also promotes open-mindedness and self-reflection.',
        'symbolizes': 'Cleanliness, Purity, Innocence, Perfection' ,
        'effects': 'Refreshes, Balances, Purifies, Simplifies',
        'positive': 'Goodness, Hope, Clarity, Openness',
        'negative': 'Boring, Cold, Empty, Distant',
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/css/style.css', (request, response)=>{
    response.sendFile(__dirname + '/css/style.css')
})

app.get('/js/main.js', (request, response)=>{
    response.sendFile(__dirname + '/js/main.js')
})

app.get('/api/:name', (request, response)=>{
    const colorName = request.params.name.toLowerCase()
    if(colors[colorName]){
        response.json(colors[colorName])
    }
   
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on Port ${PORT}. You better go catch it!`)
})

// checking out the github.
// The readMe was made on github