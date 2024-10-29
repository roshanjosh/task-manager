# Task Manager Pro

A modern, responsive task management application built with React and Tailwind CSS. Features include dark mode, internationalization, task management with CRUD operations, and real-time updates.

## 🌟 Features

- 📱 Responsive design that works on desktop and mobile
- 🌓 Dark/Light theme support
- 🌍 Internationalization (English & French)
- ✨ Modern UI with smooth animations
- 📋 Complete task management (Create, Read, Update, Delete)
- 🔄 Real-time task updates
- 🧪 Comprehensive test coverage

## 🛠 Tech Stack

- React 18
- Tailwind CSS
- React Query for API calls
- Zustand for state management
- i18next for internationalization
- Jest & React Testing Library
- Framer Motion for animations
- MSW for API mocking

## 📥 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🧪 Testing

Run the test suite:
```bash
# Unit and component tests
npm test

# Coverage report
npm test -- --coverage

# Watch mode
npm test -- --watch
```

## 🌍 Internationalization

The app supports English and French languages. To add a new language:

1. Add a new translation file in `src/locales`
2. Import and configure the language in `src/config/i18n.js`

## 🚀 Deployment

The app is automatically deployed to Netlify on main branch updates.

To deploy manually:
```bash
npm run build
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components
├── features/         # Feature-based components and logic
├── hooks/           # Custom React hooks
├── locales/         # Translation files
├── pages/           # Page components
├── services/        # API and external services
├── store/           # State management
├── styles/          # Global styles and Tailwind config
├── tests/           # Test utilities and setup
└── utils/           # Helper functions
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

MIT License - see the [LICENSE](LICENSE) file for details