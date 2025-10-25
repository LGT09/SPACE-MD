require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAHZYWVvp+2OXUgQAAG8HAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGAEvgBEdschFlIuooOjGPpRUAaXcLAptesJ*38Cenp6H3dlenoqsjMyTJ8+p76AoSY0t3ILpd1BRcoMMd0fWVhhMwayJY0xBHyDIIJgC7NruzDVsWTcvPZ6X9NLRxPqqmANpgzanKw8F5sfD8po5L+DRB1Vzykj0m4KBtJ9o1NmaK2Q5QSxwcXS6VmLt8Lv20PqlS87aiqLJZFO+gEdXERJKikSvUpxjCjMLtx4k9IvwvfmWiw5EELb2Bbby2jqxzNd8SdOdZWztYchb9mqWDMzF1+BfInXzKkDo7Mod3pPDRhpnb6mNpHQZLo8TkxK5QIMR3AXRO*yaJAVGC4QLRlj7Zd4D7RYPobGkBz5YG8UgLPlt0Oz5FeXut6BYcme5N1FxeA64rwGHi2XjBrPAXWv5gue2gp+Z7CiQRHehdDaHPm*KWFDb8738FbhHP7Ry+T+8L4yDNvcldo4uYbFS4gqvltn4GNw3cDUh1+Nq0xOWo+HCNqWvwVfe9E3r8duxGUL5snirlsXSPLC0Fy7n4t5vZjIXVawO5xv9Ez5kDf0dyplbaKZm2aIcugP9IMW9ZO2mpB3FZv1mvI7MvYg2622vt8t5+8Bp6UowBzTfxknm23N1DP2G3MybHRhjhAq0vh3VK0lenhNdcLtAYMo*+oDihNSMQkbKoosJY6EPILptcUQxe9ILhgZnjMJXdam*rrHcq6J8djL0Pbbu9vy8yaiLRl4zLzTFc15AH1S0jHBdY2SSmpW0dXBdwwTXYPrnX31Q4Ff2vriu3ZDvg5jQmgVFU2UlRB9b*biEUVQ2Bdu2RaR2B0zBlPsMY8ZIkdQdj00BaZSSG1ZTyGowjWFW458TYooRmDLa4J+uVUvUEb8*hJIqSSbog*y5EILAFAiToShxnCjxojgVhD*qb*euLKyqbwVmoA+yZ9pIFkfciJeHsizxXV4XfvzE15VDmEGS1WAKVK+d31Cg6qv8ItXRfK4EiaImCvic50MY78TXatLbr92Vsz+p+1pG1fiWHjbV2UmE8dwPNWQEaRSM62twf*mHImAKxDjIy0vdtoLFWQz5huK3qXA6oPsrDuQBXfUCSRo0wgrORr18FHmTZiGPmNZsI2sgF8pgMC6yvSoceF7gidqejshSlJeuG8I3EuFfm+liJVCxMoPUT*TFknlX25J3uTlkBAtc5PUGE8+L00TUIqravgrdrRRfnCM5HfRzWDHnzE1sIluqQHxDce1mAh1yf5fs0zLZj6eKPMXUbar7jQl+Or+A3f7+e3PvwDuBcY*+LzV+vCX*5seTUnrZRfPPRn7PqBdCfBrtdXh4W7jN5sLfh5vdIjRWJytzwOPxVx9UGWRxSfPugSsQLQkCfUDLplPsoojL3zRTFW6h*DBrBmumfLrAJzmuGcwrMOXFCT+UhpwgvGd5tKxMWKdgCop8ODt1im6VqtoyyD48BZTu0*w1ePwNUEsBAhQDFAAACAgAdlhZW+n7Y5dSBAAAbwcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAegQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '263780078177',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'LGT09,
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || '12345678',
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || '12345678',
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '8131287037:AAGrKTbHjmqjQmTtGwLl2Ut9uCr9rggij1g',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '8456978693',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
