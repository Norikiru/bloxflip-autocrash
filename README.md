<h1 align="center">bloxflip-autocrash</h1>
<p align="center">Bloxflip crash automation using the martingale strategy.<br>Earn robux passively while you sit back!</p>

<p align="center"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/Norikiru/bloxflip-autocrash?color=yellow&style=flat-square"> <img alt="GitHub forks" src="https://img.shields.io/github/forks/Norikiru/bloxflip-autocrash?style=flat-square"> <img alt="GitHub issues" src="https://img.shields.io/github/issues/Norikiru/bloxflip-autocrash?style=flat-square"> <img alt="License" src="https://img.shields.io/badge/License-GPLv3-blue.svg?style=flat-square"></p>

## ⚠️ WARNING 
This automation software is against Bloxflip's [Terms of Service](https://bloxflip.com/terms "Terms of Service"), please use this at your own risk and I am not responsible for any terminated accounts.

## 💥 Features 
- 🤖 Automated martingale bot
- ☔ Rain Notifier
- 📊 Analytics
- 🏓 Discord Webhook integration
- 🤑 ITS FREE.

------------

### Prerequisites
- [NodeJS](https://nodejs.org/en/download/ "NodeJS v16.17.0^")
- [git](https://git-scm.com/downloads "git")

### Installation
- Open your terminal and clone the repository
```bash
git clone https://github.com/Norikiru/bloxflip-autocrash.git
```

- Open your Browser of choice, Go to [Bloxflip](http://bloxflip.com "Bloxflip") and then run the following code inside of the Dev Tools console. (it should copy onto your clipboard):
```js
copy(localStorage.getItem(`_DO_NOT_SHARE_BLOXFLIP_TOKEN`))
```

- Edit the config.example.json in the bot's folder with your desired configuration:
```jsonc
{
    "auth": "Paste your Bloxflip token here",
    "tries": 13, // How many times your balance will be divided by 2, I recommend 13.
    "webhook": {
        "enabled": false, // Set to false if your not going to use webhooks
        "link": "", // Discord webhook link
        "modules": {
            "rain": {
                "enabled": true, // Toggle rain notifications
                "os_notifs": true, // Toggle OS notifications
                "minimum": 1000, // Minimum rain prize to notify
                "ping_id": "" // User ID to ping
            },
            "analytics": true // Toggle hourly analytics
        }
    },
    // For debugging purposes only, dont touch if you dont know what you are doing
    "debugging": {
        "headless": true, // Make chromium headless
        "verbose": false, // Log info on what the code is doing
        "exitOnError": true, // Exit the script on error
        "ssOnError": false // Screenshot the page on errors
    }
}
```

- Rename `config.example.json` to `config.json`

- Install required dependencies:
```bash
npm i
```

- Run the bot! 🚀
```bash
npm run start
```

### 🆕 Updating
You must be in the root folder to be able to pull new commits
```bash
git pull
```

## 💖 Contributing
If you encounter any issues with the bot, feel free to give feedback on the issues page.
Feel free to fork the repo and do pull requests to help in maintaining the bot! PR's are always welcome.

## ⭐ Support
Support the project by giving the repository a star!
