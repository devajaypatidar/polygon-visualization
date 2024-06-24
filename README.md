# Polygon Visualization

This project is a Node.js application to manage locations with multiple coordinates forming polygons. The application allows users to perform CRUD operations (Create, Read, Update, Delete) on these locations using a RESTful API. Additionally, it includes a front-end to visualize the polygons on a map using a mapping library Leaflet.js.

## Features

### Create Operations

- **Add new locations with names and multiple coordinates**

#### Example Request Body:

```json
{
  "name": "eastern area",
  "coordinates": [
    { "lat": 25.317645, "lng": 82.973914 },
    { "lat": 24.795450, "lng": 85.000240 },
    { "lat": 25.594095, "lng": 85.137566 },
    { "lat": 26.760555, "lng": 83.373016 }
  ]
}
```

#### Method: POST
#### URL: `https://polygon-visualization.onrender.com/api/locations`

### Read Operations

- **Retrieve all locations**

#### Method: GET
#### URL: `https://polygon-visualization.onrender.com/api/locations`

- **Retrieve a specific location by its ID**

#### Method: GET
#### URL: `https://polygon-visualization.onrender.com/api/locations/:id`

#### Example: `https://polygon-visualization.onrender.com/api/locations/60d21b4667d0d8992e610c85`

- **Retrieve all coordinates for all locations**

#### Method: GET
#### URL: `https://polygon-visualization.onrender.com/api/coordinates`

### Update Operations

- **Update the name or coordinates of a specific location by its ID**

#### Example Request Body:

```json
{
  "name": "updated area name",
  "coordinates": [
    { "lat": 25.317645, "lng": 82.973914 },
    { "lat": 24.795450, "lng": 85.000240 }
  ]
}
```

#### Method: PUT
#### URL: `https://polygon-visualization.onrender.com/api/locations/:id`

#### Example: `https://polygon-visualization.onrender.com/api/locations/60d21b4667d0d8992e610c85`

### Delete Operations

- **Delete a location by its ID**

#### Method: DELETE
#### URL: `https://polygon-visualization.onrender.com/api/locations/:id`

#### Example: `https://polygon-visualization.onrender.com/api/locations/60d21b4667d0d8992e610c85`

## Optional Front-end Polygon Visualization


3. **Open your browser and navigate to** `http://localhost:3000`.

## Installation

1. **Clone the repository:**

   ```sh
   git clone 
   cd backend
   ```

2. **Install the dependencies:**

   ```sh
   npm install
   ```

3. **Set up MongoDB:**

   Make sure you have MongoDB installed and running. You can use a local instance or a cloud service like MongoDB Atlas.

4. **Configure environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```env
   MONGO_URI=mongodb://localhost:27017/yourdbname
   PORT=3000
   ```

5. **Start the server:**

   ```sh
   npm start
   ```

   The server will start on `http://localhost:3000`.

## online Uploaded URL 
I have uploaded the this Project on Render webservice to get the basic visualization of the polygone on the maps.to check visit.
`https://polygon-visualization.onrender.com/ `
