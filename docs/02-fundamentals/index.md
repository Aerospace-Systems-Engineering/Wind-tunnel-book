---
id: index
title: Wind Tunnel Fundamentals
sidebar_label: 2. Wind Tunnel Fundamentals
slug: /fundamentals
---

import Quiz from '@site/src/components/Quiz';

# Wind Tunnel Fundamentals

This chapter introduces the physical principles that underpin every low-speed wind tunnel. Understanding these concepts will help you interpret measurements made in PROTOFLOW and appreciate the design choices that went into the facility.

## The Reynolds number

The key non-dimensional parameter in low-speed aerodynamics is the **Reynolds number**:

$$
Re = \frac{U L}{\nu}
$$

where $U$ is the free-stream velocity, $L$ is a characteristic length (e.g. chord), and $\nu$ is the kinematic viscosity of air ($\nu \approx 1.5 \times 10^{-5}$ m²/s at room temperature). The Reynolds number expresses the ratio of inertial to viscous forces. Two flows around geometrically similar bodies are aerodynamically equivalent if and only if they share the same Reynolds number — this is the principle of **Reynolds number similarity**.

At the operating conditions of PROTOFLOW ($U = 18$ m/s, chord $L = 133$ mm), the Reynolds number is:

$$
Re = \frac{18 \times 0.133}{1.5 \times 10^{-5}} \approx 1.6 \times 10^5
$$

This places PROTOFLOW in the **low Reynolds number regime** ($10^4$–$5 \times 10^5$), where the boundary layer is laminar over much of the surface and transition to turbulence has a strong influence on drag and stall behaviour.

## Closed-circuit vs open-circuit tunnels

Wind tunnels are classified by whether the working air recirculates (closed-circuit) or is drawn from and exhausted back into the room (open-circuit).

| Feature | Open-circuit | Closed-circuit |
|---|---|---|
| Noise | High (fan exhausts to room) | Low (fan is enclosed) |
| Energy use | Higher (fresh air each pass) | Lower (kinetic energy retained) |
| Temperature | Stays at room temperature | Air heats up over time |
| Cost and size | Simpler | More complex ducting |

PROTOFLOW uses a **closed-circuit** design, chosen primarily for its lower acoustic emission — important in a shared laboratory space.

## Key aerodynamic coefficients

### Lift and drag

The aerodynamic force on a body in a flow has two components: **lift** $L$ perpendicular to the free-stream, and **drag** $D$ parallel to it. These are non-dimensionalised as:

$$
C_L = \frac{L}{\tfrac{1}{2}\rho U^2 A}, \qquad C_D = \frac{D}{\tfrac{1}{2}\rho U^2 A}
$$

where $\rho$ is air density and $A$ is a reference area (typically the planform area for a wing, or the frontal area for a bluff body).

### Dynamic pressure

The quantity $q = \tfrac{1}{2}\rho U^2$ is the **dynamic pressure**. It appears in the denominator of $C_L$ and $C_D$ and can be measured directly with a pressure transducer if the static pressure is known. All pressure losses in the wind tunnel circuit scale as multiples of the local dynamic pressure.

## Flow quality

A wind tunnel is only useful if the flow in the test section is uniform and well characterised. The main quality indicators are:

- **Velocity uniformity**: variation in mean speed across the test section cross-section should be less than ~1%.
- **Turbulence intensity**: $Tu = u'/U$, where $u'$ is the r.m.s. velocity fluctuation. Low-turbulence tunnels aim for $Tu < 0.5$%.
- **Blockage ratio**: the ratio of the model's frontal area to the test-section cross-sectional area. For blockage $\beta < 10$%, corrections are small and well established. PROTOFLOW is designed for models with $\beta < 10$%.

---

## Self-check

<Quiz
  question="Two wing models are tested at the same Reynolds number but different velocities and sizes. What can you conclude about their aerodynamic coefficients C_L and C_D?"
  options={[
    "They will be identical if the models are geometrically similar.",
    "They will differ because the velocities are different.",
    "They will differ because the model sizes are different.",
    "Nothing can be concluded without knowing the Mach number."
  ]}
  correct={0}
  feedback="Reynolds number similarity guarantees that geometrically similar flows produce the same non-dimensional coefficients C_L and C_D. The absolute forces differ (they depend on dynamic pressure and reference area), but the coefficients are equal."
/>

<Quiz
  question="PROTOFLOW operates at Re ≈ 1.6 × 10⁵. Why is this regime considered challenging for CFD?"
  options={[
    "The flow is fully turbulent, requiring very fine meshes everywhere.",
    "The boundary layer transitions from laminar to turbulent, and transition location strongly affects drag.",
    "The flow is always separated, making RANS modelling straightforward.",
    "Compressibility effects become significant at this Reynolds number."
  ]}
  correct={1}
  feedback="At low Reynolds numbers the boundary layer is laminar over much of the surface. Transition location is sensitive to free-stream turbulence and surface roughness, and RANS models must explicitly account for transition — which is why PROTOFLOW's digital twin uses the Langtry–Menter k-ω SST LM transition model."
/>

<Quiz
  question="A model with a frontal height of 40 mm is placed in the 500 × 500 mm test section. What is the blockage ratio?"
  options={[
    "4%",
    "8%",
    "16%",
    "40%"
  ]}
  correct={1}
  feedback="Blockage ratio β = frontal area / test-section area = (0.04 × 0.5) / (0.5 × 0.5) = 0.02 / 0.25 = 8%. This lies within the accepted limit of 10% for standard correction methods."
/>
