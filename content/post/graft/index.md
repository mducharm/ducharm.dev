+++
title = "Graft"
date = "2022-02-24"
description = "Like Swagger, but for visualizing your dependencies. Powered by Svelte + Cytoscape.js + .NET 6"
categories = [
    "Project",
]
tags = [
    "C-Sharp", "ASP.NET Core", "Dependency Injection", "Svelte", ".NET 6"
]
image = "graft.png"
+++

One time at work, I was assigned a monster of a ticket: migrate the entire codebase away from using Unity and a service locator pattern, to using ASP.NET Core dependency injection.

Over the course of migrating ~115 classes over to using constructor injection, I couldn't help but imagine class dependencies as one big graph, where each class was a node, and each edge was a dependency being injected into another. Wouldn't it be cool to visualize such a graph?

I'd known about [Cytoscape.js](https://js.cytoscape.org/) before, and after some thinking, an idea popped into my head: what if we had a page like Swagger, but for displaying a graph of your service collection?

That's what Graft is - like Swagger, but for visualizing your dependencies. You can find the full project [here](https://github.com/mducharm/Graft).
