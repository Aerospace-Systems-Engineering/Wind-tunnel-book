---
id: index
title: Measurement Instruments
sidebar_label: 4. Measurement Instruments
slug: /instrumentation
---

import Quiz from '@site/src/components/Quiz';

# Measurement Instruments

PROTOFLOW's measurement system has two subsystems: one for **aerodynamic forces** and one for **flow characterisation**. Understanding what each instrument measures — and its limitations — is essential for interpreting results correctly.

## Overview

| Instrument | Quantity | Location | Purpose |
|---|---|---|---|
| Mavin NA27 load cells (×2, 1 kg) | Force | Top and bottom of model mount | Lift or drag |
| Testo 405i thermal anemometer | Velocity, temperature | Movable in test section | Free-stream reference, Re |
| MPX5010DP / MPX5050DP pressure sensors (×2) | Static pressure | Start and end of test section | Pressure drop across model |

## Force measurement

### Load cells

Two **Mavin NA27** single-axis load cells (1 kg capacity each) are mounted at the top and bottom of the model support. The total aerodynamic force on the model is shared between the two cells; their combined output gives the net force along the cell axis.

The signal chain is:
$$
\text{Force on model} \to \text{load cells} \to \text{HX711 amplifier} \to \text{Arduino UNO} \to \text{raw digital signal} \to \text{calibration} \to F \text{ [N]}
$$

The HX711 is a 24-bit analogue-to-digital converter designed for load cells. It amplifies the millivolt-level bridge output and sends a digital word to the Arduino, which communicates with a laptop over USB.

### Lift and drag decomposition

A single axis load cell cannot measure both lift and drag simultaneously. PROTOFLOW uses a **90° rotation method**: the model is mounted once in its normal orientation to measure lift, then rotated 90° about the tunnel axis to measure drag (which now acts along the cell axis). This requires two separate runs per angle of attack.

### Calibration

Before each measurement session the load cells must be calibrated with known dead weights. The calibration converts the raw HX711 output (counts) to force in Newtons.

## Flow characterisation

### Thermal anemometer (hot-wire)

The **Testo 405i** is a handheld thermal anemometer (constant-temperature hot-wire principle). It reports:
- **Flow velocity** $U$ in m/s
- **Air temperature** $T$ in °C (needed to calculate $\nu$ and therefore $Re$)

The probe is positioned upstream of the model to measure the free-stream reference conditions. It can also be moved downstream to characterise the model wake.

:::note Limitation
The Testo 405i measures speed magnitude along a single axis. It cannot resolve flow angle or turbulence intensity quantitatively. For detailed turbulence characterisation a constant-temperature anemometer (CTA) system with a calibrated probe would be required.
:::

### Pressure transmitters

Two differential pressure sensors measure the **static pressure** at the inlet and outlet of the test section. The difference gives the static pressure drop across the model. Combined with the dynamic pressure (from the hot-wire velocity), this can be used to compute pressure-based drag independently of the load cells.

The two sensors have different ranges:
- **MPX5010DP**: 0–10 kPa (used when the pressure drop is small, e.g. empty tunnel)
- **MPX5050DP**: 0–50 kPa (used for higher-drag configurations)

## Deriving the Reynolds number

The Reynolds number is computed from the measured velocity and temperature:

$$
Re = \frac{U \cdot c}{\nu(T)}
$$

where $c$ is the model chord and $\nu(T)$ is the kinematic viscosity at the measured temperature. This means the actual Reynolds number during a test is known only after the temperature has been recorded — important in a closed-circuit tunnel where the air warms up during operation.

---

## Self-check

<Quiz
  question="Why are two separate runs needed to measure both lift and drag with PROTOFLOW's load cells?"
  options={[
    "Each load cell can only survive one measurement before recalibration.",
    "A single-axis load cell measures force along one direction only; the model must be rotated 90° to align drag with the cell axis.",
    "The data acquisition system can only record one channel at a time.",
    "Two runs are needed to average out turbulent fluctuations in the force signal."
  ]}
  correct={1}
  feedback="A load cell measures force along its sensitive axis. In the normal mounting orientation the axis aligns with lift. To measure drag, the model (and its mount) is rotated 90° so that drag now acts along the cell axis. This is an elegant solution that avoids a two-component balance, but it requires two separate runs per angle of attack."
/>

<Quiz
  question="The air temperature in the closed-circuit tunnel rises from 20°C to 25°C during a long test. What effect does this have on the Reynolds number if the fan speed is kept constant?"
  options={[
    "Re increases, because warmer air is less dense.",
    "Re decreases, because kinematic viscosity increases with temperature.",
    "Re stays the same, because viscosity and density effects cancel.",
    "Re increases, because the fan delivers more pressure at higher temperature."
  ]}
  correct={1}
  feedback="Kinematic viscosity ν increases with temperature (for air, roughly +0.2% per °C around 20°C). Since Re = UL/ν and U is approximately constant (fan speed fixed), Re decreases as the tunnel warms up. This is why temperature is monitored and why long runs at low Re need a cooling system or should be kept short."
/>
