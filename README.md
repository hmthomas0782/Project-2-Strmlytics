# Strymlytics App

Strymlytics is a data analytics platform tailored for record label owners and independent artists. This app helps users track data, demographics, and the performance of their current and past releases. Strymlytics streamlines release analytics, providing actionable insights to optimize music strategies.

---

## About Strymlytics

The music industry thrives on data. For artists and record labels, understanding the performance of their music is key to making informed decisions. Strymlytics was created to bridge the gap between raw streaming data and actionable insights. Designed with a focus on usability and precision, the app empowers users to:

1. **Understand Audience Behavior:** Identify listener demographics, geographic reach, and engagement patterns.
2. **Track Release Success:** Monitor the performance of singles, albums, and EPs in real-time.
3. **Optimize Marketing Strategies:** Use data-driven insights to improve promotion campaigns and maximize ROI.
4. **Forecast Trends:** Leverage historical data to predict future performance and plan releases effectively.
5. **Collaborate Efficiently:** Provide labels and artists with a shared platform to analyze and strategize together.

By consolidating data from multiple platforms into one cohesive dashboard, Strymlytics removes the guesswork from music analytics and empowers users to make impactful decisions.

---

## Features

- **Data Tracking:** Real-time tracking of streaming data, listener demographics, and geographic reach.
- **Release Analytics:** Comprehensive analysis of current and past releases.
- **Custom Dashboards:** Personalized insights for record label owners and artists.
- **User-Friendly Interface:** Simple navigation with a clean and intuitive design.

---

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/strymlytics.git
   ```

2. Navigate to the project directory:
   ```bash
   cd strymlytics
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following:
     ```env
     PORT=3000
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-jwt-secret
     ```

5. Start the server:
   ```bash
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000`.

---

## Usage

### Key Functionalities
- **Dashboard:** View metrics such as play counts, listener locations, and engagement trends.
- **Release Management:** Upload and manage information for music releases.
- **Insights:** Analyze trends and forecast performance using historical data.

---

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Authenticate and retrieve a token.

### Analytics
- `GET /api/analytics/releases` - Fetch analytics for all releases.
- `GET /api/analytics/releases/:id` - Fetch analytics for a specific release.

### Users
- `GET /api/users/me` - Get user profile.
- `PUT /api/users/me` - Update user profile.

---

## Contributing

Contributions are welcome! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

---

## Contact

For inquiries or support, contact:
- **Name:** Holland Thomas
- **Email:** holland.thomas@outlook.com 

