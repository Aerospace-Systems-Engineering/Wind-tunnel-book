---
id: index
title: Introduction
sidebar_label: 1. Introduction
slug: /
---

import Quiz from '@site/src/components/Quiz';

# Introduction

Welcome to the onboarding course for **PROTOFLOW** — the Rapid Prototyping Wind Tunnel at Eindhoven University of Technology.

## What is PROTOFLOW?

PROTOFLOW is a purpose-built, closed-circuit low-speed wind tunnel designed for rapid aerodynamic prototyping using 3D-printed test objects. The facility is part of the **Energy Technology & Fluid Dynamics** group at TU/e.

The key idea is speed: a researcher or student can design a geometry in CAD, print it, and have aerodynamic force and flow measurements within a single working day. Alongside the physical facility, PROTOFLOW has a **CFD digital twin** — a computational model of the tunnel that is systematically validated against measurements and can be used to predict and interpret experimental results before or after a test.

## Learning objectives

After completing this course you will be able to:

1. Explain the working principle of a closed-circuit wind tunnel and identify its key components.
2. Describe the aerodynamic quantities that PROTOFLOW is designed to measure.
3. Understand the role and limitations of the CFD digital twin.
4. Operate the tunnel safely and mount a test prototype correctly.
5. Set up, execute, and process a basic force and flow-velocity measurement.

## How to use this course

Work through the five chapters in order. Each chapter ends with a short self-check — use it to confirm your understanding before moving on. You are expected to have a working knowledge of undergraduate fluid mechanics; key aerodynamic concepts are introduced where needed.

---

## Self-check

<Quiz
  question="PROTOFLOW is described as a 'rapid prototyping' wind tunnel. What does this primarily mean?"
  options={[
    "The tunnel runs at very high speeds to shorten test times.",
    "Test objects are 3D-printed, so new geometries can be tested within a single day.",
    "The data acquisition system records results automatically with no manual steps.",
    "The tunnel can be assembled and disassembled quickly for transport."
  ]}
  correct={1}
  feedback="The key enabler is 3D printing: it removes the traditional manufacturing bottleneck so that a new prototype can go from a CAD model to a wind tunnel test within one working day."
/>

<Quiz
  question="What is the CFD digital twin?"
  options={[
    "A physical scale model of PROTOFLOW used for calibration.",
    "A computational model of the tunnel validated against physical measurements.",
    "A second, identical wind tunnel used to cross-check results.",
    "Software that controls the fan speed automatically."
  ]}
  correct={1}
  feedback="The digital twin is a CFD simulation of the tunnel that is validated against experimental data. Once trusted, it can be used to predict aerodynamic behaviour and to interpret measurements."
/>
