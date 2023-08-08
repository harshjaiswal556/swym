# Live Event Q&A Question Submission System

The Live Event Q&A Question Submission System is a web-based application designed to facilitate the collection of questions from participants during live events. This system generates a unique URL for each event, allowing participants to submit their questions conveniently. As an added feature, the event URLs are designed to have a specific Time to Live (TTL), after which they expire to ensure the relevance and security of the information.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Generating an Event URL](#generating-an-event-url)
  - [Submitting Questions](#submitting-questions)
- [Configuration](#configuration)
- [Expiration Mechanism](#expiration-mechanism)
- [Security](#security)
- [Sample Images](#sample-images)
- [Feedback and Support](#feedback-and-support)

## Introduction

Live events often involve interactive sessions where participants can engage with speakers or presenters by asking questions. The Live Event Q&A Question Submission System aims to streamline this process by providing a user-friendly interface for participants to submit their questions digitally. This system eliminates the need for paper forms or traditional microphones, making the Q&A session more efficient and inclusive.

## Features

- **Unique Event URLs:** Each event is assigned a unique URL that participants can use to access the question submission interface.
- **Time to Live (TTL):** Event URLs have a specific TTL after which they expire. This ensures that only relevant questions are submitted and provides a level of security.
- **User-Friendly Interface:** The submission interface is intuitive and easy to use, allowing participants to quickly submit their questions without any technical barriers.
- **Real-time Updates:** Speakers or presenters can access the submitted questions in real-time, allowing them to curate and address relevant questions during the event.
- **Admin Dashboard:** Event organizers have access to an admin dashboard where they can manage events, view submitted questions, and extend or revoke event URLs if necessary.
- **User Authentication:** Securely authenticate participants using username and password, ensuring that only authorized individuals can access and submit questions through the event URL.

## Installation

To get the Live Event Q&A Question Submission System up and running on your local machine, follow these steps:

1. Clone the repository using Git:

   ```sh
   git clone https://github.com/harshjaiswal556/swym.git

2. Navigate to the project directory:

   ```sh
   cd swym
   
3. Install the project dependencies using npm (Node Package Manager):

   ```sh
   npm i
   
4. Start the application:

   ```sh
   npm start

 The application should now be accessible locally in your web browser at the default address: http://localhost:3000/.

## Usage

### Generating an Event URL

1. Access the admin dashboard using the provided credentials.
2. Create a new event by specifying the event details, such as title, description and form validation time.
3. The system will automatically generate a unique URL for the event.
4. Configure the TTL for the event URL based on the desired expiration time.

### Submitting Questions

1. Participants can access the unique event URL provided by the organizer.
2. On the event page, participants can submit their questions through the user-friendly interface.
3. Once submitted, the questions are stored securely in the system's database.
4. Admin can view and address the submitted questions in real-time during the event.

## Configuration

The Live Event Q&A Question Submission System can be configured to meet the specific requirements of each event. Administrators can customize the system by adjusting settings such as:

- Event duration and TTL
- Question submission form fields
- Styling and branding of the event page

## Expiration Mechanism

Event URLs have a predefined TTL, which is set by the event organizer. After the TTL expires, the event URL becomes inactive, preventing further question submissions. This mechanism ensures that only questions relevant to the live event are collected and addressed.

## Security

- Event URLs are generated using strong encryption methods to prevent unauthorized access.
- Participant-submitted questions are stored securely and can only be accessed by authorized event administrators.
- The system employs HTTPS encryption to protect data transmitted between participants and the system.

## Sample images 

### Landing Page
![image](https://github.com/harshjaiswal556/swym/assets/92356100/4a6b2ee0-fdbb-4e36-92bb-f8ca1bf6902f)

### Signup Page
![image](https://github.com/harshjaiswal556/swym/assets/92356100/be29ac8c-c99b-481b-ba02-1bfe26ad9752)

### Login Page
![image](https://github.com/harshjaiswal556/swym/assets/92356100/bb7c42de-d201-4c6b-99f5-aa40a9d56c6c)

### Admin Page
![image](https://github.com/harshjaiswal556/swym/assets/92356100/fdc36b7b-3e03-4b59-983b-0f54ec2cc0e7)

### Event Creation Page
![image](https://github.com/harshjaiswal556/swym/assets/92356100/ea6e6839-3627-4ef5-bff1-967537649310)

### User Response Page
![image](https://github.com/harshjaiswal556/swym/assets/92356100/f5d226c3-cb0c-4a56-b787-d171b13fa5fb)

### Form Preview
![image](https://github.com/harshjaiswal556/swym/assets/92356100/32455188-fce9-4997-8214-e2f41512243f)


## Feedback and Support

For any questions, feedback, or technical support related to the Live Event Q&A Question Submission System, please contact me at [hsjaiswal3110@gmail.com](mailto:hsjaiswal3110@gmail.com).

---
