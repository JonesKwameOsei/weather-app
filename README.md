# 🌦️ Weather Forecast App

A sleek, responsive weather application that provides real-time weather information for any city worldwide. Built with HTML, CSS, and vanilla JavaScript.

![alt text](./weather-app/src/assets/img/image.png)

## ✨ Features

- 🔍 Search for weather by city name
- 🌡️ Display current temperature, feels like, humidity, and wind speed
- 🖼️ Dynamic weather icons that change based on current conditions
- 🌓 Light/dark theme toggle
- 📱 Fully responsive design for all device sizes
- 💾 Remembers your last searched city
- ⚡ Fast loading and minimal resource usage

## 🚀 Live Demo

Check out the live demo: [Weather Forecast App](https://weather-app-git-main-jones-oseis-projects.vercel.app/)

## 🛠️ Technologies Used

- HTML5
- CSS3 (with custom properties for theming)
- Vanilla JavaScript (ES6+)
- [Font Awesome](https://fontawesome.com/) for icons
- [OpenWeatherMap API](https://openweathermap.org/api) for weather data
- [Vite](https://vitejs.dev/) for build tooling
- [Vercel](https://vercel.com/) for deployment

## 📋 Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn
- OpenWeatherMap API key

## 🔧 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a file named `.env` in the root directory with the following content:

```
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

Replace `your_openweathermap_api_key` with your actual API key.

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Build for production**

```bash
npm run build
# or
yarn build
```

## 🎯 Project Structure

```
weather-app/
├── public/            # Static assets
├── src/               # Source files
│   ├── main.js        # Main JavaScript file
│   └── style.css      # Styles
├── index.html         # Entry HTML file
├── .env               # Environment variables (not tracked by git)
├── .env.example       # Example environment variables
├── .gitignore         # Git ignore file
├── package.json       # Project metadata and dependencies
└── vite.config.js     # Vite configuration
```

## 🧩 API Usage

This app uses the OpenWeatherMap API to fetch weather data. You will need to [create an account](https://home.openweathermap.org/users/sign_up) and obtain an API key to use this application.

## 🌟 Features in Detail

### Dynamic Weather Icons

The app displays different icons based on the current weather conditions:

- ☀️ Clear sky
- ⛅ Partly cloudy
- ☁️ Cloudy
- 🌧️ Rain
- 🌨️ Snow
- 🌫️ Mist/Fog

### Theme Switching

Users can toggle between light and dark themes with a simple click, and their preference is saved for future visits.

### Responsive Design

The interface adapts seamlessly to different screen sizes, from desktop monitors to small mobile devices.

## 📱 Mobile Support

The app is fully responsive and works well on all device sizes:
- Mobile phones
- Tablets
- Desktops
- Large screens

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any improvements or bug fixes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is not licensed. Feel free to use, modify, and distribute it as you see fit.

## 👏 Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API
- [Font Awesome](https://fontawesome.com/) for the icons
- [Google Fonts](https://fonts.google.com/) for the typography
- [Vercel](https://vercel.com/) for hosting the application
- [Font Awesome](https://fontawesome.com/) for the icons
- [Emojipedia](https://emojipedia.org/) for the emojis

---

Author: [Jones Osei](jones.osei"hotmail.com)