# TALENT PLUS Next.js 13 Project with Tailwind CSS and Docker

This project is a web application built with Next.js 13, Tailwind CSS, Material Tailwind and Docker. It showcases the features and benefits of using these technologies for creating fast, responsive and modern websites.

## Project Link - https://tech-time-akande-temitope.vercel.app/

## Features

- The project contains five sections: Home, About Us, Courses, Testimonials and Community.
- The project uses 12 components ranging from Header to Footer. Each component is modular and reusable across the website.
- The project has a navbar that links to each section from the header and footer. The navbar is responsive and collapses into a hamburger menu on smaller screens.
- The project has a custom error 404 page for button links that lead to another page. The error page displays a friendly message and a link to go back to the home page.
- The project uses the recent Next.js 13 AppDir routing upgrade. This allows for more flexibility and control over the file structure and routing of the website.
- The project uses Server Side Rendering out of the box which is one of the beauty of using Next Js for Efficient Applications.
- The project uses Tailwind CSS for styling. Tailwind CSS is a utility-first framework that provides a set of predefined classes for common design elements. It allows for rapid development and customization of the website's appearance.
- The project uses Material Tailwind for adding some material design components to the website. Material Tailwind is a library that integrates Tailwind CSS with Google's Material Design system. It provides components such as buttons, cards, forms, modals and more.
- The project is dockerized using Docker. Docker is a tool that allows for creating and running applications in isolated containers. It simplifies the deployment and management of the website.

## Installation

To run the project locally, you need to have Docker installed on your machine. Then follow these steps:

- Clone the repository: `git clone https://github.com/Topmark1/TalentPlus`
- Link to the Project Output on vercel: 'https://tech-time-akande-temitope.vercel.app/'
- Navigate to the project directory: `cd talentplus`
- Build the docker image: `docker build -t talentplus .`
- Run the docker container: `docker run -p 3000:3000 yourproject`
- Open your browser and go to `http://localhost:3000`

## License

This project was built by Akande Temitope, topsiology11@gmail.com for the TalentPlus Recruitment Test.
