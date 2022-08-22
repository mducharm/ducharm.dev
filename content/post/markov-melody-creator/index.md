+++
title = "Markov Melody Creator"
date = "2022-08-20"
description = "A Maui Blazor app for randomly generating melodies using a Markov chain, saved as MIDI files."
categories = [
    "Project",
]
tags = [
    "C-Sharp", "Blazor", "MAUI"
]
image = "example_melody.png"
+++

When I was in college, I got really into music production as a hobby. I bought a copy of FL Studio, some VST plugins, and some headphones, and would spend hours in my dorm room practicing sound design, mixing, and composition.

In the past few months, I've learned that [Markov chains](https://en.wikipedia.org/wiki/Markov_chain) are sometimes used in generative music. Seeing the visualizations in [this blog post](https://setosa.io/ev/markov-chains/) got me really interested in learning more about them. As I've started to rekindle my previous interest in music, I wondered if I could combine these two interests.

The idea for the app is essentially this: allow a user to generate a MIDI file whose melody is created by walking a Markov chain. The user can specify the key, scale, and can shape the probabilities of what notes should come next at any given moment, all of which is used when creating randomly generated melodies.

As for why I went with Blazor: while I initially wanted to do a UI with Svelte, I found this wonderful library called [DryWetMidi](https://github.com/melanchall/drywetmidi) for MIDI file generation that made the process quite painless. Keeping everything in C# allowed me to focus more on the actual problems.

If I continue working on this, I'd love to add options for rhythm or chord progression generation, but I'll need to work on my music theory knowledge a bit more for that!

The full project can be found [here](https://github.com/mducharm/MarkovMelodyCreator).