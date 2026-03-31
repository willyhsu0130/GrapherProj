# Grapher

A full-stack web application for creating, editing, and visualizing scatter plot data with advanced analysis tools including trendlines, multi-series support, and real-time data editing.

Built with a **React + TypeScript** frontend and a **Spring Boot** REST API backend, deployed as a monorepo on Railway.
The application is live at: [https://grapherproj-production.up.railway.app/](https://grapherproj-production.up.railway.app/)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Backend Architecture](#backend-architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [State Management](#state-management)
- [Deployment](#deployment)

---

## Overview

Grapher lets users build interactive scatter charts from raw spreadsheet data. Users can manage multiple data series, configure axes, apply trendlines with automatic or manual regression, and browse their graphs via auto-generated thumbnail previews.

The backend is a layered Spring Boot REST API with Spring Security JWT authentication, Spring Data JPA persistence, MapStruct DTO mapping, and Lombok-reduced boilerplate — all backed by a PostgreSQL database hosted on Supabase.

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
| Recharts | 3.7.0 | Scatter chart & reference lines |
| Handsontable | 16.2.0 | Spreadsheet data editor |
| html-to-image | 1.11.13 | Graph snapshot PNG generation |
| Tailwind CSS | 4.2.1 | Utility-first CSS |
| shadcn/ui | 4.0.5 | Component library |
| Lucide React | 0.577.0 | Icons |
| react-colorful | 5.6.1 | Color picker |
| react-resizable-panels | 4.7.1 | Resizable panel layouts |
| Zod | 4.3.6 | Schema validation |
| Lodash | 4.17.23 | Utility functions |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| Spring Boot | 4.0.3 | Core framework, auto-configuration, embedded Tomcat |
| Spring Web | — | REST controllers, `@RequestMapping`, `@PatchMapping` |
| Spring Security | — | JWT filter chain, CORS config, route protection |
| Spring Data JPA | — | ORM via Hibernate, repository pattern, transactions |
| JJWT | 0.13.0 | JWT generation and validation |
| MapStruct | 1.5.5.Final | Compile-time type-safe DTO mapping |
| Lombok | — | Boilerplate reduction (`@Data`, `@Builder`, `@AllArgsConstructor`) |
| PostgreSQL | — | Relational database (hosted on Supabase) |
| HikariCP | — | Database connection pooling |
| Jackson | — | JSON serialization/deserialization |
| Java | 21 | Language |
| Maven | 3.x | Build tool |

---

## Backend Architecture

The backend follows a strict **layered architecture**:

```
Request → JwtFilter → SecurityFilterChain → Controller → Service → Repository → Database
```

### Spring Security

**`JwtFilter`** (`config/JwtFilter.java`) — A custom `OncePerRequestFilter` that:
- Intercepts every incoming request
- Reads the `Authorization: Bearer <token>` header
- Validates the token via `JwtService`
- Sets the authenticated principal in `SecurityContextHolder`
- Passes through unauthenticated requests to public endpoints

**`SecurityConfig`** (`config/SecurityConfig.java`) — Configures the Spring Security filter chain:
- Disables CSRF (stateless JWT API)
- Configures CORS with allowed origins driven by `${FRONTEND_URL}` env variable
- Permits `/api/users/login` and `/api/users/signup` publicly
- Requires authentication on all other routes
- Registers `JwtFilter` before `UsernamePasswordAuthenticationFilter`

### Spring Data JPA

Entities use standard JPA annotations:
- `@Entity` / `@Table` on `User` and `Graph`
- `@Id` / `@GeneratedValue` for auto-incremented primary keys
- `@ManyToOne` / `@OneToMany` for the User ↔ Graph relationship
- `@JoinColumn` for foreign key mapping
- `@Convert` with custom `AttributeConverter` implementations for complex fields stored as JSON strings

Custom JPA `AttributeConverter` classes handle serialization of rich nested objects:
- `SeriesListConverter` — `List<Series>` ↔ JSON
- `TrendlineListConverter` — `List<Trendline>` ↔ JSON
- `GridAxisConverter` — `GridAxis` ↔ JSON
- `GraphDataConverter` — `List<List<Object>>` ↔ JSON

### MapStruct

MapStruct generates type-safe mapper implementations at compile time via annotation processing — no runtime reflection. The `GraphMapper` converts between `Graph` JPA entities and `GraphResponse` DTOs.

The annotation processor order in `pom.xml` is critical — Lombok must run before MapStruct so generated getters/setters are available to the mapper:
1. `lombok`
2. `lombok-mapstruct-binding`
3. `mapstruct-processor`

### Service Layer

- **`UserService`** — User creation with password hashing, login validation, delegates token generation to `JwtService`
- **`GraphService`** — Graph CRUD, user-graph association, partial updates
- **`JwtService`** — Token generation and verification using JJWT, reads secret from `${JWT_SECRET}`

### Controllers

- **`UserController`** — `/api/users` — handles signup and login, returns `UserResponse` DTOs containing the JWT
- **`GraphController`** — `/api/graph` — authenticated CRUD; retrieves the current user from `SecurityContextHolder` to scope all operations to the authenticated user

---

## Project Structure

```
grapher/                              # Spring Boot backend
├── src/main/java/com/example/grapher/
│   ├── config/
│   │   ├── JwtFilter.java            # OncePerRequestFilter — JWT validation
│   │   └── SecurityConfig.java       # Spring Security filter chain & CORS
│   ├── controllers/
│   │   ├── UserController.java       # /api/users — signup & login
│   │   └── GraphController.java      # /api/graph — CRUD
│   ├── services/
│   │   ├── UserService.java
│   │   ├── GraphService.java
│   │   └── JwtService.java
│   ├── models/
│   │   ├── User.java                 # @Entity
│   │   ├── API/                      # Request/response DTOs
│   │   └── graph/
│   │       ├── Graph.java            # @Entity with @Convert fields
│   │       ├── Series.java
│   │       ├── Trendline.java
│   │       └── GridAxis.java
│   ├── mappers/
│   │   └── GraphMapper.java          # MapStruct mapper
│   ├── converters/                   # JPA AttributeConverters
│   │   ├── SeriesListConverter.java
│   │   ├── TrendlineListConverter.java
│   │   ├── GridAxisConverter.java
│   │   └── GraphDataConverter.java
│   └── repositories/
│       ├── UserRepository.java
│       └── GraphRepository.java
└── src/main/resources/
    ├── application.properties         # Shared config & env variable references
    └── application-dev.properties     # Local dev config (gitignored)

grapherWeb/                           # React + TypeScript frontend
├── src/
│   ├── components/
│   │   ├── graph/
│   │   │   ├── grid/
│   │   │   │   ├── Grid.tsx          # Recharts scatter chart
│   │   │   │   └── Trendlines.tsx    # Trendline overlay
│   │   │   ├── settings/
│   │   │   │   ├── Settings.tsx      # Accordion settings sidebar
│   │   │   │   ├── Series.tsx        # Series management
│   │   │   │   ├── Analysis.tsx      # Trendline management
│   │   │   │   └── Axes.tsx          # Axis configuration
│   │   │   └── sheet/
│   │   │       └── Sheet.tsx         # Handsontable spreadsheet
│   │   ├── graphs/
│   │   │   └── Thumbnail.tsx         # Graph preview card
│   │   └── ui/                       # shadcn/ui components
│   ├── hooks/
│   │   ├── useGraph.ts
│   │   └── useAuth.ts
│   ├── context/
│   │   ├── GraphProvider.tsx
│   │   └── AuthProvider.tsx
│   ├── models/API/
│   │   └── APITypes.ts
│   ├── pages/
│   │   ├── Login.tsx
│   │   ├── Signup.tsx
│   │   ├── Graphs.tsx
│   │   └── Graph.tsx
│   └── fetchers/
│       └── fetchers.ts
├── .env                              # Gitignored
└── vite.config.ts
```

---

## Getting Started

### Prerequisites
- Node.js 20+
- Java 21
- Maven 3.x
- PostgreSQL instance (local or Supabase)

### Backend

```bash
cd grapher

# Create application-dev.properties (gitignored) with your local credentials:
# JWT_SECRET=...
# SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/grapher
# SPRING_DATASOURCE_USERNAME=postgres
# SPRING_DATASOURCE_PASSWORD=yourpassword

./mvnw spring-boot:run
```

Backend runs on `http://localhost:8080`.

### Frontend

```bash
cd grapherWeb

npm install
npm run dev
```

Frontend runs on `http://localhost:5173`.

---

## Environment Variables

### Frontend (`.env` — gitignored)

| Variable | Description | Default |
|---|---|---|
| `VITE_API_URL` | Base URL of the Spring Boot backend | `http://localhost:8080` |

### Backend (`application-dev.properties` — gitignored)

| Variable | Description |
|---|---|
| `JWT_SECRET` | Secret key for signing JWTs |
| `SPRING_DATASOURCE_URL` | PostgreSQL JDBC connection string |
| `SPRING_DATASOURCE_USERNAME` | Database username |
| `SPRING_DATASOURCE_PASSWORD` | Database password |

---

## API Reference

All requests except login/signup require `Authorization: Bearer <token>`.

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/users/signup` | ❌ | Register a new user |
| `POST` | `/api/users/login` | ❌ | Login and receive a JWT |
| `GET` | `/api/graph/` | ✅ | Fetch all graphs for the current user |
| `POST` | `/api/graph/create` | ✅ | Create a new graph |
| `GET` | `/api/graph/{id}` | ✅ | Fetch a single graph by ID |
| `PATCH` | `/api/graph/{id}` | ✅ | Update an existing graph |
| `DELETE` | `/api/graph/{id}` | ✅ | Delete a graph |

---

## State Management

### AuthProvider
- Stores the JWT token and user info
- Exposes `login`, `logout`, and `user` via context
- Persists auth state across page refreshes

### GraphProvider
- Holds the full graph object in state (data, series, trendlines, axes, styling)
- Exposes `graph` and `updateGraph` via `useGraph` hook
- `updateGraph` does a partial merge and syncs to the backend via `PATCH`
- Snapshot is captured on unmount and saved back to the backend

---

## Deployment

Deployed on **Railway** as two services from the same monorepo.

### Frontend Service
- **Root directory**: `grapherWeb/`
- **Build command**: `npm run build`
- **Start command**: `npm run preview`
- **Environment variable**: `VITE_API_URL=https://your-backend.up.railway.app`

### Backend Service
- **Root directory**: `grapher/`
- **Build command**: `./mvnw clean install -DskipTests`
- **Start command**: `java -Dserver.port=$PORT $JAVA_OPTS -jar target/*.jar`

| Variable | Description |
|---|---|
| `SPRING_PROFILES_ACTIVE` | Set to `prod` |
| `JWT_SECRET` | Secret key for signing JWTs |
| `SPRING_DATASOURCE_URL` | PostgreSQL connection string |
| `SPRING_DATASOURCE_USERNAME` | Database username |
| `SPRING_DATASOURCE_PASSWORD` | Database password |
| `FRONTEND_URL` | Frontend Railway URL for CORS |
