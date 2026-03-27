# GrapherWeb

A modern, interactive React-based frontend for creating, editing, and visualizing data graphs with real-time collaboration and advanced charting capabilities.

## Features

### Authentication
- **User Registration**: Create new accounts with email and personal details
- **User Login**: Secure JWT-based authentication
- **Protected Routes**: All graph operations require authentication
- **Session Management**: Persistent authentication state

### Graph Management
- **Create Graphs**: Generate new graphs with default data structure
- **View All Graphs**: Browse all your created graphs with thumbnails
- **Edit Graphs**: Full editing capabilities with real-time updates
- **Graph Snapshots**: Automatic snapshot generation for graph previews

### Data Management
- **Spreadsheet Editor**: Handsontable integration for easy data entry
  - Add/remove rows and columns dynamically
  - Edit cells in real-time
  - Auto-sync with graph visualization
- **Data Visualization**: Scatter chart with multiple series support
- **Live Preview**: See changes instantly as you edit

### Series Management
- **Multiple Series**: Add multiple data series to a single graph
- **Series Configuration**:
  - Custom titles for each series
  - X-axis and Y-axis column mapping
  - Custom colors per series
- **Series Controls**: Add, remove, and reorder series easily

### Axis Configuration
- **X-Axis Settings**: Customize labels, ranges, and appearance
- **Y-Axis Settings**: Independent configuration for Y-axis
- **Grid Settings**: Control grid appearance and behavior
- **Axis Labels**: Custom text and styling

### Advanced Analysis
- **Trendlines**: Add trend analysis to your data
  - Linear trendlines with gradient and y-intercept
  - Polynomial trendlines (planned)
  - Manual or automatic calculation
  - Custom trendline colors
- **Series Selection**: Choose which series to apply trendlines to
- **Recalculation**: Dynamically recalculate trendlines

### Styling
- **Color Customization**: Custom colors for series and trendlines
- **Theme Support**: Tailwind CSS-based theming
- **Responsive Design**: Works on desktop and tablet devices

### User Profile
- **User Dashboard**: View and manage your account
- **Graph Library**: Access all your created graphs

## Tech Stack

### Frontend Framework
- **React**: 19.2.0 - UI library
- **TypeScript**: 5.9.3 - Type safety
- **Vite**: 7.3.1 - Build tool and dev server

### Charting & Data
- **Recharts**: 3.7.0 - Interactive scatter charts and visualizations
- **Handsontable**: 16.2.0 - Spreadsheet component for data editing
- **html-to-image**: 1.11.13 - Graph snapshot generation
- **html2canvas**: 1.4.1 - Canvas-based rendering

### UI & Styling
- **Tailwind CSS**: 4.2.1 - Utility-first CSS framework
- **shadcn/ui**: 4.0.5 - Component library
- **Lucide React**: 0.577.0 - Icon library
- **react-colorful**: 5.6.1 - Color picker component
- **react-resizable-panels**: 4.7.1 - Resizable panel layouts

### Routing & State
- **React Router**: 7.13.1 - Client-side routing
- **Context API**: State management for auth and graph data
- **Zod**: 4.3.6 - Schema validation

### Utilities
- **Lodash**: 4.17.23 - Utility functions
- **clsx**: 2.1.1 - Conditional className utility
- **tailwind-merge**: 3.5.0 - Merge Tailwind classes

## Project Structure
