---
id: index
title: Operating PROTOFLOW
sidebar_label: 5. Operating PROTOFLOW
slug: /operating
---

import Quiz from '@site/src/components/Quiz';

# Operating PROTOFLOW

This chapter covers everything you need to conduct a safe and successful experiment: safety rules, prototype design guidelines, model mounting, running the tunnel, and acquiring data.

## Safety

:::danger Before switching on the tunnel
1. **No loose objects** in or near the test section — these will be accelerated and can damage instrumentation or injure people.
2. **Model must be firmly secured** at both the top and bottom mount points before starting the fan.
3. **Keep hands and probes clear** of the test section whenever the fan is running.
4. **Never exceed the maximum blockage** (10%) — overloaded models can break free under aerodynamic loading.
5. **Report any unusual noise or vibration** immediately and switch off the fan.
:::

## Designing a prototype

3D-printed prototypes must satisfy the following constraints to be tested in PROTOFLOW:

| Parameter | Requirement |
|---|---|
| Maximum frontal height | 50 mm (10% blockage in 500 mm section) |
| Span | Equal to test-section width (500 mm) for 2D configurations |
| Material | PLA or PETG recommended; avoid ABS (warps, poor dimensional accuracy) |
| Surface finish | As-printed is acceptable; note that print layers increase roughness and may affect transition |
| Mounting interface | M6 threaded inserts top and bottom, on tunnel centreline |

:::tip Surface roughness
The roughness of a 3D-printed surface depends on layer height and print orientation. A layer height of 0.2 mm at Re ≈ 1.6 × 10⁵ can be significant — it may trip the boundary layer earlier than a smooth surface would. This is not necessarily a problem, but it must be acknowledged when comparing with CFD or literature data for smooth geometries.
:::

## Mounting the model

1. Switch off the fan and confirm it has come to a complete stop.
2. Open the test-section access panels (top and bottom).
3. Thread the model onto the bottom load-cell mount first; secure with the retaining pin.
4. Connect the top mount, taking care not to over-constrain the model (the load cells must be free to deflect).
5. Set the desired angle of attack using the bolt positions on the rotation plate.
6. Close the access panels and verify no panel edges obstruct the flow path.
7. Visually confirm the hot-wire probe position (upstream or downstream of model depending on the measurement).

## Running the tunnel

### Start-up sequence

1. Switch on the Arduino UNO and confirm the data acquisition software is connected and reading zero-force values.
2. Switch on the fan controller (frequency converter).
3. Slowly increase frequency from 0 Hz to the target value — **do not jump directly to operating speed**.
4. Wait 2–3 minutes for the flow to stabilise before recording data.
5. Record the Testo 405i velocity $U$ and temperature $T$ — these give the actual Reynolds number.

### Setting tunnel speed

The relationship between supply frequency $f$ and test-section velocity $V_{ts}$ is approximately linear:

$$
V_{ts} \approx C \cdot \frac{f}{50}
$$

The constant $C$ is posted on the tunnel control panel and is updated after each calibration. For the target $Re = 1.6 \times 10^5$ with a 133 mm chord model, the required velocity is approximately 18 m/s.

### Shut-down sequence

1. Gradually reduce frequency to 0 Hz.
2. Wait for the fan to come to a complete stop.
3. Switch off the fan controller.
4. Switch off the Arduino.

## Data acquisition

### Force measurement

Forces are logged by the Arduino and read in real time on the laptop. Record at least 30 seconds of data per configuration to average out turbulent fluctuations. The mean value and standard deviation are both useful: a large standard deviation at AoA = 8° is physically meaningful (the flow is unsteady at that condition at low Re).

### Computing lift and drag coefficients

From the raw force measurements:

$$
C_L = \frac{F_\text{lift}}{\tfrac{1}{2} \rho U^2 \cdot (c \times s)}, \qquad C_D = \frac{F_\text{drag}}{\tfrac{1}{2} \rho U^2 \cdot (c \times s)}
$$

where $c$ is the chord, $s$ is the span (0.5 m), and the air density $\rho$ is calculated from the ideal gas law using the measured temperature and the laboratory barometric pressure.

### Wall corrections

Because the test section has solid walls, measured $C_L$ and $C_D$ differ from free-stream values:
- **Solid blockage** increases $C_D$ by approximately $3\beta$ for attached flow.
- **Lift interference** reduces $C_L$ at non-zero angles of attack.

Standard correction methods (Barlow, Rae & Pope) can be applied to recover free-stream values, but for the purposes of validation against the digital twin, the **uncorrected** tunnel values should be compared directly to the **tunnel CFD** (not the free-stream CFD).

---

## Self-check

<Quiz
  question="You want to test at Re = 1.6 × 10⁵ but the tunnel temperature has risen to 30°C. Compared with 20°C, should you set the fan to a higher or lower frequency?"
  options={[
    "Higher frequency, because kinematic viscosity increases with temperature.",
    "Lower frequency, because the air is less dense at higher temperature.",
    "The same frequency — temperature does not affect the operating point.",
    "Higher frequency, because the fan loses efficiency at higher temperature."
  ]}
  correct={0}
  feedback="At 30°C the kinematic viscosity ν is higher than at 20°C (roughly +2%). Since Re = UL/ν and L is fixed, you need a higher U to maintain the same Re. A higher U requires a higher fan frequency."
/>

<Quiz
  question="You record the lift force over 30 seconds at AoA = 8° and find a large standard deviation. What is the most likely physical explanation?"
  options={[
    "The load cells are malfunctioning and need recalibration.",
    "The flow is unsteady due to laminar separation and intermittent reattachment at this low Reynolds number and high angle of attack.",
    "The tunnel speed is fluctuating because the frequency converter is unstable.",
    "The hot-wire probe is vibrating and interfering with the force signal."
  ]}
  correct={1}
  feedback="At Re ≈ 1.6 × 10⁵ and AoA = 8°, a NACA 0012 airfoil (and similar profiles) exhibits laminar separation with intermittent reattachment — the flow alternates between attached and separated states on a timescale much longer than a single turbulent eddy. This produces genuine low-frequency fluctuations in lift and drag that appear as a large standard deviation. It is a real physical phenomenon, not an instrument problem."
/>

<Quiz
  question="When comparing your measured C_D to the digital twin, which CFD result should you use?"
  options={[
    "The free-stream CFD, after applying blockage corrections to your measurements.",
    "The tunnel CFD (with tunnel walls modelled), compared directly to uncorrected measurements.",
    "Either — they should give the same result by definition.",
    "The XFOIL prediction, as it is the most accurate reference."
  ]}
  correct={1}
  feedback="The tunnel CFD includes the solid tunnel walls and therefore captures the blockage and lift-interference effects that affect measurements. Comparing uncorrected measurements to tunnel CFD directly is the cleanest approach — it avoids introducing the additional uncertainty of analytical wall corrections."
/>
