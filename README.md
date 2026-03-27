# GrapherWeb

A full-stack web application for creating, editing, and visualizing scatter plot data with advanced analysis tools including trendlines, multi-series support, and real-time data editing.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [State Management](#state-management)
- [Deployment](#deployment)

---

## Overview

GrapherWeb is a React + TypeScript frontend that pairs with a Spring Boot backend to let users build interactive scatter charts from raw spreadsheet data. Users can manage multiple data series, configure axes, apply trendlines with automatic or manual regression, and share graphs via thumbnail previews.

---

## Features

### Authentication
- **Registration** — Create an account with username, email, and personal details
- **Login** — Secure JWT-based login that persists across sessions
- **Protected Routes** — All graph operations require a valid token
- **Session Management** — Auth state is stored and rehydrated on page load

---

### Graph Management
- **Create Graphs** — Instantly spin up a new graph with a default data scaffold
- **Graph Library** — Browse all your graphs with auto-generated thumbnail previews
- **Edit Graphs** — Full in-place editing with real-time sync to the backend
- **Auto Snapshots** — Graphs automatically capture a PNG preview on exit using `html-to-image`, displayed as thumbnails in the library
- **Delete Graphs** — Remove graphs you no longer need

---

### Data Entry (Spreadsheet)
- **Handsontable Integration** — A fully interactive spreadsheet editor for entering and editing raw data
- **Dynamic Rows & Columns** — Add or remove rows and columns on the fly using the `+` controls
- **Cell Editing** — Click any cell to edit; changes immediately sync to the graph visualization
- **Header Row** — The first row is treated as column headers for axis mapping

---

### Data Visualization (Scatter Chart)
- **Recharts Scatter Chart** — Renders data as an interactive X/Y scatter plot
- **Multi-Series Rendering** — Each series is rendered as a distinct scatter layer with its own color
- **Live Preview** — Chart updates in real time as data or settings change
- **Responsive Sizing** — Chart fills its container and adapts to panel resizes
- **Tooltip** — Hover over data points to see exact X/Y values

---

### Series Management
- **Multiple Series** — Add as many data series as needed to a single graph
- **Column Mapping** — Map any spreadsheet column to the X or Y axis using column letter (A, B, C...)
- **Custom Titles** — Give each series a descriptive name
- **Custom Colors** — Pick a unique color per series using the color picker
- **Add / Remove** — Easily add new series or remove existing ones via the accordion panel

---

### Axis Configuration
- **X-Axis Settings** — Customize label text, data range, and display options
- **Y-Axis Settings** — Independent configuration separate from the X-axis
- **Grid Settings** — Toggle and style the background grid
- **Axis Labels** — Add descriptive text labels to both axes

---

### Trendline Analysis
- **Linear Trendlines** — Add a least-squares linear regression line to any series
  - Automatically calculates gradient (slope) and y-intercept from the series data
  - Displays the line using Recharts `ReferenceLine` with `segment` for exact positioning
  - Override gradient and y-intercept manually for custom lines
  - **Recalculate** button resets to the auto-calculated values at any time
- **Series Selection** — Each trendline is linked to a specific series via a combobox selector
- **Custom Colors** — Apply a custom stroke color to each trendline
- **Overflow Handling** — Trendlines are clipped to the chart bounds using `ifOverflow="hidden"`
- **Polynomial Trendlines** — Planned for a future release

---

### Styling & UI
- **Color Customization** — Per-series and per-trendline color pickers
- **Resizable Panels** — Drag the divider between the data sheet and the chart to resize
- **Accordion Settings** — Collapsible sections for Series, Axes, Grid, and Analysis
- **Responsive Layout** — Adapts to desktop and tablet screen sizes
- **Tailwind CSS** — Utility-first styling throughout

---

## Tech Stack

### Frontend
| Package | Version | Purpose |
|---|---|---|
| React | 19.2.0 | UI library |
| TypeScript | 5.9.3 | Type safety |
| Vite | 7.3.1 | Build tool & dev server |
| React Router | 7.13.1 | Client-side routing |

### Charting & Data
| Package | Version | Purpose |
|---|---|---|
| Recharts | 3.7.0 | Scatter chart & reference lines |
| Handsontable | 16.2.0 | Spreadsheet data editor |
| html-to-image | 1.11.13 | Graph snapshot PNG generation |

### UI & Styling
| Package | Version | Purpose |
|---|---|---|
| Tailwind CSS | 4.2.1 | Utility-first CSS |
| shadcn/ui | 4.0.5 | Component library |
| Lucide React | 0.577.0 | Icons |
| react-colorful | 5.6.1 | Color picker |
| react-resizable-panels | 4.7.1 | Resizable panel layouts |

### Utilities
| Package | Version | Purpose |
|---|---|---|
| Zod | 4.3.6 | Schema validation |
| Lodash | 4.17.23 | Utility functions |
| clsx + tailwind-merge | latest | Class name helpers |

### Backend (separate repo)
- **Spring Boot** 4.0.3 — REST API
- **Spring Security** — JWT authentication
- **Spring Data JPA** — ORM with PostgreSQL
- **MapStruct** — DTO mapping
- **Lombok** — Boilerplate reduction
- **PostgreSQL** (Supabase) — Database

---

## Project Structure

```
grapherWeb/
├── src/
│   ├── components/
│   │   ├── graph/
│   │   │   ├── grid/
│   │   │   │   ├── Grid.tsx          # Recharts scatter chart
│   │   │   │   └── Trendlines.tsx    # Trendline overlay components
│   │   │   ├── settings/
│   │   │   │   ├── Settings.tsx      # Accordion settings sidebar
│   │   │   │   ├── Series.tsx        # Series management panel
│   │   │   │   ├── Analysis.tsx      # Trendline analysis panel
│   │   │   │   └── Axes.tsx          # Axis configuration panel
│   │   │   └── sheet/
│   │   │       └── Sheet.tsx         # Handsontable spreadsheet
│   │   ├── graphs/
│   │   │   └── Thumbnail.tsx         # Graph preview card
│   │   └── ui/                       # shadcn/ui components
│   ├── hooks/
│   │   ├── useGraph.ts               # Graph context hook
│   │   └── useAuth.ts                # Auth context hook
│   ├── context/
│   │   ├── GraphProvider.tsx         # Graph state & sync
│   │   └── AuthProvider.tsx          # Auth state management
│   ├── models/
│   │   └── API/
│   │       └── APITypes.ts           # TypeScript API types
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── Signup.tsx
│   │   ├── Graphs.tsx                # Graph library
│   │   └── Graph.tsx                 # Graph editor
│   ├── fetchers/
│   │   └── fetchers.ts               # API fetch functions
│   └── constants/
│       └── colors.ts                 # Default series colors
├── .env                              # Local environment variables (gitignored)
├── vite.config.ts
└── package.json
```

---

## Getting Started

### Prerequisites
- Node.js 20+
- The GrapherBackend running locally on port `8080`

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/grapherWeb.git
cd grapherWeb

# Install dependencies
npm install
```

### Running Locally

```bash
# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Building for Production

```bash
npm run build
```

---

## Environment Variables

Create a `.env` file in the root of the project:

```env
VITE_API_URL=http://localhost:8080
```

| Variable | Description | Default |
|---|---|---|
| `VITE_API_URL` | Base URL of the Spring Boot backend | `http://localhost:8080` |

For production (Railway), set:
```
VITE_API_URL=https://your-backend.up.railway.app
```

---

## API Reference

All requests (except login/signup) require the `Authorization: Bearer <token>` header.

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/users/signup` | Register a new user |
| `POST` | `/api/users/login` | Login and receive a JWT |
| `GET` | `/api/graph/` | Fetch all graphs for the current user |
| `POST` | `/api/graph/create` | Create a new graph |
| `GET` | `/api/graph/{id}` | Fetch a single graph by ID |
| `PATCH` | `/api/graph/{id}` | Update an existing graph |
| `DELETE` | `/api/graph/{id}` | Delete a graph |

---

## State Management

### AuthProvider
Manages authentication state globally:
- Stores the JWT token and user info
- Exposes `login`, `logout`, and `user` via context
- Persists auth state across page refreshes

### GraphProvider
Manages the active graph being edited:
- Holds the full graph object in state (data, series, trendlines, axes, styling)
- Exposes `graph` and `updateGraph` via `useGraph` hook
- `updateGraph` does a partial merge and syncs to the backend via `PATCH`
- Snapshot is captured on unmount and saved back to the backend

---

## Deployment

The app is deployed on **Railway** with two services from the same monorepo:

### Frontend Service
- **Build command**: `npm run build`
- **Start command**: `npm run preview`
- **Root directory**: `grapherWeb/`
- **Environment variable**: `VITE_API_URL=https://your-backend.up.railway.app`

### Backend Service
- **Root directory**: `grapher/`
- **Environment variables**:

| Variable | Description |
|---|---|
| `SPRING_PROFILES_ACTIVE` | Set to `prod` |
| `JWT_SECRET` | Secret key for signing JWTs |
| `SPRING_DATASOURCE_URL` | PostgreSQL connection string |
| `SPRING_DATASOURCE_USERNAME` | Database username |
| `SPRING_DATASOURCE_PASSWORD` | Database password |
| `FRONTEND_URL` | Frontend Railway URL for CORS |
