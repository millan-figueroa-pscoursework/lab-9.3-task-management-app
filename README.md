### Lab 9.3: Event Handling

# Task Manager App

A simple task manager built with React, TypeScript, and Tailwind CSS.  
It lets you view, filter, update, and delete tasks in a clean and responsive interface.

## Features

- View a list of tasks with title, description, priority, and due date
- Change task status using a dropdown
- Delete tasks from the list
- Filter tasks by status and priority
- Visual styles change based on task status and priority

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite

## Reflection Questions

#### How did you ensure unique keys for your list items?

I made sure each task had its own unique id and used that as the key when mapping through the list. This keeps React from getting confused when tasks change as well as avoid rendering bugs.

#### What considerations did you make when implementing the filtering functionality?

I used a simple approach so each dropdown updates only part of the filter state, and then the app filters tasks before rendering. I also added lots of sanity checks to confirm that components were communicating properly before working on any logic. Having a routine set as I build more apps makes the process faster, consistency has been really helpful like making sure everything is connected and push to the repo frequently.

#### How did you handle state updates for task status changes?

I used a state updater function that mapped through the tasks and replaced only the one that matched the id to make sure the UI re-rendered properly. More clean and predictable to manage updates this way.

#### What challenges did you face when implementing conditional rendering?

It helped to break down logic and use placeholders to figure things out piece by piece. I struggled with typing the priority filter dropdown handler props with “any,” and if I had more time I would avoid using the “any” type. Most of the challenges were about properly typing everything.
