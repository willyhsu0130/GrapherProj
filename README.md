# Grapher

A full-stack web application for creating, editing, and managing interactive graphs with user authentication and real-time data visualization.

## Features

### User Management
- **User Registration**: Create new accounts with email, username, first name, and last name
- **User Login**: Secure authentication with JWT token-based sessions
- **JWT Authentication**: Token-based security for all protected endpoints

### Graph Management
- **Create Graphs**: Generate new blank graphs with default settings
- **View Graphs**: Retrieve all graphs belonging to the authenticated user
- **Get Graph Details**: Fetch specific graph by ID with all configuration
- **Update Graphs**: Patch/modify graph properties including:
  - Title
  - Data series
  - Axis configurations (X and Y)
  - Trendlines
  - Grid settings
  - Snapshots

### Graph Customization
- **Data Series**: Add multiple data series to a single graph
- **Axis Configuration**: Customize X and Y axis labels, ranges, and settings
- **Trendlines**: Add trend analysis with multiple trendline types
- **Grid Settings**: Configure grid appearance and behavior
- **Snapshots**: Save graph snapshots for later reference

## Tech Stack

### Backend
- **Framework**: Spring Boot 4.0.3
- **Language**: Java 21
- **Database**: PostgreSQL
- **Authentication**: Spring Security + JWT (JJWT 0.13.0)
- **ORM**: Spring Data JPA
- **Mapping**: MapStruct 1.5.5
- **Build Tool**: Maven

### Frontend
- Separate React/Vue application (GrapherWeb service)

## API Endpoints

### User Endpoints (`/api/users`)
- `GET /signup` - Test endpoint
- `POST /signup` - Register new user
- `POST /login` - Authenticate user and receive JWT token

### Graph Endpoints (`/api/graph`)
- `GET /` - Fetch all graphs for authenticated user
- `POST /create` - Create a new blank graph
- `GET /{id}` - Get specific graph by ID
- `PATCH /{id}` - Update graph properties

## Authentication

All graph endpoints require JWT authentication. Include the token in the `Authorization` header:

Authorization: Bearer <your_jwt_token>


## Data Models

### User
- `id` (Long)
- `username` (String)
- `email` (String)
- `firstName` (String)
- `lastName` (String)
- `password` (encrypted)

### Graph
- `id` (Long)
- `title` (String)
- `user` (User reference)
- `series` (List<Series>)
- `xAxis` (GridAxis)
- `yAxis` (GridAxis)
- `trendlines` (List<Trendline>)
- `data` (List<List<Object>>)
- `snapshot` (String)

### Series
- Data points for visualization
- Customizable styling and labels

### GridAxis
- Axis labels
- Range configuration
- Grid settings

### Trendline
- Multiple trendline types supported
- Calculated from data series

## Deployment

Deployed on Railway with:
- **Backend Service**: `grapherBackend` (Port 8080)
- **Frontend Service**: `GrapherWeb`
- **Database**: PostgreSQL

## Getting Started

1. **Sign up** at `/api/users/signup` with your credentials
2. **Log in** at `/api/users/login` to receive JWT token
3. **Create a graph** via `POST /api/graph/create`
4. **Customize your graph** by patching with data, axes, and trendlines
5. **View all graphs** via `GET /api/graph/`

## Environment Variables

- `SPRING_DATASOURCE_URL` - PostgreSQL connection string
- `SPRING_DATASOURCE_USERNAME` - Database username
- `SPRING_DATASOURCE_PASSWORD` - Database password
- `JWT_SECRET` - Secret key for JWT token generation
- `FRONTEND_URL` - Frontend application URL for CORS

## Development

```bash
# Build
mvn clean package

# Run
java -jar target/grapher-0.0.1-SNAPSHOT.jar
