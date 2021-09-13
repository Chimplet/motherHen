const { glob } = require('glob');
const { promisify } = require('util');
const globPromise = promisify(glob)

module.exports = async (client) => {
    const commandFiles = await globPromise(`${process.cwd()}/Commands/*/*.js`);

    commandsArray = [];

    commandFiles.map(async (commandFile) => {
        const command = await require(commandFile)

        if (!command.name) return;
        if (command.Perms) command.defaultPermission = false;

        const C = commandFile.split("/");
        console.log(`${command.name.toUpperCase()} has been loaded from : ${C[C.length - 2]}`)

        await client.commands.set(command.name, command);
        commandsArray.push(command);

    })

    client.on('ready', async () => {
        const MainGuild = await client.guilds.cache.get('886808161514835988');
    
        MainGuild.commands.set(commandsArray).then((command) => {
          const Roles = (commandName) => {
            const cmdPerms = commandsArray.find(
              (c) => c.name === commandName
            ).Perms;
    
            if (!cmdPerms) return null;
    
            return MainGuild.roles.cache.filter(
              (r) => r.permissions.has(cmdPerms) && !r.managed
            );
          };
    
          const fullPermissions = command.reduce((accumulator, x) => {
            const roles = Roles(x.name);
            if (!roles) return accumulator;
    
            const permissions = roles.reduce((a, v) => {
              return [...a, { id: v.id, type: 'ROLE', permission: true }];
            }, []);
    
            return [...accumulator, { id: x.id, permissions }];
          }, []);
    
          MainGuild.commands.permissions.set({ fullPermissions });
        });
      });
};