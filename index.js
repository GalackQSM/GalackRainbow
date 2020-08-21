const { Client, version } = require('discord.js');
const chalk = require('chalk');
const { token, serverID, roleID, interval } = require('./config.json')
const bot = new Client();

bot.on("ready", async() => {
  console.log("");                                   
  console.log((chalk.cyan(`                             #####                                     ######                                       `)));
  console.log((chalk.cyan(`                            #     #   ##   #        ##    ####  #    # #     #   ##   # #    # #####   ####  #    # `)));
  console.log((chalk.cyan(`                            #        #  #  #       #  #  #    # #   #  #     #  #  #  # ##   # #    # #    # #    # `)));
  console.log((chalk.cyan(`                            #  #### #    # #      #    # #      ####   ######  #    # # # #  # #####  #    # #    # `)));
  console.log((chalk.cyan(`                            #     # ###### #      ###### #      #  #   #   #   ###### # #  # # #    # #    # # ## # `)));
  console.log((chalk.cyan(`                            #     # #    # #      #    # #    # #   #  #    #  #    # # #   ## #    # #    # ##  ## `)));
  console.log((chalk.cyan(`                             #####  #    # ###### #    #  ####  #    # #     # #    # # #    # #####   ####  #    # `)));
  console.log("");                                  
  console.log((chalk.yellow(`                                                               Crée par GalackQSM#7926 !`)));  
  console.log((chalk.yellow(`                                                                © 2020 GalackQSM, Inc.`))); 
  console.log("");                                   
  console.log((chalk.red(`                                                         Discord: https://discord.gg/cAmtjYj`)));   
  console.log((chalk.red(`                                                       Twitter: https://twitter.com/Galack_QSM`)));   
  console.log((chalk.red(`                                                        Github: https://github.com/GalackQSM`)));   
  console.log("");                                  
  console.log(`[ Client ] ${bot.user.tag} connecté avec succès à l'API Discord`);

    let guild = bot.guilds.cache.get(serverID)
    if(!guild) throw `[ Erreur ] Le bot n'a pas été trouvé sur le serveur avec l'ID: ${serverID}`
    let role = guild.roles.cache.find(u => u.id === roleID) 
    if(!role) throw `[ Erreur ] Le rôle n'a pas été trouvé sur le serveur avec le nom ${guild.name}`
    if(interval < 30000) console.log(`\nAttention vous avez mis le temps trop rapidement, vous pouvez avoir des problèmes.`) 
    setInterval(() => {
        role.edit({color: 'RANDOM'}).catch(err => console.log(`[ Erreur ] Une erreur s'est produite lors du changement de rôle.`));
    }, interval)
})
bot.login(token)
