# Voltz - API

A simple repository to manage tools with their respective names, links, descriptions and tags.

## About

This is an web application with which lots of people can manage their tools to a better understanding. Below are the implemented features:

- List all registered tools
- Add tool
- Delete tool

## Technologies
The following tools and frameworks were used in the construction of the project:<br>
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white'>
</p>

## How to run

1. Clone this repository
2. Install dependencies
```bash
npm i
```
3. Run the back-end with
```bash
npx nodemon ./src/server.js
```
4. Finally access http://localhost:3000 on your favorite browser
5. Create your database following the next steps
```bash
INSERT INTO tools (title, link, description) VALUES ('Notion','https://notion.so', 'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.'), ('json-server','https://github.com/typicode/json-server', 'Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs'), ('fastify','https://www.fastify.io/', 'Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.');
```
```bash
INSERT INTO tags (name) VALUES ('organization'), ('planning'), ('collaboration'), ('writing'), ('calendar'), ('api'), ('json'), ('schema'), ('node'), ('github'), ('rest'), ('web'), ('framework'), ('http2'), ('https'), ('localhost');
```
```bash
INSERT INTO tools_tags (tags_id, tools_id) VALUES (1,1), (2,1), (3,1), (4,1), (5,1), (6,2), (7,2), (8,2), (9,2), (10,2), (11,2), (12,3), (13,3), (14,3), (15,3), (16,3), (9,3); 
```
