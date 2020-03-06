const Discord = require('discord.js');
const bot = new Discord.Client();
 
const token = 'NjM1MTg0MzU5NDk3NzkzNTU5.XmLX_g.iZbSOqVxuF-Bx5yC4sxu3FJU3eI';
 
bot.on('ready', ()=>{
    console.log('This bot is online');
    bot.user.setActivity('I Love You, Colonel Sanders! A Finger Lickin’ Good Dating Simulator');
});
 
var sanders;
 
bot.on('message', msg=>{
    if (msg.content.includes ("hungry")) {
        sanders = Math.floor(Math.random()*4);
        {
            sanders = Math.floor(Math.random()*4);
            };
        if (sanders === 0){
            msg.channel.send('If you need to eat then buy my famous Finger Lickin’ Good Chicken at your local KFC https://www.kfc.com/');
          
        };
            
        if (sanders === 1){
            msg.channel.send('If you need something to fill you up then try my Mac & Cheese $5 Fill Up from your local KFC https://www.kfc.com/ ');
        
        };
        
        if (sanders === 2){
            msg.channel.send('Being the loveable homestyle chef I am I recommend my Mashed Potatoes and Gravy from your local kfc to satisfy that hunger https://www.kfc.com')
            
        }; 
               
    };
    sanders = null
    //This should break any potential for a rapid fire spam loop. Place it at the end of wherever you use RNG.
});
 
bot.on('message' , msg=>{
    if (msg.content.includes ("failure")){
        sanders = Math.floor(Math.random()*2);
        
        if (sanders === 0){
        msg.channel.send('One has to remember that every Failure can be a stepping stone to something better');
        };
        if (sanders === 1){
            msg.channel.send( "The only Failure here is your inability to purchase my Finger Lickin' Good KFC https://www.kfc.com/ ");
        };
    };
});
 
bot.on('message' , msg=>{
    if (msg.content.includes ("chicken")){
        sanders = Math.floor(Math.random()*2);
 
        if (sanders == 0){
        msg.channel.send('My, my I hope you’re talking about my world famous Original Recipe® Chicken! Now located at your local KFC');                
    };
    if (sanders === 1){
        msg.channel.send('You know Chicken was the name of my first dog')
    };
  };
});
 
bot.on('message' , msg=>{
    if (msg.content.includes("disgusting")){
        sanders = Math.floor(Math.random()*2);
 
        if(sanders === 0){
        msg.channel.send('You better not be talking shit about my Kentucky Fried Chicken or else I’ll Kentucky Fry you.');
    };
    if(sanders === 1){
        msg.channel.send('The only thing here Disgusting are Furries unless one of you is a Chicken Furry which in that case youre the perfect advertisement tool and I love advertisement!')
    };
};
});
 
bot.login(process.env.'NjM1MTg0MzU5NDk3NzkzNTU5.XmLX_g.iZbSOqVxuF-Bx5yC4sxu3FJU3eI');
