---
id: pressure-network
title: Pressure Network Model
sidebar_label: Pressure Network Model
slug: /theory/pressure-network
---

# Pressure Network Model

## Motivation

Although PROTOFLOW is a nearly closed circuit, real-world imperfections introduce small leaks between the tunnel interior and the surrounding atmosphere. Even though the resulting mass flows are small compared to the main circulation, they have a disproportionate effect: in a perfectly sealed circuit the absolute pressure distribution would be entirely indeterminate, whereas even minor leakage anchors the absolute level. Predicting where in the circuit the pressure sits relative to atmosphere matters for instrument calibration, model loading corrections, and flow quality assessment.

The pressure network model described here predicts the static pressure at each component interface and the volumetric flow rate through each component, for a given fan operating point and a set of component and leak parameters.

## Numbering convention

Components and nodes are numbered following the schematic in [The Wind Tunnel](/windtunnel), starting from the settling chamber and increasing in the flow direction (counter-clockwise).

**Node $i$** is defined as the cross-section at the **inlet of component $i$**. The outlet of component $i$ coincides with node $i+1$. With twelve components the circuit closes: node 13 ≡ node 1.

| Symbol | Meaning |
|--------|---------|
| $p_i$ | Static pressure at node $i$ (Pa) |
| $Q_i$ | Volumetric flow rate through component $i$ (m³ s⁻¹) |
| $A_i$ | Cross-sectional area at node $i$ (m²) |
| $q_i = \tfrac{1}{2}\rho(Q_i/A_i)^2$ | Dynamic pressure at node $i$ (Pa) |
| $k_i$ | Leak conductance at node $i$ (m³ s⁻¹ Pa⁻¹) |

The 24 unknowns $(p_1, \ldots, p_{12},\, Q_1, \ldots, Q_{12})$ are governed by two sets of 12 equations each.

## Pressure equations

Across each component the static pressure changes according to

$$
p_{i+1} - p_i = \alpha_i\, q_i, \qquad i = 1, \ldots, 12
$$

with $p_{13} \equiv p_1$. The **pressure coefficient** $\alpha_i$ captures both the viscous loss and the conversion between dynamic and static pressure due to any change in cross-sectional area:

$$
\alpha_i = \underbrace{\left(\frac{A_i}{A_{i+1}}\right)^{\!2} - 1}_{\text{area change}} \;-\; \underbrace{K_i}_{\text{loss}}, \qquad i \neq 6
$$

where $K_i \geq 0$ is the (local) loss coefficient and $A_{i+1}$ is the outlet area of component $i$. For constant-area sections $A_i = A_{i+1}$, so the area term vanishes and $\alpha_i = -K_i < 0$ (pure pressure loss). For diffusers $A_{i+1} > A_i$ and the area term is positive; for well-designed diffusers this exceeds the loss, giving $\alpha_i > 0$ (net static pressure rise). For the contraction $A_{i+1} \ll A_i$ and $\alpha_i \ll 0$ (large static pressure drop as the flow accelerates).

Component 6 (fan) is the sole pressure source. Its pressure rise follows the manufacturer's characteristic curve and replaces the formula above:

$$
p_7 - p_6 = \Delta p_\text{fan}(Q_6)
$$

Summing all twelve pressure equations around the closed loop yields the **circuit balance**:

$$
\Delta p_\text{fan}(Q) = -\sum_{i \neq 6} \alpha_i\, q_i
$$

which determines the operating flow rate $Q$.

## Mass-balance equations

At each node, the volumetric flow rate changes by the amount that leaks through the duct wall. The leak is modelled as linearly proportional to the local gauge pressure, with conductance $k_i$:

$$
Q_i - Q_{i-1} = k_i\,(p_\text{atm} - p_i), \qquad i = 1, \ldots, 12
$$

with $Q_0 \equiv Q_{12}$. When $p_i < p_\text{atm}$ the right-hand side is positive (ambient air enters); when $p_i > p_\text{atm}$ it is negative (tunnel air escapes). Summing all twelve equations gives the **global leak balance**:

$$
\sum_{i=1}^{12} k_i\,(p_\text{atm} - p_i) = 0
$$

which implicitly determines the absolute pressure level of the circuit.

## Solution strategy

Because the leak flows are small compared to the main circulation ($Q_i \approx Q$ throughout), the system decouples naturally into two levels.

**Zeroth order — sealed circuit.** Set all $k_i = 0$. The twelve flow rates become equal ($Q_i = Q$) and the twelve pressure equations reduce to a rank-11 system for the pressure *differences*, closed by the circuit balance. This gives the operating point $Q$ and the complete pressure distribution up to an unknown additive constant $p_0$.

**First order — absolute level.** Writing $p_i = p_0 + \delta p_i$ where $\delta p_i$ are the differences from the zeroth-order solution, the global leak balance yields

$$
p_0 = p_\text{atm} - \frac{\displaystyle\sum_{i=1}^{12} k_i\,\delta p_i}{\displaystyle\sum_{i=1}^{12} k_i}
$$

The absolute static pressure at every node is then $p_i = p_0 + \delta p_i$. With a uniform leak distribution ($k_i = k$ for all $i$) this reduces to $p_0 = p_\text{atm} - \bar{\delta p}$: the pressure distribution is centred on atmospheric, irrespective of the individual loss coefficients.

## Component details

The pressure coefficients $\alpha_i$ for each of the twelve components are derived in the following sections.
