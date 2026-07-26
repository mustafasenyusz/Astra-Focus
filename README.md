# Astra Focus

> A priority-driven goal manager built to make daily planning calmer, clearer, and easier to maintain.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)

## Overview

Astra Focus is a frontend-focused mobile application for creating, prioritizing, and completing personal goals. I built it to practice scalable screen organization, typed state management, persistent client data, and intentional mobile UI hierarchy.

## Highlights

- Create goals with critical, medium, or low priority
- Separate active and completed goals
- Persist user and goal data between sessions
- Navigate through a file-based Expo Router structure
- Keep application state predictable with focused Redux slices
- Use TypeScript models for safer goal and user data

## Tech stack

| Area | Technology |
| --- | --- |
| Mobile UI | React Native, Expo |
| Navigation | Expo Router |
| Language | TypeScript |
| State | Redux Toolkit, React Redux |
| Persistence | Redux Persist, AsyncStorage |

## Architecture

```text
app/       screens and file-based routes
store/     goal and user slices, persisted store
assets/    application icons and images
constants/ shared theme values
```

The app keeps interface code and global data flow separate. Goal operations live in a dedicated slice, while persistence restores the user experience after the app restarts.

## Run locally

```bash
git clone https://github.com/mustafasenyusz/Astra-Focus.git
cd Astra-Focus
npm install
npx expo start
```

## Next steps

- Add component and state tests
- Improve form validation and empty states
- Expand accessibility and keyboard support
- Explore optional cloud synchronization

## Developer

Built by [Mustafa Şenyüz](https://github.com/mustafasenyusz), a frontend-focused developer expanding into backend and database architecture.
